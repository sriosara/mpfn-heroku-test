import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariobiComponent } from './inventariobi.component';

describe('InventariobiComponent', () => {
  let component: InventariobiComponent;
  let fixture: ComponentFixture<InventariobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
