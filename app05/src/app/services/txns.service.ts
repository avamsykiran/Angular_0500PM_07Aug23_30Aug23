import { Injectable } from '@angular/core';
import { Txn } from '../models/txn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {

  txnEndPoint:string;
  constructor(private httpClinet:HttpClient) { 
    this.txnEndPoint="http://localhost:8787/txns";
  }

  getAllByConsumerId(cid:number):Observable<Txn[]>{
    return this.httpClinet.get<Txn[]>(this.txnEndPoint +"?cid="+cid);
  }
  
  getById(id:number):Observable<Txn> {
    return this.httpClinet.get<Txn>(this.txnEndPoint +"/"+id);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClinet.delete<void>(this.txnEndPoint +"/"+id);
  }

  add(txn:Txn):Observable<Txn>{
    return this.httpClinet.post<Txn>(this.txnEndPoint,txn);
  }
  
  update(txn:Txn):Observable<Txn>{
    return this.httpClinet.put<Txn>(this.txnEndPoint +"/"+txn.id,txn);
  }
}
