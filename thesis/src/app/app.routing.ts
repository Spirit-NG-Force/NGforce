import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule, RoutesRecognized , CanActivate } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { SectionsComponent } from './sections/sections.component';
import { ChatComponent } from './chat/chat.component';;
import { PostComponent } from './views/post/post.component';
 import {  HomeComponent } from './views/home/home.component';
 import { LandingComponent } from './views/landing/landing.component';
 import { LoginComponent } from './views/login/login.component';
 import { ProfilComponent } from './views/profil/profil.component';
 import { CompanyComponent } from './views/company/company.component';
 import { SearchcComponent } from './views/searchc/searchc.component';
 import { SearchuComponent } from './views/searchu/searchu.component';
import { SignupComponent } from './views/signup/signup-u.component';
import { CreateCvComponent } from './views/create-cv/create-cv.component';

import { NotificationuserComponent } from './views/notificationuser/notificationuser.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import  {SuccessUrlComponent} from './views/success-url/success-url.component';
import { FailUrlComponent } from './views/fail-url/fail-url.component';
import { AuthService } from './auth/auth.service';

import { 
    AuthGuardService as AuthGuard 
  } from './auth/auth-guard.service';
  import { 
    RoleGuardService as AuthroleGuard 
  } from './auth/role-guard.service';
  let routes: Routes =[
    { path: '', redirectTo: 'views/profil', pathMatch: 'full' },
     { path: 'views/post',   component: PostComponent ,canActivate: [AuthroleGuard]},
    { path: 'views/createcv',    component: CreateCvComponent,canActivate: [AuthGuard] },
    { path: 'views/notificationuser',    component: NotificationuserComponent,canActivate: [AuthGuard] },
    { path: 'views/calendar',    component: CalendarComponent ,canActivate: [AuthService]},
     { path: 'views/landing',     component: LandingComponent },
     { path: 'views/login',       component: LoginComponent },
     { path: 'views/company',     component: CompanyComponent },
    { path: 'views/searchc', component: SearchcComponent,canActivate: [AuthroleGuard] },
     { path: 'views/home',     component:  HomeComponent ,canActivate: [AuthroleGuard]},
    { path: 'views/searchu', component: SearchuComponent ,canActivate: [AuthGuard] },
    { path: 'views/profil', component: ProfilComponent, canActivate: [AuthGuard] },
     { path: 'views/chat',     component: ChatComponent ,canActivate: [AuthService]},
     { path: 'views/signup',    component: SignupComponent },
     { path: 'views/failPayment',    component: FailUrlComponent,canActivate: [AuthroleGuard] },
     { path: 'views/successPayment',    component: SuccessUrlComponent,canActivate: [AuthroleGuard] },
     
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        
        RouterModule.forRoot(routes,{
          useHash: true
        })
    ],
    exports: [
    ]
})
export class AppRoutingModule { }
