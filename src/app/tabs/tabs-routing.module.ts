import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabDashboard',
        loadChildren: () => import('../tabDashboard/tabDashboard.module').then(m => m.TabDashboardPageModule)
      },
      {
        path: 'tabRecyclableWaste',
        loadChildren: () => import('../tabRecyclableWaste/tabRecyclableWaste.module').then(m => m.TabRecyclableWastePageModule)
      },
      {
        path: 'tabGlossary',
        loadChildren: () => import('../tabGlossary/tabGlossary.module').then(m => m.TabGlossaryPageModule)
      },
      {
        path: 'tabClassify',
        loadChildren: () => import('../tabClassify/tabClassify.module').then(m => m.TabClassifyPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabDashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabDashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
