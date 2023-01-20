import { LeftPane } from '@/components/Builder/LeftPane/LeftPane'
import { RightPane } from '@/components/Builder/RightPane/RightPane'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom'

export default function Builder() {
    //? states
    const [templateId, setTemplateId] = useState<string>('1')

    // Personal
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<number | null>(null)
    const [address, setAddress] = useState<string>('')
    const [pinCode, setPinCode] = useState<number | null>(null)

    const [experiences, setExperiences] = useState<any[]>([])
    const [educations, setEducations] = useState<any[]>([])
    const [certifications, setCertifications] = useState<any[]>([])
    const [languages, setLanguages] = useState<any[]>([])
    const [skills, setSkills] = useState<any[]>([])
    const [projects, setProjects] = useState<any[]>([])

    // About
    const [about, setAbout] = useState<string>('')

    //? variables
    const IMG_URL =
        'https://user-images.githubusercontent.com/4661784/' +
        '56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png'

    //? refs
    const imgRef = useRef()

    //? callbacks
    const onUpdate = useCallback(({ x, y, scale }: any) => {
        const { current: img }: any = imgRef

        if (img) {
            const value = make3dTransformValue({ x, y, scale })

            img.style.setProperty('transform', value)
        }
    }, [])

    return (
        <div className="grid grid-cols-5 w-full">
            <LeftPane
                data={{
                    personal: {
                        name,
                        setName,
                        email,
                        setEmail,
                        phoneNumber,
                        setPhoneNumber,
                        address,
                        setAddress,
                        pinCode,
                        setPinCode,
                        about,
                        setAbout,
                    },

                    projects,
                    setProjects,
                    experiences,
                    setExperiences,
                    educations,
                    setEducations,
                    certifications,
                    setCertifications,
                    languages,
                    setLanguages,
                    skills,
                    setSkills,
                }}
            />
            <div className="col-span-3 w-full pt-20">
                <RightPane
                    templateId={templateId}
                    data={{
                        personal: {
                            name,
                            setName,
                            email,
                            setEmail,
                            phoneNumber,
                            setPhoneNumber,
                            address,
                            setAddress,
                            pinCode,
                            setPinCode,
                            about,
                            setAbout,
                        },
                        experiences,
                        setExperiences,
                        educations,
                        setEducations,
                        certifications,
                        setCertifications,
                        languages,
                        setLanguages,
                        skills,
                        setSkills,
                        projects,
                        setProjects,
                    }}
                />
            </div>
        </div>
    )
}
