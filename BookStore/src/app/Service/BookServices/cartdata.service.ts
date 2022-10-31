import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  token: any;
  constructor(private httpServices: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }
  getallbook() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }

    return this.httpServices.getService('/Book/GetAllBooks', true, headers);
  }
  bookidbyid(BookId: any) {
    console.log(BookId);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpServices.getService(`/Book/GetBookById?BookId=${BookId}`, true, headers);
  }
  addtocart(reqdata: any) {
    console.log("add t cart data", reqdata);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    console.log("Abhi", reqdata);
    return this.httpServices.postService('/Cart/AddToCart',reqdata,true, headers);

  }

  addtowishlist(reqdata: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    console.log("add wishlist", reqdata);
    return this.httpServices.postService(`/WishList/AddToWishList`, reqdata, true, headers);
  }
  addFeadback(reqdata: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    console.log("Add FeedBack");
    return this.httpServices.postService('/FeedBack/AddFeedBack', reqdata, true, headers);
  }




  getfeedBack(bookId: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    console.log("Get FeedBack");
    return this.httpServices.getService(`/FeedBack/GetAllFeedback?bookId=${bookId}`, true, headers);
  }



}
