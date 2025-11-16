import { Component, input, output } from '@angular/core';
import { Product } from '../../../entities/product/model/product';
import { AdminEntity } from '../../models/admin-entity.model';
import { AdminEntityCardComponent } from '../admin-entity-card/admin-entity-card.component';

@Component({
  selector: 'app-admin-entity-list',
  imports: [AdminEntityCardComponent],
  templateUrl: './admin-entity-list.component.html',
  styleUrl: './admin-entity-list.component.scss',
})
export class AdminEntityListComponent {
  products = input<Product[]>([]);
  productClick = output<Product>();

  items = input<AdminEntity[]>([]);
  title = input<string | undefined>(undefined);

  edit = output<AdminEntity>();
  delete = output<number>();

  onEdit(entity: AdminEntity) {
    this.edit.emit(entity);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
