import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashifierService } from 'src/app/trashifier.service';

interface RecyclableSample {
  sampleName: String
  sampleImageName: String
}

@Component({
  selector: 'app-recyclable-detail',
  templateUrl: './recyclable-detail.page.html',
  styleUrls: ['./recyclable-detail.page.scss'],
})
export class RecyclableDetailPage implements OnInit {
  recyclable: any = "";

  constructor(
    private route: ActivatedRoute,
    private trashifierService: TrashifierService
  ) { }

  ngOnInit() {
    const routeId: string = this.route.snapshot.paramMap.get('id') as string;
    // console.log(routeId);
    this.loadJSON(routeId);
  }

  loadJSON(routeId: string) {
    this.trashifierService.getJSON().subscribe(res => {
      this.recyclable = res.find((recyclable: { id: string; }) => recyclable.id === routeId);
      console.log(this.recyclable);
    })
  }


}
