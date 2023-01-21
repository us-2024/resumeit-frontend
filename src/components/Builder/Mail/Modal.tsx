import { ModalContainer } from '@/components/Common/ModalContainer'
import { FC, useState, Dispatch, SetStateAction } from 'react'
import { Input } from '../LeftPane/Input'
import { TextArea } from '../LeftPane/TextArea'

export const Modal: FC<{
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}> = ({ setShowModal, showModal }) => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [recieverMail, setReceiverMail] = useState('')
    return (
        <ModalContainer
            header="Send Email"
            setShowModal={setShowModal}
            showModal={showModal}
        >
            <div className="grid grid-cols-4 gap-3 w-full p-4">
                <Input
                    gridCols={2}
                    inputName="Reciever Address"
                    inputType="email"
                    labelName="Reciever Address"
                    placeholder="xyz@gmail.com"
                    setState={setReceiverMail}
                    state={recieverMail}
                />
                <Input
                    gridCols={2}
                    inputName="Subject"
                    inputType="text"
                    labelName="Subject"
                    placeholder="XYZ"
                    setState={setSubject}
                    state={subject}
                />
                <TextArea
                    gridCols={4}
                    inputName="body"
                    inputType="text"
                    labelName="Body"
                    placeholder="Your Message"
                    setState={setBody}
                    state={body}
                />
                <button
                    onClick={() => setShowModal(true)}
                    className="rounded-lg font-semibold text-sm px-4 py-2 bg-primary text-white"
                >
                    Send
                </button>
            </div>
        </ModalContainer>
    )
}
