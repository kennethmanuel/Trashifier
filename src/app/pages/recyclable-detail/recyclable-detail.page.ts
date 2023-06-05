import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashifierService } from 'src/app/trashifier.service';

interface RecyclableSample {
  sampleName: String
  sampleImageName: String
}
interface Recyclable {
}

@Component({
  selector: 'app-recyclable-detail',
  templateUrl: './recyclable-detail.page.html',
  styleUrls: ['./recyclable-detail.page.scss'],
})
export class RecyclableDetailPage implements OnInit {
  routeId: string = this.route.snapshot.paramMap.get('id') as string;
  recyclable: any = "";

  constructor(private route: ActivatedRoute, private trashifierService: TrashifierService) { }

  ngOnInit() {
    console.log(this.routeId);
    this.loadJSON();
  }

  loadJSON() {
    this.trashifierService.getJSON().subscribe(res => {
      this.recyclable = res.find((recyclable: { id: string; }) => recyclable.id === this.routeId);
      console.log(this.recyclable);
    })
  }
}
