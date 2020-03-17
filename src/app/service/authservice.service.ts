import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthserviceService implements CanActivate {

  constructor( private router: Router ) { }

  canActivate() {
    if(localStorage.getItem('isLoggedIn')){
      return true;
    }
    else {
    this.router.navigateByUrl('/login')
    return false;
  }
  }
}
