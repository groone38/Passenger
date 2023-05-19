import { Component, OnInit } from '@angular/core';

interface Children {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children?: Children[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Ultimate Angular';
  }
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Andrey',
      checkedIn: true,
      checkInDate: 123456123123,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    { id: 2, fullname: 'Anton', checkedIn: false, checkInDate: 123456123123 },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      children: [{ name: 'Anton', age: 15 }],
    },
  ];
  ngOnInit(): void {}
}
