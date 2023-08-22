import { Injectable } from '@angular/core';
import { Txn } from '../models/txn';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {

  txns:Txn[];
  nextId:number;

  constructor() {
    this.txns=[
      {id:1,header:"Salary",type:"CREDIT",amount:69000,dot:"2023-08-01",cid:101},
      {id:2,header:"Rent",type:"DEBIT",amount:9000,dot:"2023-08-01",cid:101},
      {id:3,header:"Salary",type:"CREDIT",amount:69000,dot:"2023-08-01",cid:102}
    ];
    this.nextId=4;
  }

  getAllByConsumerId(cid:number):Txn[]{
    return this.txns.filter( t => t.cid===cid);
  }
  
  getById(id:number):Txn|undefined {
    return this.txns.find(t => t.id===id);
  }

  deleteById(id:number):void{
    let index = this.txns.findIndex(t => t.id===id);
    if(index>-1){
      this.txns.splice(index,1);
    }
  }

  add(txn:Txn):Txn{
    txn.id=this.nextId++;
    this.txns.push(txn);
    return txn;
  }
  
  update(txn:Txn):Txn{
    let index = this.txns.findIndex(t => t.id==txn.id);
    if(index>-1){
      this.txns[index]=txn;
    }
    return txn;
  }
}
