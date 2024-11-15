import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { jwtDecode } from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private service : AccountService , private router: Router) {
  }
  get passwordControl() {
    return this.form.get('password');
  }
  get emailControl() {
    return this.form.get('email');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

   signIn() {
    this.service.signin(this.form.value).subscribe(
      response => {
        console.log('Login successful:', response);
        localStorage.setItem('userconnect',JSON.stringify(response))
        localStorage.setItem('token',response.token)
        localStorage.setItem('state','0')
        const token = response.token;
        console.log('token :', token);  
        const decodedToken :any = jwtDecode(token);
        console.log('token decoded :', decodedToken);
        localStorage.setItem('decodedToken',JSON.stringify(decodedToken))
        const role =decodedToken.role;
        console.log('User role:', decodedToken.role);
        this.form.reset();
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}