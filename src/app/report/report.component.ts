import { Component, OnInit } from '@angular/core';
import { ParkingReportService } from '../parking-report.service';
import { UserParkingReportI } from 'src/assets/parkingReport/UserParkingReportI';
import { Router } from '@angular/router';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
var htmlToPdfmake = require("html-to-pdfmake");



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  date : any = new Date();

  report : UserParkingReportI = {

    responseCode: "",
    responseDescription: "",
    message: null,
    data: [],
  };

  pdfReport : any;

  constructor(private reportService : ParkingReportService, private router : Router) {}

  ngOnInit(): void {

    this.report = this.reportService.getReport();
  }

  gotoUsersTab() {

    this.router.navigate(["park/show-users"]);
  }

  createPdf() {

    let testPDF = {  
    
      header: 'Heading',  
      content: 'Sample PDF generated with Angular and PDFMake!',
    };  

    let table = document.getElementById("reportMainID");

    let htmlValue = htmlToPdfmake(table?.innerHTML);

    let testVal = htmlToPdfmake(`<h1>Hello Test PDF</h1>`);

    this.pdfReport = {content: htmlValue};

    pdfMake.createPdf(this.pdfReport).download("parking-report.pdf");

  }

}
