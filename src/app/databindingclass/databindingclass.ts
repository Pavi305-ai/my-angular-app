import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-databindingclass',
  styleUrl: './databindingclass.css',
  templateUrl: './databindingclass.html',
})
export class Databindingclass {
  loggedIn = false;

  changeLogin() {
    this.loggedIn = !this.loggedIn;
  }
}
