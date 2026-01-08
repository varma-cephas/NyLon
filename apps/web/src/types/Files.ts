import type { FileMetaDataWithPresignUrlDTO } from '@repo/api'
import type { Dispatch, SetStateAction } from 'react'
import type { DragEvent } from 'react'
import type { Children } from './GeneralTypes'


export interface FilesType extends FileMetaDataWithPresignUrlDTO {
  fileRawInfo: File
}

export interface PickFilePropTypes {
  setFiles: Dispatch<SetStateAction<Array<FilesType> | null>>
}

export interface FileListType {
  files: Array<FilesType> | null
  setFiles: Dispatch<SetStateAction<Array<FilesType> | null>>
  uploads: {[key: string]: { progress: number, status: string }}
}

export interface DragDropType extends Children {
  handleFileDrop: (event: DragEvent<Element>) => void
  hanldeDragOver: (event: DragEvent<Element>) => void
  handleDragLeave: (event: DragEvent<Element>) => void
  handleDragEnter: (event: DragEvent<Element>) => void
}
