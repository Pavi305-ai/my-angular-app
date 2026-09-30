import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgstyleComponenta } from './ngstyle-componenta/ngstyle-componenta';
import { ComponentB } from './component-b/component-b';
import { Databindingstyle } from './databindingstyle/databindingstyle';
import { Databindingclass } from './databindingclass/databindingclass';
import { Child } from './child/child';
import { Parent } from './parent/parent';

import { Contentp } from './contentp/contentp';
import { Contentc } from './contentc/contentc';
import { Contentpa } from './contentpa/contentpa';
import { Componentpar } from './componentpar/componentpar';
import { Container } from './container/container';
import { Activestatus } from './activestatus/activestatus';
import { Userlogin } from './userlogin/userlogin';
import { Tempref } from './tempref/tempref';
import { Viedynamic } from './viedynamic/viedynamic';

import { Intorp } from './intorp/intorp';
import { Innalp } from './innalp/innalp';
import { Outor } from './outor/outor';
import { Outorp } from './outorp/outorp';
import { Outnalp } from './outnalp/outnalp';
import { Eemtp } from './eemtp/eemtp';
import { TwbIOtors } from './twb-iotors/twb-iotors';
import { TwbIOtorsp } from './twb-iotorsp/twb-iotorsp';
import { TwbmonalP } from './twbmonal-p/twbmonal-p';



@Component({
  imports: [TwbmonalP],
  
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



























