import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashifierService } from 'src/app/trashifier.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PlasticDetailModalPage } from 'src/app/plastic-detail-modalpage/plastic-detail-modalpage.page';
import { APIResult } from 'src/app/interfaces/APIResult.interface';


@Component({
  selector: 'app-recyclable-detail',
  templateUrl: './recyclable-detail.page.html',
  styleUrls: ['./recyclable-detail.page.scss'],
})
export class RecyclableDetailPage implements OnInit {
  recyclable: any = "";
  plastics: any = [];
  predictionResult: any;
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private trashifierService: TrashifierService,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    const routeId: string = this.route.snapshot.paramMap.get('id') as string;
    this.loadJSONTrash(routeId);
    if (routeId == "plastic") {
      this.loadJSONPlastic();
    }
  }

  loadJSONTrash(routeId: string) {
    this.trashifierService.getJSON().subscribe(res => {
      this.recyclable = res.find((recyclable: { id: string; }) => recyclable.id === routeId);
      // console.log(this.recyclable);
    })
  }

  loadJSONPlastic() {
    this.trashifierService.getJSONPlastic().subscribe(res => {
      this.plastics = res;
      // console.log(this.plastics);
    })
  }

  async buttonUploadPlastic() {
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
        message: "Trying to predict plastic type..."
      });
      loading.present();

      this.trashifierService.predictPlastic(imageData).subscribe(
        {
          next: async (res: APIResult) => {
            this.predictionResult = res.class;
            // console.log("(IMHERE):" + this.predictionResult);
            // console.log(res);
            // console.log(this.predictionResult);
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
              duration: 5000,
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
      component: PlasticDetailModalPage,
      // You can pass data to the modal using componentProps
      componentProps: {
        // Example data
        plastic_class: this.predictionResult
      }
    });
    await modal.present();
  }
}
export { APIResult };

