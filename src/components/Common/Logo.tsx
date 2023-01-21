import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Logo: FC<{}> = ({}) => {
    return (
        <Link href={'/'}>
            <div className="flex font-bold text-lg items-center gap-1">
                <span className="text-primary">RESUME</span>
                <span className="text-secondary">IT.</span>
            </div>
        </Link>
    )
}
