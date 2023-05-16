import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabRecyclableWastePage } from './tabRecyclableWaste.page';

const routes: Routes = [
  {
    path: '',
    component: TabRecyclableWastePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRecyclableWastePageRoutingModule { }
