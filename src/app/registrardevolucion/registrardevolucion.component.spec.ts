import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrardevolucionComponent } from './registrardevolucion.component';

describe('RegistrardevolucionComponent', () => {
  let component: RegistrardevolucionComponent;
  let fixture: ComponentFixture<RegistrardevolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrardevolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrardevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
