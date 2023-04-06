import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ViewPatientsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
