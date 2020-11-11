import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoanService {
  springEndPoint: string;
  
  constructor(private http: HttpClient) { 
    this.springEndPoint='http://localhost:8086/api/v1/loanService';
  }

  applyLoan(loan){
    console.log('message',loan);
    return this.http.post(this.springEndPoint, loan);
 }

 getAllLoan():any{
  return this.http.get(this.springEndPoint);
}

}