import { Component } from '@angular/core';
import { BRANDS } from '../../../data/brands.data';
import { AdminEntity } from '../../../shared/models/admin-entity.model';
import { AdminAddButtonComponent } from '../../../shared/ui/admin-add-button/admin-add-button.component';
import { AdminEntityListComponent } from '../../../shared/ui/admin-entity-list/admin-entity-list.component';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';

@Component({
  selector: 'app-brands-page',
  imports: [
    GrayLineComponent,
    AdminEntityListComponent,
    AdminAddButtonComponent,
  ],
  templateUrl: './brands-page.component.html',
  styleUrl: './brands-page.component.scss',
})
export class BrandsPageComponent {
  brands: AdminEntity[] = [...BRANDS];

  onEditBrand(brand: AdminEntity) {
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
