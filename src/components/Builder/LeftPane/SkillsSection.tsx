import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxPlusCircled } from 'react-icons/rx'
import { Input } from './Input'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-hot-toast'

export const SkillsSection: FC<{
    skills: Array<any>
    skill?: any
    setSkills: Dispatch<SetStateAction<any>>
}> = ({ skills, setSkills, skill }) => {
    //? states
    const [name, setName] = useState<string>('')

    //? functions
    const addSkill = () => {
        if (name) {
            setSkills((prevEdus: any) => {
                const newExp = {
                    id: uuidv4(),
                    name,
                }
                return [...prevEdus, newExp]
            })

            setName('')
        } else {
            toast.error('Please fill the details before adding next section')
        }
    }

    const deleteSkill = (id: string) => {
        setSkills((prevEdus: any) => {
            return prevEdus.filter((prevExp: any) => prevExp.id !== id)
        })
    }

    //? effects
    useEffect(() => {
        if (skill) {
            setName(skill.name)
        }
    }, [skill])

    return (
        <div
            className={`${
                skill ? 'bg-gray-200' : 'bg-white'
            } col-span-4 flex flex-col gap-3 w-full py-2 px-4`}
        >
            <div className="flex w-full justify-end">
                {skill ? (
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                            <RiDeleteBin5Line
                                onClick={() => deleteSkill(skill.id)}
                                className="h-6 w-6 text-red-500"
                            />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <button
                            onClick={addSkill}
                            className="p-2 rounded-full hover:bg-gray-200 duration-150"
                        >
                            <RxPlusCircled className="h-6 w-6 text-primary" />
                        </button>
                    </div>
                )}
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
