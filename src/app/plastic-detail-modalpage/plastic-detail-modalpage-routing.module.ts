import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlasticDetailModalpagePage } from './plastic-detail-modalpage.page';

const routes: Routes = [
  {
    path: '',
    component: PlasticDetailModalpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlasticDetailModalpagePageRoutingModule {}
