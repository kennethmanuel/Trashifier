import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/tabDashboard',
    pathMatch: 'full'
  },
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
        path: 'tabInfo',
        loadChildren: () => import('../tabInfo/tabInfo.module').then(m => m.TabInfoPageModule)
      },
      {
        path: 'recyclable-detail/:id',
        loadChildren: () => import('../recyclable-detail/recyclable-detail.module').then(m => m.RecyclableDetailPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
