import { FC } from 'react'
import { useState } from 'react'
export const Project: FC<{ data?: any }> = ({ data }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Projects</h2>
            <hr className="bg-black h-0.5" />
            <div className="flex flex-col gap-3">
                {data.map((project: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col"
                        >
                            <p className="font-semibold">{project.name}</p>
                            <p>{project.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
