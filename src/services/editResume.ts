import { ResumeProps } from '@/types/resume'
import { api } from '@/utils/api'
import { backendApi } from '@/utils/backendApi'
import { toast } from 'react-hot-toast'

export const editResume = async ({
    resumeId,
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
            '/update/resume?resume_id=' + resumeId,
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
