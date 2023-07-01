import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { TrashifierService } from 'src/app/trashifier.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RecDetailModalpagePage } from 'src/app/rec-detail-modalpage/rec-detail-modalpage.page';
import { ToastController } from '@ionic/angular';
import { Observer } from 'rxjs';
import { APIResult } from '../recyclable-detail/recyclable-detail.page';

const TRASH_PRED_ENDPOINT_URL = 'https://trashifier-api-o3bl7rnfya-et.a.run.app/trash-predict';
// export interface APIResult {
//   class: string;
//   confidence: number;
// }
@Component({
  selector: 'app-tabClassify',
  templateUrl: 'tabClassify.page.html',
  styleUrls: ['tabClassify.page.scss']
})
export class TabClassifyPage {
  image: any;
  predictionResult: any;
  errorMessage: any;
  plasticPredictionResult: any;

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
          next: async (res: APIResult) => {
            this.predictionResult = res.class;
            this.plasticPredictionResult = res.plastic_type;
            console.log(res);
            console.log("IMERHEIRERHERHERHEH" + this.plasticPredictionResult);
            console.log(this.predictionResult);
            loading.dismiss();
            const predictionToast = await this.toastController.create({
              message: `We predict with ${res.confidence}% confidence that your prediction is ${this.predictionResult}`,
              duration: 3000,
              position: 'bottom'
            });
            predictionToast.present();
            this.openModal();
          },
          error: async (error: any) => {
            loading.dismiss();
            const toast = await this.toastController.create({
              message: error.message,
              duration: 4000,
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
        class: this.predictionResult,
        plastic_class: this.plasticPredictionResult
      }
    });
    await modal.present();
  }

}
