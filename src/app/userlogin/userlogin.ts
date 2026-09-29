import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-userlogin',
  styleUrl: './userlogin.css',
  templateUrl: './userlogin.html',
})
export class Userlogin {
  isLoggedIn = true;
  users = ['Pavithra','Giridhar','Mahendra']
}
