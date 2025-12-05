import { Button } from "@/components/ui/button";
import Link from "next/link"
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdMail, MdPhone } from "react-icons/md";
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
                <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">Get in Touch</h1>

                <div className="space-y-6">
                    <p className="text-pretty text-neutral-200 tracking-tight">
                        Im always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the following channels.
                    </p>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                        <MdMail className="w-5 h-5 text-emerald-400"/>
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <a href="" className="text-neutral-500 hover:text-emerald-400 transition-colors">
                                farandioalkhld@gmail.com
                            </a>
                        </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                        <MdPhone className="w-5 h-5 text-emerald-400"/>
                        <div>
                            <h3 className="font-medium">Phone</h3>
                            <a href="" className="text-neutral-500 hover:text-emerald-400 transition-colors">
                                (+62)822-4558-6754
                            </a>
                        </div>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                        <BiMapPin className="w-5 h-5 text-emerald-400"/>
                        <div>
                            <h3 className="font-medium">Location</h3>
                            <p className="text-neutral-500 hover:text-emerald-400 transition-colors">
                                Surabaya, East Java, Indonesia
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Send Me a Message</h2>

                        <form action="" className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="" className="text-sm font-medium">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="" className="text-sm font-medium">Email</label>
                                <input type="text" id="name" placeholder="Your Email" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="" className="text-sm font-medium">Message</label>
                                <textarea name="" id="message" rows={5} placeholder="Your Message" className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"></textarea>
                            </div>

                            <Button className="w-full text-black bg-emerald-400 hover:bg-emerald-500">Send Message</Button>
                        </form>
                    </div>

                </div>
            </div>
            </main>
        </div>
    )
}

export default page;