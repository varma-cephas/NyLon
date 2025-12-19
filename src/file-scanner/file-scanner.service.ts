import { Injectable, Logger } from '@nestjs/common';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileScannerService {
  private readonly logger = new Logger(FileScannerService.name);

  constructor(private configService: ConfigService) {}

  async scanStaticFilesDir(): Promise<string[]> {
    // Get path from .env or default to a local folder
    const staticFilesDir = this.configService.get<string>('STATIC_FILES_DIR');

    if (!staticFilesDir) {
      this.logger.error('STATIC_FILES_DIR is not defined in .env');
      return [];
    }

    return this._recursiveScan(staticFilesDir);
  }

  private async _recursiveScan(
    currentDir: string,
    relativePath = '',
  ): Promise<string[]> {
    const fileKeys: string[] = [];

    try {
      const entries = await readdir(currentDir);

      for (const entry of entries) {
        if (entry.startsWith('.')) continue; // Ignore hidden files

        const fullPath = join(currentDir, entry);
        const newRelativePath = join(relativePath, entry);
        const fileStats = await stat(fullPath);

        if (fileStats.isDirectory()) {
          const nestedFiles = await this._recursiveScan(
            fullPath,
            newRelativePath,
          );
          fileKeys.push(...nestedFiles);
        } else if (fileStats.isFile()) {
          // You might want to filter for music/video extensions here
          fileKeys.push(newRelativePath);
        }
      }
    } catch (error) {
      this.logger.error(`Error scanning directory ${currentDir}: ${error}`);
    }

    return fileKeys;
  }
}
