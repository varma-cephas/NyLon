import { FileMetaDataWithPresignUrlDTO } from '@repo/api';

export interface IKVStore {
  get(key: string): Promise<FileMetaDataWithPresignUrlDTO | null>;
  put(key: string, value: FileMetaDataWithPresignUrlDTO, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
}