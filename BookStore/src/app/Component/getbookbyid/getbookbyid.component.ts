import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from 'src/app/Service/BookServices/cartdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-getbookbyid',
  templateUrl: './getbookbyid.component.html',
  styleUrls: ['./getbookbyid.component.scss']
})
export class GetbookbyidComponent implements OnInit {
  getbook: any;
  Book: any;
  comment: any;
  rating: any;
  BookId: any;
  booksArr: any;
  constructor(private book: CartdataService, private route: Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.Book = localStorage.getItem('bookid')
    console.log(this.Book);
    this.getbookid();
    this.getFeedback();
  }
  getbookid() {
    this.book.bookidbyid(this.Book).subscribe((Request: any) => {
      console.log("Abhishek Jadhav", this.Book);
      console.log(Request);
      console.log(Request.data);
      this.getbook = Request.data;
      console.log(this.getbook);

    })
  }
  AddToCart(data: any) {
    console.log("data=", data.bookId);
    let reqdata = {
      BookId: data.bookId,
      BookQuantity: 1,
    }
    console.log(reqdata);

    this.book.addtocart(reqdata).subscribe((Request: any) => {
      console.log(Request);
      this.route.navigateByUrl('dashboard/getallcart')
    })
  }

  WishList(data: any) {
    console.log("data=", data.bookId);
    let reqdata = {
      BookId: data.bookId,
      
    }
    console.log(reqdata);
    this.book.addtowishlist(reqdata).subscribe((Request: any) => {
      console.log(Request);
      this.route.navigateByUrl('dashboard/getwishlist')
    })
  }
  //-----------FeedBack-------------------
  addFeedback(getbook:any) {
    let data = {
      TotalRating: parseFloat(this.rating),
      comment: this.comment,
      BookId: getbook.bookId,
    };

    console.log(data);

    this.book.addFeadback(data).subscribe(
      (response: any) => {
        console.log('User Feedback', response);
        this.snack.open('add feedback  Successfull', '', {
          duration: 3000,
        })
       
        this.getFeedback();
      },
      (error: any) => {
        console.log(error);
      }
    );
   }



   //---------get feedback


   getFeedback() {
    
    console.log(this.Book);

    this.book.getfeedBack(this.Book).subscribe((response: any) => {
    
      console.log(response);
      this.booksArr=response.data;
      console.log(this.booksArr);
    });
  }

  




  
}
