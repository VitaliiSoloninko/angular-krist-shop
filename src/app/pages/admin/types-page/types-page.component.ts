import { Component, signal } from '@angular/core';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';
import { AdminEntityListComponent } from '../../../shared/ui/admin-entity-list/admin-entity-list.component';
import { AdminAddButtonComponent } from '../../../shared/ui/admin-add-button/admin-add-button.component';
import { AdminEntity } from '../../../shared/models/admin-entity.model';
import { TYPES } from '../../../data/types.data';

@Component({
  selector: 'app-types-page',
  imports: [
    GrayLineComponent,
    AdminEntityListComponent,
    AdminAddButtonComponent,
  ],
  templateUrl: './types-page.component.html',
  styleUrl: './types-page.component.scss',
})
export class TypesPageComponent {
  types = signal<AdminEntity[]>([...TYPES]);

  onEditType(type: AdminEntity) {
    console.log('Edit type:', type);
  }

  onDeleteType(typeId: number) {
    this.types.update((types) => types.filter((type) => type.id !== typeId));
    console.log('Delete type with id:', typeId);
  }

  onAddType() {
    console.log('Add new type');
  }
}
