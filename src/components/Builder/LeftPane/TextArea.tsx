import { Dispatch, FC, SetStateAction } from 'react'

export const TextArea: FC<{
    inputType: string
    inputName: string
    labelName: string
    gridCols: number
    placeholder: string
    disabled?: boolean
    state: any
    setState: Dispatch<SetStateAction<any>>
}> = ({
    inputName,
    disabled,
    inputType,
    labelName,
    placeholder,
    state,
    gridCols,
    setState,
}) => {
    return (
        <div className={`relative col-span-${gridCols}`}>
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {labelName}
            </label>
            <textarea
                id="message"
                value={state}
                onChange={(e) => e.target.value}
                rows={5}
                className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}
