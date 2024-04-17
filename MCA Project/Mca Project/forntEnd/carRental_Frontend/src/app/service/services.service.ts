import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url :any = "https://localhost:7187/api/CarRental/";

  constructor(private http: HttpClient) { }
  getAllData() {
    return this.http.get(
      this.url + "AllData"
    );
  };

  // carURL :any = "https://localhost:7187/api/CarRental/CarDetails/";
  getData(id:number): Observable<any>{
    return this.http.get(
      `${this.url}CarDetials/${id}`
    );
  }

  getUserData(){
    return this.http.get(
      this.url + "GetUserData"
    );
  };

  getUser(id:number): Observable<any>{
    return this.http.get(
      `${this.url}UserDetails/${id}`
    );
  };

  getUserDetials(email:any){
    return this.http.get(
      `${this.url}UserDetails/${email}`
    )
  }


  getAllAggrement(){
    return this.http.get(
      this.url + "GetAllAggrement"
    );
  }



  getUserAggrement(): Observable<any>{
    let _email = sessionStorage.getItem("key");
    console.log(_email);
    return this.http.post(
      `${this.url}GetUserAggrement`,{emails:_email},{responseType:'text'}
    );
  }
  
  getAgreement(id:number): Observable<any>{
    return this.http.get(
      `${this.url}GetAgreement/${id}`
    ); 
  }

  updateAgreement(id:number,agreement:Array<any>){
   return this.http.put(
    `${this.url}UpdateAgreement/${id}`,{
      Day:agreement[0],
      tRent:agreement[1]
    }
   );
  }
deleteAgreement(id:number):Observable<any>{
  return this.http.delete(
    `${this.url}DeleteAgreement/${id}`
  );
}

pushReturn(id:number):Observable<any>{
  return this.http.get(
    `${this.url}pushReturn/${id}`
  );
}

acceptReturn(id:number):Observable<any>{
  return this.http.get(
    `${this.url}acceptReturn/${id}`
  );
}

checkPayment(id:number):Observable<any>{
  return this.http.get(
    `${this.url}checkPayment/${id}`
  );
}

sendEmail(to: string) {
  const emailData = { to };
  return this.http.post(this.url + '/send', emailData);
}

}
