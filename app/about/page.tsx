import { Button } from "@/components/ui/button"
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            
            <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
            
                <Link href="/">
                <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
                    Back <BsArrowLeft className="ml-2"/>
                </Button>
                </Link>

                <div className="space-y-6">
                    <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">About Me</h1>

                    <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
                        <p>Im Farandio Alkhalid, a passionate Junior Web Developer and Senior Designer with 5+ years of experience in creating beautiful and funtional web and design. My journey in this sector began in 2020, and since then, I have been dedicated to crafting exceptional digital experiences.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">Education</h2>
                        <div>
                            <p className="font-medium">Software Engineering</p>
                            <p className="text-neutral-500">SMK Telkom Sandhy Putra Malang, 2020-2023</p>
                        </div>

                        <div>
                            <p className="font-medium">Informatics</p>
                            <p className="text-neutral-500">Telkom University Surabaya, 2023-NOW</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">Professional Experience</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium">Data Entry</p>
                                <p className="text-neutral-500">PT Telkom Kediri</p>
                            </div>
                            
                            <div>
                                <p className="font-medium">Designer</p>
                                <p className="text-neutral-500">BakoeLaptop</p>
                            </div>
                            
                            <div>
                                <p className="font-medium">Social Media Admin</p>
                                <p className="text-neutral-500">BakoeLaptop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page