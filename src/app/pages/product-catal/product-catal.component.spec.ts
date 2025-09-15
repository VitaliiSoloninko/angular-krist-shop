import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalComponent } from './product-catal.component';

describe('ProductCatalComponent', () => {
  let component: ProductCatalComponent;
  let fixture: ComponentFixture<ProductCatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
