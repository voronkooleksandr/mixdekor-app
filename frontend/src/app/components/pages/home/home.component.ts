import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MapService } from 'src/app/services/map.service';
import { Map } from 'src/app/shared/models/Map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  maps: Map[] = [];

  constructor(private mapService: MapService, activatedRoute: ActivatedRoute) {

    let mapsObservable: Observable<Map[]>;

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        mapsObservable = this.mapService.getAllMapBySearchTerm(params.searchTerm);
      else
        mapsObservable = this.mapService.getAllMap();

        mapsObservable.subscribe((serverMaps) => {
          this.maps = serverMaps;
        })
    });
  }
}
