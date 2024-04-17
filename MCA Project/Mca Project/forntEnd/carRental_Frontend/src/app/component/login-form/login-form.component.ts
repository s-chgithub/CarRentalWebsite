import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminEmailService } from 'src/app/services/admin-email.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
constructor(private authService : AuthService,private router:Router,private adminEmail:AdminEmailService){}



ngOnInit(): void{
}
  loginForm = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    passs : new FormControl("",[Validators.required])
  });
isUserValid: boolean =false;
  loginSubmit(){
    this.authService.loginUser([this.loginForm.value.email,this.loginForm.value.passs]).subscribe(res => {
      if(res == 'Failue'){
        this.isUserValid = false;
        alert('Login Unsuccessful');
      }
      else{
        const email_  = this.loginForm.value.email;
        const pass_ = this.loginForm.value.passs;
        this.isUserValid = true;
        sessionStorage.setItem('key',String(email_));
        if(this.checkAdminStatus() ){
          localStorage.setItem('role','Admin');
          this.authService.setAdminValue(true);
          this.router.navigateByUrl('admin');
        }else{
          localStorage.setItem('role','User');
          this.authService.setAdminValue(false);
          this.router.navigateByUrl('home');
      
        }
        }; 
    });
  }
  


  get Emails(){
    return this.loginForm.get("email") as FormControl;
  }
  
  get Passs(){
    return this.loginForm.get("passs") as FormControl;
  }
  checkAdminStatus():boolean{
    if(this.adminEmail.isAdmin(String(sessionStorage.getItem('key')))){
      return true;
    }
    return false;
    }

}
