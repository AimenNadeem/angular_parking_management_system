import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  

  @Input() alerttype ?: "good" | "bad" | "none";

  @Output() alerttypeChange : EventEmitter<"good" | "bad" | "none"> = new EventEmitter<"good" | "bad" | "none">();


  good : string = "good";

  bad : string = "bad";

  none : string = "none";

  isOKed : boolean = true;

  constructor() {}


  ngOnInit(): void {}


  close(){

    this.alerttype = "none";

    this.alerttypeChange.emit(this.alerttype);
  }

}
