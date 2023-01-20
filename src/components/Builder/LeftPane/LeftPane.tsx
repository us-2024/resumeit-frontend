import { FC, useState } from 'react'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { CertificationsSection } from './CertificationsSection'
import { LanguagesSection } from './LanguagesSection'
import { Input } from './Input'
import { TextArea } from './TextArea'

export const LeftPane: FC<{}> = ({}) => {
    //? states
    const [experiences, setExperiences] = useState<any[]>([])
    const [educations, setEducations] = useState<any[]>([])
    const [certifications, setCertifications] = useState<any[]>([])
    const [languages, setLanguages] = useState<any[]>([])
    const [skills, setSkills] = useState<any[]>([])

    // Personal
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<number | null>(null)
    const [address, setAddress] = useState<string>('')
    const [pinCode, setPinCode] = useState<number | null>(null)

    // About
    const [about, setAbout] = useState<string>('')

    return (
        <div className="col-span-2 grid grid-cols-4 gap-3 py-20 overflow-y-auto min-h-screen bg-gray-50">
            <div className="grid grid-cols-4 col-span-4 px-4 gap-3">
                <p className="col-span-4 text-lg text-primary font-semibold">
                    Personal Information
                </p>
                <Input
                    inputName="name"
                    gridCols={2}
                    inputType="text"
                    placeholder="e.g. Elon Musk"
                    labelName="Name"
                    state={name}
                    setState={setName}
                />
                <Input
                    inputName="email"
                    gridCols={2}
                    placeholder="e.g. elonmusk@tesla.com"
                    inputType="email"
                    labelName="Email"
                    state={email}
                    setState={setEmail}
                />
                <Input
                    inputName="phoneNumber"
                    placeholder="e.g. 9876543210"
                    gridCols={2}
                    inputType="text"
                    labelName="Contact Number"
                    state={phoneNumber}
                    setState={setPhoneNumber}
                />
                <Input
                    inputName="pinCode"
                    placeholder="e.g. 987654"
                    gridCols={2}
                    inputType="text"
                    labelName="Pin Code"
                    state={pinCode}
                    setState={setPinCode}
                />
                <Input
                    gridCols={4}
                    inputName="address"
                    placeholder="e.g. 310, XYZ City, India"
                    inputType="address"
                    labelName="Address"
                    state={address}
                    setState={setAddress}
                />
                <TextArea
                    gridCols={4}
                    inputName="about"
                    inputType="text"
                    labelName="About"
                    placeholder="e.g. I am a passionate Software Developer..."
                    setState={setAbout}
                    state={about}
                />
            </div>
            <ExperienceSection
                experiences={experiences}
                setExperiences={setExperiences}
            />
            <EducationSection
                educations={educations}
                setEducations={setEducations}
            />
            <CertificationsSection
                certifications={certifications}
                setCertifications={setCertifications}
            />
            <LanguagesSection
                languages={languages}
                setLanguages={setLanguages}
            />
        </div>
    )
}
