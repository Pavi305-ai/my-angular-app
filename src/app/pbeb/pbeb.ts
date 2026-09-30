import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pbeb',
  standalone : true,
  styleUrl: './pbeb.css',
  templateUrl: './pbeb.html',
})
export class PBEB {
  employeeName = 'Pavithra'
  message = '';
  showEmployee(){
    this.message='Employee Name:'+this.employeeName;
  }

}
