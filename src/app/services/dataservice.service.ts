import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpclient: HttpClient) { }

  loginService(data: any){
    console.log(data)
    return this.httpclient.post('http://127.0.0.1:8000/login/', data)
  }
  
  leadDashboard(){
    return this.httpclient.get('http://127.0.0.1:8000/leadlanding/')
  }

}
