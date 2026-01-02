import { Test, TestingModule } from '@nestjs/testing';
import { PresignUrlService } from './presign-url.service';

describe('PresignUrlService', () => {
  let service: PresignUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresignUrlService],
    }).compile();

    service = module.get<PresignUrlService>(PresignUrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
