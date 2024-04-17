import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  data: any;
  _isAdmin: boolean = false;
  user: any;
  constructor(private service: ServicesService, private authService: AuthService, private route: Router) {
    this.service.getAllAggrement().subscribe((_data: any) => {
      this.data = _data;
    });
    if (localStorage.getItem('role') == 'Admin') {
      this._isAdmin = true
    };
    console.log(this._isAdmin);

  }

  ngOnInit(): void {
    this.fetchData();

  };
  logOut() {
    sessionStorage.removeItem('key');
    this.route.navigate([`login`]);
  };

  fetchData() {
    this.service.getAllAggrement().subscribe((_data: any) => {
      this.data = _data;
      console.log(this.data)
    });
  }



  deleteAgreement(id: number) {
    this.service.deleteAgreement(id).subscribe({
      next: (response) => {
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigate(['admin']);
        });
        // this.route.navigateByUrl('/admin');
        
      }
    });
  }
  acceptReturn(id: number) {
    this.service.acceptReturn(id).subscribe({
      next: (response) => {
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigate(['admin']);
        });
        // this.route.navigate(['admin']);
      }
    });
  }

  approvePayment(id:number) {
    
    this.service.checkPayment(this.data[id].agreementID).subscribe({
      next: (response) => {
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigate(['admin']);
        });
    console.log(this.data[id].agreementID)
  }
  });
}

}

