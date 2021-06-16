import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ElementsComponent } from './elements/elements.component';
import { SectionsComponent } from './sections/sections.component';
// import { AboutusComponent } from './examples/aboutus/aboutus.component';
// import { BlogpostComponent } from './examples/blogpost/blogpost.component';
// import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { PostComponent } from './views/post/post.component';
 import {  HomeComponent } from './views/home/home.component';
 import { LandingComponent } from './views/landing/landing.component';
 import { LoginComponent } from './views/login/login.component';
 import { CompanyComponent } from './views/company/company.component';
 import { SearchcComponent } from './views/searchc/searchc.component';
 import { SearchuComponent } from './views/searchu/searchu.component';
import { SignupComponent } from './views/signup/signup-u.component';
import { ProfilComponent } from './views/profil/profil.component';
import { NucleoiconsComponent } from './elements/nucleoicons/nucleoicons.component';
// import { PricingComponent } from './examples/pricing/pricing.component';

const routes: Routes =[
    { path: '', redirectTo: 'views/landing', pathMatch: 'full' },
    { path: 'presentation',         component: PresentationComponent },
    { path: 'elements',           component: ElementsComponent },
    { path: 'sections',             component: SectionsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/aboutus',     component: AboutusComponent },
    // { path: 'examples/blogpost',    component: BlogpostComponent },
    // { path: 'examples/blogposts',   component: BlogpostsComponent },
    // { path: 'examples/contactus',   component: ContactusComponent },
     { path: 'views/post',   component: PostComponent },
     { path: 'views/landing',     component: LandingComponent },
     { path: 'views/login',       component: LoginComponent },
     { path: 'views/company',     component: CompanyComponent },
    { path: 'views/searchc', component: SearchcComponent },
    { path: 'views/profil', component: ProfilComponent },
     { path: 'views/home',     component:  HomeComponent },
     { path: 'views/signup',    component: SignupComponent },
     { path: 'views/searchu', component: SearchuComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
          useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
