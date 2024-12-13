import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private styler : StyleService) {}

  ngOnInit(): void {

    this.styler.changeBG();
    this.styler.changeTitle();
  }

}
