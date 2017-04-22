import { Component, EventEmitter } from '@angular/core';
import { Tour } from './tour.model';

@Component({
  selector: 'new-tour',
  outputs: ['onSubmitNewTour'],
  template: `
  <div>
    <h3>Give your tour a name</h3>
    <input placeholder="Your Tour Name" class="input-lg" #newName>
    <button (click)="addTour(newName)" class="btn-success btn-lg">Add</button>
  </div>
  `
})

export class NewTourComponent {
  public onSubmitNewTour: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTour = new EventEmitter()
  }
  addTour(name: HTMLInputElement){
    this.onSubmitNewTour.emit(name.value);
    name.value="";
  }
}
