import { Inject, Injectable } from '@nestjs/common';
import { ReceiveFileMetadataDto } from '@repo/api';
import { PresignUrlService } from './presign-url.service';
import { CacheService } from 'src/cache/cache.service';
import { DATABASE_CONNECTION } from 'src/database/database.connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "./files.schema"

@Injectable()
export class FilesService {
    constructor( @Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema> , private presignUrlService: PresignUrlService, private cacheService: CacheService ) {}
    async addPresignUrlToFilesMetadata(filesMetaData: ReceiveFileMetadataDto) {
      const data = await this.presignUrlService.generateFilesPresignedUrl(filesMetaData)
      data.files.forEach(file => this.cacheService.put(file.fileId, { fileId: file.fileId, fileName: file.fileName, fileSize: file.fileSize, fileType: file.fileType, storageKey: `${file.fileId}-${file.fileName}` }, {expirationTtl: null}))
      return data
    }
    async confirmUpload(fileIds:{ id: string []}){
      for(const id of fileIds.id){
       const cachedFile = await this.cacheService.get(id)
       if(cachedFile){
        const insertFile: typeof schema.file.$inferInsert = {
          fileId: cachedFile.fileId,
          fileName: cachedFile.fileName,
          fileSize: cachedFile.fileSize,
          fileType: cachedFile.fileType,
          storageKey: cachedFile.storageKey
        }
        try{ 
          await this.database.insert(schema.file).values(insertFile)
          console.info('item added successfully')
        }catch(error){
          console.error(error)
        }
       }
      }
      return fileIds.id
    }
}

