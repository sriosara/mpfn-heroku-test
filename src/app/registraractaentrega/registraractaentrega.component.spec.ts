import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraractaentregaComponent } from './registraractaentrega.component';

describe('RegistraractaentregaComponent', () => {
  let component: RegistraractaentregaComponent;
  let fixture: ComponentFixture<RegistraractaentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraractaentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraractaentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

