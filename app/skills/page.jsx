'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileDown, ArrowRight, Zap, Smartphone, Cpu, BrainCircuit } from "lucide-react";

export default function PortfolioPage() {
    return (
        <main className="bg-[#030712] text-white overflow-x-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-900/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 italic">
                            FULL <span className="text-indigo-500">STACK</span> DEV
                        </h1>
                        <p className="text-lg text-slate-400 max-w-xl mb-8">
                            MERN Stack & AI Specialist crafting high-performance applications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/projects" className="group px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2">
                                VIEW PROJECTS <ArrowRight size={18} />
                            </Link>
                            <a href="/resume.pdf" className="px-8 py-4 rounded-2xl border border-slate-800 font-bold hover:bg-slate-900 transition-all flex items-center gap-2">
                                <FileDown size={18} /> RESUME
                            </a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative hidden md:block">
                        <Image src="/resume.png" width={600} height={600} alt="Dev" priority className="relative rounded-[2.5rem] border border-slate-800/50 shadow-2xl" />
                    </motion.div>
                </div>
            </section>

            {/* ================= SKILLS SECTION (The Neural Core) ================= */}
            <section id="skills" className="py-24 px-6 bg-[#050a18]">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-4">The Neural Core</h2>
                        <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight text-white">Technical Ecosystem</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                        {[
                            {
                                title: "Web Mastery",
                                icon: <Zap className="text-blue-400" />,
                                desc: "Building blazing fast, SEO-optimized web experiences.",
                                skills: ["Next.js 14", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "React Query"]
                            },
                            {
                                title: "Mobile Dev",
                                icon: <Smartphone className="text-pink-400" />,
                                desc: "Native performance with cross-platform efficiency.",
                                skills: ["React Native", "Expo", "Native Modules", "App Store Hooks", "Mobile UI/UX", "Deep Linking", "Reanimated"]
                            },
                            {
                                title: "Backend Engine",
                                icon: <Cpu className="text-emerald-400" />,
                                desc: "Robust server-side logic and real-time database architecture.",
                                skills: ["Node.js", "Express.js", "Socket.io", "PostgreSQL", "MongoDB", "Redis", "REST/GraphQL", "JWT Auth"]
                            },
                            {
                                title: "AI & Automation",
                                icon: <BrainCircuit className="text-purple-400" />,
                                desc: "Integrating intelligent agents and autonomous workflows.",
                                skills: ["OpenAI API", "LangChain", "n8n Workflows", "Vector Databases", "RAG Systems", "AI Agents", "Python Scripts"]
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden"
                            >
                                {/* Subtle Glow */}
                                <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-all" />

                                <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl w-fit shadow-xl group-hover:scale-110 transition-transform">
                                    {card.icon}
                                </div>

                                <h4 className="text-xl font-black mb-2 uppercase italic text-white group-hover:text-indigo-400 transition-colors">
                                    {card.title}
                                </h4>

                                <p className="text-slate-500 text-xs mb-6 font-medium leading-relaxed">
                                    {card.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                                    {card.skills.map(s => (
                                        <span
                                            key={s}
                                            className="text-[9px] font-bold px-2.5 py-1.5 rounded-lg bg-slate-950 text-indigo-300 border border-slate-800 uppercase tracking-widest hover:border-indigo-500/50 hover:text-white transition-all shadow-sm"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </main>
    );
}