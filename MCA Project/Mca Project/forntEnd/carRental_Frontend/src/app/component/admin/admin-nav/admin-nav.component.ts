import { Component } from '@angular/core';
;
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  _isAdmin: boolean =false;
  user:any;
  constructor (private service:ServicesService,private authService: AuthService,private route:Router){
   
    if(localStorage.getItem('role') == 'Admin'){
      this._isAdmin = true
    }; 
    console.log(this._isAdmin);
    
  }

  ngOnInit():void{
    
  };
logOut(){
  sessionStorage.removeItem('key');
  this.route.navigate([`login`]);
};
}
