import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-default-content',
  templateUrl: './default-content.component.html',
  styleUrls: ['./default-content.component.css']
})
export class DefaultContentComponent implements OnInit {


  username : any;

  name : any;

  constructor(private loginService : LoginService) {}

  ngOnInit(): void {

    this.username = this.loginService.Username;

    this.name = this.loginService.getUserEmpName();
  }

}
