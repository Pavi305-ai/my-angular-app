import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-databindingstyle',
  styleUrl: './databindingstyle.css',
  templateUrl: './databindingstyle.html',
})
export class Databindingstyle {
  available = true;

  changeAvailability() {
    this.available = !this.available;
}
}
