'use client'; 

import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"; // Sesuaikan path jika perlu
import Link from "next/link";
import { BiMapPin } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdMail, MdPhone, MdWhatsapp } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri"; // Ikon untuk Kirim Email

// --- KONSTANTA KONTAK ---
const TARGET_EMAIL = "farandioalkhld@gmail.com"; 
// Ganti dengan nomor WhatsApp tujuan Anda (tanpa + atau 0 di depan, misal: 6281234567890)
const TARGET_PHONE_WA = "6282245586754"; 

const ContactPage = () => {
    // 1. STATE MANAGEMENT
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    }, []);

    // 2. FUNGSI UTILITAS DAN VALIDASI
    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Mohon isi semua kolom (Nama, Email, dan Pesan)!');
            return false;
        }
        return true;
    };

    // 3. HANDLER PENGIRIMAN WHATSAPP (Fokus pada encoding dan data terbaru)
    const handleSendWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        if (!validateForm()) return;

        // Pastikan kita menggunakan nilai formData terbaru saat fungsi ini dipanggil
        const baseMessage = `Halo, saya ${formData.name}. Email saya adalah ${formData.email}. \n\nPesan:\n${formData.message}`;
        
        // PENTING: encodeURIComponent memastikan spasi, baris baru, dan simbol lain aman di URL.
        const whatsappMessage = encodeURIComponent(baseMessage);
        
        const whatsappUrl = `https://wa.me/${TARGET_PHONE_WA}?text=${whatsappMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Opsional: setFormData({ name: '', email: '', message: '' }); 
    };

    // 4. HANDLER PENGIRIMAN EMAIL
    const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        if (!validateForm()) return;

        const baseMessage = `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
        const emailSubject = encodeURIComponent(`Pesan dari Formulir Kontak - ${formData.name}`);
        const emailBody = encodeURIComponent(baseMessage);
        const emailUrl = `mailto:${TARGET_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

        window.open(emailUrl, '_blank');
        
        // Opsional: setFormData({ name: '', email: '', message: '' }); 
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
            
            <Link href="/" passHref>
                <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
                    <BsArrowLeft className="mr-2"/> Back 
                </Button>
            </Link>

            <div className="space-y-6">
                <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-700 via-red-500 to-red-300">Get in Touch</h1>

                <div className="space-y-6">
                    <p className="text-pretty text-neutral-200 tracking-tight">
                        I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the following channels.
                    </p>

                    {/* --- Area Kontak Informasi --- */}
                    <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                        <MdMail className="w-5 h-5 text-red-400"/>
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <a href={`mailto:${TARGET_EMAIL}`} className="text-neutral-500 hover:text-emerald-400 transition-colors">
                                {TARGET_EMAIL}
                            </a>
                        </div>
                        </div>

                        {/* Phone/WhatsApp */}
                        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                        <MdPhone className="w-5 h-5 text-red-400"/>
                        <div>
                            <h3 className="font-medium">Phone / WhatsApp</h3>
                            <a 
                                href={`https://wa.me/${TARGET_PHONE_WA}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-neutral-500 hover:text-emerald-400 transition-colors"
                            >
                                (+62) 822-4558-6754
                            </a>
                        </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
                        <BiMapPin className="w-5 h-5 text-red-400"/>
                        <div>
                            <h3 className="font-medium">Location</h3>
                            <p className="text-neutral-500">
                                Surabaya, East Java, Indonesia
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* --- Area Formulir Kontak --- */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Send Me a Message</h2>

                        <form className="space-y-4"> 
                            
                            {/* Input Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" 
                                    required
                                />
                            </div>

                            {/* Input Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200" 
                                    required
                                />
                            </div>

                            {/* Textarea Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea 
                                    id="message" 
                                    rows={5} 
                                    placeholder="Your Message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-lg flex items-center gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
                                    required
                                ></textarea>
                            </div>

                            {/* --- Tombol Terpisah dengan Tampilan Responsif --- */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                {/* Tombol 1: WhatsApp */}
                                <Button 
                                    type="button" 
                                    onClick={handleSendWhatsApp} 
                                    className="w-60 text-white bg-green-700 hover:bg-green-600 font-bold"
                                >
                                    <MdWhatsapp className="w-5 h-5 mr-2"/> Kirim via WhatsApp
                                </Button>
                                
                                {/* Tombol 2: Email */}
                                <Button 
                                    type="button" 
                                    onClick={handleSendEmail} 
                                    className="w-60 text-black bg-emerald-400 hover:bg-emerald-500 font-bold"
                                >
                                    <RiSendPlaneFill className="w-5 h-5 mr-2"/> Kirim via Email
                                </Button>
                            </div>
                            {/* --- Akhir Tombol Terpisah --- */}

                        </form>
                    </div>

                </div>
            </div>
            </main>
        </div>
    );
};

export default ContactPage;