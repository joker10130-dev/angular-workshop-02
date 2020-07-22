import {
  Component,
  OnChanges,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  constructor() {}

  ngOnChanges(): void {
    console.log(this.rating);
    this.starWidth = (75 / 5) * this.rating;
  }

  onClickRating(): void {
    alert(`Rating ${this.rating} was clicked`);
    // this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
  }
}
