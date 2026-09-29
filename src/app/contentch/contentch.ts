import { Component,contentChild,ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contentch',
  styleUrl: './contentch.css',
  templateUrl: './contentch.html',
})
export class Contentch {
  message = contentChild<ElementRef>('message');
}
