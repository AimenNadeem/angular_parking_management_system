import { Injectable } from '@angular/core';
import { data } from 'src/assets/dummydata/data';
import { Idata } from 'src/assets/dummydata/dataI';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userData : Idata[] = data;

  private username !: string;

  private updatedData !: Idata[];


  constructor() {}



  setUserData(){

    this.userData = data;
  }


  getUserData(){

    return this.userData;
  }


  setUsername(value : string){

    this.username = value;
  }

  getUsername(){

    return this.username;
  }


  filterLogic(user : Idata){

    const value = this.username.toLowerCase() === user.username.toLowerCase()? user : null;

    return value;
  }


  searchByUsername(){
    
    let dataX;

    console.log(":: searchByUsername() ::");

    dataX = this.userData.filter((data) => this.filterLogic(data));

    console.log("dataX values");

    console.log(dataX);

    if(dataX.length === 0){

      console.log(":: Inside If statement :: ");

      dataX = this.userData;

      this.updatedData = dataX;

      console.log(":: End of If statement :: ");

    } else {

      console.log(":: Inside Else statement :: ");

      this.updatedData = dataX;

      console.log(":: End of Else statement :: ");

    }

    console.log(":: this.updatedData values ::");

    console.log(this.updatedData);

  }

  
  getUpdatedData(){

    // console.log("inside get updated data");
    // console.log("updatedData value");
    // console.log(this.updatedData);
    return this.updatedData;
  }

}
