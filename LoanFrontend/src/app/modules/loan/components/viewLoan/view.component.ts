import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';



@Component({
  selector: 'view-loan',
  templateUrl: './view.component.html',
  styleUrls: [
    './view.component.css'
  ]
})
export class ViewLoanComponent implements OnInit {

  loanList:Loan[];

  constructor(private loanService:LoanService,private router:Router) {
    this.getAllLoan();
  }


  getAllLoan(){
    this.loanService.getAllLoan().subscribe((data)=>{
      console.log('loan list data',data);
        this.loanList = data;
      });
  }

  ngOnInit() {
  }


    

  }