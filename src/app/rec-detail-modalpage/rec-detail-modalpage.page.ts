import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrashifierService } from 'src/app/trashifier.service';

@Component({
  selector: 'app-rec-detail-modalpage',
  templateUrl: './rec-detail-modalpage.page.html',
  styleUrls: ['./rec-detail-modalpage.page.scss'],
})
export class RecDetailModalpagePage implements OnInit {
  @Input() class: string | undefined;
  recyclable: any = "";

  constructor(
    private modalController: ModalController,
    private trashifierService: TrashifierService
  ) { }

  ngOnInit() {
    this.loadRecyclableDataJSON();
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
}
