import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrashifierService } from 'src/app/trashifier.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-plastic-detail-modalpage',
  templateUrl: './plastic-detail-modalpage.page.html',
  styleUrls: ['./plastic-detail-modalpage.page.scss'],
})
export class PlasticDetailModalPage implements OnInit {
  @Input() class: string | undefined;
  plastic: any = "";

  constructor(
    private route: ActivatedRoute,
    private trashifierService: TrashifierService,
    private modalController: ModalController
  ) { }
  
  ngOnInit() {
    const routeId: string = this.route.snapshot.paramMap.get('id') as string;
    this.loadJSONPlastic(routeId);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  loadJSONPlastic(routeId: string) {
    this.trashifierService.getJSONPlastic().subscribe(res => {
      this.plastic = res.find((plastic: { id: string; }) => plastic.id === this.class);
      console.log(this.plastic);
    })
  }

}
