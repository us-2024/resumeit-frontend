export interface ResumeProps {
    templateId?: string
    resumeId?: string
    personal: {
        name: string
        email: string
        phoneNumber: string
        address: string
        website: string
        about: string
    }
    experience: Array<{
        companyName: string
        jobRole: string
        location: string
        fromYear: string
        toYear: string
        fromMonth: string
        toMonth: string
        description: string
    }>
    education: Array<{
        instituteName: string
        courseName: string
        fromYear: string
        toYear: string
        fromMonth: string
        toMonth: string
        description: string
        present: boolean
    }>
    certifications: Array<{
        name: string
        url: string
    }>
    projects: Array<{
        name: string
        url: string
        description: string
    }>
    skills: Array<{
        name: string
    }>
    languages: Array<{
        name: string
    }>
}
