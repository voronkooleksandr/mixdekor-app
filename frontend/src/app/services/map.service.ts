import { Injectable } from '@angular/core';
import { dataMaps } from 'src/data';

import {
  MAPS_URL,
  MAPS_BY_SEARCH_URL,
  MAPS_BY_ID_URL,
} from '../shared/constants/urls';
import { Map } from '../shared/models/Map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  getAllMap(): Observable<Map[]> {
    return this.http.get<Map[]>(MAPS_URL);
  }

  getAllMapBySearchTerm(searchTerm: string) {
    return this.http.get<Map[]>(MAPS_BY_SEARCH_URL + searchTerm);
  }

  getMapById(mapId: string): Observable<Map> {
    return this.http.get<Map>(MAPS_BY_ID_URL + mapId);
  }
}
