import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txns-form',
  templateUrl: './txns-form.component.html',
  styleUrls: ['./txns-form.component.css']
})
export class TxnsFormComponent implements OnChanges {

  @Input()
  txn!:Txn;

  txnType:string;

  idFC:FormControl;
  amountFC:FormControl;
  headerFC:FormControl;
  dotFC:FormControl;

  txnForm:FormGroup;

  @Output()
  txnFormSubmit:EventEmitter<Txn>;

  constructor(){

    this.idFC=new FormControl();
    this.amountFC=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.headerFC=new FormControl("",[Validators.required]);
    this.dotFC=new FormControl(new Date().toISOString().substring(0,10),[Validators.required]);

    this.txnForm = new FormGroup({id:this.idFC,header:this.headerFC,amount:this.amountFC,dot:this.dotFC});

    this.txnType="CREDIT";

    this.txnFormSubmit=new EventEmitter<Txn>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.txnForm.reset({id:this.txn.id,header:this.txn.header,dot:this.txn.dot,amount:this.txn.amount});
    this.txnType=this.txn.type;      
  }

  changeType(txnType:string){
    this.txnType=txnType;
  }

  formSubmit(){
    this.txnFormSubmit.emit({...this.txnForm.value,type:this.txnType,cid:-1});
    this.txnForm.reset({id:0,header:"",dot:new Date().toISOString().substring(0,10),amount:0});
  }
}
