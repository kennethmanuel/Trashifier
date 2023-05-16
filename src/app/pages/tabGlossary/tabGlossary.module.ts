import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabGlossaryPage } from './tabGlossary.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabGlossaryPageRoutingModule } from './tabGlossary-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabGlossaryPageRoutingModule
  ],
  declarations: [TabGlossaryPage]
})
export class TabGlossaryPageModule { }
