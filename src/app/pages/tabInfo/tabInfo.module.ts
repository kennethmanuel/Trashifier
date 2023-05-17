import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabInfoPage } from './tabInfo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabInfoPageRoutingModule } from './tabInfo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabInfoPageRoutingModule
  ],
  declarations: [TabInfoPage]
})
export class TabInfoPageModule { }
