import { Injectable } from '@nestjs/common';
import { ReceiveFileMetadataDto } from '@repo/api';
import { PresignUrlService } from 'src/presign-url/presign-url.service';

@Injectable()
export class FileUploadService {
  constructor( private presignUrlService: PresignUrlService ) {}
  receiveFilesMetaData(filesMetaData: ReceiveFileMetadataDto) {
    console.info(this.presignUrlService.generateFilesPresignedUrl(filesMetaData))
    return filesMetaData;
  }
}
