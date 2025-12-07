import { Button } from "@/components/ui/button"
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"; // Ikon untuk Download

const page = () => {
    // Ganti URL ini dengan link file CV Anda yang sebenarnya
    const CV_DOWNLOAD_LINK = "https://drive.google.com/file/d/17of8rLFptm8rGMWpZ4bjGWrySg2LG4co/view?usp=sharing"; 

    return (
        <div className="min-h-screen flex items-center justify-center">
            
            {/* Hapus space-y-8 dari main, dan terapkan pada div konten di bawah */}
            <main className="max-w-xl m-3 md:m-8 z-50 w-full border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
            
                {/* 1. HEADER (AREA TOMBOL POJOK ATAS) */}
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
                {/* --- End Header Area --- */}
                
                {/* 2. KONTEN UTAMA (Di sini kita terapkan space-y yang besar) */}
                <div className="space-y-8 pt-4 border-t border-gray-700/50">
                    
                    <div className="space-y-6">
                        <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300">About Me</h1>

                        <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
                            <p>Im Farandio Alkhalid, a passionate Junior Web Developer and Senior Designer with 5+ years of experience in creating beautiful and funtional web and design. My journey in this sector began in 2020, and since then, I have been dedicated to crafting exceptional digital experiences.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300">Education</h2>
                        <div>
                            <p className="font-medium">Informatics</p>
                            <p className="text-neutral-500">Telkom University Surabaya, 2023-NOW</p>
                        </div>

                        <div>
                            <p className="font-medium">Software Engineering</p>
                            <p className="text-neutral-500">SMK Telkom Sandhy Putra Malang, 2020-2023</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300">Professional Experience</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium">Co-Founder</p>
                                <p className="text-neutral-500">BakoeLaptop</p>
                            </div>
                            
                            <div>
                                <p className="font-medium">Designer & Social Media Admin</p>
                                <p className="text-neutral-500">BakoeLaptop</p>
                            </div>
                            
                            <div>
                                <p className="font-medium">Data Entry Intern</p>
                                <p className="text-neutral-500">PT Telkom Kediri</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- End Content Area --- */}
            </main>
        </div>
    )
}

export default page