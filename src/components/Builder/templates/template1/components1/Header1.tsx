import { FC } from 'react'
import { useState } from 'react'
export const Header: FC<{}> = ({}) => {
const [name,setName]=useState('Kumar Pallav');
const [email,setEmail]=useState('abc@gmail.com');
const [contact_number,setContact_Number]=useState('123456789');
    return(
        <div>
            <div className='flex  justify-between'>
                <h2 className='pt-6 text-3xl font-bold'>{name}</h2>
                <span className='mt-8' >Email:{email}</span>
            </div>
            <div className='flex mt-0'>
                <span className='absolute right-1'>Contact:{contact_number}</span>
            </div>
        </div>
    )
}