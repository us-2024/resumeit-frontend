import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxPlusCircled } from 'react-icons/rx'
import { v4 as uuidv4 } from 'uuid'
import { Input } from './Input'
import { DateSelect } from '@/components/Common/DateSelect'
import { Toggle } from './Toggle'

export const EducationSection: FC<{
    educations: Array<any>
    education?: any
    setEducations: Dispatch<SetStateAction<any>>
}> = ({ education, educations, setEducations }) => {
    const [instituteName, setInstituteName] = useState<string>('')
    const [courseName, setCourseName] = useState<string>('')
    const [fromMonth, setFromMonth] = useState<number | null>(null)
    const [toMonth, setToMonth] = useState<number | null>(null)
    const [fromYear, setFromYear] = useState<number | null>(null)
    const [toYear, setToYear] = useState<number | null>(null)
    const [isPresentEducation, setIsPresentEducation] = useState<boolean>(false)
    const [description, setDescription] = useState<string>('')

    //? functions
    const addEducation = () => {
        if (instituteName || courseName || fromYear || toYear || description) {
            setEducations((prevEdus: any) => {
                const newExp = {
                    id: uuidv4(),
                    instituteName,
                    courseName,
                    fromYear,
                    toYear,
                    isPresentEducation,
                    description,
                }
                return [...prevEdus, newExp]
            })

            setInstituteName('')
            setCourseName('')
            setFromYear(null)
            setToYear(null)
            setIsPresentEducation(false)
            setDescription('')
        } else {
            toast.error('Please fill the details before adding next section')
        }
    }

    const deleteEducation = (id: string) => {
        setEducations((prevEdus: any) => {
            return prevEdus.filter((prevExp: any) => prevExp.id !== id)
        })
    }

    //? effects
    useEffect(() => {
        if (education) {
            setInstituteName(education.instituteName)
            setCourseName(education.courseName)
            setFromYear(education.fromYear)
            setToYear(education.toYear)
            setIsPresentEducation(education.isPresentEducation)
            setDescription(education.description)
        }
    }, [education])

    return (
        <div
            className={`${
                education ? 'bg-gray-200' : 'bg-white'
            } col-span-4 flex flex-col gap-3 w-full py-2 px-4`}
        >
            <div className="flex w-full justify-end">
                {education ? (
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                            <RiDeleteBin5Line
                                onClick={() => deleteEducation(education.id)}
                                className="h-6 w-6 text-red-500"
                            />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <button
                            onClick={addEducation}
                            className="p-2 rounded-full hover:bg-gray-200 duration-150"
                        >
                            <RxPlusCircled className="h-6 w-6 text-primary" />
                        </button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-4 gap-3">
                <Input
                    gridCols={2}
                    inputName="instituteName"
                    inputType="text"
                    labelName="Institute Name"
                    placeholder="e.g. CTAE, Udaipur"
                    setState={setInstituteName}
                    state={instituteName}
                />
                <Input
                    gridCols={2}
                    inputName="courseName"
                    inputType="text"
                    labelName="Course"
                    placeholder="e.g. B.Tech. in CSE"
                    setState={setCourseName}
                    state={courseName}
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
                    disabled={isPresentEducation}
                    setMonth={setToMonth}
                    setYear={setToYear}
                    month={toMonth}
                    year={toYear}
                />
                <Toggle
                    gridCols={2}
                    isChecked={isPresentEducation}
                    labelName="Presently Studying"
                    setIsChecked={setIsPresentEducation}
                />
            </div>
        </div>
    )
}
