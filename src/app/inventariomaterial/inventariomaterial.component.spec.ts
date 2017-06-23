import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariomaterialComponent } from './inventariomaterial.component';

describe('InventariomaterialComponent', () => {
  let component: InventariomaterialComponent;
  let fixture: ComponentFixture<InventariomaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariomaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
