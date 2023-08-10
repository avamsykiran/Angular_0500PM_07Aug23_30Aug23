import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords'
})
export class IntoWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE","FOUR",
      "FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let result="";
    let valStr = String(value);

    for(let i=0;i<valStr.length;i++){
      let ch = valStr.charAt(i);
      if(ch==="."){
        result += " dot ";
      }else{
        let index = Number(ch);
        result += this.digits[index] +" ";
      }
    }

    return result;
  }

}
