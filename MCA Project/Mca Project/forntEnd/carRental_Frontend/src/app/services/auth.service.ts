import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private isAuthenticated =false;
  baseurl = "https://localhost:7187/api/CarRental/";
  isAdminUser = false;

  setAdminValue(value:boolean){
    this.isAdminUser = value;
  }

  getAdminValue(){
    return this.isAdminUser;
  }

  loginUser(loginInfo: Array<any>){
    return this.http.post(this.baseurl + 'LoginUser',{
      Email : loginInfo[0],
      Pswd : loginInfo[1],
      
    },
    {
      responseType:"text",
    });
  }

  signUpUser(signupInfo: Array<any>){
    return this.http.post(this.baseurl+'signUpUser', {
      Name: signupInfo[0],
      Email: signupInfo[1],
      Pswd: signupInfo[2],
      Contact: signupInfo[3],
      AdharNum: signupInfo[4],
      role:'User',
    },
    {
      responseType:"text",
    });
  }
  addCar(carInfo: Array<any>){
    const rentalCost: number = parseInt(carInfo[2], 10);
    return this.http.post(this.baseurl+ 'addCar',{
      
      VehicleModel: carInfo[0],
      VehicleMaker: carInfo[1],
      RentalCost: rentalCost,
      Avaialblity: true
      
      
    },
    {
      responseType:"text",
    });
  }

  rentalSubmit(rentingInfo:Array<any>,carDetails:Array<any>){
    return this.http.post(this.baseurl+'RentalAggrement',{
      Email : sessionStorage.getItem('key'),
      Days : rentingInfo[0],
      VehicleNo : carDetails[0],
      VehicleModel: carDetails[1],
      VehicleMaker: carDetails[2],
      RentalCost : carDetails[3],
      Avaialbility : false,
    })
  }

 
}
