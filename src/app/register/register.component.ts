import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RequestsService } from '../requests.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { RanksI } from 'src/assets/rankingData/RanksI';
import { RanksData } from 'src/assets/rankingData/RanksData';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  textSelect : any = "Select Your Rank";

  testVal : any;

  ddClick : boolean = false;

  ddState : any = {display: "none"};

  rankStyle : any = {border: '1px solid gray'};

  borderBtn : any = {'border-left': '1px solid gray'};

  spanOp : any = {opacity: '1'};

  ranksData : RanksI = {

    responseCode: '',
    responseDescription: '',
    message: '',
    data: [
      {
        id: 0,
        rank: "Loading Data...",
        rankValue: "",
      }
    ],
  };


  regForm = new FormGroup({

    employeeId : new FormControl("", Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[\\d]+$"),])),
    employeeName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern("^[A-Z][a-z]*([ ][A-Z][a-z]*)*$"),])),
    userName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern("^[A-Za-z0-9]+$"),])),
    rank: new FormControl("", Validators.compose([Validators.required])),
    mobileNo: new FormControl("", Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^\\d+$"),])),
    email: new FormControl("", Validators.compose([Validators.required, Validators.email, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"),])),
    accountNo: new FormControl("", Validators.compose([Validators.required, Validators.minLength(14), Validators.maxLength(24), Validators.pattern("^[\\d]+$"),])),
    
  });


  constructor(private styler : StyleService, private router : Router, private req : RequestsService, private regService : RegisterService) {}

  ngOnInit(): void {

    this.getRanks();
    this.styler.navigationStyle.next("signup");
  }


  onNext(){

    this.router.navigate(["setup"]);
  }


  submitForm(){

    let value;

    console.log(this.regForm.value);

    this.regService.setRegData(this.regForm.value);

    this.req.postRegister(this.regForm.value).subscribe({

      next: (next) => {

        this.regService.setResponse(next);

        value = this.regService.getResponse();
        

        if(value.responseCode === "00"){

          this.onNext();
        
        } 
        else {

          console.log("Error IN :: Register Response HTTP");
        }
      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log("Process Completed");
      },
    });
  }


  onKeyPressID(event : any){

    const key = event.key;

    if(key.match("^[\\d]+$")){

      return true;
    
    } 
    else {

      return false;
    }
  }


  onKeyPressUserName(event : any){

    const key = event.key;

    if(key.match("^[A-Za-z0-9]+$")){

      return true;
    
    } 
    else {

      return false;
    }
  }

  onKeyPressMobi(event : any){

    const key = event.key;

    if(key.match("^\\d+$")){

      return true;
    
    } 
    else {

      return false;
    }
  }



  onKeyPressAcc(event : any){

    const key = event.key;

    if(key.match("^[\\d]+$")){

      return true;
    
    } 
    else {

      return false;
    }
  }


  toggleDD(){

    console.log("Call Toggle DD");

    // console.log(this.regForm.value);

    this.ddClick = !this.ddClick;

    if(this.ddClick === true){

      console.log("Toggle DD :: IF");

      this.ddState = {display: "flex"};

      this.spanOp = {opacity: '0'};
    
    } else {

      console.log("Toggle DD :: ELSE");

      this.ddState = {display: "none"};

      this.spanOp = {opacity: '1'};
    }

  }


  changeRankStyle1(){

    let isValid = this.regForm.get("rank")?.valid;

    this.testVal = this.regForm.get("rank")?.value;

    if(isValid === false && this.testVal === ""){

      this.rankStyle = {border: '1px solid red'};

      this.borderBtn = {'border-left': '1px solid red'};
    
    } 
    else {
      
      this.rankStyle = {border: '1px solid gray'};

      this.borderBtn = {'border-left': '1px solid gray'};
    }
  }

  
  changeRankStyle2(){

    let isTouched = this.regForm.get("rank")?.touched;

    this.testVal = this.regForm.get("rank")?.value;

    if(isTouched === true && this.testVal === ""){

      this.rankStyle = {border: '1px solid red'};

      this.borderBtn = {'border-left': '1px solid red'};

    } 
    else {

      this.rankStyle = {border: '1px solid gray'};

      this.borderBtn = {'border-left': '1px solid gray'};
    }
  }


  getRanks(){

    let jsonRanks;

    this.req.getRanksgData().subscribe({

      next: (next) => {

        this.ranksData = next;

        jsonRanks = JSON.stringify(this.ranksData);

        this.regService.setRanks(jsonRanks);
      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log("Successful Process For RANK");
      },
    });

    console.log(this.ranksData);
  }


  test(val : any){

    console.log(val);
  }

  setRank(val : RanksData){

    const rankNum = val.rankValue;
    const rankName = val.rank;

    this.regForm.get("rank")?.setValue(rankNum);

    this.textSelect = rankName;
  }


}
