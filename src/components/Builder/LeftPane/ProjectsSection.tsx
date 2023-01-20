import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react'
import { Input } from './Input'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { RxPlusCircled } from 'react-icons/rx'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
import { TextArea } from './TextArea'

export const ProjectsSection: FC<{
    projects: Array<any>
    project?: any
    setProjects: Dispatch<SetStateAction<any>>
}> = ({ projects, project, setProjects }) => {
    //? states
    const [name, setName] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    //? functions
    const addProject = () => {
        if (name || url) {
            setProjects((prevEdus: any) => {
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

    const deleteProject = (id: string) => {
        setProjects((prevEdus: any) => {
            return prevEdus.filter((prevExp: any) => prevExp.id !== id)
        })
    }

    //? effects
    useEffect(() => {
        if (project) {
            setName(project.name)
            setUrl(project.url)
            setDescription(project.description)
        }
    }, [project])

    return (
        <div
            className={`${
                project ? 'bg-gray-200' : 'bg-white'
            } col-span-4 flex flex-col gap-3 w-full py-2 px-4`}
        >
            <div className="flex w-full justify-end">
                {project ? (
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded-full hover:bg-gray-200 duration-150">
                            <RiDeleteBin5Line
                                onClick={() => deleteProject(project.id)}
                                className="h-6 w-6 text-red-500"
                            />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <button
                            onClick={addProject}
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
                    setState={setName}
                    state={name}
                />
                <Input
                    placeholder="e.g. https://www.xyz.com"
                    gridCols={2}
                    inputName="url"
                    inputType="text"
                    labelName="URL"
                    setState={setUrl}
                    state={url}
                />
                <TextArea
                    placeholder="e.g. My project was built on.."
                    gridCols={4}
                    inputName="url"
                    inputType="text"
                    labelName="URL"
                    setState={setDescription}
                    state={description}
                />
            </div>
        </div>
    )
}
