import { TestBed } from '@angular/core/testing';

import { DatosAbiertosService } from './datos-abiertos.service';

describe('DatosAbiertosService', () => {
  let service: DatosAbiertosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAbiertosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
