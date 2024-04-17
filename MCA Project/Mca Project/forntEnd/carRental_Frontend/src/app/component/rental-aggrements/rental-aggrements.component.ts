import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';

declare var  Razorpay: any;

@Component({
  selector: 'app-rental-aggrements',
  templateUrl: './rental-aggrements.component.html',
  styleUrls: ['./rental-aggrements.component.css']
})
export class RentalAggrementsComponent {
items:any;
_email:any;
_isAdmin: boolean =false;
  
constructor (private service:ServicesService,private authService:AuthService,private router:Router){
  this._isAdmin =this.authService.getAdminValue(); 
  
  this.service.getUserAggrement().subscribe((_data :any)=>{
  
  this.items = JSON.parse(_data);
  console.log(this.items);
  
});
}

pushStatus(id:number){
  this.service.pushReturn(id).subscribe({next:(response) =>{
  alert("Done");
    this.router.navigate(['aggrement']);
  
  }
    });
}

payNow(id:number) {
  const RazorpayOptions = {
    description : 'Sample razorpay demo',
    currency : 'INR',
    // Check
    amount : this.items[id].rentalCost *100,   
    // name : this.items[0].,
    key: 'rzp_test_jYzHmwbXtl4z7x',
    // image:'',
    prefill : {
      name: '',
      email: this.items[id].email,
      phone: ''
    },
    theme : {
      color: '#f37254'
    },
    modal: {
      ondismiss: () => {
        console.log('dismissed')
      }
    }
  }
  const successCallback =  (paymentid:any) => {
    console.log(paymentid);
    
    
  }
  const failureCallback = (e:any) => {
    console.log(e);
  }
  Razorpay.open(RazorpayOptions,successCallback,failureCallback);
}


}
