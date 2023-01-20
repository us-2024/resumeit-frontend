import Image from 'next/image'
import Link from 'next/link'
import ResumeImage from '../../public/assets/res.jpg'
export default function Home() {
    return (
        <div className="flex  h-screen  bg-primary ">
            <div className="w-1/2 ml-3 mt-20  ">
                <span className="md:text-6xl text-2xl  text-white">
                    Create your own Resume
                </span>
                <br />
                <br />
                <p className="text-white">
                    A Quick and Easy Way to Create Your Professional Resume. 30+
                    Professional Resume Templates Choose from over thirty modern
                    and professional templates. All of which can be customized
                    to your liking. Fast and Easy to Use Our resume builder lets
                    you easily and quickly create a resume using our resume
                    wizard.
                </p>
                <br />
                <Link href="/auth">
                    <button className="bg-sky-200 rounded border-2 hover:bg-sky-50">
                        Create Your Resume
                    </button>
                </Link>
            </div>
            <div>
                <Image
                    className="absolute-right-0 mt-20 ml-10"
                    src={ResumeImage}
                    height={360}
                    width={360}
                    alt="Logo"
                />
            </div>
        </div>
    )
}
