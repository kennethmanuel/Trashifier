import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashifierService } from 'src/app/trashifier.service';

@Component({
  selector: 'app-recyclable-detail',
  templateUrl: './recyclable-detail.page.html',
  styleUrls: ['./recyclable-detail.page.scss'],
})
export class RecyclableDetailPage implements OnInit {
  recyclable: any = "";
  plastics: any = [];

  constructor(
    private route: ActivatedRoute,
    private trashifierService: TrashifierService
  ) { }

  ngOnInit() {
    const routeId: string = this.route.snapshot.paramMap.get('id') as string;
    this.loadJSONTrash(routeId);
    if (routeId == "plastic") {
      this.loadJSONPlastic();
    }
  }

  loadJSONTrash(routeId: string) {
    this.trashifierService.getJSON().subscribe(res => {
      this.recyclable = res.find((recyclable: { id: string; }) => recyclable.id === routeId);
      console.log(this.recyclable);
    })
  }
  
  loadJSONPlastic() {
    this.trashifierService.getJSONPlastic().subscribe(res => {
      this.plastics = res;
      console.log(this.plastics);
    })
  }
}
