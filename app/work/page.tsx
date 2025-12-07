import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiLogoGithub } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";
import { BsArrowLeft } from "react-icons/bs";
// Asumsi projectsData dan designProjectData diimport dengan benar
import projectsData from "../data/projects.json";
import designProjectData from "../data/designProjects.json"
import { HiDownload } from "react-icons/hi"; // Ikon untuk Download

const page = () => {
    // Asumsi projectsData dan designProjectData memiliki properti 'projects'/'designProjects'
    const projects = projectsData.projects; 
    const designProjects = designProjectData.designProjects;
    const CV_DOWNLOAD_LINK = "https://drive.google.com/file/d/17of8rLFptm8rGMWpZ4bjGWrySg2LG4co/view?usp=sharing"; 

    return (
        <div className="min-h-screen flex items-center justify-center">

            <main className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">

            {/* 1. Tombol Back */}
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
            
            {/* 2. Header Proyek Pengembangan: My Work */}
            <div className="flex items-center space-x-4"> 
                <div className="flex-grow border-t border-red-700"></div> 
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-300 flex-shrink-0">
                    My Work
                </h1>
                <div className="flex-grow border-t border-red-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.id} 
                        className="group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300 h-full flex flex-col"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110"></Image>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="py-1 px-2 text-sm rounded-full bg-slate-800/50 text-gray-300 border border-neutral-800/70">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Kontainer Tombol: mt-auto memastikan tombol selalu di bawah */}
                        <div className="mt-auto p-6 pt-0"> 
                            <div className="flex gap-3">
                                {/* TOMBOL CODE (Mengarahkan ke project.github) */}
                                <Button variant="outline" className="flex-1 text-white bg-black backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear w-full" asChild>
                                    {/* Menerapkan href dari data project dan target="_blank" */}
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"> 
                                        <BiLogoGithub className="h-4 w-4 mr-2"/>
                                        Code
                                    </a>
                                </Button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Header Proyek Desain: My Design */}
            <div className="flex items-center space-x-4">
                <div className="flex-grow border-t border-red-700"></div> 
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-300 flex-shrink-0">
                    My Design
                </h1>
                <div className="flex-grow border-t border-red-700"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designProjects.map((designProject) => (
                    <div key={designProject.id} 
                        className="group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300 h-full flex flex-col"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image src={designProject.image} alt={designProject.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110"></Image>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{designProject.title}</h3>
                            <p className="text-gray-300 mb-4">{designProject.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {designProject.tags.map((tag, index) => (
                                    <span key={index} className="py-1 px-2 text-sm rounded-full bg-slate-800/50 text-gray-300 border border-neutral-800/70">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Kontainer Tombol: mt-auto memastikan tombol selalu di bawah */}
                        <div className="mt-auto p-6 pt-0">
                            <div className="flex gap-3">
                                {/* TOMBOL CONTENT/LIVE DEMO (Mengarahkan ke designProject.link) */}
                                <Button variant="ghost" className="flex-1 text-gray-300 backdrop=blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear w-full" asChild>
                                    {/* Menerapkan href dari data designProject dan target="_blank" */}
                                    <a href={designProject.link} target="_blank" rel="noopener noreferrer">
                                        <CgExternal className="mr-2 h-4 w-4"/>
                                        Content
                                    </a> 
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </main>
        </div>
    );
};

export default page;