import { FC, useEffect, useState } from 'react'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { CertificationsSection } from './CertificationsSection'
import { LanguagesSection } from './LanguagesSection'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { SkillsSection } from './SkillsSection'
import { RxPlusCircled } from 'react-icons/rx'

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

    //? useEffects

    return (
        <div className="col-span-2 grid grid-cols-4 gap-3 py-20 overflow-y-auto min-h-screen bg-gray-50 shadow-2xl">
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
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Experience</p>
            </div>
            {experiences.map((exp) => {
                return (
                    <ExperienceSection
                        key={exp.id}
                        experience={exp}
                        experiences={experiences}
                        setExperiences={setExperiences}
                    />
                )
            })}
            <ExperienceSection
                experiences={experiences}
                setExperiences={setExperiences}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Education</p>
            </div>
            {educations.map((education: any) => {
                return (
                    <EducationSection
                        key={education.id}
                        education={education}
                        educations={educations}
                        setEducations={setEducations}
                    />
                )
            })}
            <EducationSection
                educations={educations}
                setEducations={setEducations}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">
                    Cerifications
                </p>
            </div>
            {certifications.map((certification: any) => {
                return (
                    <CertificationsSection
                        key={certification.id}
                        certification={certification}
                        certifications={certifications}
                        setCertifications={setCertifications}
                    />
                )
            })}
            <CertificationsSection
                certifications={certifications}
                setCertifications={setCertifications}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Languages</p>
            </div>
            {languages.map((language: any) => {
                return (
                    <LanguagesSection
                        key={language.id}
                        language={language}
                        languages={languages}
                        setLanguages={setLanguages}
                    />
                )
            })}
            <LanguagesSection
                languages={languages}
                setLanguages={setLanguages}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Skills</p>
            </div>
            {skills.map((skill) => {
                return (
                    <SkillsSection
                        key={skill.id}
                        skill={skill}
                        skills={skills}
                        setSkills={setSkills}
                    />
                )
            })}
            <SkillsSection
                skills={skills}
                setSkills={setSkills}
            />
        </div>
    )
}
