import { Component,Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-intor',
  styleUrl: './intor.css',
  templateUrl: './intor.html',
})
export class Intor {
   @Input() employeeName : string = '';
}
