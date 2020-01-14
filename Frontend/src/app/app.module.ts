import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RightMenuComponent} from './home/right-menu/right-menu.component';
import {LeftMenuComponent} from './home/left-menu/left-menu.component';
import {MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { FeaturesComponent } from './home/features/features.component';
import { TeamComponent } from './team/team.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftMenuComponent,
    RightMenuComponent,
    FeaturesComponent,
    TeamComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
