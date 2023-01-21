import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const sendMail = async (
    user_id: string,
    reciever_addresses: any,
    subject: string,
    body: string,
    file: File | Blob
) => {
    try {
        const formData = new FormData()

        formData.append('user_id', user_id)
        formData.append('reciever_addresses', reciever_addresses.join(','))
        formData.append('subject', subject)
        formData.append('body', body)
        formData.append('file', file)

        const { data } = await backendApi.post('/sendemail/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        toast.success('Sent')
    } catch (err: any) {
        toast.error(err.message)
    }
}
