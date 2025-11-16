import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddButtonComponent } from './admin-add-button.component';

describe('AdminAddButtonComponent', () => {
  let component: AdminAddButtonComponent;
  let fixture: ComponentFixture<AdminAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
