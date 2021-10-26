import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSetPopupComponent } from './name-set-popup.component';

describe('NameSetPopupComponent', () => {
  let component: NameSetPopupComponent;
  let fixture: ComponentFixture<NameSetPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameSetPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
