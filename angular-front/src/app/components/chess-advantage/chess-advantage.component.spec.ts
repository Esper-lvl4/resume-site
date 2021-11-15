import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessAdvantageComponent } from './chess-advantage.component';

describe('ChessAdvantageComponent', () => {
  let component: ChessAdvantageComponent;
  let fixture: ComponentFixture<ChessAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessAdvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
