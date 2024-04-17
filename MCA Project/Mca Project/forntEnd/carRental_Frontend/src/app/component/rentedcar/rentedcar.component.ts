import { Component } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rentedcar',
  templateUrl: './rentedcar.component.html',
  styleUrls: ['./rentedcar.component.css']
})

export class RentedcarComponent {
  user:any;
  data:any;
  _available: boolean = true;
  _isAdmin: boolean =false;
  
  constructor (private service:ServicesService, private authService:AuthService) {
    this._isAdmin =this.authService.getAdminValue(); 
  
    this.service.getAllData().subscribe((_data :any) => {
      this.data = _data;
      console.log(this.data);
      // this._available= _data.avaialblity;
    }
    
    );
  }

}