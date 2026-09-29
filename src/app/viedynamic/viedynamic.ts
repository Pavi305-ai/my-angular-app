import { Component,TemplateRef,ViewChild,ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-viedynamic',
  styleUrl: './viedynamic.css',
  templateUrl: './viedynamic.html',
})
export class Viedynamic {
  @ViewChild('container',{read:ViewContainerRef}) container !: ViewContainerRef;
  @ViewChild('employeeTemplate')employeeTemplate!:TemplateRef<any>;
  showEmployee(){
    this.container.createEmbeddedView(this.employeeTemplate);
  }
  removeEmployee(){
    this.container.clear();
  }
}
