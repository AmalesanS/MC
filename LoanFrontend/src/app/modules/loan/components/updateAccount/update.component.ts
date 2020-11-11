import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';
import { user } from '../../../authentication/user';
import { AuthenticationService } from '../../../../modules/authentication/authentication.service';

@Component({
  selector: 'account-update',
  templateUrl: './update.component.html',
  styleUrls: [
    './update.component.css'
  ]
})
export class AccUpdateComponent implements OnInit {

  newUser:user;
  editForm:boolean = false;

  


  constructor(private loanService:LoanService,private router:Router,private auth:AuthenticationService) {
    this.auth.getUser(localStorage.getItem('userId')).subscribe((data)=>{
      this.newUser= data;  
   });
  }


  ngOnInit() {
  }

  updateAccount(){
    let check = this.auth.updateUser(this.newUser);
    this.auth.getUser(localStorage.getItem('userId')).subscribe((data)=>{
      this.newUser= data; 
      this.editForm = false; 
   });
  }
 
  editUpdateForm(){
    this.auth.getUser(localStorage.getItem('userId')).subscribe((data)=>{
      this.newUser= data; 
      this.editForm = true; 
   });
  }

  cancelEdit(){
    this.editForm = false;
  }

}
