import { Component } from '@angular/core';
import { ConsumerService } from '../services/consumer.service';
import { Consumer } from '../models/consumer';

@Component({
  selector: 'app-consumers-list',
  templateUrl: './consumers-list.component.html',
  styleUrls: ['./consumers-list.component.css']
})
export class ConsumersListComponent {

  consumers: Consumer[];

  constructor(private consumerService: ConsumerService) {
    this.consumers = consumerService.getAll();
  }

  remove(id: number) {
    if (window.confirm("Are you sure of deleting consumer#" + id + "?")) {
      this.consumerService.deleteById(id);
      this.consumers = this.consumerService.getAll();
    }
  }
}
