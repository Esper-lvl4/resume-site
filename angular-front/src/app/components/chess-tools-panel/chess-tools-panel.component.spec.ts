import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessToolsPanelComponent } from './chess-tools-panel.component';

describe('ChessToolsPanelComponent', () => {
  let component: ChessToolsPanelComponent;
  let fixture: ComponentFixture<ChessToolsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessToolsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessToolsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
