import { Component, OnInit } from '@angular/core';
import { user } from '../../user';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'authentication-login',
  templateUrl: './login.component.html'
  ,
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  newUser:user;
  validError:boolean = false;
  errorReason = '';


  constructor(private authorizationService:AuthenticationService,private router:Router) {
    this.newUser=<user>{};

    }

  ngOnInit() {
  }

  loginUser(){
    console.log("new user=",this.newUser);

    if(Object.keys(this.newUser).length === 0 || (this.newUser.userId == null) || ( this.newUser.password==null)){
      this.validError = true;
      this.errorReason = 'Enter a valid username and password!!';
    }else{
      this.authorizationService.loginUser(this.newUser).subscribe((data)=>{
      console.log('user data',data);

        if(data['token']){
          this.authorizationService.setToken(data['token']);
          localStorage.setItem('userId',this.newUser.userId);
          this.router.navigate(['/loan/applyLoan']);
        }
      },
      (err) => {this.showErrorMessage(err)});
    }
  
  }

  showErrorMessage(err){
    this.validError = true;
    this.errorReason = err.error.message;
  }
}
