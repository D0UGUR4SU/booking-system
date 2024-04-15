import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signUpObj: SignUp = new SignUp();
  loginObj: Login = new Login();

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Registration Success')
  }

  onLogin() {
    debugger;
    this.http.post('mongodb://localhost:27017/booking-system-login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('Login success!');
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    });
  }

}

export class SignUp {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password = ""
  }
}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = ""
  }
}
