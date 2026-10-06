import { Component } from '@angular/core';
import { MessageService } from '../message';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.html'
})
export class SenderComponent {

  constructor(private messageService: MessageService) {}

  sendMessage(message: string) {
    this.messageService.message = message;
  }

}