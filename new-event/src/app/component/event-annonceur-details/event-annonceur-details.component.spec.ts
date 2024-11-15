import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAnnonceurDetailsComponent } from './event-annonceur-details.component';

describe('EventAnnonceurDetailsComponent', () => {
  let component: EventAnnonceurDetailsComponent;
  let fixture: ComponentFixture<EventAnnonceurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventAnnonceurDetailsComponent]
    });
    fixture = TestBed.createComponent(EventAnnonceurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
