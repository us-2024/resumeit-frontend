export interface ResumeProps {
    personal: {
        name: string
        email: string
        phone_number: string
        address: string
        about: string
    }
    experience: Array<{
        company_name: string
        location: string
        from_year: string
        to_year: string
        from_month: string
        to_month: string
        description: string
    }>
    education: Array<{
        institute_name: string
        course_name: string
        from_year: string
        to_year: string
        from_month: string
        to_month: string
        description: string
        present: boolean
    }>
    certifications: Array<{
        name: string
        url: string
    }>
    languages: Array<{
        name: string
    }>
}
