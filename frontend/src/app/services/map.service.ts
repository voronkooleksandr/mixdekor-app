import { Injectable } from '@angular/core';
import { dataMaps } from 'src/data';
import { Map } from '../shared/models/Map';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}

  getAllMap(): Map[] {
    return dataMaps;
  }

  getAllMapBySearchTerm(searchTerm: string) {
    return this.getAllMap().filter((map) =>
      map.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getMapById(mapId: string): Map {
    return this.getAllMap().find((map) => map.id === mapId) ?? new Map();
  }
}
