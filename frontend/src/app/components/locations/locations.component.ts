import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

  locations: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations(): void {
    this.apiService.getLocations().subscribe(
      (data: any[]) => {
        this.locations = data;
      },
      (error) => {
        console.error('Error loading locations:', error);
      }
    );
  }
}
