import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Input } from './Input'
import { RxPlusCircled } from 'react-icons/rx'
import { RiDeleteBin5Line } from 'react-icons/ri'

export const LanguagesSection: FC<{
    languages: Array<any>
    setLanguages: Dispatch<SetStateAction<any>>
}> = ({}) => {
    const [name, setName] = useState<string>('')

    return (
        <div className="col-span-4 flex flex-col gap-3 px-6">
            <div className="flex items-center justify-between w-full">
                <p className="font-semibold text-lg text-primary">Languages</p>
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
                    placeholder="e.g. Hindi"
                    gridCols={2}
                    inputName="language"
                    inputType="text"
                    labelName="Language"
                    setState={setName}
                    state={name}
                />
            </div>
        </div>
    )
}
