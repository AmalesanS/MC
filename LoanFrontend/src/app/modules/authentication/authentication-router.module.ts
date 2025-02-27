import { Injectable } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


const authRoutes: Routes = [
  {    
  path: '',
  children: [
      {
          path:'',
          redirectTo:'/login',
          pathMatch:'full'
      },
      {
          path:'register',
          component:RegisterComponent
      },
      {
          path:'login',
          component:LoginComponent
      }
      ]
  }
  ];


  @NgModule({
    imports:[
       RouterModule.forChild(authRoutes)
    ],
    exports:[
        RouterModule
    ]
   
   })


export class AuthenticationRouterModule {

  
}
