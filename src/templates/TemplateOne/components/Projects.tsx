import { FC } from 'react'
import { useState } from 'react'
export const Project: FC<{ data?: any }> = ({ data }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="border-b-2 font-bold text-xl border-black">
                Projects
            </h2>
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
