import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ElementsModule } from './elements/elements.module';
import { ExamplesModule } from './examples/examples.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AuthGuardService } from './auth/auth-guard.service';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'
import { PresentationModule } from './presentation/presentation.module';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup-u.component';
import { CompanyComponent } from './views/company/company.component';
import { SearchcComponent } from './views/searchc/searchc.component';
import { ProfilComponent } from './views/profil/profil.component';
import { CreateCvComponent } from './views/create-cv/create-cv.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { PostJobComponent } from './views/post-job/post-job.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { SearchuComponent } from './views/searchu/searchu.component';
import { Navbar3Component } from './shared/navbar3/navbar3.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LandingComponent,
        LoginComponent,
        ProfilComponent,
        CreateCvComponent,
        CalendarComponent,
        SignupComponent,
        CompanyComponent,
        SearchcComponent,
        PostJobComponent,
        MultiselectComponent,
        ProfilComponent,
        SearchuComponent,
        Navbar3Component
    ],
    imports: [
        BrowserAnimationsModule,
        AngularMultiSelectModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ElementsModule,
        ExamplesModule,
         
        HttpClientModule,
        JwtModule
    ],
    providers: [AuthGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
