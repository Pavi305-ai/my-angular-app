import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentName = "Pavithra";
  studentAge = 22;

  getStudentName() {
    return this.studentName;
  }

  getStudentAge() {
    return this.studentAge;
  }
}

