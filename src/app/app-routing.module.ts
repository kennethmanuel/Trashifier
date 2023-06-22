import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'recyclable-detail/:id',
    loadChildren: () => import('./pages/recyclable-detail/recyclable-detail.module').then(m => m.RecyclableDetailPageModule)
  },
  {
    path: 'rec-detail-modalpage',
    loadChildren: () => import('./rec-detail-modalpage/rec-detail-modalpage.module').then(m => m.RecDetailModalpagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
