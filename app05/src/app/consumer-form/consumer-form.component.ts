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

  errMsg!:string;

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
      this.consumerService.getById(Number(cid)).subscribe({
        next: consumer => {
          this.consumerForm.setValue(consumer);
          this.isEditing = true;
        },
        error: err => { console.log(err); this.errMsg="Unable to load the record" }
      });
    }
  }

  formSubmitted() {
    let consumer: Consumer = this.consumerForm.value;
    let ob = null;
    if (this.isEditing) {
      ob = this.consumerService.update(consumer);
    } else {
      ob = this.consumerService.add(consumer);
    }

    ob.subscribe({
      next: data => this.router.navigateByUrl("/list"),
      error: err => { console.log(err); this.errMsg="Unable to save the record" }
    })
    
  }
}
