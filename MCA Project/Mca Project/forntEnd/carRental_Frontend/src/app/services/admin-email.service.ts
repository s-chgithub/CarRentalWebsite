import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminEmailService {
  
  private adminEmails : string[]=['admin@official.com'];
  
  isAdmin(email:string):boolean{
    return this.adminEmails.includes(email);
  }

  constructor() { }
}
