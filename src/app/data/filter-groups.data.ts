import { FilterGroup } from '../entities/product/ui/product-filters/product-filters.component';
import { BRANDS } from './brands.data';
import { TYPES } from './types.data';

export const FILTER_GROUPS: FilterGroup[] = [
  {
    title: 'Types',
    key: 'type',
    options: TYPES.map((t) => t.name),
  },
  {
    title: 'Brands',
    key: 'brand',
    options: BRANDS.map((b) => b.name),
  },
  // {
  //   title: 'Styles',
  //   key: 'style',
  //   options: ['Casual', 'Formal', 'Party', 'Gum'],
  // },
];
