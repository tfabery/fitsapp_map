import { Component, OnInit } from '@angular/core';
declare var google: any;
import { Tour } from './tour.model';
import { Marker } from './marker.model';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
      <h1>Click on the map to design your Tour!</h1>
      <div id="map">
      </div>
      <tour-list></tour-list>
    </div>
  `
})

export class AppComponent {
  public map: any;
  driver: {
    name: 'Robert De Niro'
    tours: Tour[]
  };
  tours: Tour[] = [];
  markers: Marker[] = [];

  ngOnInit() {
    var self = this;
    var mapProp = {
      center: {
        lat: 59.9139,
        lng: 10.7522,
      },
      zoom: 13
    };

    this.map = new google.maps.Map(document.getElementById("map"), mapProp);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        self.map.setCenter(pos);
      });
    }

    this.map.addListener('click', (e) => {
      self.placeMarker(e.latLng);
    });
  }

  placeMarker(pos): void {
    this.markers.push(new google.maps.Marker({
      position: pos,
      map: this.map
    }));
  }
}
