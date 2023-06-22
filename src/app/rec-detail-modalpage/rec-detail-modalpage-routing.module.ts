import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecDetailModalpagePage } from './rec-detail-modalpage.page';

const routes: Routes = [
  {
    path: '',
    component: RecDetailModalpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecDetailModalpagePageRoutingModule {}
