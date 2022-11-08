import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMinifigComponent } from './add-minifig.component';

describe('AddMinifigComponent', () => {
  let component: AddMinifigComponent;
  let fixture: ComponentFixture<AddMinifigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMinifigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMinifigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
