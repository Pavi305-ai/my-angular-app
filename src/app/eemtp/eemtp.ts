import { Component } from '@angular/core';
import { Eemtc } from '../eemtc/eemtc';

@Component({
  imports: [Eemtc],
  selector: 'app-eemtp',
  styleUrl: './eemtp.css',
  templateUrl: './eemtp.html',
})
export class Eemtp {
  studentName = '';
  receiveName(name:string){
    this.studentName=name;
  }
}
