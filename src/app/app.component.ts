import { Component } from '@angular/core';
import {lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentence();
  enteredText = '';
  

  onInput(value: string) {   
    this.enteredText = value;
  }

  compare(letter:string, enteredText:string){
    if(!enteredText){
      return 'pending';
    }

    return letter === enteredText ? 'correct' : 'incorrect';
   
  
  }

  
}
