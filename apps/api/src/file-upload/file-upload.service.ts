import { Injectable } from '@nestjs/common';
import { FileUploadDto } from '@repo/api';

@Injectable()
export class FileUploadService {
  receiveFilesMetaData(files: FileUploadDto) {
    return files;
  }
}
