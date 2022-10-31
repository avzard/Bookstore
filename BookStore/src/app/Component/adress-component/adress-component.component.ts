import { Component, OnInit } from '@angular/core';
import { BookcartdataServiceService } from 'src/app/Service/CartServices/bookcartdata.service.service';


import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adress-component',
  templateUrl: './adress-component.component.html',
  styleUrls: ['./adress-component.component.scss']
})
export class AdressComponentComponent implements OnInit {
  addressId:any
  allcart:any;
  constructor(private getcart:BookcartdataServiceService,private snackbar:MatSnackBar,private route:Router) { }

  ngOnInit(): void {
    this.getallcart()
    this.GetAdress();
  }
  UserArray:any
  adress:any
  GetAdress(){
    console.log("ADRESS BY USERID")
    this.getcart.GetAddressvalue().subscribe((Request:any)=>
    {
      console.log(this.adress,"+++++++++++++++++++++++");
      console.log(Request,"------------------");
      console.log(Request.data);
      this.UserArray = Request.data;
      console.log(this.UserArray);
    })
  }
  getallcart()
  {
    this.getcart.getallcart().subscribe((Request:any)=>
    {
      console.log("Abhiii Called");
      console.log(Request);
      this.allcart=Request.data;
      this.allcart.reverse();
      console.log(this.allcart);
    })
  }
  addressid:any=2;
  Checkout(id:any,qnt:any)
  {
     let reqdata={
      BookId:id,
      Quantity:qnt,
      AddressId:this.addressid,
     }
     console.log("Abhishek",reqdata);
     if(qnt>0)
     {
     this.getcart.Checkoutdata(reqdata).subscribe((Response:any)=>{
       console.log(Response);
            
     })
     this.route.navigateByUrl('dashboard/orderplaced')
  
}
else
{
  this.snackbar.open("Book Ordered Failed", "", {
    duration: 2000,
  });
}

  }
}
