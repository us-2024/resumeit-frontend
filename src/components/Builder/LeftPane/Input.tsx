import { Dispatch, FC, SetStateAction } from 'react'

export const Input: FC<{
    inputType: string
    inputName: string
    labelName: string
    disabled?: boolean
    placeholder: string
    gridCols: number
    state: any
    setState: Dispatch<SetStateAction<any>>
}> = ({
    inputName,
    disabled,
    inputType,
    labelName,
    state,
    placeholder,
    gridCols,
    setState,
}) => {
    return (
        <div className={`relative col-span-${gridCols}`}>
            <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {labelName}
            </label>
            <div className="relative mb-6">
                <input
                    type={inputType}
                    disabled={disabled}
                    name={inputName}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="bg-gray-50 border appearance-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none p-2.5"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}
