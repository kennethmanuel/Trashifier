import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecyclableDetailPage } from './recyclable-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecyclableDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecyclableDetailPageRoutingModule {}
