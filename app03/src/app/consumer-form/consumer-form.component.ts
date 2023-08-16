import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from '../services/consumer.service';
import { Consumer } from '../models/consumer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  idFC: FormControl;
  nameFC: FormControl;
  mobileFC: FormControl;
  mailIdFC: FormControl;

  consumerForm: FormGroup;

  isEditing: boolean;

  constructor(private consumerService: ConsumerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.idFC = new FormControl();
    this.nameFC = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]);
    this.mobileFC = new FormControl("", [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
    this.mailIdFC = new FormControl("", [Validators.required, Validators.email]);

    this.consumerForm = new FormGroup({ id: this.idFC, name: this.nameFC, mobile: this.mobileFC, mailId: this.mailIdFC });

    this.isEditing = false;
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params["cid"];
    if (cid) {
      let consumer = this.consumerService.getById(Number(cid));
      if (consumer) {
        this.consumerForm.setValue(consumer);
        this.isEditing = true;
      }
    }
  }

  formSubmitted() {
    let consumer: Consumer = this.consumerForm.value;
    if (this.isEditing) {
      this.consumerService.update(consumer);
    } else {
      this.consumerService.add(consumer);
    }
    this.router.navigateByUrl("/list");
  }
}
