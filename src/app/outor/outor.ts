import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-outor',
  styleUrl: './outor.css',
  templateUrl: './outor.html',
})
export class Outor {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit('Order Placed Successfully');
  }
}
