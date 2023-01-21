import { FC } from 'react'
import { useState } from 'react'
export const Skills: FC<{ data?: any }> = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl ">Skills</h2>
            <hr className="bg-black h-0.5" />
            <ul className="list-disc list-inside">
                {data.map((skill: any, index: any) => {
                    return <li key={index}>{skill.name}</li>
                })}
            </ul>
        </div>
    )
}
