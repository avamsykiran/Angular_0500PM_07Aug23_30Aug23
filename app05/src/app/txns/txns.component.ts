import { Component, OnInit } from '@angular/core';
import { Txn } from '../models/txn';
import { TxnsService } from '../services/txns.service';
import { ActivatedRoute } from '@angular/router';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  consumer: Consumer | undefined;
  txns!: Txn[]

  constructor(private consumerService: ConsumerService, private txnsServcie: TxnsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params["cid"];
    if (cid) {
      this.consumer = this.consumerService.getById(Number(cid));
      if (this.consumer) {
        this.txns = this.txnsServcie.getAllByConsumerId(this.consumer.id);
      }
    }
  }

  remove(txnid:number){
    if(window.confirm("Are you sure of deleting the transaction?")){
      this.txnsServcie.deleteById(txnid);
      this.txns = this.txnsServcie.getAllByConsumerId(this.consumer!.id);
    }    
  }

  add(txn:Txn){
    txn.cid=this.consumer?.id??0;
    this.txnsServcie.add(txn);
    this.txns = this.txnsServcie.getAllByConsumerId(this.consumer!.id);
  }

  markEditable(id:number){
    let index = this.txns.findIndex(t => t.id===id);
    if(index>-1){
      this.txns[index].isEditing=true;
    }
  }

  update(txn:Txn){
    txn.cid=this.consumer?.id??0;
    txn.isEditing=undefined;
    this.txnsServcie.update(txn);
    this.txns = this.txnsServcie.getAllByConsumerId(this.consumer!.id);
  }
}
