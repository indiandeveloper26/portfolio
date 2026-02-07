'use client';
import { motion } from "framer-motion";
import { Github, ExternalLink, ShoppingCart, MessageSquare, Utensils, BookOpen, CalendarDays, Rocket } from "lucide-react";

const projects = [
    {
        title: "Exforce E-Commerce",
        type: "Shopping Ecosystem",
        icon: <ShoppingCart className="text-indigo-400" />,
        desc: "A massive multi-vendor e-commerce platform with real-time inventory tracking and Razorpay integration.",
        tech: ["Next.js", "Redux", "Node.js", "PostgreSQL"]
    },
    {
        title: "Chatpap Pro",
        type: "Instant Communication",
        icon: <MessageSquare className="text-blue-400" />,
        desc: "Enterprise-grade chat app featuring end-to-end encryption and AI-driven smart replies.",
        tech: ["Socket.io", "React", "MongoDB", "Express"]
    },
    {
        title: "DineFlow Restaurant",
        type: "Digital Gastronomy",
        icon: <Utensils className="text-orange-400" />,
        desc: "Smart restaurant POS system with QR code ordering and kitchen display management.",
        tech: ["MERN Stack", "Cloudinary", "Framer Motion"]
    },
    {
        title: "Elite Coaching PDF",
        type: "LMS & EdTech",
        icon: <BookOpen className="text-emerald-400" />,
        desc: "Secure digital library with automated PDF watermarking and student subscription protection.",
        tech: ["Node.js", "Firebase", "React Native"]
    },
    {
        title: "Admya Clinic Booking",
        type: "HealthTech Solution",
        icon: <CalendarDays className="text-pink-400" />,
        desc: "Advanced medical appointment engine with automated SMS reminders and real-time dashboard.",
        tech: ["Next.js 14", "MongoDB", "Tailwind", "Twilio"]
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#030712] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white"
                    >
                        Built for <span className="text-indigo-500">Scale</span>
                    </motion.h1>
                    <p className="text-slate-500 mt-4 text-lg uppercase tracking-widest font-bold">Project Archive</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-[2.5rem] border border-slate-800 bg-slate-900/20 p-8 hover:bg-slate-900/40 transition-all hover:border-indigo-500/30 flex flex-col h-full shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-slate-800/80 rounded-2xl text-white group-hover:scale-110 transition-transform shadow-inner">
                                    {p.icon}
                                </div>
                                <div className="flex gap-2">
                                    <Github size={20} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                                    <ExternalLink size={20} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                                </div>
                            </div>

                            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 w-fit">
                                {p.type}
                            </span>

                            <h3 className="text-2xl font-black mt-5 mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight text-white">
                                {p.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800/50">
                                {p.tech.map(t => (
                                    <span key={t} className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">#{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <div className="rounded-[2.5rem] border-2 border-dashed border-slate-800 flex flex-col items-center justify-center p-8 text-center bg-indigo-500/[0.02]">
                        <Rocket className="text-indigo-500 w-12 h-12 mb-4 animate-bounce" />
                        <h4 className="text-white font-black text-xl uppercase">Start yours?</h4>
                        <button className="mt-6 px-8 py-3 bg-white text-black font-black uppercase rounded-xl hover:bg-indigo-500 hover:text-white transition-all">Hire Me</button>
                    </div>
                </div>
            </div>
        </main>
    );
}