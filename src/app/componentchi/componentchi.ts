import { Component, contentChildren, ElementRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-componentchi',
  styleUrl: './componentchi.css',
  templateUrl: './componentchi.html',
})
export class Componentchi {
  items = contentChildren<ElementRef>('item');
}
