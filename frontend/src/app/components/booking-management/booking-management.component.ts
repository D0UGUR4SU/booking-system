import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Reservation} from "../../models/reservation.model";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-booking-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-management.component.html',
  styleUrl: './booking-management.component.css'
})
export class BookingManagementComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations(): void {
    this.apiService.getReservations().subscribe(
      (data: Reservation[]) => {
        this.reservations = data;
      },
      (error) => {
        console.error('Error loading reservations:', error);
      }
    );
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }

  cancelReservation(reservationId: number): void {
    this.apiService.cancelReservation(reservationId).subscribe(
      () => {
        console.log(`Reservation ${reservationId} cancelled successfully.`)
        this.loadReservations();
      },
      (error) => {
        console.error(`Error cancelling reservation ${reservationId}:`, error)
      }
    );
  }
}
