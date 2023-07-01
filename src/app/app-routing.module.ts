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
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'guide',
    loadChildren: () => import('./pages/guide/guide.module').then( m => m.GuidePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'plastic-detail/:id',
    loadChildren: () => import('./pages/plastic-detail/plastic-detail.module').then(m => m.PlasticDetailPageModule)
  },
  {
    path: 'plastic-detail-modalpage',
    loadChildren: () => import('./plastic-detail-modalpage/plastic-detail-modalpage.module').then( m => m.PlasticDetailModalpagePageModule)
  },
  {
    path: 'recyclecode',
    loadChildren: () => import('./recyclecode/recyclecode.module').then( m => m.RecyclecodePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
