import { IsString, IsNumber } from 'class-validator';

export class ReceiveFileMetadataDto {
  @IsString()
  fileName!: string;

  @IsString()
  fileType!: string;

  @IsNumber()
  fileSize!: number;
}