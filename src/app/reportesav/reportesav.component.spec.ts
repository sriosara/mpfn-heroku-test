import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesavComponent } from './reportesav.component';

describe('ReportesavComponent', () => {
  let component: ReportesavComponent;
  let fixture: ComponentFixture<ReportesavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
