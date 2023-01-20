import { Dispatch, SetStateAction, FC } from 'react'
const MONTHS: any = {
    1: '01',
    2: '02',
    3: '03',
    4: '04',
    5: '05',
    6: '06',
    7: '07',
    8: '08',
    9: '09',
    10: '10',
    11: '11',
    12: '12',
}

export const DateSelect: FC<{
    gridCols: number
    placeholder: string
    disabled?: boolean
    setMonth: Dispatch<SetStateAction<any>>
    setYear: Dispatch<SetStateAction<any>>
    month: any
    year: any
}> = ({ setMonth, setYear, disabled, month, year, gridCols, placeholder }) => {
    //? functions
    function handleChange(e: any) {
        const { value } = e.target
        const arr = value.split('-')
        setYear(parseInt(arr[0]))
        setMonth(parseInt(arr[1]))
    }

    return (
        <div className={`relative col-span-${gridCols}`}>
            <input
                type="month"
                disabled={disabled}
                value={year && month ? `${year}-${MONTHS[month]}` : undefined}
                onChange={handleChange}
                // placeholder={placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    )
}
