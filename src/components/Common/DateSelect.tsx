import { Dispatch, SetStateAction, FC, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
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
    const [startDate, setStartDate] = useState(new Date())

    //? effects
    useEffect(() => {
        if (!(month && year)) {
            setYear(startDate.getFullYear().toString())
            setMonth(startDate.getMonth().toString())
        } else {
            if (month !== '0') {
                setStartDate(
                    new Date(
                        `${year}-${month.length > 1 ? month : `0${month}`}-01`
                    )
                )
            }
        }
    }, [setMonth, setYear, month, year])

    // console.log(month, year)
    return (
        <div className={`relative col-span-${gridCols}`}>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
            />
        </div>
    )
}
