import { FC, useState, SetStateAction, Dispatch } from 'react'
import { Logo } from '../Common/Logo'
import { FiDownload, FiLogOut } from 'react-icons/fi'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { AiOutlineFileWord } from 'react-icons/ai'
import { convertToPDF } from '@/utils/convertToPDF'
import { useRouter } from 'next/router'

export const BuilderNavbar: FC<{
    resumeHandler: Function
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}> = ({ setShowModal, showModal, resumeHandler }) => {
    const router = useRouter()
    //? states
    const [showDownloadOptions, setShowDownloadOptions] =
        useState<boolean>(false)

    //? functions

    return (
        <div className="fixed z-50 w-full col-span-5 px-5 py-3 flex justify-between bg-slate-100">
            <Logo />
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => resumeHandler()}
                    className="rounded-lg font-semibold text-sm px-4 py-2 bg-primary text-white"
                >
                    Save
                </button>
                <button
                    onClick={() => setShowModal(true)}
                    className="rounded-lg font-semibold text-sm px-4 py-2 bg-secondary text-white"
                >
                    Send Mail
                </button>
                <button
                    onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                    className="p-2 rounded-full hover:bg-gray-200 duration-150"
                >
                    <FiDownload className="h-5 w-5" />
                </button>
                {showDownloadOptions && (
                    <div className="absolute text-tertiary top-[4rem] right-4 z-50 bg-gray-50 shadow-xl py-2 rounded-xl flex flex-col items-center justify-center">
                        <div
                            onClick={convertToPDF}
                            className="px-5 py-3 cursor-pointer group hover:bg-black/10 w-full flex space-x-2 justify-center items-center "
                        >
                            <BsFileEarmarkPdf className="h-6 w-6 text-gray-800" />
                            <p className="font-semibold ">PDF</p>
                        </div>
                        <div className="px-8 py-3 cursor-pointer group hover:bg-black/10 w-full flex space-x-2 items-center ">
                            <AiOutlineHtml5 className="h-6 w-6 text-gray-800" />
                            <p className="font-semibold ">HTML</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
