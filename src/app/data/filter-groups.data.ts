import { FilterGroup } from '../entities/product/ui/product-filters/product-filters.component';

export const FILTER_GROUPS: FilterGroup[] = [
  {
    title: 'Types',
    key: 'type',
    options: ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'],
  },
  {
    title: 'Brands',
    key: 'brand',
    options: ['Versage', 'Zara', 'Cucci', 'Prada', 'Calvin Klein', 'H&M'],
  },
  {
    title: 'Styles',
    key: 'style',
    options: ['Casual', 'Formal', 'Party', 'Gum'],
  },
];
