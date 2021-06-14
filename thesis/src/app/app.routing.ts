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
// import { ContactusComponent } from './examples/contactus/contactus.component';
// import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
// import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfilComponent } from './views/profil/profil.component';
// import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './elements/nucleoicons/nucleoicons.component';
// import { PricingComponent } from './examples/pricing/pricing.component';
import {CreateCvComponent} from "./views/create-cv/create-cv.component"
import {Nav2Component} from "./components/nav2/nav2.component"


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
    // { path: 'examples/ecommerce',   component: EcommerceComponent },
    { path: 'views/landing',     component: LandingComponent },
    { path: 'views/login',       component: LoginComponent },
    // { path: 'examples/pricing',     component: PricingComponent },
    // { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'views/profil',     component: ProfilComponent },
    { path: 'views/createcv',    component: CreateCvComponent },
    { path: 'views/nav2',    component: Nav2Component }
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