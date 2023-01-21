import { useAuth } from '@/contexts/auth'
import { backendApi } from '@/utils/backendApi'

export const sendMail = (
    user_id: string,
    reciever_addresses: any,
    subject: string,
    body: string
) => {
    var formData = new FormData()

    formData.append('user_id', user_id)
    formData.append('reciever_addresses', reciever_addresses.join(','))
    formData.append('subject', subject)
    formData.append('body', body)

    backendApi.post('/sendemail/')
}
