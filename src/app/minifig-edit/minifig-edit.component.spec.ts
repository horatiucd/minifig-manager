import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigEditComponent } from './minifig-edit.component';

describe('EditMinifigComponent', () => {
  let component: MinifigEditComponent;
  let fixture: ComponentFixture<MinifigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
