import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder ,private service : AccountService , private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      UserName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      City: ['', Validators.required],
      Password: ['', Validators.required],
      Role: ['', Validators.required]
    });
   
  }

  get usernameControl() {
    return this.registrationForm.get('UserName');
  }

  get firstnameControl() {
    return this.registrationForm.get('FirstName');
  }

  get lastnameControl() {
    return this.registrationForm.get('LastName');
  }

  get emailControl() {
    return this.registrationForm.get('EmailAddress');
  }

  get phoneControl() {
    return this.registrationForm.get('PhoneNumber');
  }

  get cityControl() {
    return this.registrationForm.get('City');
  }

  get passwordControl() {
    return this.registrationForm.get('Password');
  }

  get confirmpasswordControl() {
    return this.registrationForm.get('confirmpassword');
  }

  get accountTypeControl() {
    return this.registrationForm.get('Role');
  }

  getFormValues() {
    const role = this.accountTypeControl?.value;
  
    if (role === 'personal') {
      console.log('Role: Client');
      return 'Client';
    } else if (role === 'professional') {
      console.log('Role: Annonceur');
      return 'Annonceur';
    }
    return 'Unknown';
    
  }
  

  signup():void {
    if (this.registrationForm.valid) {
      const formData:any = this.registrationForm.value;
      formData.Role = this.getFormValues();
      console.log("data",formData);
    this.service.signup(formData).subscribe(
      (response) => {
        console.log('Client added successfully:', response);
        Swal.fire({
          title: "Register Successfully !",
          text: "Check you mail now to verify",
          icon: "success"
        });
        
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.error('Error adding client:', error);
      }
    );
  }else {
    this.registrationForm.markAllAsTouched();
  }
  }
    
}
