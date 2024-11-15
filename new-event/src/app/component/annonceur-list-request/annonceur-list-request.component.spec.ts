import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceurListRequestComponent } from './annonceur-list-request.component';

describe('AnnonceurListRequestComponent', () => {
  let component: AnnonceurListRequestComponent;
  let fixture: ComponentFixture<AnnonceurListRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnonceurListRequestComponent]
    });
    fixture = TestBed.createComponent(AnnonceurListRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
