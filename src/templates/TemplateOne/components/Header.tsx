import { FC, useEffect } from 'react'
import { useState } from 'react'
export const Header: FC<{ data?: any | null }> = ({ data }) => {
    const [name, setName] = useState('Kumar Pallav')
    const [email, setEmail] = useState('abc@gmail.com')
    const [contactNumber, setContactNumber] = useState('9876543210')
    const [website, setWebsite] = useState('https://pallavkumar.com')

    useEffect(() => {
        if (data) {
            data.name && setName(data.name)
            data.email && setEmail(data.email)
            data.website && setWebsite(data.website)
            data.phoneNumber && setContactNumber(data.phoneNumber)
        }
    }, [data])
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
                <h2 className="text-3xl font-bold">{name}</h2>
                <span className="">{website}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="">Email: {email}</span>
                <span className="">Contact: {contactNumber}</span>
            </div>
        </div>
    )
}
