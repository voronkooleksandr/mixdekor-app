import { Component } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { Map } from 'src/app/shared/models/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  maps: Map[] = [];

  constructor(private mapService: MapService) {
      this.maps = this.mapService.getAllMap();
  }

}
