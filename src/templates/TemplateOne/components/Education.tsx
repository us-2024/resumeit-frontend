import { FC } from 'react'
import { useState } from 'react'
export const Education: FC<{ data?: any }> = ({ data }) => {
    const [instituteName, setInstituteName] = useState('IIT, Bombay')
    const [degree, setDegree] = useState('Computer Science & Engineering')
    const [period, setPeriod] = useState('2020-2024')
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">Education</h2>
            <hr className="bg-black h-0.5" />
            <div className="flex flex-col gap-3 pt-3">
                {data && data.length ? (
                    data.map((education: any) => {
                        return (
                            <div
                                key={education.id}
                                className="flex flex-col"
                            >
                                <div className="flex justify-between">
                                    <p>{education.instituteName}</p>
                                    <p>
                                        {education.fromMonth},{' '}
                                        {education.fromYear} -{' '}
                                        {education.toMonth}, {education.toYear}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p>{education.courseName}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p>{instituteName}</p>
                            <p>{period}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>{degree}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
