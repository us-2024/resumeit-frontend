import { Dispatch, FC, SetStateAction, useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxPlusCircled } from 'react-icons/rx'
import { Input } from './Input'

export const SkillsSection: FC<{
    skills: Array<any>
    setSkills: Dispatch<SetStateAction<any>>
}> = ({ skills, setSkills }) => {
    const [name, setName] = useState<string>('')
    return (
        <div className="col-span-4 flex flex-col gap-3 px-6">
            <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-lg text-primary">Skills</p>
                <div className="flex items-center gap-1">
                    <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                        <RxPlusCircled className="h-6 w-6 text-primary" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                        <RiDeleteBin5Line className="h-6 w-6 text-red-500" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
                <Input
                    placeholder="e.g. Next.js"
                    gridCols={2}
                    inputName="skill"
                    inputType="text"
                    labelName="Skill"
                    setState={setName}
                    state={name}
                />
            </div>
        </div>
    )
}
