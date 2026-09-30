import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cc',
  styleUrl: './cc.css',
  templateUrl: './cc.html',
})
export class CC {
  isActive = false;
  changeStatus(event:Event){
    const chechbox = event.target as HTMLInputElement;
    this.isActive=chechbox.checked;
  }
}
