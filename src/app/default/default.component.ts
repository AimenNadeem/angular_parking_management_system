import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Idata } from 'src/assets/dummydata/dataI';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private dataService : DataService) {}

  ngOnInit(): void {}

  getUpdatedData(){

    return this.dataService.getUpdatedData();
  }
}
