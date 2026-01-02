import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/api/axios'

export function useFileUpload() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (files: Array<File>) => {
      if (!files.length) throw new Error('No files were provided.')
      const { data } = await api.post('/file-upload/metadata', {})
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] })
    },
  })
}
