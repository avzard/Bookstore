import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl = environment.baseurl;
  constructor(private http:HttpClient) { }
  postService(url:string, reqdata: any, token:boolean=false, httpOptions: any = {} ){
    return this.http.post(this.baseUrl+url, reqdata, token && httpOptions)
  }


  putServices(url:string, reqdata:any, token:boolean=false, httpOptions:any={})
  {    
    return this.http.put(this.baseUrl+url,reqdata,token && httpOptions)
  }

  getService(url:string, token:boolean=true, httpOptions: any = {} ){
    return this.http.get(this.baseUrl+url, token && httpOptions)
  }

  deleteService(url:string,token:boolean=true,httpOptions:any={})
  {
    console.log("delete");
    return this.http.delete(this.baseUrl+url,token && httpOptions);
  }
}
