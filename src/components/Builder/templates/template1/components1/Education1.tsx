import { FC } from 'react'
import { useState } from 'react'
export const Education: FC<{}> = ({}) => {
    const [institute_name,setInstituteName]=useState('IIT');
const [degree,setDegree]=useState('Cse');
const [city,setCity]=useState('Mumbai');
const[period,setPeriod]=useState('2020-2024')
    return(
        <div className='mt-2 p-2'>
           <h2 className='border-b-2 font-bold text-xl border-black'>Education</h2>
          <div className='flex justify-between p-2'>
            <p>{institute_name}</p>
            <p className='mr-2'>{city}</p>
            </div>
          <div className='flex justify-between p-2'>
           <p> {degree}</p>
           <p>{period}</p>
            </div>
        </div>
    )
}
