import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface APIResult {
  class: string;
  confidence: number;
}

const WASTE_MNV2_ENDPOINT_URL = 'https://asia-southeast2-heroic-bird-383412.cloudfunctions.net/waste_mnv2_predict';
const PLASTIC_MNV2_ENDPOINT_URL = 'https://asia-southeast2-heroic-bird-383412.cloudfunctions.net/plastic_mnv2_predict';

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
      WASTE_MNV2_ENDPOINT_URL,
      formData
    );
  }

}
