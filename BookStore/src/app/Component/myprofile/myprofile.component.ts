import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddressdataService } from 'src/app/Service/AddressServices/addressdata.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  myprofileForm!:FormGroup;
  submitted = false;
  Type:any;
  constructor(private _fb:FormBuilder, private route:Router,private snackbar:MatSnackBar,private cart:AddressdataService) { }

  ngOnInit(): void {
    this.myprofileForm=this._fb.group({
      Address:['',Validators.required],
      City:['',Validators.required],
      State:['',Validators.required],
      type:['',Validators.required]
      
    })
  }
  onSubmit() {
    this.submitted = true;
    console.log("Abhishek");
   
  
    if (this.myprofileForm.invalid) {
      console.log("form invalid");
        return;   
    }
    
    let reqdata:any={
      Address:this.myprofileForm.value.Address,
      City:this.myprofileForm.value.City,
      State:this.myprofileForm.value.State,
      TypeId:parseInt(this.myprofileForm.value.type),
    }
    console.log(reqdata);
    console.log(this.Type);

    this.cart.addresspost(reqdata).subscribe((Response:any)=>{
      console.log(Response);
      this.snackbar.open("Address Added Successfully", "", {
        duration: 2000,
      });
    })
   }
}
