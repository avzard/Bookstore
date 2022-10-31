import { Injectable } from '@angular/core';


import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpServices:HttpServiceService) { }
  registration(reqdata: any){
    console.log(reqdata);
  
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postService('/User/Register',reqdata,false,header)
  }
  login(reqdata:any)
  {
    console.log(reqdata);
    console.log("login");
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postService('/User/Login',reqdata,false,header)
  }
  forgetpassword(reqdata:any)
  {
    console.log(reqdata);
    console.log("forget");
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postService(`/User/ForgotPassword/${reqdata.email}`, reqdata,false,header);
  }
  reset(reqdata:any)
  {
    console.log(reqdata);
    let header={
      Headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }

      return this.httpServices.putServices('/User/ResetPassword',reqdata,false,header);
    }
}
