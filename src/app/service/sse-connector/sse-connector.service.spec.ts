import { TestBed } from '@angular/core/testing';

import { SseConnectorService } from './sse-connector.service';

describe('SseConnectorService', () => {
  let service: SseConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
