import { Injectable } from '@nestjs/common';
import { ReceiveFileMetadataDto } from '@repo/api';

@Injectable()
export class FileUploadService {
  receiveFilesMetaData(files: ReceiveFileMetadataDto) {
    return files;
  }
}
