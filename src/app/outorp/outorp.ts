import { Component } from '@angular/core';
import { Outor } from '../outor/outor';

@Component({
  imports: [Outor],
  selector: 'app-outorp',
  styleUrl: './outorp.css',
  templateUrl: './outorp.html',
})
export class Outorp {
  message='';
  receiveMessage(value:string){
    this.message = value;
  }
}
