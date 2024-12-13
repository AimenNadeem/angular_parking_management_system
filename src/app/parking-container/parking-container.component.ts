import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-parking-container',
  templateUrl: './parking-container.component.html',
  styleUrls: ['./parking-container.component.css']
})
export class ParkingContainerComponent implements OnInit {
  

  adminStatus : any;
  
  constructor(private loginService : LoginService){}
  
  
  ngOnInit(): void {

    this.adminStatus = this.loginService.getUserAdminStatus();
  }


}
  
