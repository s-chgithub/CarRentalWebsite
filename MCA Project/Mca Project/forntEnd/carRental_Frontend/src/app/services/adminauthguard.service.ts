import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AdminauthguardService: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('key');
  
  const  router = inject(Router);
  if(token == 'admin@official.com'){
    return true;
  }
  else{
    sessionStorage.clear();
    localStorage.clear();
    router.navigate(['login']);
    return false;
  }
  return true;
};
