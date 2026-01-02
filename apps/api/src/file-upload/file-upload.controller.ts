import { Controller, Body, Post } from '@nestjs/common';
import { ReceiveFileMetadataDto } from '@repo/api';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(public fileUploadService: FileUploadService) {}
  @Post('metadata')
  receiveFilesMetaData(@Body() files: ReceiveFileMetadataDto) {
    console.info(files);
    return this.fileUploadService.receiveFilesMetaData(files);
  }
}
