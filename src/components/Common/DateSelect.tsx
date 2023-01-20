import { useEffect, useState, Dispatch, SetStateAction, FC } from 'react'
import { BiChevronDown } from 'react-icons/bi'
const MONTHS = [
    { display: 'Jan', value: 1 },
    { display: 'Feb', value: 2 },
    { display: 'Mar', value: 3 },
    { display: 'Apr', value: 4 },
    { display: 'May', value: 5 },
    { display: 'Jun', value: 6 },
    { display: 'Jul', value: 7 },
    { display: 'Aug', value: 8 },
    { display: 'Sep', value: 9 },
    { display: 'Oct', value: 10 },
    { display: 'Nov', value: 11 },
    { display: 'Dec', value: 12 },
]

export const DateSelect: FC<{
    gridCols: number
    setMonth: Dispatch<SetStateAction<any>>
    setYear: Dispatch<SetStateAction<any>>
    month: any
    year: any
}> = ({ setMonth, setYear, month, year, gridCols }) => {
    function handleChange(e: any) {
        const { value } = e.target
        console.log(typeof value)
        const arr = value.split('-')
        setYear(parseInt(arr[0]))
        setMonth(parseInt(arr[1]))
    }

    return (
        <div className={`relative col-span-${gridCols}`}>
            <input
                type="month"
                value={`${year}-${month}`}
                onChange={handleChange}
                placeholder="Select from month"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    )
}
