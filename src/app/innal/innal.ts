import { Component,input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-innal',
  styleUrl: './innal.css',
  templateUrl: './innal.html',
})
export class Innal {
  employeeName = input<string>('');
 

}
