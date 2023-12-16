import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  displaytext: any;
  constructor(private dataService: DataserviceService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.leadDashboard().subscribe({
      next: (res: any) => {
        this.displaytext=res.email
        console.log(res);
        
      },error: (res: any) => {
        console.log(res)
      }
    })
    
  }
}
