import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigViewComponent } from './minifig-view.component';

describe('ViewMinifigComponent', () => {
  let component: MinifigViewComponent;
  let fixture: ComponentFixture<MinifigViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifigViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
