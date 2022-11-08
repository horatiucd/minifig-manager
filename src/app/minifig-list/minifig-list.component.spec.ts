import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifigListComponent } from './minifig-list.component';

describe('MinifigListComponent', () => {
  let component: MinifigListComponent;
  let fixture: ComponentFixture<MinifigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
