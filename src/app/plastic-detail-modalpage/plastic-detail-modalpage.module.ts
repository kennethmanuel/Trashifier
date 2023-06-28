import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlasticDetailModalpagePageRoutingModule } from './plastic-detail-modalpage-routing.module';

import { PlasticDetailModalpagePage } from './plastic-detail-modalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlasticDetailModalpagePageRoutingModule
  ],
  declarations: [PlasticDetailModalpagePage]
})
export class PlasticDetailModalpagePageModule {}
