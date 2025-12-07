import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import skillsData from "../data/skills.json"
import { HiDownload } from "react-icons/hi"; // Ikon untuk Download

const page = () => {
    const CV_DOWNLOAD_LINK = "https://drive.google.com/file/d/17of8rLFptm8rGMWpZ4bjGWrySg2LG4co/view?usp=sharing"; 
    return (
        <div className="min-h-screen flex items-center justify-center">
            <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
            
            <div className="flex justify-between items-center mb-6">
                    {/* Tombol Kiri: Back */}
                    <Link href="/" passHref>
                        {/* PERUBAHAN: Mengganti style ghost ke solid dengan border agar height-nya konsisten dengan Tombol CV */}
                        <Button 
                            className="bg-black border border-gray-700/90 text-white hover:bg-gray-950 rounded-full duration-300 cursor-pointer"
                        >
                            <BsArrowLeft className="mr-2"/> Back 
                        </Button>
                    </Link>

                    {/* Tombol Kanan: Download CV */}
                    <Link href={CV_DOWNLOAD_LINK} passHref target="_blank" rel="noopener noreferrer" download>
                        {/* Tombol ini berfungsi sebagai referensi tinggi (height) */}
                        <Button className="bg-red-700 hover:bg-red-800 text-white rounded-full duration-300 cursor-pointer">
                            Download CV <HiDownload className="ml-2"/>
                        </Button>
                    </Link>
                </div>

            <div className="space-y-6">
                <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300">Technical Skills</h1>

                <div className="space-y-8">
                    {skillsData.categories.map((category) => (
                        <div key={category.name} className="space-y-4">
                            <h2 className="text-2xl">{category.name}</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="p-4 rounded-lg border border-gray-700/50 bg-black/40">
                                        <h3 className="font-medium mb-2">{skill.name}</h3>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-400 h-2.5 rounded-full" style={{width: `${skill.level}`}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </main>
        </div>
    )
}

export default page