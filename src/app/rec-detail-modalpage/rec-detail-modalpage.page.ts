import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrashifierService } from 'src/app/trashifier.service';
import { PlasticDetailModalPage } from '../plastic-detail-modalpage/plastic-detail-modalpage.page';

@Component({
  selector: 'app-rec-detail-modalpage',
  templateUrl: './rec-detail-modalpage.page.html',
  styleUrls: ['./rec-detail-modalpage.page.scss'],
})
export class RecDetailModalpagePage implements OnInit {
  @Input() class: string | undefined;
  @Input() plastic_class: string | undefined;
  recyclable: any = "";
  plastic: any = "";

  constructor(
    private modalController: ModalController,
    private trashifierService: TrashifierService
  ) { }

  ngOnInit() {
    this.loadRecyclableDataJSON();
    this.loadJSONPlastic();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  loadRecyclableDataJSON() {
    this.trashifierService.getJSON().subscribe(res => {
      this.recyclable = res.find((recyclable: { id: string; }) => recyclable.id === this.class);
      console.log(this.recyclable);
    })
  }

  loadJSONPlastic() {
    this.trashifierService.getJSONPlastic().subscribe(res => {
      this.plastic = res.find((plastic: { id: string; }) => plastic.id === this.plastic_class);
      console.log(this.plastic);
    })
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: PlasticDetailModalPage,
      // You can pass data to the modal using componentProps
      componentProps: {
        // Example data
        plastic_class: this.plastic_class
      }
    });
    await modal.present();
  }
}
