import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function BuilderHome() {
    const router = useRouter()
    useEffect(() => {
        router.push('/dashboard')
    }, [router])
    return <></>
}
