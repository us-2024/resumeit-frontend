import { FC } from 'react'
import { Header } from './components/Header'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Project } from './components/Projects'
import { Skills } from './components/Skills'

export const TemplateOne: FC<{ data?: any }> = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <Header data={data.personal} />
            <br></br>
            <Education data={data.educations} />
            <Experience data={data.experiences} />
            <Project data={data.projects} />
            <Skills data={data.skills} />
        </div>
    )
}
