import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  rating = input<number>(0);

  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }
}
