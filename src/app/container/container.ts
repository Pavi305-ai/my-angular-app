import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-container',
  styleUrl: './container.css',
  templateUrl: './container.html',
})
export class Container {
  isLoggedIn = true;
}
