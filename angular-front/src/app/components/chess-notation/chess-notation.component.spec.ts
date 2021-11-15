import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessNotationComponent } from './chess-notation.component';

describe('ChessNotationComponent', () => {
  let component: ChessNotationComponent;
  let fixture: ComponentFixture<ChessNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessNotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
