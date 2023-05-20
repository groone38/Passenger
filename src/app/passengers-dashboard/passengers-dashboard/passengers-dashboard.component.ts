import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/passenger.model';
import { PassengersDashboardService } from '../passengers-dashboard.service';

@Component({
  selector: 'app-passengers-dashboard',
  templateUrl: './passengers-dashboard.component.html',
  styleUrls: ['./passengers-dashboard.component.scss'],
})
export class PassengersDashboardComponent implements OnInit {
  constructor(private readonly passengerService: PassengersDashboardService) {}
  passengers: Passenger[] = [];

  ngOnInit(): void {
    this.getDataPassengers();
  }

  public getDataPassengers() {
    this.passengerService
      .get()
      .subscribe((passengers: Passenger[]) => (this.passengers = passengers));
  }

  public handleEdit(event: Passenger) {
    this.passengerService.put(event).subscribe(() => this.getDataPassengers());
  }

  public handleRemove(event: Passenger) {
    this.passengerService
      .delete(event)
      .subscribe(() => this.getDataPassengers());
  }
  // this.passengers = this.passengers.map((item: Passenger) => {
  //   if (item.id === event.id) {
  //     item = Object.assign({}, item, event);
  //   }
  //   return item;
  // });

  // handleRemove(event: Passenger) {
  //   this.passengers = this.passengers.filter(
  //     (item: Passenger) => item.id !== event.id
  //   );
  // }
}
