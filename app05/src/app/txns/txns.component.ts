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

  consumer!: Consumer;
  txns!: Txn[]
  errMsg!:string;

  constructor(private consumerService: ConsumerService, private txnsService: TxnsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params["cid"];
    if (cid) {
      this.consumerService.getById(Number(cid)).subscribe({
        next: consumer => {
          this.consumer=consumer;
          this.loadTxns();
        },
        error: err => {console.log(err); this.errMsg="Unable to retive data!"}
      });
    }
  }

  loadTxns(){
    this.txnsService.getAllByConsumerId(this.consumer.id).subscribe({
      next: txns=> this.txns=txns,
      error: err => {console.log(err); this.errMsg="Unable to retive data!"}
    });
  }

  remove(txnid:number){
    if(window.confirm("Are you sure of deleting the transaction?")){
      this.txnsService.deleteById(txnid).subscribe({
        next: () => this.loadTxns(),
        error: err => {console.log(err); this.errMsg="Unable to delete data!"}
      })
    }    
  }

  add(txn:Txn){
    txn.cid=this.consumer?.id??0;

    this.txnsService.add(txn).subscribe({
      next: data => this.loadTxns(),
      error: err => {console.log(err); this.errMsg="Unable to save data!"}
    })
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
    this.txnsService.update(txn).subscribe({
      next: data => this.loadTxns(),
      error: err => {console.log(err); this.errMsg="Unable to save data!"}
    })
  }
}
