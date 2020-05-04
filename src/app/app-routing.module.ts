import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'parent-a',
    loadChildren: () => import('./parent-a/parent-a.module').then(m => m.ParentAModule)
  },
  {
    path: 'parent-b',
    loadChildren: () => import('./parent-b/parent-b.module').then(m => m.ParentBModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
