import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APIResult } from './interfaces/APIResult.interface';

const TRASH_PRED_ENDPOINT_URL = 'https://trashifier-api-o3bl7rnfya-et.a.run.app/trash-predict';
const PLASTIC_PRED_ENDPOINT_URL = 'https://trashifier-api-o3bl7rnfya-et.a.run.app/plastic-predict';

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
    ).pipe(
      catchError((error) => {
        if (error.status === 0) {
          // Server is turned off, handle the error accordingly
          const customError = new Error('Server is currently unavailable');
          customError.name = 'ServerUnavailableError';
          return throwError(() => customError);
        } else {
          // Handle other errors
          console.error('Error:', error);
          return throwError(() => error);
        }
      })
    );
  }

  predictPlastic(imageData: any): Observable<APIResult> {
    const file = this.dataURLtoBlob(imageData)

    const formData = new FormData();
    formData.append('file', file, 'image.jpg');

    return this.http.post<APIResult>(
      PLASTIC_PRED_ENDPOINT_URL,
      formData
    ).pipe(
      catchError((error) => {
        if (error.status === 0) {
          // Server is turned off, handle the error accordingly
          const customError = new Error('Server is currently unavailable');
          customError.name = 'ServerUnavailableError';
          return throwError(() => customError);
        } else {
          // Handle other errors
          console.error('Error:', error);
          return throwError(() => error);
        }
      })
    );
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/recyclable-data.json");
  }
  
  getJSONPlastic(): Observable<any> {
    return this.http.get("./assets/plastic-data.json");
  }
}
