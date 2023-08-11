import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friend!: string;
  friends: string[];

  constructor() {
    this.friends = ["Vamsy", "Vinay", "Vinodh"];
  }

  remove(fnm: string): void {
    let index = this.friends.findIndex(f => f === fnm);
    if (index > -1) {
      this.friends.splice(index, 1);
    }
  }

  add() {
    if (this.friend && this.friend.trim().length > 0) {
      this.friends.push(this.friend);
      this.friend = "";
    }
  }
}
