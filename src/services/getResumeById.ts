import { ResumeProps } from '@/types/resume'
import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const getResumeById = async (id: string) => {
    try {
        const { data } = await backendApi.get(
            '/resume/data/show?resume_id=' + id
        )
        return data
    } catch (err: any) {
        console.log(err)
        console.log(err.message)
    }
}
