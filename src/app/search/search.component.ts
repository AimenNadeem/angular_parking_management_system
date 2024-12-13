import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Idata } from 'src/assets/dummydata/dataI';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  search : string = "";


  constructor(private dataService : DataService) { }

  ngOnInit(): void {}


  setSearch(value : string){

    this.search = value;
    
    console.log("Inside search bar method setSearch() :: "+ this.search);
  }

  sClick(){

    console.log(":: sClick :: " + this.search);
    this.dataService.setUsername(this.search);
    this.dataService.searchByUsername();
  }

}
