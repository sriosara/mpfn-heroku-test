import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesbiComponent } from './reportesbi.component';

describe('ReportesbiComponent', () => {
  let component: ReportesbiComponent;
  let fixture: ComponentFixture<ReportesbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
