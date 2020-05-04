import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildEComponent} from './child-e/child-e.component';
import {ChildFComponent} from './child-f/child-f.component';
import {ParentBComponent} from './parent-b.component';
import {ParentBRoutingModule} from './parent-b-routing.module';

@NgModule({
  declarations: [
    ParentBComponent,
    ChildEComponent,
    ChildFComponent
  ],
  imports: [
    CommonModule,
    ParentBRoutingModule
  ],
  providers: [],
  entryComponents: [],
  exports: []
})

export class ParentBModule {
}
