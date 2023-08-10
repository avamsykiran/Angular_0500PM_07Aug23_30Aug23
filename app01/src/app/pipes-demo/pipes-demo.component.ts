import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  strData:string;
  numData:number;
  dateData:Date;

  constructor(){
    this.strData="Hello! welcoem to my angualr spa";
    this.numData=1024.1024;
    this.dateData=new Date();
  }

}
