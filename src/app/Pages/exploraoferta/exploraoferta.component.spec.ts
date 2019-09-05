import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploraofertaComponent } from './exploraoferta.component';

describe('ExploraofertaComponent', () => {
  let component: ExploraofertaComponent;
  let fixture: ComponentFixture<ExploraofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploraofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploraofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
