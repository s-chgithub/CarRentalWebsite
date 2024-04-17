import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RentedcarComponent } from './component/rentedcar/rentedcar.component';
import { UserHomepageComponent } from './component/user-homepage/user-homepage.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RentingprocessComponent } from './component/rentingprocess/rentingprocess.component';
import { authGuard } from './services/auth.guard';
import { RentalAggrementsComponent } from './component/rental-aggrements/rental-aggrements.component';
import { EditAgreementComponent } from './component/edit-agreement/edit-agreement.component';
import { AdminComponent } from './component/admin/admin.component';
import { SignUpComponent } from './component/signup/signup.component';
import { AddcarComponent } from './component/addcar/addcar.component';
import { AdminauthguardService } from './services/adminauthguard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path:'signup',
component: SignUpComponent
},

  {

    path: 'rentedcar',
    component: RentedcarComponent,
    canActivate:[authGuard]
  },
  {

    path: 'addcar',
    component: AddcarComponent,
    canActivate:[AdminauthguardService]
  },
  {
    path: 'home',
    component: UserHomepageComponent,
    canActivate:[authGuard]
  },
  {
    path: 'renting/:id',
    component: RentingprocessComponent,
    canActivate:[authGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminauthguardService]
  },
  
{
path: 'aggrement',
component: RentalAggrementsComponent,

canActivate:[authGuard]
},

{
  path: 'edit/:id',
  component: EditAgreementComponent,
  canActivate:[AdminauthguardService]
},
  // This must be Last
  {
    path: '**',
    component: PagenotfoundComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
