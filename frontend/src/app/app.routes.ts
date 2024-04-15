import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {LocationsComponent} from "./components/locations/locations.component";
import {VenueDetailsComponent} from "./components/venue-details/venue-details.component";
import {BookingManagementComponent} from "./components/booking-management/booking-management.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '/auth/login', component: LoginComponent},
  {path: '/locations', component: LocationsComponent},
  {path: '/venue-details', component: VenueDetailsComponent},
  {path: '/booking-management', component: BookingManagementComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
