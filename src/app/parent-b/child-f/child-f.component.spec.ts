import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFComponent } from './child-f.component';

describe('ChildFComponent', () => {
  let component: ChildFComponent;
  let fixture: ComponentFixture<ChildFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
