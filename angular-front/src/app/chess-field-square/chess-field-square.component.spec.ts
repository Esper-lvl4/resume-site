import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessFieldSquareComponent } from './chess-field-square.component';

describe('ChessFieldSquareComponent', () => {
  let component: ChessFieldSquareComponent;
  let fixture: ComponentFixture<ChessFieldSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessFieldSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessFieldSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
