import { Module } from '@nestjs/common';
import { IngestionOrchestratorController } from './ingestion-orchestrator.controller';
import { IngestionOrchestratorService } from './ingestion-orchestrator.service';
import { FileScannerModule } from 'src/file-scanner/file-scanner.module';

@Module({
  imports: [FileScannerModule],
  controllers: [IngestionOrchestratorController],
  providers: [IngestionOrchestratorService],
})
export class IngestionOrchestratorModule {}
