import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabClassifyPage } from './tabClassify.page';

const routes: Routes = [
  {
    path: '',
    component: TabClassifyPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabClassifyPageRoutingModule { }
