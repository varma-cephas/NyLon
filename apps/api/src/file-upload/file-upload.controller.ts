import { Controller, Body, Post, Logger } from '@nestjs/common';
import { ReceiveFileMetadataDto, ReceiveFileMetadataWithPresignUrlDto } from '@repo/api';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(public fileUploadService: FileUploadService, private readonly logger: Logger) {}
  @Post('metadata')
  async receiveFilesMetaData(@Body() filesMetaData: ReceiveFileMetadataDto) {
    const filesWithPresignUrl: ReceiveFileMetadataWithPresignUrlDto = await this.fileUploadService.addPresignUrlToFilesMetadata(filesMetaData)
    this.logger.log(filesWithPresignUrl)
    return filesWithPresignUrl
  }
}
