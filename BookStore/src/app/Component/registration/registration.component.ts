import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/Service/UserServices/user-services.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm! : FormGroup;
  submitted = false;
  constructor(private _fb: FormBuilder,private router:Router,private user:UserServicesService) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
  
      FullName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
  })
  }
  get f() { return this.registerForm.controls; }

 reqdata:any={
 }
  
onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }

   this.reqdata={
    FullName:this.registerForm.value.FullName,
    Email:this.registerForm.value.Email,
    Password:this.registerForm.value.Password,
    Mobile:this.registerForm.value.PhoneNumber,
  }
  console.log(this.reqdata);

   this.user.registration(this.reqdata).subscribe((response:any)=>
   {
     console.log(this.reqdata);
    console.log(response);
    this.router.navigateByUrl('/login') 
    })
  }
}
