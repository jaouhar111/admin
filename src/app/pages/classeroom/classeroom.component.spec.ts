import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseroomComponent } from './classeroom.component';

describe('ClasseroomComponent', () => {
  let component: ClasseroomComponent;
  let fixture: ComponentFixture<ClasseroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
