import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { TrashifierService } from 'src/app/trashifier.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RecDetailModalpagePage } from 'src/app/rec-detail-modalpage/rec-detail-modalpage.page';
import { ToastController } from '@ionic/angular';

const TRASH_PRED_ENDPOINT_URL = 'http://localhost:8000/trash-predict';
const PLASTIC_PRED_ENDPOINT_URL = 'http://localhost:8000/trash-predict';
@Component({
  selector: 'app-tabClassify',
  templateUrl: 'tabClassify.page.html',
  styleUrls: ['tabClassify.page.scss']
})
export class TabClassifyPage {
  image: any;
  predictionResult: any;
  errorMessage: any;

  constructor(
    private trashifierService: TrashifierService,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private toastController: ToastController
  ) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async buttonUploadGarbage() {
    try {
      // Request camera / photo album image picker
      if (Capacitor.getPlatform() != 'web') await Camera.requestPermissions();

      // The image to be sent
      const image = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl
      });
      const imageData = image.dataUrl;

      // Sent the image to be classified
      const loading = await this.loadingCtrl.create({
        message: "Trying to predict trash type..."
      });
      loading.present();

      this.trashifierService.predict(imageData).subscribe(async res => {
        this.predictionResult = res.class;
        console.log(res);
        console.log(this.predictionResult)
        loading.dismiss();
        this.openModal();
      })
    } catch (e) {
      this.errorMessage = e;
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RecDetailModalpagePage,
      // You can pass data to the modal using componentProps
      componentProps: {
        // Example data
        class: this.predictionResult
      }
    });
    await modal.present();
  }
}
