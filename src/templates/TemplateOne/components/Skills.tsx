import { FC } from 'react'
import { useState } from 'react'
export const Skills: FC<{ data?: any }> = ({ data }) => {
    return (
        <div className="mt-2 p-2">
            <h2 className="border-b-2 font-bold text-xl border-black">
                Skills
            </h2>
            <ul className="list-disc list-inside p-4">
                {data.map((skill: any, index: any) => {
                    return <li key={index}>{skill.name}</li>
                })}
            </ul>
        </div>
    )
}
