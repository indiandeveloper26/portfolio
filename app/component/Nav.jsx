'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';
import { Menu, X, LayoutDashboard, Home, Cpu, Code2, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Skills', path: '/skills', icon: <Cpu size={20} /> },
        { name: 'Projects', path: '/project', icon: <Zap size={20} /> },
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body scroll lock jab menu open ho
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-slate-800 shadow-2xl"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* ================= LOGO ================= */}
                <Link href="/" className="flex items-center gap-3 group z-[120]">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-transform">
                        <Code2 size={22} />
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase text-white">
                        Suraj<span className="text-indigo-500">.dev</span>
                    </span>
                </Link>

                {/* ================= DESKTOP NAV ================= */}
                <nav className="hidden lg:flex items-center gap-2 bg-slate-900/40 p-1.5 rounded-2xl border border-slate-800/50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`text-[11px] font-bold uppercase tracking-widest transition-all px-4 py-2 rounded-xl flex items-center gap-2 ${pathname === link.path
                                ? "text-white bg-indigo-600 shadow-lg shadow-indigo-600/20"
                                : "text-slate-400 hover:text-white hover:bg-slate-800"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* ================= ACTIONS ================= */}
                <div className="flex items-center gap-3 z-[120]">
                    <a href="https://github.com" target="_blank" className="hidden md:flex w-10 h-10 rounded-xl items-center justify-center border border-slate-800 text-slate-400 hover:text-white transition-all">
                        <FaGithub size={20} />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-11 h-11 flex lg:hidden items-center justify-center rounded-xl bg-indigo-600 border border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE SIDEBAR MENU ================= */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dark Overlay Background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-[#030712] border-l border-slate-800 z-[115] lg:hidden p-8 flex flex-col shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
                        >
                            <div className="mt-20 flex flex-col gap-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-2">Navigation</p>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between p-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all border ${pathname === link.path
                                            ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                                            : "bg-slate-900/50 border-slate-800 text-slate-400"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            {link.icon} {link.name}
                                        </span>
                                        <ArrowRight size={16} className={pathname === link.path ? "opacity-100" : "opacity-0"} />
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto space-y-4">
                                <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-center">
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Let's build something intelligent together.</p>
                                </div>
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-95 transition-transform"
                                >
                                    Start A Project <Zap size={16} fill="black" />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}