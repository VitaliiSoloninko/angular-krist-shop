import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGroupUiComponent } from './filter-group-ui.component';

describe('FilterGroupUiComponent', () => {
  let component: FilterGroupUiComponent;
  let fixture: ComponentFixture<FilterGroupUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGroupUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterGroupUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
