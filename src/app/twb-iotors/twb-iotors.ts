import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-twb-iotors',
  styleUrl: './twb-iotors.css',
  templateUrl: './twb-iotors.html',
})
export class TwbIOtors {
  @Input() name ='';
  @Output() nameChange = new EventEmitter<string>();
  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    this.nameChange.emit(input.value);
  }
}
