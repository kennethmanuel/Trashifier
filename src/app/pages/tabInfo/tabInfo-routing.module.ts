import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabInfoPage } from './tabInfo.page';

const routes: Routes = [
  {
    path: '',
    component: TabInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabInfoPageRoutingModule { }
