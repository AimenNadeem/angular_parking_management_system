import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { data } from 'src/assets/dummydata/data';
import { Idata } from 'src/assets/dummydata/dataI';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users-box',
  templateUrl: './users-box.component.html',
  styleUrls: ['./users-box.component.css']
})
export class UsersBoxComponent implements OnInit {
 
  @Input() dataX : Idata[] = [];

  constructor(private dataService : DataService) {}

  ngOnInit(): void {

    this.dataX = this.dataService.getUserData();
  }

}
