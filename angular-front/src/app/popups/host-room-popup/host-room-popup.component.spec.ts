import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostRoomPopupComponent } from './host-room-popup.component';

describe('HostRoomPopupComponent', () => {
  let component: HostRoomPopupComponent;
  let fixture: ComponentFixture<HostRoomPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostRoomPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostRoomPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
