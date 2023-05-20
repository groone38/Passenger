import { Component, Input } from '@angular/core';
import { Passenger } from 'src/app/models/passenger.model';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss'],
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[] = [];
  constructor() {}

  checkedInCount(): number | undefined {
    if (!this.items) return;
    return this.items.filter((obj: Passenger) => obj.checkedIn).length;
  }
}
