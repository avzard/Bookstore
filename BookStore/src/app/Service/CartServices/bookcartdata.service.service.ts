import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookcartdataServiceService {
  token: any;
  constructor(private httpServices:HttpServiceService) { 
  this.token = localStorage.getItem('token');

}
getallcart()
{
  console.log(this.token);
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  
  return this.httpServices.getService('/Cart/RetrieveCartItems', true, headers);
}

deletecart(CartId:any)
{
    console.log(CartId);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpServices.postService(`/Cart/DeleteFromCart?CartId=${CartId}`, CartId, true, headers);
  }


  GetAllAddress()
  {
    let headers={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpServices.getService('/Controller/GetAllAddress',true,headers);
  }


UserAddress()
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.getService('/User/GetUser',true,headers);
}

Addressvalue(reqdata:any)
{
  console.log(reqdata);
  console.log("token", this.token)
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }

  return this.httpServices.getService(`/Address/GetAddress?AddressId=${reqdata}`,true,headers);
}
GetAddressvalue()
{
  console.log();
  console.log("token", this.token)
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }

  return this.httpServices.getService(`/Address/GetAllAddress`,true,headers);
}
Checkoutdata(readata:any)
{
  let headers={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.postService('/Order/AddOrder',readata,true,headers);
}





//----------Update Quntity----------//
addUpdateCart(reqdata:any)
{
console.log("ReqData",reqdata);

let headers={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': "Bearer " + this.token
  })
}
return this.httpServices.putServices(`/Cart/UpdateCart`,reqdata,true,headers);

}
}
