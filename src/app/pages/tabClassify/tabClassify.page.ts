import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor, CapacitorCookies } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { TrashifierService } from 'src/app/trashifier.service';

@Component({
  selector: 'app-tabClassify',
  templateUrl: 'tabClassify.page.html',
  styleUrls: ['tabClassify.page.scss']
})
export class TabClassifyPage {

  image: any;
  predictionResult: any;

  constructor(private trashifierService: TrashifierService) { }

  async takePicture() {
    try {
      if (Capacitor.getPlatform() != 'web') await Camera.requestPermissions();

      const image = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl
      });
      console.log('image: ', image);
      this.image = image.dataUrl;
      const blob = this.dataURLtoBlob(image.dataUrl);
      // SEND REQUEST HERE
      this.getPrediction(blob);

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

  getPrediction(file: Blob) {
    this.trashifierService.predict(file).subscribe(res => {
      this.predictionResult = res.class;
      console.log(res);
    })
  }


}
