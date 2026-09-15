import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-component-b',
  styleUrl: './component-b.css',
  templateUrl: './component-b.html',
})
export class ComponentB {

  role = "Developer";

  changeRole() {
    if (this.role === "Developer") {
      this.role = "Tester";
    } else {
      this.role = "Developer";
    }
  }
}
