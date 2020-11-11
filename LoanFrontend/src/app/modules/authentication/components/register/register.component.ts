import { Component, OnInit } from '@angular/core';
import { user } from '../../user';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'authentication-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  newUser:user;


  constructor(private authorizationService:AuthenticationService,private router:Router) {
    this.newUser=<user>{};
    }

  ngOnInit() {
  }

  registerUser(){
    console.log("registerUser::new user=",this.newUser);
    this.authorizationService.registerUser(this.newUser).subscribe((data)=>{
    console.log('user data',data);
    this.router.navigate(['/login']);
    })

    

  }

  resetInput(){
    this.newUser=<user>{};
  }

}
