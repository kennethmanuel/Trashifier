import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlasticDetailPage } from './plastic-detail.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PlasticDetailPageRoutingModule } from './plastic-detail-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PlasticDetailPageRoutingModule
  ],
  declarations: [PlasticDetailPage]
})
export class PlasticDetailPageModule { }
