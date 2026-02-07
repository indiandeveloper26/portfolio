'use client';
import { motion } from "framer-motion";
import {
    BarChart3, Activity, Github, Code2,
    Clock, Zap, Globe, Cpu
} from "lucide-react";

const stats = [
    { label: "Total Commits", value: "1.2k+", icon: <Github className="text-indigo-400" /> },
    { label: "Hours Coded", value: "2,400+", icon: <Clock className="text-emerald-400" /> },
    { label: "Live Apps", value: "12", icon: <Globe className="text-blue-400" /> },
    { label: "AI Workflows", value: "45", icon: <Zap className="text-purple-400" /> },
];

const techUsage = [
    { name: "Next.js / React", level: "95%", color: "bg-indigo-500" },
    { name: "Node.js / Express", level: "88%", color: "bg-emerald-500" },
    { name: "React Native", level: "82%", color: "bg-pink-500" },
    { name: "AI / LangChain", level: "75%", color: "bg-purple-500" },
];

export default function page() {
    return (
        <main className="min-h-screen bg-[#030712] text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
                            The <span className="text-indigo-500">Command</span> Center
                        </h1>
                        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-2">
                            Real-time Technical Activity & Metrics
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                        SYSTEMS ONLINE
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-800 flex flex-col gap-4"
                        >
                            <div className="p-3 bg-slate-800/50 rounded-xl w-fit">{stat.icon}</div>
                            <div>
                                <p className="text-3xl font-black italic tracking-tight">{stat.value}</p>
                                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Tech Proficiency Card */}
                    <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-slate-900/20 border border-slate-800 shadow-2xl">
                        <h3 className="text-xl font-black mb-8 flex items-center gap-2 italic">
                            <BarChart3 size={20} className="text-indigo-500" /> LANGUAGE PROFICIENCY
                        </h3>
                        <div className="space-y-6">
                            {techUsage.map((tech, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                        <span>{tech.name}</span>
                                        <span className="text-slate-500">{tech.level}</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: tech.level }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`h-full ${tech.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* System Status / Currently Learning */}
                    <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 relative overflow-hidden">
                        <h3 className="text-xl font-black mb-8 flex items-center gap-2 italic">
                            <Activity size={20} className="text-pink-500" /> CURRENT STATUS
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Building</p>
                                <p className="text-sm font-bold">Multi-Agent AI CRM</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Learning</p>
                                <p className="text-sm font-bold">Rust & WebAssembly</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
                                <p className="text-[10px] text-indigo-400 font-bold uppercase mb-1">Availability</p>
                                <p className="text-sm font-bold text-indigo-200">Open for Freelance</p>
                            </div>
                        </div>

                        {/* Decorative Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />
                    </div>

                </div>

                {/* Github Activity Placeholder */}
                <div className="mt-8 p-8 rounded-[2.5rem] bg-slate-900/20 border border-slate-800 flex flex-col items-center justify-center min-h-[200px] text-center">
                    <Code2 size={40} className="text-slate-700 mb-4" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                        GitHub Contribution Heatmap Loading...
                    </p>
                </div>

            </div>
        </main>
    );
}