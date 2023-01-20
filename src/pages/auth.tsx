import { useAuth } from '@/contexts/auth'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Auth() {
    const { login, user, loading }: any = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading) {
            if (user) router.push('/dashboard')
        }
    }, [user, loading, router])

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-xl p-6 gap-7 flex flex-col h-1/3 w-1/3 items-center">
                <p className="text-xl font-semibold">Login with Google</p>
                <button
                    disabled={loading}
                    onClick={login}
                    className="disabled:cursor-wait rounded-full bg-white shadow-md transition-all duration-150 hover:shadow-xl border-2 border-gray-600 cursor-pointer flex space-x-2 items-center py-2 px-3"
                >
                    <FcGoogle className="h-7 w-7 text-primary" />
                    <span className="font-semibold">Login</span>
                </button>
            </div>
        </div>
    )
}
