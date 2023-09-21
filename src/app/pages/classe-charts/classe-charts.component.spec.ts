import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseChartsComponent } from './classe-charts.component';

describe('ClasseChartsComponent', () => {
  let component: ClasseChartsComponent;
  let fixture: ComponentFixture<ClasseChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
