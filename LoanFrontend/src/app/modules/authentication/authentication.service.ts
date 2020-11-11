import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { user } from './user';
import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
export const token_name:string='jwt_token';

@Injectable()
export class AuthenticationService {
  springEndPoint:string;
  token:string;


  constructor(private httpClient:HttpClient) { 

    this.springEndPoint="http://localhost:8085/api/v1/userService";
  }

  registerUser(newUser){
    const url=this.springEndPoint+"/register";
    return this.httpClient.post(url,newUser,{responseType:'text'});
  }

  updateUser(newUser){
    const url=this.springEndPoint+"/update";
    this.httpClient.post(url,newUser).subscribe(data => {
      console.log("subscribe="+data);
    });
  }

  loginUser(newUser){
    const url=this.springEndPoint+"/login";
    return this.httpClient.post(url,newUser);
  }

  getUser(userId): Observable<user> {
    return this.httpClient.post<user>(this.springEndPoint+"/getUser/"+userId, {headers:{responseType:'text'}});
  }

  setToken(token:string)
  {
    return localStorage.setItem(token_name,token);
  }
  getToken()
  {
    return localStorage.getItem(token_name);
  }
  removeToken()
  {
    return localStorage.removeItem(token_name);
  }
  isTokenExpired(token?:string):boolean{
      if(!token) token=this.getToken();

      if(!token) return true;

      const expire_date = this.getTokenExpireDate(token);

      if(expire_date === undefined || expire_date===null ) return false;

      return !(expire_date.valueOf() > new Date().valueOf())

  }

  getTokenExpireDate(token:string):Date{
    const decoded_token = jwt_decode(token);
    if(decoded_token.exp === undefined) return null;
    const expiry_date = new Date(0);
    expiry_date.setUTCSeconds(decoded_token.exp);
    return expiry_date;
  }
 
}
