import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigAddComponent } from './minifig-add.component';

describe('AddMinifigComponent', () => {
  let component: MinifigAddComponent;
  let fixture: ComponentFixture<MinifigAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifigAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
