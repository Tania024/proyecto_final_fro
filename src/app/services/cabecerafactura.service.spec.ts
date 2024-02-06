import { TestBed } from '@angular/core/testing';

import { CabecerafacturaService } from './cabecerafactura.service';

describe('CabecerafacturaService', () => {
  let service: CabecerafacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabecerafacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
