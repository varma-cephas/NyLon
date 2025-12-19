import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyPlaylistInfoService } from './spotify-playlist-info.service';

describe('SpotifyPlaylistInfoService', () => {
  let service: SpotifyPlaylistInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotifyPlaylistInfoService],
    }).compile();

    service = module.get<SpotifyPlaylistInfoService>(SpotifyPlaylistInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
