import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { FileUploadService } from './file-upload/file-upload.service';
import { FileUploadController } from './file-upload/file-upload.controller';
import { PresignUrlService } from './presign-url/presign-url.service';

@Module({
  imports: [],
  controllers: [AppController, FileUploadController],
  providers: [AppService, FileUploadService, PresignUrlService],
})
export class AppModule {}
