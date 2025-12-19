import { Controller, Get } from '@nestjs/common';
import { IngestionOrchestratorService } from './ingestion-orchestrator.service';

@Controller('ingestion-orchestrator')
export class IngestionOrchestratorController {
  constructor(
    private readonly ingestionOrchestratorService: IngestionOrchestratorService,
  ) {
    this.ingestionOrchestratorService = ingestionOrchestratorService;
  }
  @Get()
  public async getAllFilePath() {
    const filePaths = await this.ingestionOrchestratorService.getFilesPath();
    console.info(filePaths);
  }
}
