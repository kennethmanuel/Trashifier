import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabClassifyPage } from './tabClassify.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabClassifyPageRoutingModule } from './tabClassify-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabClassifyPageRoutingModule
  ],
  declarations: [TabClassifyPage]
})
export class TabClassifyPageModule { }
