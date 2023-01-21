import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const convertPdf = async (user_id: string, file: File | Blob) => {
    try {
        const formData = new FormData()

        formData.append('user_id', user_id)
        formData.append('file', file)

        const { data } = await backendApi.post('/get/pdf', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return data
    } catch (err: any) {
        toast.error(err.message)
    }
}
