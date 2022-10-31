import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddressdataService {
  token: any;
  constructor(private httpServices: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }
  
addresspost(reqdata:any)
{
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " +this.token
    })
  }
  console.log("Abhi",reqdata);
  return this.httpServices.postService('/Address/AddAddress',reqdata,true,headers);  
}



getOrder()
{
let headers={
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Authorization':"Bearer "+this.token
  })
}
return this.httpServices.getService('/Order/GetAllOrder',true,headers);
}
}
