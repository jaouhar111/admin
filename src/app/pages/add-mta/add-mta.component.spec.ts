import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMtaComponent } from './add-mta.component';

describe('AddMtaComponent', () => {
  let component: AddMtaComponent;
  let fixture: ComponentFixture<AddMtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
