import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgstyleComponenta } from './ngstyle-componenta/ngstyle-componenta';
import { ComponentB } from './component-b/component-b';
import { Databindingstyle } from './databindingstyle/databindingstyle';
import { Databindingclass } from './databindingclass/databindingclass';

@Component({
  imports: [Databindingclass],
  
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  /*string interpolation */
  // ProjectName = "Angular";
  // Title       = "Basic App"

  // name = 'Pavi';
  // course = 'Angular';
  // age ='15';
  // city ='A.P';





  //property databinding
// customerRole = "Admin"

// customInputType = "chechbox";
// name = "pavi";

// studentName = "Pavi";
// isButtonDisabled = true;
// message = "Welcome to Angular Property Binding";

//Event binding

 message = "Button click ";
 showMessage(){
  this.message = "Button Successfully clicked!";
 }
}



























