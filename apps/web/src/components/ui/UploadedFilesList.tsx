import { X } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

interface FileList {
  files: Array<File> | null
  setFiles: Dispatch<SetStateAction<Array<File> | null>>
}
export default function UploadedFilesList({ files, setFiles }: FileList) {
  function handleRemoveFile(fileIndex: number) {
    setFiles(prevFiles => {
      if (!prevFiles) return []
      return prevFiles.filter((_, ind) => ind !== fileIndex)
    })
  }
  return (
    <div>
      {files !== null && files.length ? (
        <ul>
          {files.map((file: { name: string; size: number }, index: number) => (
            <li
              key={index}
              className="border flex justify-between w-80 p-2 rounded-md mb-2"
            >
              <div>
                <span className="block">{file.name}</span>
                <span className="block">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>
              <X
                className="cursor-pointer"
                onClick={() => handleRemoveFile(index)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No files yet</p>
      )}
    </div>
  )
}
