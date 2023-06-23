import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
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

  predict(file: Blob): Observable<APIResult> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post<APIResult>(
      TRASH_PRED_ENDPOINT_URL,
      formData
    );
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/recyclable-data.json");
  }

}
