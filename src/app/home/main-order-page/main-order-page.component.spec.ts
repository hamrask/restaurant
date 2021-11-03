import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOrderPageComponent } from './main-order-page.component';

describe('MainOrderPageComponent', () => {
  let component: MainOrderPageComponent;
  let fixture: ComponentFixture<MainOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
