import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit{
  constructor(private authService: AuthService,private router: Router) {}

  addCarForm = new FormGroup({
    carModel: new FormControl("",[Validators.required]),
    carMaker: new FormControl("",[Validators.required]),
    rentalCost: new FormControl("",[Validators.required]),
    
  });

  ngOnInit(): void {
    
  }

  addCarSubmit() {
    if (this.addCarForm?.valid) { // Using optional chaining here
      // Perform form submission
      console.log(this.addCarForm?.value); // Using optional chaining here
    } else {
      // Form is invalid, do something (if needed)
      console.log('Form is invalid');
    }
  

    this.authService.addCar([this.addCarForm.value.carModel,this.addCarForm.value.carMaker,this.addCarForm.value.rentalCost]).subscribe(res => {
      if(res === 'Failure') {
        alert("Add car unsuccessful"); }
        else {
          alert("Add car successful");
          this.router.navigate(['/admin']);
        }
      });
    

  }

  get carModel() {
    return this.addCarForm.get("carModel") as FormControl;
  }
  get carMaker() {
    return this.addCarForm.get("carMaker") as FormControl;
  }
  get rentalCost() {
    return this.addCarForm.get("rentalCost") as FormControl;
  }
  

}

