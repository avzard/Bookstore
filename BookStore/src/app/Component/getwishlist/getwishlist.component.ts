import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from 'src/app/Service/WishListServices/wishlistdata.service';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {
  wishlistArray:any;
  constructor(private wishlist:WishlistdataService) { }

  ngOnInit(): void {
    this.getwishlist();
  }
  getwishlist()
  {
    this.wishlist.getwishdata().subscribe((Request:any)=>
    {
      console.log(Request);
      console.log("Abhishek",Request.data);
      this.wishlistArray=Request.data;
      this.wishlistArray.reverse();
    })
  }


  removerwishlist(data:any)
  {
    console.log(data.wishListId);
    this.wishlist.removerlist(data.wishListId).subscribe((Request:any)=>{
      console.log(Request);
      
      this.getwishlist();
    })
  }
}
