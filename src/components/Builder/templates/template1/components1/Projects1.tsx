import { FC } from 'react'
import { useState } from 'react'
export const Project: FC<{}> = ({}) => {
    const [project_name,setProjectName]=useState('Portfolio');
const [desc,setDesc]=useState('Lo')
    return(
        <div  className='mt-2 p-2'>
           <h2 className='border-b-2 font-bold text-xl border-black'>Project</h2>
          <div className='p-4' >
            <p>{project_name}</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati hic impedit consequatur. Aliquam quisquam voluptatum explicabo repellendus? Tempore, accusantium ex? Doloribus eveniet at id excepturi, vel nam ad delectus?</p>
            </div>
            <div className='p-4'>
            <p>{project_name}</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati hic impedit consequatur. Aliquam quisquam voluptatum explicabo repellendus? Tempore, accusantium ex? Doloribus eveniet at id excepturi, vel nam ad delectus?</p>
            </div>
            <div className='p-4'>
            <p>{project_name}</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati hic impedit consequatur. Aliquam quisquam voluptatum explicabo repellendus? Tempore, accusantium ex? Doloribus eveniet at id excepturi, vel nam ad delectus?</p>
            </div>
        </div>
    )
}