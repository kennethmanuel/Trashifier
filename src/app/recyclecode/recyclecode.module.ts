import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecyclecodePageRoutingModule } from './recyclecode-routing.module';

import { RecyclecodePage } from './recyclecode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecyclecodePageRoutingModule
  ],
  declarations: [RecyclecodePage]
})
export class RecyclecodePageModule {}
