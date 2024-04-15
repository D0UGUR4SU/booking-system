import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path: '/', component: AppComponent},
  { path: '**', redirectTo:'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
