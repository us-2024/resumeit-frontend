import { FC } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth'
import { Logo } from './Logo'
export const Navbar: FC<{}> = ({}) => {
    const { user }: any = useAuth()

    return (
        <nav className="flex justify-between items-center sticky top-0 z-50 bg-white flex-wrap px-5 py-3 border-b-2 border-gray ">
            <Logo />
            {user ? (
                <Link href="/dashboard">
                    <button className="bg-primary text-white px-3 py-2 rounded-md">
                        Dashboard
                    </button>
                </Link>
            ) : (
                <Link href="/auth">
                    <button className="bg-primary text-white px-3 py-2 rounded-md">
                        Login
                    </button>
                </Link>
            )}
        </nav>
    )
}
