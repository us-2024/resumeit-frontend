import { ResumeProps } from '@/types/resume'
import { api } from '@/utils/api'
import { toast } from 'react-hot-toast'

export const addResume = async ({
    certifications,
    education,
    experience,
    languages,
    personal,
}: ResumeProps) => {
    try {
        const { data } = await api.post('/', {
            certifications,
            education,
            experience,
            languages,
            personal,
        })
        toast.success(data.message)
    } catch (err: any) {
        console.log(err.message)
    }
}
