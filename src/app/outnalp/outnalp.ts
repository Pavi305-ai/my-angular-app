import { Component } from '@angular/core';
import { Outnal } from '../outnal/outnal';

@Component({
  imports: [Outnal],
  selector: 'app-outnalp',
  styleUrl: './outnalp.css',
  templateUrl: './outnalp.html',
})
export class Outnalp {
  message = '';
  receiveMessage(value:string){
    this.message=value;
  }
}
