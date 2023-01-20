import { BuilderNavbar } from '@/components/Builder/BuilderNavbar'
import { LeftPane } from '@/components/Builder/LeftPane/LeftPane'
import { RightPane } from '@/components/Builder/RightPane/RightPane'

export default function Builder() {
    return (
        <div className="grid grid-cols-5 w-full">
            <LeftPane />
            <RightPane />
        </div>
    )
}
