import { FC } from 'react'
import { useState } from 'react'
export const Education: FC<{ data?: any }> = ({ data }) => {
    const [instituteName, setInstituteName] = useState('IIT, Bombay')
    const [degree, setDegree] = useState('Computer Science & Engineering')
    const [period, setPeriod] = useState('2020-2024')
    return (
        <div className="flex flex-col">
            <h2 className="border-b-2 font-bold text-xl border-black">
                Education
            </h2>
            {data && data.length ? (
                data.map((education: any) => {
                    return (
                        <div
                            key={education.id}
                            className="flex flex-col"
                        >
                            <div className="flex justify-between p-2">
                                <p>{education.instituteName}</p>
                                <p>
                                    {education.fromMonth}, {education.fromYear}{' '}
                                    - {education.toMonth}, {education.toYear}
                                </p>
                            </div>
                            <div className="flex justify-between p-2">
                                <p>{education.courseName}</p>
                            </div>
                        </div>
                    )
                })
            ) : (
                <div className="flex flex-col">
                    <div className="flex justify-between p-2">
                        <p>{instituteName}</p>
                        <p>{period}</p>
                    </div>
                    <div className="flex justify-between p-2">
                        <p>{degree}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
