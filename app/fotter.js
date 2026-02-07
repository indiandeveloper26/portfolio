'use client';

import Link from "next/link";
import {
    Github,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    MapPin,
    Cpu,
    Zap,
    ChevronRight,
    ExternalLink
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#030712] text-white pt-24 pb-12 relative overflow-hidden border-t border-slate-900">

            {/* Background Glow Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Branding & Vision */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl transition-transform group-hover:rotate-6 shadow-lg shadow-indigo-500/20">
                                S
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter uppercase">
                                    Suraj<span className="text-indigo-500">.dev</span>
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">AI Engineering Expert</span>
                            </div>
                        </Link>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Building autonomous AI systems and high-scale full stack applications.
                            Let's transform your ideas into intelligent digital reality.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: "https://github.com" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                                >
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8">Ecosystem</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Neural Core (Skills)", path: "#skills" },
                                { name: "Deployments (Projects)", path: "#projects" },
                                { name: "Admin Dashboard", path: "/AdminDashboard" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Card */}
                    <div className="lg:col-span-4">
                        <div className="p-8 rounded-[2.5rem] bg-slate-900/30 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
                            {/* Card Decor */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Zap size={40} className="text-indigo-500" />
                            </div>

                            <h3 className="text-sm font-black uppercase tracking-widest mb-6">Inquiry Channel</h3>

                            <div className="space-y-4">
                                <a href="mailto:indiandeveloper25@gmail.com" className="flex items-center gap-4 p-3 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                        <Mail size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase">Email Me</span>
                                        <span className="text-[11px] font-bold text-slate-200">indiandeveloper25@gmail.com</span>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                                        <MapPin size={18} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase">Location</span>
                                        <span className="text-[11px] font-bold text-slate-200">Ayodhya, Uttar Pradesh, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                        <span>Built with</span>
                        <Cpu size={12} className="text-indigo-500" />
                        <span>Next.js 14 & AI</span>
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        © {new Date().getFullYear()} Suraj.dev • All Neural Assets Reserved
                    </p>

                    <div className="flex gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 hover:text-indigo-500 cursor-pointer transition-colors">Documentation</span>
                        <div className="w-1 h-1 bg-slate-800 rounded-full my-auto" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 hover:text-indigo-500 cursor-pointer transition-colors">API Status</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}