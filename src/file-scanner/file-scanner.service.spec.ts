import { Test, TestingModule } from '@nestjs/testing';
import { FileScannerService } from './file-scanner.service';

describe('FileScannerService', () => {
  let service: FileScannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileScannerService],
    }).compile();

    service = module.get<FileScannerService>(FileScannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
