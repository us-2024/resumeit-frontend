import { Dispatch, FC, SetStateAction, useState } from 'react'

export const SkillsSection: FC<{
    skills: Array<any>
    setSkills: Dispatch<SetStateAction<any>>
}> = ({ skills, setSkills }) => {
    const [name, setName] = useState<string>('')
    return <div>Skills</div>
}
