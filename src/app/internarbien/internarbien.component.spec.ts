import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternarbienComponent } from './internarbien.component';

describe('InternarbienComponent', () => {
  let component: InternarbienComponent;
  let fixture: ComponentFixture<InternarbienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternarbienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternarbienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

