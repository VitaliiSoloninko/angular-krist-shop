import { Component, signal } from '@angular/core';
import { ORDERS } from '../../../data/orders.data';
import { PRODUCTS_DATA } from '../../../data/products.data';
import { USERS } from '../../../data/users.data';
import { AdminDashboardCardComponent } from '../../../shared/ui/admin-dashboard-card/admin-dashboard-card.component';
import { GrayLineComponent } from '../../../shared/ui/gray-line/gray-line.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [GrayLineComponent, AdminDashboardCardComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  stats = signal({
    totalRevenue: this.calculateTotalRevenue(),
    totalOrders: ORDERS.length,
    totalUsers: USERS.length,
    totalProducts: PRODUCTS_DATA.rows.length,
  });

  // last 5 orders
  recentOrders = signal(ORDERS.slice(0, 5));

  private calculateTotalRevenue(): number {
    return ORDERS.reduce((total, order) => {
      return total + order.cart.summary.total;
    }, 0);
  }
}
