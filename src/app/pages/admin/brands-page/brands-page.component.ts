import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Brand, BRANDS } from '../../../data/brands.data';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';

@Component({
  selector: 'app-brands-page',
  imports: [GrayLineComponent],
  templateUrl: './brands-page.component.html',
  styleUrl: './brands-page.component.scss',
})
export class BrandsPageComponent {
  brands: Brand[] = [...BRANDS];

  onEditBrand(brand: Brand) {
    console.log('Edit brand:', brand);
  }

  onDeleteBrand(brandId: number) {
    this.brands = this.brands.filter((brand) => brand.id !== brandId);
    console.log('Delete brand with id:', brandId);
  }

  onAddBrand() {
    console.log('Add new brand');
  }
}
