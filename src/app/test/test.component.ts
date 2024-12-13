import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idata } from 'src/assets/dummydata/dataI';
import { DataService } from '../data.service';
import { extraDataI } from 'src/assets/extraInfoData/extra_dataI';
import { extraData } from 'src/assets/extraInfoData/extra_data';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  id : number = 0;

  dataY : Idata[] = [];

  dataZ : extraDataI[] = [];

  userData : any = {};

  extraUserData : any = {};

  private subscribeX : any;



  constructor(private activedRoute : ActivatedRoute, private dataService : DataService) {}


  ngOnInit(): void {

    this.dataZ = extraData;

    this.dataY = this.dataService.getUserData();

    this.subscribeX = this.activedRoute.params.subscribe(

      (param : any) => {

        this.id = Number(param["id"]);
      }

    );

    this.checkInfo();
  }

  ngOnDestroy(): void {
   
    this.subscribeX.unsubscribe();
  }



 
  checkInfo(){

    this.dataY.forEach(

      (data : any) => {

        if(this.id === data.id){

          this.userData = data;
          console.log(this.userData);
        
        } else {

          console.log("Userdata Not Found");
        }
      }

    );

    this.dataZ.forEach(

      (extra : any) => {

        if(this.userData.id === extra.id){

          this.extraUserData = extra;
        
        } else {

          console.log("error no extra user data");
        }
      
      }

    );

  }




}
