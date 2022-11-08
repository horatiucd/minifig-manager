import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMinifigComponent } from './edit-minifig.component';

describe('EditMinifigComponent', () => {
  let component: EditMinifigComponent;
  let fixture: ComponentFixture<EditMinifigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMinifigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMinifigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
