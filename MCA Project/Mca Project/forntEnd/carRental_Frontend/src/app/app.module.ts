import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomepageComponent } from './component/user-homepage/user-homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RentedcarComponent } from './component/rentedcar/rentedcar.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RentingprocessComponent } from './component/rentingprocess/rentingprocess.component';

import { FilterPipe } from './filter.pipe';
import { RentalAggrementsComponent } from './component/rental-aggrements/rental-aggrements.component';
import { AdminComponent } from './component/admin/admin.component';
import { EditAgreementComponent } from './component/edit-agreement/edit-agreement.component';
import { AdminNavComponent } from './component/admin/admin-nav/admin-nav.component';
import { SignUpComponent } from './component/signup/signup.component';
import { AddcarComponent } from './component/addcar/addcar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomepageComponent,
    NavbarComponent,
    RentedcarComponent,
    LoginFormComponent,
    PagenotfoundComponent,
    RentingprocessComponent,
    FilterPipe,
    RentalAggrementsComponent,
    AdminComponent,
    EditAgreementComponent,
    AdminNavComponent,
    SignUpComponent,
    AddcarComponent,
  ],
  imports: [
    BrowserModule,
    
    // Ng2SearchPipeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
