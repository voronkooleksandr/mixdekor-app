import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';

describe('MapsService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
