import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthenticationRouterModule } from './authentication-router.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule,MatIcon } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { TokenInterceptorService } from './interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService, TokenInterceptorService],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthenticationModule { }
