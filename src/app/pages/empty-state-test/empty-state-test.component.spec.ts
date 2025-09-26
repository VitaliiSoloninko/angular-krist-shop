import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateTestComponent } from './empty-state-test.component';

describe('EmptyStateTestComponent', () => {
  let component: EmptyStateTestComponent;
  let fixture: ComponentFixture<EmptyStateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyStateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
