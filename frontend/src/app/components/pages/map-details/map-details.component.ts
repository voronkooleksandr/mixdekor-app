import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MapService } from 'src/app/services/map.service';
import { Map } from 'src/app/shared/models/Map';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css'],
})
export class MapDetailsComponent {
  map!: Map;

  constructor(activatedRoute: ActivatedRoute,
    private mapService: MapService,
    private cartService: CartService,
  private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.map = this.mapService.getMapById(params.id);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.map);
    this.router.navigateByUrl('/cart-page');
  }
}
