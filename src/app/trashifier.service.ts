import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface APIResult {
  class: string;
  confidence: number;
}

const ENDPOINT_URL = 'https://asia-southeast2-heroic-bird-383412.cloudfunctions.net/predict';

@Injectable({
  providedIn: 'root'
})
export class TrashifierService {

  constructor(private http: HttpClient) { }

  // TODO: UPDATE THIS file should not be string
  predict(file: Blob): Observable<APIResult> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post<APIResult>(
      ENDPOINT_URL,
      formData
    );
  }

}
