import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentBComponent} from './parent-b.component';
import {ChildEComponent} from './child-e/child-e.component';
import {ChildFComponent} from './child-f/child-f.component';

const routes: Routes = [
  {path: '', component: ParentBComponent},
  {path: 'child-e/:id', component: ChildEComponent},
  {path: 'child-f', component: ChildFComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ParentBRoutingModule {

}
