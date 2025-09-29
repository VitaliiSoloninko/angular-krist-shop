import { Component } from '@angular/core';
import { EmptyStateComponent } from '../../../shared/ui/empty-state/empty-state.component';

@Component({
  selector: 'app-empty-state-test',
  imports: [EmptyStateComponent],
  templateUrl: './empty-state-test.component.html',
  styleUrl: './empty-state-test.component.scss',
})
export class EmptyStateTestComponent {
  retryConnection() {
    console.log('Retrying connection...');
    alert('Trying to reconnect...');
  }

  refreshPage() {
    console.log('Refreshing page...');
    window.location.reload();
  }

  clearFilters() {
    console.log('Clearing filters...');
    alert('Filters cleared!');
  }
}
