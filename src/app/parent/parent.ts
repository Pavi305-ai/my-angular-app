import { Component , viewChild, viewChildren } from '@angular/core';
import { Child } from '../child/child'

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  //one child
  child = viewChild(Child);
  //multiple children
  children = viewChildren(Child);
  showOneChild(){
    console.log(this.child()?.message);
  }
  showAllChildren(){
    this.children().forEach((child)=>{
      console.log(child.message);
    });
  }
}
