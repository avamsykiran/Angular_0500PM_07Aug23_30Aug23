import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-details',
  templateUrl: './txn-details.component.html',
  styleUrls: ['./txn-details.component.css']
})
export class TxnDetailsComponent {

  @Input()
  txn!:Txn;

  @Output()
  editBtnClicked:EventEmitter<number>;

  @Output()
  delBtnClicked:EventEmitter<number>;

  constructor(){
    this.editBtnClicked=new EventEmitter<number>();
    this.delBtnClicked=new EventEmitter<number>();
  }

  raiseEditBtnClickedEvent(){
    this.editBtnClicked.emit(this.txn.id);
  }

  raiseDelBtnClickedEvent(){
    this.delBtnClicked.emit(this.txn.id);
  }
}
