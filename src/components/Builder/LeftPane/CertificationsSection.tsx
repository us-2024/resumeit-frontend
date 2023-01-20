import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Input } from './Input'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxPlusCircled } from 'react-icons/rx'

export const CertificationsSection: FC<{
    certifications: Array<any>
    setCertifications: Dispatch<SetStateAction<any>>
}> = ({ certifications, setCertifications }) => {
    const [name, setName] = useState<string>('')
    const [url, setUrl] = useState<string>('')

    return (
        <div className="col-span-4 flex flex-col gap-3 px-6">
            <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-lg text-primary">
                    Certifications
                </p>
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
                    gridCols={2}
                    placeholder="e.g. XYZ Company"
                    inputName="name"
                    inputType="text"
                    labelName="Name"
                    setState={setName}
                    state={name}
                />
                <Input
                    placeholder="http://www.xyz.com"
                    gridCols={2}
                    inputName="url"
                    inputType="text"
                    labelName="URL"
                    setState={setUrl}
                    state={url}
                />
            </div>
        </div>
    )
}
