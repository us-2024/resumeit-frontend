import { FC, useEffect, useState } from 'react'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { CertificationsSection } from './CertificationsSection'
import { LanguagesSection } from './LanguagesSection'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { SkillsSection } from './SkillsSection'
import { RxPlusCircled } from 'react-icons/rx'
import { ProjectsSection } from './ProjectsSection'

export const LeftPane: FC<{ data: any }> = ({ data }) => {
    //? states
    // console.log(data)
    //? useEffects

    return (
        <div className="col-span-2 grid grid-cols-4 gap-3 py-20 overflow-y-auto h-screen bg-gray-50 shadow-2xl">
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
                    state={data.personal.name}
                    setState={data.personal.setName}
                />
                <Input
                    inputName="email"
                    gridCols={2}
                    placeholder="e.g. elonmusk@tesla.com"
                    inputType="email"
                    labelName="Email"
                    state={data.personal.email}
                    setState={data.personal.setEmail}
                />
                <Input
                    inputName="phoneNumber"
                    placeholder="e.g. 9876543210"
                    gridCols={2}
                    inputType="text"
                    labelName="Contact Number"
                    state={data.personal.phoneNumber}
                    setState={data.personal.setPhoneNumber}
                />
                <Input
                    gridCols={2}
                    inputName="website"
                    placeholder="e.g. https://www.personal.com"
                    inputType="url"
                    labelName="Website"
                    state={data.personal.website}
                    setState={data.personal.setWebsite}
                />
                <Input
                    gridCols={2}
                    inputName="address"
                    placeholder="e.g. 310, XYZ City, India"
                    inputType="address"
                    labelName="Address"
                    state={data.personal.address}
                    setState={data.personal.setAddress}
                />
                {/* <TextArea
                    gridCols={4}
                    inputName="about"
                    inputType="text"
                    labelName="About"
                    placeholder="e.g. I am a passionate Software Developer..."
                    setState={data.personal.setAbout}
                    state={data.personal.about}
                /> */}
            </div>
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Experience</p>
            </div>
            {data.experiences.map((exp: any) => {
                return (
                    <ExperienceSection
                        key={exp.id}
                        experience={exp}
                        experiences={data.experiences}
                        setExperiences={data.setExperiences}
                    />
                )
            })}
            <ExperienceSection
                experiences={data.experiences}
                setExperiences={data.setExperiences}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Education</p>
            </div>
            {data.educations.map((education: any) => {
                return (
                    <EducationSection
                        key={education.id}
                        education={education}
                        educations={data.educations}
                        setEducations={data.setEducations}
                    />
                )
            })}
            <EducationSection
                educations={data.educations}
                setEducations={data.setEducations}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Projects</p>
            </div>
            {data.projects.map((project: any) => {
                return (
                    <ProjectsSection
                        key={project.id}
                        project={project}
                        projects={data.projects}
                        setProjects={data.setProjects}
                    />
                )
            })}
            <ProjectsSection
                projects={data.projects}
                setProjects={data.setProjects}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">
                    Cerifications
                </p>
            </div>
            {data.certifications.map((certification: any) => {
                return (
                    <CertificationsSection
                        key={certification.id}
                        certification={certification}
                        certifications={data.certifications}
                        setCertifications={data.setCertifications}
                    />
                )
            })}
            <CertificationsSection
                certifications={data.certifications}
                setCertifications={data.setCertifications}
            />

            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Languages</p>
            </div>
            {data.languages.map((language: any) => {
                return (
                    <LanguagesSection
                        key={language.id}
                        language={language}
                        languages={data.languages}
                        setLanguages={data.setLanguages}
                    />
                )
            })}
            <LanguagesSection
                languages={data.languages}
                setLanguages={data.setLanguages}
            />
            <div className="flex items-center px-4 justify-between w-full">
                <p className="font-semibold text-lg text-primary">Skills</p>
            </div>
            {data.skills.map((skill: any) => {
                return (
                    <SkillsSection
                        key={skill.id}
                        skill={skill}
                        skills={data.skills}
                        setSkills={data.setSkills}
                    />
                )
            })}
            <SkillsSection
                skills={data.skills}
                setSkills={data.setSkills}
            />
        </div>
    )
}
