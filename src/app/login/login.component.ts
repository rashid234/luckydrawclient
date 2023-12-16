import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';
import { TokenHandler } from '../../helpers/tokenHandler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model={
    username:'',
    password:''
  }

  token : string = '';

  constructor(private Dataservice: DataserviceService, private router:Router, private tokenHandler: TokenHandler){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tokenHandler.removeToken()
  }

  login(){
    this.Dataservice.loginService(this.model).subscribe({
      next : (res: any) => {
        console.log(res)
        this.tokenHandler.setToken(res.token)
        this.router.navigateByUrl('leads/dashboard')
      }})
  }
}
