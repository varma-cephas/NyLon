import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileScannerService } from './file-scanner/file-scanner.service';
import { FileScannerModule } from './file-scanner/file-scanner.module';
import { SpotifyPlaylistInfoService } from './spotify-playlist-info/spotify-playlist-info.service';
import { SpotifyPlaylistInfoModule } from './spotify-playlist-info/spotify-playlist-info.module';
import { IngestionOrchestratorService } from './ingestion-orchestrator/ingestion-orchestrator.service';
import { IngestionOrchestratorModule } from './ingestion-orchestrator/ingestion-orchestrator.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FileScannerModule,
    SpotifyPlaylistInfoModule,
    IngestionOrchestratorModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FileScannerService,
    SpotifyPlaylistInfoService,
    IngestionOrchestratorService,
  ],
})
export class AppModule {}
