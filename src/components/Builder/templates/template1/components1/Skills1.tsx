import { FC } from 'react'
import { useState } from 'react'
export const Skills: FC<{}> = ({}) => {
    const [project_name,setProjectName]=useState('Portfolio');
const [desc,setDesc]=useState('Lo')
    return(
        <div className='mt-2 p-2'>
           <h2 className='border-b-2 font-bold text-xl border-black'>Skills</h2>
<ul className='list-disc list-inside p-4'>
    <li>C</li>
    <li>C++</li>
    <li>Java</li>
</ul>
        </div>
    )
    }