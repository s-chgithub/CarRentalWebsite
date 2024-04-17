import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rentingprocess',
  templateUrl: './rentingprocess.component.html',
  styleUrls: ['./rentingprocess.component.css']
})
export class RentingprocessComponent {
  id: any;
  _isAdmin: boolean =false;
  
  car: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private service: ServicesService) { 
      this._isAdmin =this.authService.getAdminValue(); 
  
    }


  ngOnInit(): void {

    const carId = this.route.snapshot.params['id'];
    this.service.getData(carId).subscribe((data) => {
      this.car = data;
      console.log(this.car);
    });
  }

  rentingForm = new FormGroup({
    days: new FormControl("", [Validators.required]),
  });



  numOfDays: number = 1;
  amount: number = 0;
  totAmount: number | undefined ;
  isComplete: boolean = false;
  
  calcPrice() {
    this.totAmount = this.numOfDays * this.car.rentalCost;
    console.log(this.totAmount);
  }
  onSubmit() {
    if (confirm('Are you Sure?')) {
      this.finalSubmit();
    }
    else {
      //
    }
  }
 
  finalSubmit() {
    this.calcPrice();
    this.authService.rentalSubmit([this.rentingForm.value.days], [this.car.vehicleNo, this.car.vehicleModel, this.car.vehicleMaker, this.totAmount,]).subscribe(res => {

      if (res == 'Failure') {
        this.isComplete = false;
        alert('Failed');
      }
      else {
        this.isComplete = true;
        alert('done');
        this.router.navigate(['/aggrement']);

      }
    });

  }

  get Days() {
    return this.rentingForm.get("days") as FormControl;
  }
}
