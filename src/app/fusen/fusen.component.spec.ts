import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusenComponent } from './fusen.component';

describe('FusenComponent', () => {
  let component: FusenComponent;
  let fixture: ComponentFixture<FusenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
