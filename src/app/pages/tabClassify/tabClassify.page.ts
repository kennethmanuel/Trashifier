import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor, CapacitorCookies } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { TrashifierService } from 'src/app/trashifier.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tabClassify',
  templateUrl: 'tabClassify.page.html',
  styleUrls: ['tabClassify.page.scss']
})
export class TabClassifyPage {
  image: any;
  predictionResult: any;

  constructor(private trashifierService: TrashifierService, private loadingCtrl: LoadingController) { }

  async takePicture() {
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
      console.log('image: ', image);

      // Show image to user
      this.image = image.dataUrl;

      // Present loading
      const loading = await this.loadingCtrl.create({
        message: "Classifying the images..."
      });
      loading.present();

      // Convert image to blob
      const blob = this.dataURLtoBlob(image.dataUrl);

      // Sent the image to be classified
      this.trashifierService.predict(blob).subscribe(async res => {
        this.predictionResult = res.class;
        console.log(res);

        // Remove loading 
        loading.dismiss();
      })
    } catch (e) {
      console.log(e);
    }
  }

  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
}
