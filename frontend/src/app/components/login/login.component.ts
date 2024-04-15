import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    this.apiService.login(username, password).subscribe(response => {

      console.log('Login successful:', response);
    }, error => {
      console.error('Error logging in:', error);
    });
  }
}
