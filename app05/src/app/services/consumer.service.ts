import { Injectable } from '@angular/core';
import { Consumer } from '../models/consumer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  consumerEndPoint:string;
  constructor(private httpClinet:HttpClient) { 
    this.consumerEndPoint="http://localhost:8787/consumers";
  }

  getAll():Observable<Consumer[]>{
    return this.httpClinet.get<Consumer[]>(this.consumerEndPoint);
  }

  getById(id:number):Observable<Consumer> {
    return this.httpClinet.get<Consumer>(this.consumerEndPoint + "/" + id);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClinet.delete<void>(this.consumerEndPoint + "/" + id);
  }

  add(consumer:Consumer):Observable<Consumer>{
    return this.httpClinet.post<Consumer>(this.consumerEndPoint,consumer);
  }
  
  update(consumer:Consumer):Observable<Consumer>{
    return this.httpClinet.put<Consumer>(this.consumerEndPoint + "/" + consumer.id,consumer);
  }
}