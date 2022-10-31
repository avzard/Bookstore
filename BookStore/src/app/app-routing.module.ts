import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { GetAllBooksComponent } from './Component/get-all-books/get-all-books.component';
import { GetallcartComponent } from './Component/getallcart/getallcart.component';
import { GetbookbyidComponent } from './Component/getbookbyid/getbookbyid.component';
import { GetwishlistComponent } from './Component/getwishlist/getwishlist.component';
import { LoginComponent } from './Component/login/login.component';
import { MyprofileComponent } from './Component/myprofile/myprofile.component';
import { OrderplacedComponent } from './Component/orderplaced/orderplaced.component';
import { RegistrationComponent } from './Component/registration/registration.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forgetpassword',
    component: ForgetPasswordComponent
  },
  {
    path: 'resetpassword/:token',
    component: RegistrationComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: "/dashboard/books", pathMatch: "full", },
      {path:'books',component:GetAllBooksComponent},
      {path:'getbookbyid',component:GetbookbyidComponent},
      {path:'getallcart',component:GetallcartComponent},
  {path:'getwishlist',component:GetwishlistComponent},
  {path:'orderplaced',component:OrderplacedComponent},
  {path:'myprofile',component:MyprofileComponent},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
