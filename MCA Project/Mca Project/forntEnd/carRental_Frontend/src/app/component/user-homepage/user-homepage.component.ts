import { Component } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {
  searchText:any;
  data:any;
  _available: boolean = true;
  _isAdmin: boolean =false;
  
  constructor (private service:ServicesService, private authService:AuthService) {
    this._isAdmin =this.authService.getAdminValue(); 
  
    this.service.getAllData().subscribe((_data :any) => {
      this.data = _data;
      console.log(this.data);
    });
  }
}
