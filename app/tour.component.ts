import { Component, EventEmitter } from '@angular/core';
import { Tour } from './tour.model';

@Component({
  selector: 'tour-item',
  inputs: ['tour'],
  template:
    `
      <div>
        <p>{{tour.name}}</p>
      </div>
    `
})

export class TourComponent {
  public tour: Tour;
  
}
