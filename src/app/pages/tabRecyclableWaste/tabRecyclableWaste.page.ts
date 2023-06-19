import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabRecyclableWaste',
  templateUrl: 'tabRecyclableWaste.page.html',
  styleUrls: ['tabRecyclableWaste.page.scss']
})
export class TabRecyclableWastePage {
  recyclables: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getJSON().subscribe((data: any[]) => {
      this.recyclables = data;
    });
    console.log(this.recyclables);
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/recyclable-data.json");
  }
}
