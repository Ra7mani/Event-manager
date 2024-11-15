import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceurListEventsComponent } from './annonceur-list-events.component';

describe('AnnonceurListEventsComponent', () => {
  let component: AnnonceurListEventsComponent;
  let fixture: ComponentFixture<AnnonceurListEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonceurListEventsComponent]
    });
    fixture = TestBed.createComponent(AnnonceurListEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
