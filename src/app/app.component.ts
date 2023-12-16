import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenHandler } from '../helpers/tokenHandler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'lucky_draw';

  constructor(private router: Router, private tokenHandler: TokenHandler){

  }

  ngOnInit(): void {
    this.tokenHandler.removeToken();
  }

  helo(){
    console.log('ji')
    this.router.navigate(['login']);
  }
}
