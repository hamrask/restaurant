import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteemAddComponent } from './iteem-add.component';

describe('IteemAddComponent', () => {
  let component: IteemAddComponent;
  let fixture: ComponentFixture<IteemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
