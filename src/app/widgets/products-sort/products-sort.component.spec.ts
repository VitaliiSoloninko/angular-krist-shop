import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSortComponent } from './products-sort.component';

describe('ProductsSortComponent', () => {
  let component: ProductsSortComponent;
  let fixture: ComponentFixture<ProductsSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
