import { Marker } from './marker.model';

export class Tour {
  public waypoints: Marker[];
  constructor(public name: string, public id: number){}
}
