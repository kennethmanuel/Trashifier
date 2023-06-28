import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashifierService } from 'src/app/trashifier.service';

@Component({
  selector: 'app-plastic-detail',
  templateUrl: 'plastic-detail.page.html',
  styleUrls: ['plastic-detail.page.scss']
})
export class PlasticDetailPage {
  plastic: any = "";

  constructor(
    private route: ActivatedRoute,
    private trashifierService: TrashifierService
  ) { }
  
  ngOnInit() {
    const routeId: string = this.route.snapshot.paramMap.get('id') as string;
    this.loadJSONPlastic(routeId);
  }

  loadJSONPlastic(routeId: string) {
    this.trashifierService.getJSONPlastic().subscribe(res => {
      this.plastic = res.find((plastic: { id: string; }) => plastic.id === routeId);
      console.log(this.plastic);
    })
  }

}
