import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react'
import { Input } from './Input'
import { RxPlusCircled } from 'react-icons/rx'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-hot-toast'

export const LanguagesSection: FC<{
    languages: Array<any>
    language?: any
    setLanguages: Dispatch<SetStateAction<any>>
}> = ({ language, languages, setLanguages }) => {
    const [name, setName] = useState<string>('')

    //? functions
    const addLanguage = () => {
        if (name) {
            setLanguages((prevEdus: any) => {
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

    const deleteLanguage = (id: string) => {
        setLanguages((prevEdus: any) => {
            return prevEdus.filter((prevExp: any) => prevExp.id !== id)
        })
    }

    //? useEffects
    useEffect(() => {
        if (language) {
            setName(language.name)
        }
    }, [language])

    return (
        <div
            className={`${
                language ? 'bg-gray-200' : 'bg-white'
            } col-span-4 flex flex-col gap-3 w-full py-2 px-4`}
        >
            {' '}
            <div className="flex items-center justify-between w-full">
                <div className="flex w-full justify-end">
                    {language ? (
                        <div className="flex items-center gap-1">
                            <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                                <RiDeleteBin5Line
                                    onClick={() => deleteLanguage(language.id)}
                                    className="h-6 w-6 text-red-500"
                                />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={addLanguage}
                                className="p-2 rounded-full hover:bg-gray-200 duration-150"
                            >
                                <RxPlusCircled className="h-6 w-6 text-primary" />
                            </button>
                        </div>
                    )}
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
