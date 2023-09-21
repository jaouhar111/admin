import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttEmpComponent } from './att-emp.component';

describe('AttEmpComponent', () => {
  let component: AttEmpComponent;
  let fixture: ComponentFixture<AttEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
