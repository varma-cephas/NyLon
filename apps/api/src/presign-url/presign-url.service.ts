import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PresignUrlService {
    constructor(private configService: ConfigService) {}
    private presignUrl(file: any){
        console.info(this.configService.getOrThrow('DATABASE_USER'))
        return file
    }
    generateFilesPresignedUrl(files: any){
        return this.presignUrl(files)
    }
}
