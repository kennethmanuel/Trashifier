import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecDetailModalpagePageRoutingModule } from './rec-detail-modalpage-routing.module';

import { RecDetailModalpagePage } from './rec-detail-modalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecDetailModalpagePageRoutingModule
  ],
  declarations: [RecDetailModalpagePage]
})
export class RecDetailModalpagePageModule {}
