import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  userName:string;
  imgs:string[];
  imgIndex:number;
  imgWidth:number;
  applyCentered:boolean;
  applyRounded:boolean;

  constructor(){
    this.userName="SomeBody";
    this.imgIndex=0;
    this.imgs=[
      "assets/img1.jpeg",
      "assets/img2.jpeg",
      "assets/img3.png",
      "assets/img4.png"
    ];
    this.imgWidth=100;
    this.applyCentered=true;
    this.applyRounded=true;
  }

  change():void{
    ++this.imgIndex;
    if(this.imgIndex===this.imgs.length){
      this.imgIndex=0;
    }
  }
}
