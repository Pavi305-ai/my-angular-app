import { Component,output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-outnal',
  styleUrl: './outnal.css',
  templateUrl: './outnal.html',
})
export class Outnal {
  messageEvent = output<string>();
  sendMessage(){
    this.messageEvent.emit('Order Placed Successfully');
  }
}
