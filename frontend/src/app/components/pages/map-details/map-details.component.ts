import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/services/map.service';
import { Map } from 'src/app/shared/models/map';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css'],
})
export class MapDetailsComponent {
  
  maps!: Map;

  constructor(
    activatedRoute: ActivatedRoute,
    private mapService: MapService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.maps = this.mapService.getMapById(params.id);
      }
    });
  }
}
