import { useAuth } from '@/contexts/auth'
import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const sendMail = async (
    user_id: string,
    reciever_addresses: any,
    subject: string,
    body: string,
    file: any
) => {
    try {
        var formData = new FormData()

        formData.append('user_id', user_id)
        formData.append('reciever_addresses', reciever_addresses.join(','))
        formData.append('subject', subject)
        formData.append('body', body)
        formData.append('file', file)
        const { data } = await backendApi.post('/sendemail/', {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        toast.success(data.Status)
    } catch (err: any) {
        toast.error(err.message)
    }
}
