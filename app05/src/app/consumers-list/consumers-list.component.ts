import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../services/consumer.service';
import { Consumer } from '../models/consumer';

@Component({
  selector: 'app-consumers-list',
  templateUrl: './consumers-list.component.html',
  styleUrls: ['./consumers-list.component.css']
})
export class ConsumersListComponent implements OnInit {

  consumers!: Consumer[];
  errMsg!: string;

  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.consumerService.getAll().subscribe({
      next: data => this.consumers=data ,
      error: err => { console.log(err); this.errMsg="Unable to load data! Inconvinience regretted! Please try later";}
    });
  }

  remove(id: number) {
    if (window.confirm("Are you sure of deleting consumer#" + id + "?")) {
      this.consumerService.deleteById(id).subscribe({
        next: () => this.loadData(),
        error: err => { console.log(err); this.errMsg="Unable to delete record! Inconvinience regretted! Please try later";}
      });
    }
  }
}
