import { FC } from 'react'
import { useState } from 'react'
export const Experience: FC<{ data?: any }> = ({ data }) => {
    const [companyName, setCompanyName] = useState('Microsoft')
    const [desc, setDesc] = useState('Description')
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Experience</h2>
            <hr className="bg-black h-0.5" />
            {data && data.length ? (
                data.map((exp: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="font-semibold bold">
                                        {exp.companyName}
                                    </span>
                                    <span className="italic">
                                        {exp.jobRole}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    {exp.location}
                                    <div>
                                        {exp.fromMonth}, {exp.fromYear} -{' '}
                                        {exp.toMonth}, {exp.toYear}
                                    </div>
                                </div>
                            </div>
                            <p>{exp.description}</p>
                        </div>
                    )
                })
            ) : (
                <div className="flex flex-col gap-2">
                    <div className="p-4">
                        <p>{companyName}</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint obcaecati hic impedit consequatur.
                            Aliquam quisquam voluptatum explicabo repellendus?
                            Tempore, accusantium ex? Doloribus eveniet at id
                            excepturi, vel nam ad delectus?
                        </p>
                    </div>
                    <div className="p-4">
                        <p>{companyName}</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint obcaecati hic impedit consequatur.
                            Aliquam quisquam voluptatum explicabo repellendus?
                            Tempore, accusantium ex? Doloribus eveniet at id
                            excepturi, vel nam ad delectus?
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
