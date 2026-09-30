import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ebc',
  styleUrl: './ebc.css',
  templateUrl: './ebc.html',
})
export class EBC {
  message = '';
  submitForm(){
    this.message = 'Employee registered successfully';
  }
}
