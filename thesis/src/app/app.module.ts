import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ElementsModule } from './elements/elements.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup-u.component';
import { CompanyComponent } from './views/company/company.component';
import { SearchcComponent } from './views/searchc/searchc.component';
import { ProfilComponent } from './views/profil/profil.component';
import { SearchuComponent } from './views/searchu/searchu.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { Navbar3Component } from './shared/navbar3/navbar3.component';
import { HomeComponent } from './views/home/home.component';
import { PostComponent } from './views/post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LandingComponent,
        LoginComponent,
        SignupComponent,
        CompanyComponent,
        SearchcComponent,
        ProfilComponent,
        SearchuComponent,
        Navbar2Component,
        Navbar3Component,
        HomeComponent,
        PostComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ElementsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
