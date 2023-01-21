import Image from 'next/image'
import TemplateOneImage from '../../../public/assets/templateOne.png'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/auth'
import { getResumes } from '@/services/getResumes'
import { useRouter } from 'next/router'
export default function Dashboard() {
    const { user, loading }: any = useAuth()
    const [resumes, setResumes] = useState<any[]>([])
    const router = useRouter()

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/auth')
            }
        }
    }, [router, loading, user])

    useEffect(() => {
        if (!loading) {
            if (user) {
                getResumes()
                    .then((res: any) => {
                        setResumes(res)
                    })
                    .catch((err: any) => {
                        console.log(err)
                    })
            }
        }
    }, [loading, user])
    return (
        <div className="flex flex-col p-8 gap-8 w-full min-h-screen">
            <div className="flex flex-col gap-2 w-full">
                <p className="font-bold text-xl">Choose Templates</p>
                <div className="flex items-center">
                    <Link href={'/dashboard/builder/1'}>
                        <div className="flex flex-col gap-4 border-2 shadow-md hover:shadow-xl cursor-pointer rounded-md">
                            <Image
                                src={TemplateOneImage}
                                width={200}
                                height={400}
                                alt="template_image"
                            />
                            <div className="flex bg-gray-100 px-5 py-4 gap-2 justify-between items-center">
                                <p className="font-semibold">
                                    Edit this template
                                </p>
                                <BsArrowRightSquareFill className="h-6 w-6" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {resumes && resumes.length ? (
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-lg">Recently Edited</p>
                    <div className="flex gap-10 w-full items-center">
                        {resumes.map((data: any) => {
                            console.log(data)
                            return (
                                <Link
                                    key={data._id}
                                    href={`/dashboard/builder/resume/${data._id}`}
                                >
                                    <div className="flex flex-col gap-4 border-2 shadow-md hover:shadow-xl cursor-pointer rounded-md">
                                        <Image
                                            src={TemplateOneImage}
                                            width={200}
                                            height={400}
                                            alt="template_image"
                                        />
                                        <div className="flex bg-gray-100 px-5 py-4 gap-2 justify-between items-center">
                                            <p className="font-semibold">
                                                Edit
                                            </p>
                                            <BsArrowRightSquareFill className="h-6 w-6" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    )
}
