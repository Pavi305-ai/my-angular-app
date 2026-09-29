import { Component } from '@angular/core';
import { Intor } from '../intor/intor';

@Component({
  imports: [Intor],
  selector: 'app-intorp',
  styleUrl: './intorp.css',
  templateUrl: './intorp.html',
})
export class Intorp {
  name = 'Pavithra';
}
