import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule, NgClass],
  selector: 'app-ngstyle-componenta',
  styleUrl: './ngstyle-componenta.css',
  templateUrl: './ngstyle-componenta.html',
})
export class NgstyleComponenta {
  employeeName = "Pavithra";
    isActive = true;
   

  changeStatus():void{
    this.isActive = ! this.isActive;
  }
}
