import { FC } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth'
export const Navbar: FC<{}> = ({}) => {
    const { user }: any = useAuth()

    return (
        <nav className="flex sticky top-0 z-50 bg-white flex-wrap p-2 border-b-2 border-gray ">
            <span className="text-xlx font-bold text-primary">ResumeIt</span>
            {user ? (
                <Link href="/dashboard">
                    <button className=" absolute right-2  px-2 rounded border-2 hover:bg-primary-light hover:text-white border-black">
                        Dashboard
                    </button>
                </Link>
            ) : (
                <Link href="/auth">
                    <button className=" absolute right-2  px-2 rounded border-2 hover:bg-primary-light hover:text-white border-black">
                        Login
                    </button>
                </Link>
            )}
        </nav>
    )
}
