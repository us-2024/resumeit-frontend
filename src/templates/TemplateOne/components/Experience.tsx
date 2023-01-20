import { FC } from 'react'
import { useState } from 'react'
export const Experience: FC<{ data?: any }> = ({ data }) => {
    const [company_name, setCompanyName] = useState('Microsoft')
    const [desc, setDesc] = useState('Description')
    return (
        <div className="mt-2 p-2">
            <h2 className="border-b-2 text-xl font-bold border-black">
                Experience
            </h2>
            <div className="p-4">
                <p>{company_name}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint obcaecati hic impedit consequatur. Aliquam quisquam
                    voluptatum explicabo repellendus? Tempore, accusantium ex?
                    Doloribus eveniet at id excepturi, vel nam ad delectus?
                </p>
            </div>
            <div className="p-4">
                <p>{company_name}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint obcaecati hic impedit consequatur. Aliquam quisquam
                    voluptatum explicabo repellendus? Tempore, accusantium ex?
                    Doloribus eveniet at id excepturi, vel nam ad delectus?
                </p>
            </div>
        </div>
    )
}
