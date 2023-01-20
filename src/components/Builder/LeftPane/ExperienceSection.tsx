import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Input } from './Input'
import { RxPlusCircled } from 'react-icons/rx'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { TextArea } from './TextArea'
import { DateSelect } from '@/components/Common/DateSelect'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
import { TiTickOutline } from 'react-icons/ti'
import { BsPencilSquare } from 'react-icons/bs'

export const ExperienceSection: FC<{
    experiences: Array<any>
    experience?: any
    setExperiences: Dispatch<SetStateAction<any>>
}> = ({ experiences, setExperiences, experience }) => {
    //? states
    const [companyName, setCompanyName] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [fromMonth, setFromMonth] = useState<number | null>(null)
    const [toMonth, setToMonth] = useState<number | null>(null)
    const [fromYear, setFromYear] = useState<number | null>(null)
    const [toYear, setToYear] = useState<number | null>(null)
    const [description, setDescription] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [jobRole, setJobRole] = useState<string>('')

    //? functions
    const editExperience = (id: string) => {
        setExperiences((prevEdus: any) => {
            const newEdus = prevEdus.map((prevEdu: any) => {
                if (prevEdu.id === id) {
                    return {
                        id,
                        companyName,
                        location,
                        fromMonth,
                        toMonth,
                        fromYear,
                        toYear,
                        jobRole,
                        description,
                    }
                } else return prevEdu
            })

            return newEdus
        })
        setIsEdit(false)
    }
    const addExperience = () => {
        if (
            companyName ||
            location ||
            fromMonth ||
            toMonth ||
            fromYear ||
            toYear ||
            jobRole ||
            description
        ) {
            setExperiences((prevExps: any) => {
                const newExp = {
                    id: uuidv4(),
                    companyName,
                    location,
                    fromMonth,
                    toMonth,
                    fromYear,
                    toYear,
                    jobRole,
                    description,
                }
                return [...prevExps, newExp]
            })

            setCompanyName('')
            setLocation('')
            setFromMonth(null)
            setToMonth(null)
            setFromYear(null)
            setToYear(null)
            setDescription('')
            setJobRole('')
        } else {
            toast.error('Please fill the details before adding next section')
        }
    }

    const deleteExperience = (id: string) => {
        setExperiences((prevExps: any) => {
            return prevExps.filter((prevExp: any) => prevExp.id !== id)
        })
    }

    //? effects
    useEffect(() => {
        if (experience) {
            setCompanyName(experience.companyName)
            setLocation(experience.location)
            setFromMonth(experience.fromMonth)
            setToMonth(experience.toMonth)
            setFromYear(experience.fromYear)
            setToYear(experience.toYear)
            setJobRole(experience.jobRole)
            setDescription(experience.description)
        }
    }, [experience])

    return (
        <div
            className={`${
                experience ? 'bg-gray-200' : 'bg-white'
            } col-span-4 flex flex-col gap-3 w-full py-2 px-4`}
        >
            <div className="flex w-full justify-end">
                {experience ? (
                    isEdit ? (
                        <div className="flex items-center">
                            <button className="p-2 rounded-full hover:bg-gray-300 duration-150">
                                <RiDeleteBin5Line
                                    onClick={() =>
                                        deleteExperience(experience.id)
                                    }
                                    className="h-6 w-6 text-red-500"
                                />
                            </button>
                            <button
                                onClick={() => editExperience(experience.id)}
                                className="p-1 rounded-full hover:bg-gray-300 duration-150"
                            >
                                <TiTickOutline className="text-green-500 h-8 w-8" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsEdit(true)}
                            className="p-2 rounded-full hover:bg-gray-300 duration-150"
                        >
                            <BsPencilSquare />
                        </button>
                    )
                ) : (
                    <div className="flex items-center gap-1">
                        <button
                            onClick={addExperience}
                            className="p-2 rounded-full hover:bg-gray-200 duration-150"
                        >
                            <RxPlusCircled className="h-6 w-6 text-primary" />
                        </button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-4 gap-3">
                <Input
                    placeholder="e.g. XYZ Company"
                    gridCols={2}
                    inputName="companyName"
                    disabled={experience && !isEdit}
                    inputType="text"
                    labelName="Company Name"
                    setState={setCompanyName}
                    state={companyName}
                />
                <Input
                    placeholder="e.g. SDE"
                    gridCols={2}
                    inputName="jobRole"
                    disabled={experience && !isEdit}
                    inputType="text"
                    labelName="Job Role"
                    setState={setJobRole}
                    state={jobRole}
                />
                <Input
                    placeholder="e.g. Udaipur"
                    gridCols={4}
                    inputName="location"
                    disabled={experience && !isEdit}
                    inputType="text"
                    labelName="Location"
                    setState={setLocation}
                    state={location}
                />
                <DateSelect
                    gridCols={2}
                    placeholder="From month"
                    setMonth={setFromMonth}
                    setYear={setFromYear}
                    month={fromMonth}
                    year={fromYear}
                />
                <DateSelect
                    placeholder="To month"
                    gridCols={2}
                    setMonth={setToMonth}
                    setYear={setToYear}
                    month={toMonth}
                    year={toYear}
                />
                <TextArea
                    gridCols={4}
                    inputName="description"
                    disabled={experience && !isEdit}
                    inputType="text"
                    labelName="Description"
                    placeholder="e.g. Worked on the frontend part..."
                    setState={setDescription}
                    state={description}
                />
            </div>
        </div>
    )
}
