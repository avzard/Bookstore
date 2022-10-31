import { Component, OnInit } from '@angular/core';
import { CartdataService } from 'src/app/Service/BookServices/cartdata.service';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  bookArray:any;
  constructor(private book:CartdataService) { }

  ngOnInit(): void {
    console.log("hellow world");
    this.getAllBooks();
  }
  getAllBooks()
  {
    console.log("+++++++++");
    this.book.getallbook().subscribe((request:any)=>
    {
      this.bookArray=request.data;
      console.log("+++",request);
      console.log("bookArray",this.bookArray);
      this.bookArray.reverse();
      console.log("data",this.bookArray);
    })
  }
}
