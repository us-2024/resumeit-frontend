import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Input } from './Input'
import { RxPlusCircled } from 'react-icons/rx'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { TextArea } from './TextArea'
import { DateSelect } from '@/components/Common/DateSelect'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

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

    //? functions
    const addExperience = () => {
        if (
            companyName ||
            location ||
            fromMonth ||
            toMonth ||
            fromYear ||
            toYear ||
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
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                            <RiDeleteBin5Line
                                onClick={() => deleteExperience(experience.id)}
                                className="h-6 w-6 text-red-500"
                            />
                        </button>
                    </div>
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
                    inputType="text"
                    labelName="Company Name"
                    setState={setCompanyName}
                    state={companyName}
                />
                <Input
                    placeholder="e.g. Udaipur"
                    gridCols={2}
                    inputName="location"
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
