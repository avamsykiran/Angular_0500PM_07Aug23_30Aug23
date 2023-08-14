import { Injectable } from '@angular/core';
import { Consumer } from '../models/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  consumers:Consumer[];
  nextId:number;

  constructor() { 
    this.consumers=[
      {id:101,name:"Vamsy",mobile:"9052224753",mailId:"vamsy@gmail.com"},
      {id:102,name:"Vinay",mobile:"9052224713",mailId:"vinay@gmail.com"},
      {id:103,name:"Vasanth",mobile:"9052224723",mailId:"vasanth@gmail.com"},
      {id:104,name:"Vinodh",mobile:"9052224733",mailId:"vinadh@gmail.com"},
      {id:105,name:"Vijay",mobile:"9052224743",mailId:"vijay@gmail.com"}
    ];

    this.nextId=106;
  }

  getAll():Consumer[]{
    return [...this.consumers];
  }

  getById(id:number):Consumer|undefined {
    return this.consumers.find(c => c.id==id);
  }

  deleteById(id:number):void{
    let index = this.consumers.findIndex(c => c.id==id);
    if(index>-1){
      this.consumers.splice(index,1);
    }
  }

  add(consumer:Consumer):Consumer{
    consumer.id=this.nextId++;
    this.consumers.push(consumer);
    return consumer;
  }
  
  update(consumer:Consumer):Consumer{
    let index = this.consumers.findIndex(c => c.id==consumer.id);
    if(index>-1){
      this.consumers[index]=consumer;
    }
    return consumer;
  }
}