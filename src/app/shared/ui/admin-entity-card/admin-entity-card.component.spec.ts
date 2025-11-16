import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntityCardComponent } from './admin-entity-card.component';

describe('AdminEntityCardComponent', () => {
  let component: AdminEntityCardComponent;
  let fixture: ComponentFixture<AdminEntityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEntityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEntityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
