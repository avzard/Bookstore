import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookcartdataServiceService } from 'src/app/Service/CartServices/bookcartdata.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-getallcart',
  templateUrl: './getallcart.component.html',
  styleUrls: ['./getallcart.component.scss']
})
export class GetallcartComponent implements OnInit {
  addressArray: any;
  getallcartbooks: any;
  constructor(private getcart: BookcartdataServiceService, private route: Router, private snackbar: MatSnackBar) { }
  allcart:any;
  adressID:any
  ngOnInit(): void {
  
  this.getallcart();
}

CardId:any;
qnt:any;
addQnt(data:any)
{
  this.qnt=data.bookQuantity;
  this.qnt++;
  data.bookQuantity=this.qnt;

  console.log(data.cartId,data.bookId,this.qnt);
  if(this.qnt<=0)
  {
    data.bookQuantity=0;
  }
  else
  {
    console.log(this.qnt);
    console.log("this statement is write");

    this.CardId=data.cartId;

    let Data={
   
      cartId:data.cartId,
      bookQuantity:this.qnt,
 }
   console.log(Data);
   console.log(this.CardId);    
 
  this.getcart.addUpdateCart(Data).subscribe((Request:any)=>{
    console.log(Request);
 })

  }
}


lessQnt(data:any)
{
  this.qnt=data.bookQuantity;
  this.qnt--;
  data.bookQuantity=this.qnt;

  console.log(data.cartId,data.bookId,this.qnt);
  if(this.qnt<=0)
  {
    data.bookQuantity=0;
  }
  else
  {
    console.log(this.qnt);
    console.log("this statement is write");

    this.CardId=data.cartId;

    let Data={
   
      cartId:data.cartId,
      bookQuantity:this.qnt,
 }
   console.log(Data);
   console.log(this.CardId);    
 
  this.getcart.addUpdateCart(Data).subscribe((Request:any)=>{
    console.log(Request);
 })

  }
}

  getallcart()
  {
    this.getcart.getallcart().subscribe((Request:any)=>
    {
      console.log("Abhi Called");
      console.log(Request);
      this.allcart=Request.data;
      this.allcart.reverse();
      console.log(this.allcart);
    })
  }


  Remove(book:any)
  {
    console.log(book.cartId);
    this.getcart.deletecart(book.cartId).subscribe((Request:any)=>
    {
      console.log(Request);
      this.snackbar.open("Book Remove Successfully", "", {
        duration: 2000,
      });
      this.getallcart();

    })
  }

  
 
}