import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildDComponent} from './child-d/child-d.component';
import {ChildCComponent} from './child-c/child-c.component';
import {ParentAComponent} from './parent-a.component';

const routes: Routes = [
  {path: '', component: ParentAComponent},
  {path: 'child-c', component: ChildCComponent},
  {path: 'child-d', component: ChildDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ParentARoutingModule {

}
