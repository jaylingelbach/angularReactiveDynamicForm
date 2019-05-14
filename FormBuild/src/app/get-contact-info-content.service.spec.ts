import { TestBed } from '@angular/core/testing';

import { GetContactInfoContentService } from './get-contact-info-content.service';

describe('GetContactInfoContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetContactInfoContentService = TestBed.get(GetContactInfoContentService);
    expect(service).toBeTruthy();
  });
});
