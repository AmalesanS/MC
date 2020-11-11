import { Component } from '@angular/core';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary" style="height:50px">
  <span>Loan App</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button mat-button (click)="viewLoan()" *ngIf="loggedIn()">View Loans</button>
  <button mat-button (click)="applyLoan()" *ngIf="loggedIn()">Apply Loan</button>
  <button mat-button (click)="updateAccount()" *ngIf="loggedIn()">Update Account</button>
  <button mat-button (click)="Logout()" *ngIf="loggedIn()">Logout</button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  
  constructor(private auth:AuthenticationService,private routes:Router){

  }

  loggedIn(){
    let logged = this.auth.getToken();
    return logged;
  }


  viewLoan(){
    this.routes.navigate(['/loan/viewLoans']);
  }

  applyLoan(){
    this.routes.navigate(['/loan/applyLoan']);
  }

  updateAccount(){
    this.routes.navigate(['/loan/updateAccount']);
  }

  Logout(){
    this.auth.removeToken();
    this.routes.navigate(['/login']);
  }
}
