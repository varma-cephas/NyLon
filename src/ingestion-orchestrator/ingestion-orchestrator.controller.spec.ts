import { Test, TestingModule } from '@nestjs/testing';
import { IngestionOrchestratorController } from './ingestion-orchestrator.controller';

describe('IngestionOrchestratorController', () => {
  let controller: IngestionOrchestratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngestionOrchestratorController],
    }).compile();

    controller = module.get<IngestionOrchestratorController>(IngestionOrchestratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
