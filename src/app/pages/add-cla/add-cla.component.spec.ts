import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClaComponent } from './add-cla.component';

describe('AddClaComponent', () => {
  let component: AddClaComponent;
  let fixture: ComponentFixture<AddClaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
