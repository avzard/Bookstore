import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { DisplayGetAllBooksComponent } from './Component/display-get-all-books/display-get-all-books.component';
import {MatSelectModule} from '@angular/material/select';
import { GetAllBooksComponent } from './Component/get-all-books/get-all-books.component'
import { GetbookbyidComponent } from './Component/getbookbyid/getbookbyid.component';
import { GetwishlistComponent } from './Component/getwishlist/getwishlist.component';
import { GetallcartComponent } from './Component/getallcart/getallcart.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdressComponentComponent } from './Component/adress-component/adress-component.component';
import { OrderplacedComponent } from './Component/orderplaced/orderplaced.component';
import { MyprofileComponent } from './Component/myprofile/myprofile.component';

import { PipefilterdataPipe } from './Component/Pipedata/pipefilterdata.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    DisplayGetAllBooksComponent,
    GetAllBooksComponent,
    GetbookbyidComponent,
    GetwishlistComponent,
    GetallcartComponent,
    AdressComponentComponent,
    OrderplacedComponent,
    MyprofileComponent,
  
    PipefilterdataPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
