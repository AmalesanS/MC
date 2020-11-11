import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoanService } from './loan.service';
import { LoanApplyComponent } from './applyLoan/apply.component';
import { AccUpdateComponent } from './updateAccount/update.component';
import { LoanRouterModule } from './loan-router.module';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TokenInterceptorService } from '../../authentication/interceptor.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ViewLoanComponent } from './viewLoan/view.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoanRouterModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,

  ],
  declarations: [ViewLoanComponent, AccUpdateComponent, LoanApplyComponent],
  exports:[
    LoanRouterModule,
    AccUpdateComponent,
    LoanApplyComponent,
    ViewLoanComponent
  ],
  providers: [AuthenticationService, LoanService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  entryComponents:[LoanApplyComponent]

})
export class LoanModule { }
