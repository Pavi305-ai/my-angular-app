import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dc',
  styleUrl: './dc.css',
  templateUrl: './dc.html',
})
export class Dc {
  selectedDepartment = '';
  selectDepartment(event : Event){
    const dropdown = event.target as HTMLSelectElement;
    this.selectedDepartment=dropdown.value;
  }
}
