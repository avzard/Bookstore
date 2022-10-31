import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from 'src/app/Service/DataServices/dataservices.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  selectedMenu: any = 'Home';
  press: boolean = false;
  searchtext: string = "";

  constructor(private route: Router, private dataservice: DataservicesService) { }

  ngOnInit(): void {
  }

  myprofile() {
    console.log("my proflie");
    this.route.navigateByUrl('dashboard/myprofile')
  }

  getallcart() {
    this.route.navigateByUrl('dashboard/getallcart')
  }

  home() {
    this.route.navigateByUrl('dashboard/books')
  }

  SearchBox: any;
  value: any;
  searchTitle($event: any) {
    this.press = $event.target.value;

    this.value = this.press;
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.dataservice.changeData(Ddata)
  }


}
