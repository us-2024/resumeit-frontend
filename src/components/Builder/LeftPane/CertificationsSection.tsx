import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react'
import { Input } from './Input'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxPlusCircled } from 'react-icons/rx'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
import { TiTickOutline } from 'react-icons/ti'
import { BsPencilSquare } from 'react-icons/bs'

export const CertificationsSection: FC<{
    certifications: Array<any>
    certification?: any
    setCertifications: Dispatch<SetStateAction<any>>
}> = ({ certifications, certification, setCertifications }) => {
    //? states
    const [name, setName] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)

    //? functions
    const editCertifications = (id: string) => {
        setCertifications((prevEdus: any) => {
            const newEdus = prevEdus.map((prevEdu: any) => {
                if (prevEdu.id === id) {
                    return {
                        id,
                        name,
                        url,
                    }
                } else return prevEdu
            })

            return newEdus
        })
        setIsEdit(false)
    }
    const addCertification = () => {
        if (name || url) {
            setCertifications((prevEdus: any) => {
                const newExp = {
                    id: uuidv4(),
                    name,
                    url,
                }
                return [...prevEdus, newExp]
            })

            setName('')
            setUrl('')
        } else {
            toast.error('Please fill the details before adding next section')
        }
    }

    const deleteCertification = (id: string) => {
        setCertifications((prevEdus: any) => {
            return prevEdus.filter((prevExp: any) => prevExp.id !== id)
        })
    }

    //? effects
    useEffect(() => {
        if (certification) {
            setName(certification.name)
            setUrl(certification.url)
        }
    }, [certification])

    return (
        <div
            className={`${
                certification ? 'bg-gray-200' : 'bg-white'
            } col-span-4 flex flex-col gap-3 w-full py-2 px-4`}
        >
            <div className="flex w-full justify-end">
                {certification ? (
                    isEdit ? (
                        <div className="flex items-center">
                            <button className="p-2 rounded-full hover:bg-gray-300 duration-150">
                                <RiDeleteBin5Line
                                    onClick={() =>
                                        deleteCertification(certification.id)
                                    }
                                    className="h-6 w-6 text-red-500"
                                />
                            </button>
                            <button
                                onClick={() =>
                                    editCertifications(certification.id)
                                }
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
                            onClick={addCertification}
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
                    placeholder="e.g. XYZ Company"
                    inputName="name"
                    inputType="text"
                    labelName="Name"
                    disabled={certification && !isEdit}
                    setState={setName}
                    state={name}
                />
                <Input
                    placeholder="https://www.xyz.com"
                    gridCols={2}
                    inputName="url"
                    inputType="text"
                    labelName="URL"
                    disabled={certification && !isEdit}
                    setState={setUrl}
                    state={url}
                />
            </div>
        </div>
    )
}
