import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { TrashifierService } from 'src/app/trashifier.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RecDetailModalpagePage } from 'src/app/rec-detail-modalpage/rec-detail-modalpage.page';
import { ToastController } from '@ionic/angular';
import { Observer } from 'rxjs';

const TRASH_PRED_ENDPOINT_URL = 'http://localhost:8000/trash-predict';
const PLASTIC_PRED_ENDPOINT_URL = 'http://localhost:8000/trash-predict';
export interface APIResult {
  class: string;
  confidence: number;
}
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

      this.trashifierService.predict(imageData).subscribe(
        {
          next: (res: APIResult) => {
            this.predictionResult = res.class;
            console.log(res);
            console.log(this.predictionResult);
            loading.dismiss();
            this.openModal();
          },
          error: async (error: any) => {
            loading.dismiss();
            const toast = await this.toastController.create({
              message: error.message,
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
        }
      )
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
