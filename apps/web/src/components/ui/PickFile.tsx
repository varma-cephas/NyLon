import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface PropTypes {
  setFiles: Dispatch<SetStateAction<Array<File> | null>>
}
export default function PickFile({ setFiles }: PropTypes) {
  const handleFileSelect = (event: ChangeEvent<EventTarget>) => {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.files) {
        const selectedFiles = Array.from(event.target.files)
        setFiles(prevDroppedFiles => {
          if (!prevDroppedFiles) return selectedFiles
          const uniqueNewFiles = selectedFiles.filter(
            newFile =>
              !prevDroppedFiles.some(
                prevFile =>
                  prevFile.name === newFile.name &&
                  prevFile.size === newFile.size
              )
          )
          return [...prevDroppedFiles, ...uniqueNewFiles]
        })
      } else {
        setFiles(null)
        return
      }
    }
  }
  return (
    <>
      <input
        type="file"
        id="browseFile"
        name="browseFile"
        onChange={handleFileSelect}
        className="hidden"
      />
      <label className="underline pl-1 cursor-pointer" htmlFor="browseFile">
        Browse.
      </label>
    </>
  )
}
