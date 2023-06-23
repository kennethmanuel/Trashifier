import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface APIResult {
  class: string;
  confidence: number;
}

const TRASH_PRED_ENDPOINT_URL = 'http://localhost:8000/trash-predict';
const PLASTIC_PRED_ENDPOINT_URL = 'http://localhost:8000/trash-predict';

@Injectable({
  providedIn: 'root'
})
export class TrashifierService {

  constructor(private http: HttpClient) { }

  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  predict(imageData: any): Observable<APIResult> {
    const file = this.dataURLtoBlob(imageData)

    const formData = new FormData();
    formData.append('file', file, 'image.jpg');

    return this.http.post<APIResult>(
      TRASH_PRED_ENDPOINT_URL,
      formData
    );
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/recyclable-data.json");
  }
}
