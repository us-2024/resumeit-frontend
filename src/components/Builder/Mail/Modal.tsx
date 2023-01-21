import { ModalContainer } from '@/components/Common/ModalContainer'
import { FC, useState, Dispatch, SetStateAction } from 'react'
import { Input } from '../LeftPane/Input'
import { TextArea } from '../LeftPane/TextArea'
import { sendMail } from '@/services/sendMail'
import { useAuth } from '@/contexts/auth'
import { html2image } from '@/utils/html2image'

export const Modal: FC<{
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}> = ({ setShowModal, showModal }) => {
    //? auth
    const { user }: any = useAuth()

    //? states
    const [subject, setSubject] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [recieverMailOne, setReceiverMailOne] = useState<string>('')
    const [recieverMailTwo, setReceiverMailTwo] = useState<string>('')
    const [recieverMailThree, setReceiverMailThree] = useState<string>('')

    //? functions
    const sendMailHandler = async () => {
        await sendMail(
            user.user_id,
            [recieverMailOne, recieverMailTwo, recieverMailThree],
            subject,
            body,
            await html2image()
        )
    }

    return (
        <ModalContainer
            header="Send Email"
            setShowModal={setShowModal}
            showModal={showModal}
        >
            <div className="grid grid-cols-4 gap-2 w-full p-4">
                <Input
                    gridCols={2}
                    inputName="Reciever Address 1"
                    inputType="email"
                    labelName="Reciever Address 1"
                    placeholder="xyz@gmail.com"
                    setState={setReceiverMailOne}
                    state={recieverMailOne}
                />
                <Input
                    gridCols={2}
                    inputName="Reciever Address 2"
                    inputType="email"
                    labelName="Reciever Address 2"
                    placeholder="xyz@gmail.com"
                    setState={setReceiverMailTwo}
                    state={recieverMailTwo}
                />
                <Input
                    gridCols={4}
                    inputName="Reciever Address 3"
                    inputType="email"
                    labelName="Reciever Address 3"
                    placeholder="xyz@gmail.com"
                    setState={setReceiverMailThree}
                    state={recieverMailThree}
                />
                <Input
                    gridCols={4}
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
                    onClick={() => sendMailHandler()}
                    className="rounded-lg font-semibold text-sm px-4 py-2 bg-primary text-white"
                >
                    Send
                </button>
            </div>
        </ModalContainer>
    )
}
