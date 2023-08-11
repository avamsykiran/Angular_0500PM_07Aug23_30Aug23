import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  constructor() { }

  greetUser(userName:string) : string {
    let greeting = "";

    let h = (new Date()).getHours();

    if(h>=3 && h<=11) greeting = "Good Morning";
    else if(h>11 && h<=17) greeting="Good Noon";
    else greeting="Good Evening";

    return greeting +" " +userName;
  }
}
