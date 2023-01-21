import { ResumeProps } from '@/types/resume'
import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const getResumes = async () => {
    try {
        const { data } = await backendApi.get('/resume/data')
        return data
    } catch (err: any) {
        console.log(err)
        console.log(err.message)
    }
}
