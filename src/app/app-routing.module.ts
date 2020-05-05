import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/parent-a',
    pathMatch: 'full'
  },
  {
    path: 'parent-a',
    loadChildren: () => import('./parent-a/parent-a.module').then(m => m.ParentAModule)
  },
  {
    path: 'parent-b',
    loadChildren: () => import('./parent-b/parent-b.module').then(m => m.ParentBModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
