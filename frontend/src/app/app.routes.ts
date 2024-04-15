import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo:'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
