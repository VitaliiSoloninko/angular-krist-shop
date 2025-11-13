import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressStyleSectionComponent } from './dress-style-section.component';

describe('DressStyleSectionComponent', () => {
  let component: DressStyleSectionComponent;
  let fixture: ComponentFixture<DressStyleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressStyleSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressStyleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
