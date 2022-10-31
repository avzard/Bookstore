import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WishlistdataService {
  token: any;
  constructor(private httpServices:HttpServiceService) { 
  this.token = localStorage.getItem('token');
  }
  getwishdata()
{
  console.log(this.token);
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  
  return this.httpServices.getService('/WishList/GetWishListedItems', true, headers);
}

removerlist(WishListId:any)
{
  console.log(WishListId);

  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpServices.deleteService(`/WishList/DeleteFromWishList?WishListId=${WishListId}`, true, headers);


}
}
