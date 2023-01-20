import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Input } from './Input'
import { RxPlusCircled } from 'react-icons/rx'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { TextArea } from './TextArea'

export const ExperienceSection: FC<{
    experiences: Array<any>
    setExperiences: Dispatch<SetStateAction<any>>
}> = ({ experiences, setExperiences }) => {
    const [companyName, setCompanyName] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [from, setFrom] = useState<number | null>(null)
    const [to, setTo] = useState<number | null>(null)
    const [description, setDescription] = useState<string>('')

    return (
        <div className="col-span-4 flex flex-col gap-3 px-4">
            <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-lg text-primary">Experience</p>
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
                <Input
                    placeholder="e.g. May, 2022"
                    gridCols={2}
                    inputName="from"
                    inputType="text"
                    labelName="From"
                    setState={setFrom}
                    state={from}
                />
                <Input
                    placeholder="e.g. July, 2022"
                    gridCols={2}
                    inputName="to"
                    inputType="text"
                    labelName="To"
                    setState={setTo}
                    state={to}
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
