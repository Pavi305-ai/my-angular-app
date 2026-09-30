import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eemtc',
  styleUrl: './eemtc.css',
  templateUrl: './eemtc.html',
})
export class Eemtc {
  @Output() studentEvent = new EventEmitter<string>();
  sendStudentName(){
    this.studentEvent.emit('Pavithra');
  }
}
