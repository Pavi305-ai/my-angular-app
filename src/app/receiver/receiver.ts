import { Component } from '@angular/core';
import { MessageService } from '../message';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.html'
})
export class ReceiverComponent {

  message = '';

  constructor(private messageService: MessageService) {}

  getMessage() {
    this.message = this.messageService.message;
  }

}