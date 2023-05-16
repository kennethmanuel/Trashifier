import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabRecyclableWastePage } from './tabRecyclableWaste.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabRecyclableWastePageRoutingModule } from './tabRecyclableWaste-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabRecyclableWastePageRoutingModule
  ],
  declarations: [TabRecyclableWastePage]
})
export class TabRecyclableWastePageModule { }
