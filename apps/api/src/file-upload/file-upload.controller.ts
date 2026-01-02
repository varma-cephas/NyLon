import { Controller, Body, Post } from '@nestjs/common';
import { FileUploadDto } from '@repo/api';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(public fileUploadService: FileUploadService) {}
  @Post()
  receiveFilesMetaData(@Body() files: FileUploadDto) {
    console.info(files);
    return this.fileUploadService.receiveFilesMetaData(files);
  }
}
