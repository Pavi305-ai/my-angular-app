import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-in-tkup',
  standalone : true,
  styleUrl: './in-tkup.css',
  templateUrl: './in-tkup.html',
})
export class InTKUP {
  employeeName = '';
  getEmployeeName(event:Event){
    const input = event.target as HTMLInputElement;
    this.employeeName = input.value;
  }
}
