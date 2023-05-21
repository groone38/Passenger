import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, Subscriber, Subscription, map } from 'rxjs';

const BASE_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ModalServicesService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/singupUsers`);
  }

  public postRegistr(user: User): Observable<void> {
    return this.http.post<void>(`${BASE_URL}/singupUsers`, user);
  }
}
