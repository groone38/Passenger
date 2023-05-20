import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const BASE_URL: string = 'http://localhost:3000';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root',
})
export class PassengersDashboardService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`${BASE_URL}/passengers`);
  }

  public put(passenger: Passenger): Observable<void> {
    return this.http.put<void>(
      `${BASE_URL}/passengers/${passenger.id}`,
      passenger
    );
  }

  public delete(passenger: Passenger): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/passengers/${passenger.id}`);
  }
}
