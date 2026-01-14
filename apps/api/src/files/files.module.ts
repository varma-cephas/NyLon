import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { PresignUrlService } from './presign-url.service';
import { CacheModule } from 'src/cache/cache.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [FilesService, PresignUrlService],
  controllers: [FilesController],
  imports: [CacheModule, DatabaseModule]
})
export class FilesModule {}


