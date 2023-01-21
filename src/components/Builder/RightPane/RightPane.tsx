import { TemplateOne } from '@/templates/TemplateOne/TemplateOne'
import { FC, useCallback, useRef } from 'react'
export const RightPane: FC<{ templateId: string; data?: any }> = ({
    templateId,
    data,
}) => {
    if (templateId === '1')
        return (
            <div className="pt-24 px-16 overflow-auto  h-screen fixed top-0">
                <TemplateOne data={data} />
            </div>
        )
    else return <></>
}
