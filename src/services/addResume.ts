import { ResumeProps } from '@/types/resume'
import { api } from '@/utils/api'
import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const addResume = async ({
    templateId,
    certifications,
    education,
    experience,
    projects,
    skills,
    languages,
    personal,
}: ResumeProps) => {
    try {
        const { data } = await backendApi.post(
            '/add/resume?template_id=' + templateId,
            {
                certifications,
                projects,
                skills,
                education,
                experience,
                languages,
                personal,
            }
        )
        toast.success(data.message)
    } catch (err: any) {
        console.log(err)
        console.log(err.message)
    }
}
