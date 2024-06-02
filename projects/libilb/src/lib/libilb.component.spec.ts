import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibilbComponent } from './libilb.component';

describe('LibilbComponent', () => {
  let component: LibilbComponent;
  let fixture: ComponentFixture<LibilbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibilbComponent]
    });
    fixture = TestBed.createComponent(LibilbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
