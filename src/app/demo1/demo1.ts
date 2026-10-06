import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-demo1',
  standalone : true,
  styleUrl: './demo1.css',
  templateUrl: './demo1.html',
})
export class Demo1 {
  employeeName = 'Pavithra';
  selectedDepartment = '';
  isActive = false;
  message = '';
  //Keyup Event
  getEmployeeName(event:Event){
    const input = event.target as HTMLInputElement;
    this.employeeName = input.value;
  }
  //DropDown change event  
  selectDepartment(event : Event){
    const dropdown = event.target as HTMLSelectElement;
    this.selectedDepartment = dropdown.value;
  }
  // Checkbox change event
  changeStatus(event:Event){
    const chechbox = event.target as HTMLInputElement;
    this.isActive = chechbox.checked;
  }
  //Button Click event
  submitForm(){
    this.message = 'Employee registered successfully';
  }



  student = {
    name: "Pavithra",
    age: 22
  };

  increaseAge() {
    this.student.age++;
  }

}

