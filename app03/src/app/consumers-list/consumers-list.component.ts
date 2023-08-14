import { Component } from '@angular/core';
import { ConsumerService } from '../services/consumer.service';
import { Consumer } from '../models/consumer';

@Component({
  selector: 'app-consumers-list',
  templateUrl: './consumers-list.component.html',
  styleUrls: ['./consumers-list.component.css']
})
export class ConsumersListComponent {

  consumers:Consumer[];

  constructor(consumerService:ConsumerService){
    this.consumers=consumerService.getAll();
  }
}
