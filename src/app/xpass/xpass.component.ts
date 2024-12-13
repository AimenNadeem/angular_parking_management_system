import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { RegisterService } from '../register.service';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-xpass',
  templateUrl: './xpass.component.html',
  styleUrls: ['./xpass.component.css']
})
export class XpassComponent implements OnInit {

  usernameCheck : any = "";

  // password without numbers 
  passwordPatternW : any = /^([A-Za-z+_*&^$#@!~?-]+)$/g;

  // Password without special characters (i.e. aimen123Aimen, aimenAimen123, Aimwn123aimen, Aimen123)
  passwordPatternX : any = /^([A-Za-z0-9()<>.,;'|\\/\]\[=%`]+)$/g;

  //password without uppercase alphabets (i.e. aimen123, 123aimen)
  passwordPatternY : any = /^([a-z0-9+_*&^$#@!~?-]+)$/g;

  // password without lowercase aplhabets (i.e. A_123, BSD123+)
  passwordPatternZ : any = /^([A-Z0-9+_*&^$#@!~?-]+)$/g;


  setupForm = new FormGroup({

    username: new FormControl("", Validators.compose([Validators.required])),
    password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(10),

      this.passwordPatternValidator({pattern: this.passwordPatternX, message: "Password Requires Specail Characters (i.e. + _ * & ^ $ # @ ! ~ ? -)"}),
      this.passwordPatternValidator({pattern: this.passwordPatternY, message: "Password Requires atleast one capital letter"}),
      this.passwordPatternValidator({pattern: this.passwordPatternZ, message: "Password Requires atleast one small letter"}),
      this.passwordPatternValidator({pattern: this.passwordPatternW, message: "Password Requires atleast one digit from 0 to 9"}),
      this.passwordNotUsernameValidator(),
    ])),

  });

  constructor(private rq : RequestsService, private router : Router, private regService : RegisterService, private styler : StyleService) { }

  ngOnInit(): void {

    this.styler.navigationStyle.next("setup");
  }



  passwordPatternValidator(value : any) : ValidatorFn {

    console.log("\n:: Password Patten Validation :: 1 ::\n");

    return (control : AbstractControl) : ValidationErrors | null => {

      console.log(":: Password Patten Validation :: 2 ::\n");

      const password = control.value;

      const passwordRegexPattern : RegExp = value.pattern;

      const error_message = value.message;

      console.log(":: Password Value :: \n");

      console.log(password);

      console.log(":: Password Regex Pattern :: \n");

      console.log(passwordRegexPattern);

      console.log(":: Error Message :: \n");

      console.log(error_message);

      console.log(":: password.match(passwordRegexPattern) value ::\n");

      console.log(password.match(passwordRegexPattern));

      if(password.match(passwordRegexPattern)) {

        console.log(error_message);

        return {errorMessage: error_message};
      
      } else {

        return null;
      }

    }

  } // passwordPatternValidator() :: End


  passwordNotUsernameValidator() : ValidatorFn {

    console.log("\n :: Password Not Same As Username Checker :: 1 :: \n");

    return (control : AbstractControl) : ValidationErrors | null => {

      console.log("\n :: Password Not Same As Username Checker :: 2 :: \n");

      const usernameX = this.usernameCheck;

      const passwordX = control.value;

      console.log(" :: Value of Username :: ");

      console.log(usernameX);

      console.log(":: Value of Password :: ");

      console.log(passwordX);

      console.log(":: password === username :: " + passwordX == usernameX);

      if(passwordX == usernameX && passwordX !== ""){

        return {userPass_error: true};
      
      } else {

        return null;
      }
    }
  }


  goto(){
    
    let value;

    const body = this.setupForm.value;

    const password = this.setupForm.get("password")?.value;

    this.regService.setRegPassword(password);

    this.rq.postSetPassword(body).subscribe({

      next: (next) => {

        this.regService.setResponse(next);

        value = this.regService.getResponse();

        if(value.responseCode === "00"){

          this.router.navigate(["login"]);

        }
        else {

          console.log("Error IN :: setPassword Response HTTP");
        }

      },
      error: (error) => {

        console.log(error);
      },
      complete: () => {

        console.log("Process Completed");
      },

    });

  } // goto() :: End

  setUsername(username : any){

    this.usernameCheck = username;

    console.log(this.usernameCheck);
  }
}
