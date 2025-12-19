import { Injectable } from '@nestjs/common';
import { FileScannerService } from 'src/file-scanner/file-scanner.service';

@Injectable()
export class IngestionOrchestratorService {
  constructor(private readonly scanFiles: FileScannerService) {
    this.scanFiles = scanFiles;
  }

  public async getFilesPath() {
    return await this.scanFiles.scanStaticFilesDir();
  }
}
