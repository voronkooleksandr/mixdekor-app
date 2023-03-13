import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/services/map.service';
import { Map } from 'src/app/shared/models/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  maps: Map[] = [];

  constructor(private mapService: MapService, activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.maps = this.mapService.getAllMapBySearchTerm(params.searchTerm)
      } else {
        this.maps = this.mapService.getAllMap();
      }
    })
  }

}
