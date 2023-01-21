import { BuilderNavbar } from '@/components/Builder/BuilderNavbar'
import { LeftPane } from '@/components/Builder/LeftPane/LeftPane'
import { Modal } from '@/components/Builder/Mail/Modal'
import { RightPane } from '@/components/Builder/RightPane/RightPane'
import { addResume } from '@/services/addResume'
import { editResume } from '@/services/editResume'
import { getResumeById } from '@/services/getResumeById'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useRef, useState, useEffect } from 'react'
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom'

export default function Builder() {
    //? router
    const router = useRouter()
    const id = router.asPath.split('/').pop()!

    //? states
    const [templateId, setTemplateId] = useState<string>('1')
    const [resume, setResume] = useState<any>(null)

    // Personal
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [pinCode, setPinCode] = useState<string>('')
    const [website, setWebsite] = useState<string>('')

    const [experiences, setExperiences] = useState<any[]>([])
    const [educations, setEducations] = useState<any[]>([])
    const [certifications, setCertifications] = useState<any[]>([])
    const [languages, setLanguages] = useState<any[]>([])
    const [skills, setSkills] = useState<any[]>([])
    const [projects, setProjects] = useState<any[]>([])

    // About
    const [about, setAbout] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)

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

    //? functions
    const editResumeHandler = async () => {
        await editResume({
            resumeId: id,
            certifications: certifications,
            education: educations,
            projects: projects,
            experience: experiences,
            skills: skills,
            languages: languages,
            personal: {
                about: about,
                address: address,
                email: email,
                name: name,
                website: website,
                phoneNumber: phoneNumber,
            },
        })
    }

    //? effects
    useEffect(() => {
        if (id)
            getResumeById(id)
                .then((res) => {
                    console.log(res)
                    setName(res.data.personal.name)
                    setCertifications(res.data.certifications)
                    setAbout(res.data.personal.about)
                    setAddress(res.data.personal.address)
                    setEducations(res.data.education)
                    setEmail(res.data.personal.email)
                    setExperiences(res.data.experience)
                    setLanguages(res.data.languages)
                    setPinCode(res.data.personal.pinCode)
                    setSkills(res.data.skills)
                    setProjects(res.data.projects)
                    setWebsite(res.data.personal.website)
                    setPhoneNumber(res.data.personal.phoneNumber)
                })
                .catch((err) => console.log(err))
    }, [id])

    console.log(resume)

    return (
        <div className="grid grid-cols-5 w-full">
            <Modal
                setShowModal={setShowModal}
                showModal={showModal}
            />
            <BuilderNavbar
                showModal={showModal}
                setShowModal={setShowModal}
                resumeHandler={editResumeHandler}
            />
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
                        website,
                        setWebsite,
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
            <div className="col-span-3  w-full pt-20">
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
                            website,
                            setWebsite,
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
