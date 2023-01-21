import { TemplateOne } from '@/templates/TemplateOne/TemplateOne'
import { FC, useCallback, useRef } from 'react'
export const RightPane: FC<{ templateId: string; data?: any }> = ({
    templateId,
    data,
}) => {
    if (templateId === '1')
        return (
            <div className="px-16 flex overflow-auto h-screen top-0">
                <TemplateOne data={data} />
            </div>
        )
    else return <></>
}
