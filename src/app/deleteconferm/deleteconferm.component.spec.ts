import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfermComponent } from './deleteconferm.component';

describe('DeleteconfermComponent', () => {
  let component: DeleteconfermComponent;
  let fixture: ComponentFixture<DeleteconfermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteconfermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteconfermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
