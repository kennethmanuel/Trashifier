import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabGlossaryPage } from './tabGlossary.page';

const routes: Routes = [
  {
    path: '',
    component: TabGlossaryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabGlossaryPageRoutingModule { }
