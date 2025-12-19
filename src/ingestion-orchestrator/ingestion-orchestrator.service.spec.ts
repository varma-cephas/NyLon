import { Test, TestingModule } from '@nestjs/testing';
import { IngestionOrchestratorService } from './ingestion-orchestrator.service';

describe('IngestionOrchestratorService', () => {
  let service: IngestionOrchestratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngestionOrchestratorService],
    }).compile();

    service = module.get<IngestionOrchestratorService>(IngestionOrchestratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
