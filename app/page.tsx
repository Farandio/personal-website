import Link from "next/link";
import Image from "next/image"; 
import { Button } from "@/components/ui/button";
import {
    BiBuilding,
    BiChevronRight,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoLinkedin
} from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";
import { HiDownload } from "react-icons/hi"; // Ikon untuk Download

// --- KONSTANTA FOTO ---
const PROFILE_IMAGE_URL = "/me.png"; 
const CV_DOWNLOAD_LINK = "https://drive.google.com/file/d/17of8rLFptm8rGMWpZ4bjGWrySg2LG4co/view?usp=sharing"; 

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            
            {/* 1. CONTAINER UTAMA: max-w-6xl dan items-stretch */}
            {/* Menggunakan gap-6 di sini akan memisahkan kolom kiri, tengah, dan kanan */}
            <main className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 z-50 lg:items-stretch">
                
                {/* === KOLOM KIRI (FOTO) - KHUSUS DESKTOP === */}
                {/* Ini adalah foto yang ditampilkan di layar besar (desktop) untuk layout 3 kolom */}
                <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/5 flex-shrink-0"> 
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-neutral-900/50 border border-neutral-800/70">
                        <Image
                            src={PROFILE_IMAGE_URL}
                            alt="Farandio Alkhalid"
                            fill 
                            priority 
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* === KOLOM TENGAH: KARTU UTAMA (PROFIL & MENU) === */}
                <div className="w-full lg:w-2/4 xl:w-3/5 border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/80 space-y-8">
                    
                    {/* === CONTAINER HEADER PROFIL (FOTO + Teks + Status) === */}
                    {/* Menggunakan Flexbox untuk mobile (flex-col) dan sm:flex-row untuk layout berdampingan di layar kecil */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                        
                        {/* FOTO DIRI - KHUSUS MOBILE */}
                        {/* Ini adalah foto yang ditampilkan di mobile (small screen) di sebelah kiri */}
                        <div className="lg:hidden w-24 h-24 sm:w-32 sm:h-48 flex-shrink-0 relative rounded-full overflow-hidden border-2 border-red-500/70 shadow-md mt-14"> 
                            <Image
                                src={PROFILE_IMAGE_URL}
                                alt="Farandio Alkhalid"
                                fill 
                                priority 
                                className="object-cover"
                            />
                        </div>

                        {/* DESKRIPSI DAN STATUS CONTAINER */}
                        <div className="flex-grow space-y-4"> 
                            {/* Header dan Status */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-center sm:items-start gap-3">
                                <div className="flex items-center gap-3">
                                    <BiBuilding className="w-5 h-5"/>
                                    <h3 className="text-gray-400">Surabaya, Indonesia</h3>
                                </div>
                                <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
                                    <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
                                        <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </div>
                                    <p className="ml-2">Available For Work</p>
                                </Button>
                            </div>
                            
                            {/* Deskripsi Diri */}
                            <div>
                                <h1 className="text-4xl font-extrabold text-center sm:text-left">Farandio Alkhalid</h1> 
                                <h3 className="text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300 text-center sm:text-left">Web Developer and Designer</h3>
                                <p className="text-pretty tracking-tight mt-3 text-neutral-300 text-center sm:text-left">
                                    Hello, it is Dio. I am a Web Developer and Designer with 5+ years of experience, currently working on my own projects.{" "}
                                    <Link href="/contact" className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300 font-bold opacity-90 hover:opacity-100 transition-opacity">
                                        Contact Me{" "}
                                    </Link>{" "}
                                    for freelance work anytime.
                                </p>
                                <Link href={CV_DOWNLOAD_LINK} passHref target="_blank" rel="noopener noreferrer" download>
                                    <Button 
                                        className="w-full bg-red-700 hover:bg-red-800 text-white rounded-lg mt-4 font-bold" 
                                        size="lg" 
                                    >
                                        Download CV <HiDownload className="ml-2 w-5 h-5"/>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* === END CONTAINER HEADER PROFIL === */}

                    {/* Menu Navigasi */}
                    <nav className="space-y-4 pt-6">
                        <h3 className="text-xl font-bold text-red-400">Menu</h3>
                    
                        <div className="grid grid-cols-2 gap-3">
                            <Link href="/about" className="col-span-1 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
                                <span>About</span>
                                <BiChevronRight className="text-2xl translate-x-0 group-hover:translate-x-1 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
                            </Link>

                            <Link href="/work" className="col-span-1 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
                                <span>Work</span>
                                <BiChevronRight className="text-2xl translate-x-0 group-hover:translate-x-1 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
                            </Link>

                            <Link href="/skills" className="col-span-1 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
                                <span>Skills</span>
                                <BiChevronRight className="text-2xl translate-x-0 group-hover:translate-x-1 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
                            </Link>

                            <Link href="/contact" className="col-span-1 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
                                <span>Contact</span>
                                <BiChevronRight className="text-2xl translate-x-0 group-hover:translate-x-1 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200"></BiChevronRight>
                            </Link>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-2 items-center pt-4">
                            <h3 className="text-xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300">Check out my socials</h3>
                            <HiArrowDown className="text-2xl text-red-400"></HiArrowDown>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="https://github.com/Farandio" className="w-full" passHref>
                                <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                                    <BiLogoGithub className="mr-2"/> Github
                                </Button>
                            </Link>

                            <Link href="https://www.linkedin.com/in/farandio-alkhalid/" className="w-full" passHref>
                                <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                                    <BiLogoLinkedin className="mr-2"/> Linkedin
                                </Button>
                            </Link>

                            <Link href="https://www.instagram.com/farandioalkhld/" className="w-full" passHref>
                                <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear">
                                    <BiLogoInstagram className="mr-2"/> Instagram
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>

                {/* === KOLOM KANAN: KONTEN ESTETIK === */}
                <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/5">
                    <div className="h-full border border-gray-700/50 rounded-xl p-6 backdrop-blur-xl bg-black-900/70 space-y-6">
                        
                        {/* Konten Kotak Kanan */}
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-300">
                            🔥 Sorotan Keterampilan
                        </h3>
                        
                        <ul className="space-y-3 text-neutral-300">
                            <li className="flex items-center gap-2">
                                <BiChevronRight className="text-red-400"/> Backend
                            </li>
                            <li className="flex items-center gap-2">
                                <BiChevronRight className="text-red-400"/> Frontend
                            </li>
                            <li className="flex items-center gap-2">
                                <BiChevronRight className="text-red-400"/> UI/UX
                            </li>
                            <li className="flex items-center gap-2">
                                <BiChevronRight className="text-red-400"/> Database
                            </li>
                        </ul>

                        <div className="pt-60">
                            <h3 className="text-lg font-semibold text-neutral-400">
                                Motto:
                            </h3>
                            <blockquote className="italic text-sm text-neutral-500 mt-1 border-l-2 border-red-500 pl-2">
                                Design is not just what it looks like and feels like. Design is how it works.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}