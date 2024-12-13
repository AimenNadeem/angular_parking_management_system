import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {


  file_name : string = "";

  image : any[] | any = "/assets/pictures/dummypfp.png";

  username ?: string;

  userEmpID : any;

  userRank : any;
  

  constructor(private regService : RegisterService, private loginService : LoginService) {}


  ngOnInit(): void {

    console.log("Test :: 0");

    this.image = this.regService.getImage();

    this.username = this.loginService.Username;

    this.userEmpID = this.loginService.getUserEmpID();

    this.switchRanker();

    if(this.image === null) {

      this.regService.setImage("/assets/pictures/dummypfp.png");

      this.image = this.regService.getImage();
    
    } else {

      return;
    }

  }


  fileChanger(event : any){

    const file : File = event.target.files[0];
    
    const reader = new FileReader();

    if(file.type.match("png") || file.type.match("jpg") || file.type.match("jpeg") || file.type.match("gif")){

      reader.onload = (event : any) => {

        const value = event.target?.result;

        console.log("Test :: 1");

        console.log(value);

        this.regService.setImage(value);

        this.image = this.regService.getImage();
  
        console.log("Test :: 2")
        
        console.log(this.image);
      }  
    
    } else {
      
      return;
    }

    reader.readAsDataURL(event.target.files[0]);

  }


  switchRanker(){

    const rankNumber = this.loginService.getUserEmpRank();

    switch(rankNumber){

      case 1 : this.userRank = "OG";
      break;

      case 2 : this.userRank = "AVP";
      break;

      case 3 : this.userRank = "VP";
      break;

      case 4 : this.userRank = "SVP";
      break;

      case 5 : this.userRank = "EVP";
      break;

      case 6 : this.userRank = "SEVP";
      break;

    }

  }

}
