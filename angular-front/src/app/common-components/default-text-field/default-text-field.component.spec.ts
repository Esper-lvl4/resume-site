import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTextFieldComponent } from './default-text-field.component';

describe('DefaultTextFieldComponent', () => {
  let component: DefaultTextFieldComponent;
  let fixture: ComponentFixture<DefaultTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
