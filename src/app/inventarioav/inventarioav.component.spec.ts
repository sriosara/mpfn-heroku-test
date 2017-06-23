import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioavComponent } from './inventarioav.component';

describe('InventarioavComponent', () => {
  let component: InventarioavComponent;
  let fixture: ComponentFixture<InventarioavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
