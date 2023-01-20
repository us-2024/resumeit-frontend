import { TemplateOne } from '@/templates/TemplateOne/TemplateOne'
import { FC, useCallback, useRef } from 'react'
export const RightPane: FC<{ templateId: string; data?: any }> = ({
    templateId,
    data,
}) => {
    if (templateId === '1')
        return (
            <div className="p-10">
                <TemplateOne data={data} />
            </div>
        )
    else return <></>
}
