import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAdmissionComponent } from './emp-admission.component';

describe('EmpAdmissionComponent', () => {
  let component: EmpAdmissionComponent;
  let fixture: ComponentFixture<EmpAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
