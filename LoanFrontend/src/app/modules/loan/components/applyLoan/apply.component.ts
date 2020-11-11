import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';



@Component({
  selector: 'loan-apply',
  templateUrl: './apply.component.html',
  styleUrls: [
    './apply.component.css'
  ]
})
export class LoanApplyComponent implements OnInit {

  newLoan:Loan;

  constructor(private loanService:LoanService,private router:Router) {
    this.newLoan=<Loan>{};
    }

  ngOnInit() {
  }

  applyLoan(){
    console.log("registerLoan::New Loan=",this.newLoan);
    this.loanService.applyLoan(this.newLoan).subscribe((data)=>{
    console.log('user data',data);
    this.router.navigate(['/loan/viewLoans']);
    })

    

  }

  resetInput(){
    this.newLoan=<Loan>{};
  }

}
