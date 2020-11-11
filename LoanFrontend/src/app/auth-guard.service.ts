import { Injectable } from '@angular/core';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authentication:AuthenticationService,private routes:Router){

  }

  canActivate(){
    if(!this.authentication.isTokenExpired()){
      return true;
    }

    this.routes.navigate(['/login']);
    return false;
  }

}
