import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlasticDetailPage } from './plastic-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PlasticDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlasticDetailPageRoutingModule { }
