import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarretornobienComponent } from './registrarretornobien.component';

describe('RegistrarretornobienComponent', () => {
  let component: RegistrarretornobienComponent;
  let fixture: ComponentFixture<RegistrarretornobienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarretornobienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarretornobienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
