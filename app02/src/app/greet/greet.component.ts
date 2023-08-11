import { Component } from '@angular/core';
import { GreetService } from '../greet.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  msg:string;

  constructor(greetService:GreetService){
    this.msg = greetService.greetUser("SomeBody");
  }

}
