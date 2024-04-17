import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService,private router: Router) {}

  signUpForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    contact: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    aadhar: new FormControl("",[Validators.required, Validators.maxLength(12),Validators.minLength(12)])
  });

  ngOnInit(): void {
    
  }

  signupSubmit() {
    if (this.signUpForm?.valid) { // Using optional chaining here
      // Perform form submission
      console.log(this.signUpForm?.value); // Using optional chaining here
    } else {
      // Form is invalid, do something (if needed)
      console.log('Form is invalid');
    }
  

    this.authService.signUpUser([this.signUpForm.value.name,this.signUpForm.value.email,this.signUpForm.value.password,this.signUpForm.value.contact,this.signUpForm.value.aadhar]).subscribe(res => {
      if(res === 'Failure') {
        alert("Signup unsuccessful"); }
        else {
          alert("Signup successful");
          this.router.navigateByUrl('login')
        }
      });
    

  }

  get name() {
    return this.signUpForm.get("name") as FormControl;
  }
  get email() {
    return this.signUpForm.get("email") as FormControl;
  }
  get password() {
    return this.signUpForm.get("password") as FormControl;
  }
  get contact() {
    return this.signUpForm.get("contact") as FormControl;
  }
  get aadhar() {
    return this.signUpForm.get("aadhar") as FormControl;
  }

}
