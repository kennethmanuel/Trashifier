import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface regulationData {
  num: string;
  type: string;
  description: string;
  url: string;
}

interface insitutionData{
  name: string;
  level: string;
  description: string;
  url: string;
}


@Component({
  selector: 'app-tabGlossary',
  templateUrl: 'tabGlossary.page.html',
  styleUrls: ['tabGlossary.page.scss']
})
export class TabGlossaryPage {
  selectSegment = 'Regulasi';
  regulationData: regulationData[] = [];
  institutionData: insitutionData[] = [];

  constructor(private http: HttpClient) { }
  
  fetchRegulationData() {
    this.http.get<regulationData[]>('./assets/regulasi-data.json').subscribe({
      next: (data) => {
        this.regulationData = data;
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      }
    });
  }

  fetchInstitutionData() {
    this.http.get<insitutionData[]>('./assets/institusi-data.json').subscribe({
      next: (data) => {
        this.institutionData = data;
      },
      error: (error) => {
        console.error('Error fetching JSON data:', error);
      }
    });
  }

  ngOnInit() {
    this.fetchRegulationData();
    this.fetchInstitutionData();
  }
}
