import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BioCreateComponent } from './bio-create/bio-create.component';
import { MyFormComponent } from './my-form/my-form.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    HomeComponent,
    BioDetailsComponent,
    BioCreateComponent,
    MyFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
