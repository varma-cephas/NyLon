import { Module } from '@nestjs/common';
import { FileScannerService } from './file-scanner.service';

@Module({
  providers: [FileScannerService],
  exports: [FileScannerService],
})
export class FileScannerModule {}
