import { FC } from 'react'
import { Header } from './components/Header'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Project } from './components/Projects'
import { Skills } from './components/Skills'

export const TemplateOne: FC<{ data?: any }> = ({ data }) => {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <br></br>
            <Education />
            <Experience />
            <Project />
            <Skills />
        </div>
    )
}
