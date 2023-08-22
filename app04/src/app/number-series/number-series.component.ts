import { Component } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {
  lb:number;
  ub:number;

  results!:number[];
  errMsg!:string|null;
  isInProgress!:boolean;

  constructor(private nss:NumberSeriesService){
    this.lb=0;
    this.ub=0;
  }

  start(){
    this.results=[];
    this.errMsg=null;
    this.isInProgress=true;

    let ob = this.nss.generateNumbers(this.lb,this.ub);

    ob.subscribe({
      next: val => { this.results.push(val) },
      error: err => { this.errMsg=err; this.isInProgress=false; },
      complete: () => { this.isInProgress=false; }
    })
  }
}
