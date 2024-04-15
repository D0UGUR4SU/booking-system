import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }

  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/locations`);
  }

  getReservations(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/reservations`);
  }

  cancelReservation(reservationId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/reservations/${reservationId}`);
  }

  getVenueDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/venue-details/${id}`);
  }
}
