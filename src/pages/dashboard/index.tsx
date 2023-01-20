import Image from 'next/image'
import TemplateOneImage from '../../../public/assets/templateOne.png'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import Link from 'next/link'
export default function Dashboard() {
    return (
        <div className="flex w-full justify-center items-center min-h-screen">
            <Link href={'/dashboard/builder/1'}>
                <div className="flex flex-col gap-4 border-2 shadow-md hover:shadow-xl cursor-pointer rounded-md">
                    <Image
                        src={TemplateOneImage}
                        width={200}
                        height={400}
                        alt="template_image"
                    />
                    <div className="flex bg-gray-100 px-8 py-4 gap-2 justify-between items-center">
                        <p className="font-semibold">Edit this template</p>
                        <BsArrowRightSquareFill className="h-6 w-6" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
