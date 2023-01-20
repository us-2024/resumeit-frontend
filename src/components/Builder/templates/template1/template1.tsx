import { FC } from 'react'
import { Header } from './components1/Header1'
import {Education} from './components1/Education1'
import {Experience} from './components1/Experience'
import {Project} from './components1/Projects1'
import {Skills} from './components1/Skills1'
export const Template1: FC<{}> = ({}) => {
    return (<div>
        <Header/>
        <br></br>
        <Education />
        <Experience/>
        <Project/>
        <Skills/>
        </div>)
}