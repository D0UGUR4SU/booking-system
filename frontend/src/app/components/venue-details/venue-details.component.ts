import {Component, Input} from '@angular/core';
import {Venue} from "../../models/reservation.model";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-venue-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venue-details.component.html',
  styleUrl: './venue-details.component.css'
})
export class VenueDetailsComponent {

  @Input() venue: Venue = {} as Venue;

  constructor() { }

}
