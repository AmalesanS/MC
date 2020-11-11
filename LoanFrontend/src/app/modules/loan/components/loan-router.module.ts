import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuardService } from '../../../auth-guard.service';
import { LoanApplyComponent } from './applyLoan/apply.component';
import { AccUpdateComponent } from './updateAccount/update.component';
import { ViewLoanComponent } from './viewLoan/view.component';


const loanRoutes: Routes = [
{    
path: 'loan',
children: [
    {
        path:'',
        redirectTo:'/loan/applyLoan',
        pathMatch:'full',
        canActivate:[AuthGuardService]
    },
    {
        path:'viewLoans',
        component:ViewLoanComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'applyLoan',
        component:LoanApplyComponent,
        canActivate:[AuthGuardService]
    },
    {
        path:'updateAccount',
        component:AccUpdateComponent,
        canActivate:[AuthGuardService]
    }
    ]
}
];

@NgModule({
 imports:[
    RouterModule.forChild(loanRoutes)
 ],
 exports:[
     RouterModule
 ]

})

export class LoanRouterModule {

}
