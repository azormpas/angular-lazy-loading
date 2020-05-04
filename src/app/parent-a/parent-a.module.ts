import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentAComponent} from './parent-a.component';
import {ChildCComponent} from './child-c/child-c.component';
import {ParentARoutingModule} from './parent-a-routing.module';
import {ChildDComponent} from './child-d/child-d.component';


@NgModule({
  declarations: [
    ParentAComponent,
    ChildCComponent,
    ChildDComponent
  ],
  imports: [
    CommonModule,
    ParentARoutingModule
  ],
  providers: [],
  entryComponents: [],
  exports: []
})

export class ParentAModule {
}
