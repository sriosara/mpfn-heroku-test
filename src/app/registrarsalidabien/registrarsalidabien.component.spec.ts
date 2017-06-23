import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsalidabienComponent } from './registrarsalidabien.component';

describe('RegistrarsalidabienComponent', () => {
  let component: RegistrarsalidabienComponent;
  let fixture: ComponentFixture<RegistrarsalidabienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarsalidabienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarsalidabienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
