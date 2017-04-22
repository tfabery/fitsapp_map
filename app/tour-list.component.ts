import { Component, EventEmitter } from '@angular/core';
import { Tour } from './tour.model';

@Component({
  selector: 'tour-list',
  outputs: ['onSelectedKeg'],
  template: `
  <new-tour (onSubmitNewTour) = "createTour($event)"></new-tour>
  <h1>Tour List</h1>
  <div *ngIf="tourList.length > 0">
    <tour-item *ngFor="let tour of tourList" [tour]="tour"  (click)="editTour(tour)">
      <p>{{tour.name}}</p>
    </tour-item>
  </div>
  <div *ngIf="tourList.length === 0">
    <h2>Create a Tour and drag your waypoints in it!</h2>
  </div>
  `
})

export class TourListComponent {
  public tourList: Tour[] = [];
  public onSelectedTour: EventEmitter<Tour>;
  public selectedTour: Tour;
  constructor() {
    this.onSelectedTour = new EventEmitter();
  }

  createTour(name: string): void {
    this.tourList.push(
      new Tour(name, this.tourList.length)
    );
  }
}
