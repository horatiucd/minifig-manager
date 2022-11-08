import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMinifigComponent } from './view-minifig.component';

describe('ViewMinifigComponent', () => {
  let component: ViewMinifigComponent;
  let fixture: ComponentFixture<ViewMinifigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMinifigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMinifigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
