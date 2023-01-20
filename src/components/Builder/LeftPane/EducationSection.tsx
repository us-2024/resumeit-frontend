import { Dispatch, FC, SetStateAction, useState } from 'react'

export const EducationSection: FC<{
    educations: Array<any>
    setEducations: Dispatch<SetStateAction<any>>
}> = ({}) => {
    const [instituteName, setInstituteName] = useState<string>('')
    const [courseName, setCourseName] = useState<string>('')
    const [fromYear, setFromYear] = useState<number>(0)
    const [toYear, setToYear] = useState<number>(0)
    const [isPresentEducation, setIsPresentEducation] = useState<boolean>(false)
    const [educationDescription, setEducationDescription] = useState<string>('')

    return <div></div>
}
