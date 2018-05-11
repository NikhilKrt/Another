import { TestBed, inject } from '@angular/core/testing';

import { SevaService } from './seva.service';

describe('SevaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevaService]
    });
  });

  it('should be created', inject([SevaService], (service: SevaService) => {
    expect(service).toBeTruthy();
  }));
});
