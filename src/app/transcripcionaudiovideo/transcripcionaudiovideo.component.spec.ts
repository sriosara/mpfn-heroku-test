import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscripcionaudiovideoComponent } from './transcripcionaudiovideo.component';

describe('TranscripcionaudiovideoComponent', () => {
  let component: TranscripcionaudiovideoComponent;
  let fixture: ComponentFixture<TranscripcionaudiovideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscripcionaudiovideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscripcionaudiovideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
