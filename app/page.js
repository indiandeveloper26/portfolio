'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github, Mail, FileDown, BrainCircuit, Bot, Zap, Cpu,
  ArrowRight, ExternalLink, MessageSquare, Utensils, BookOpen,
  ShoppingCart, CalendarDays, Rocket, Smartphone
} from "lucide-react";
import Footer from "./component/Footer";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#030712] text-white overflow-x-hidden selection:bg-indigo-500/30">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Full Stack & AI Engineer
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Scalable Tech</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              MERN Stack specialist crafting high-performance <span className="text-white font-medium">Next.js</span> applications and autonomous <span className="text-white font-medium">AI Workflows</span> that solve complex problems.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="mailto:indiandeveloper25@gmail.com" className="group px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-all flex items-center gap-2">
                Start Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" className="px-8 py-4 rounded-2xl border border-slate-800 font-bold hover:bg-slate-900 transition-all flex items-center gap-2 text-slate-300">
                <FileDown size={18} /> Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl -rotate-6" />
            <Image
              src="/resume.png"
              width={600}
              height={600}
              alt="Dev"
              className="relative rounded-[2.5rem] border border-slate-800 shadow-2xl"
            />          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK (SKILLS) ================= */}
      {/* ================= TECH STACK (SKILLS) ================= */}
      <section id="skills" className="py-24 px-6 bg-[#050a18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-4">The Neural Core</h2>
            <h3 className="text-4xl font-black tracking-tight italic">Technical Ecosystem</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Mastery",
                icon: <Zap className="text-blue-400" />,
                desc: "Next-gen web apps with pixel-perfect UI and high-performance rendering.",
                skills: ["Next.js 14", "React.js", "Tailwind CSS", "Redux", "TypeScript"]
              },
              {
                title: "Mobile Devlopment",
                icon: <Smartphone className="text-pink-400" />,
                desc: "Native-grade Android & iOS apps built with a single high-performance codebase.",
                skills: ["React Native", "Expo", "Native Modules", "App Store/Play Store"]
              },
              {
                title: "Backend Core",
                icon: <Cpu className="text-emerald-400" />,
                desc: "Scalable microservices and real-time systems handling heavy data traffic.",
                skills: ["Node.js", "Express", "Socket.io", "PostgreSQL", "MongoDB"]
              },
              {
                title: "AI & Automation",
                icon: <BrainCircuit className="text-purple-400" />,
                desc: "Smart autonomous agents and complex n8n workflows for business logic.",
                skills: ["LangChain", "n8n", "OpenAI API", "Vector DBs", "RAG"]
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                  {card.icon}
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter italic">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {card.skills.map(s => (
                    <span key={s} className="text-[9px] font-bold px-2 py-1 rounded-md bg-slate-800 text-indigo-300 uppercase tracking-wider border border-slate-700/50">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION (The "Big 5") ================= */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Featured <span className="text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Deployments</span>
            </h2>
            <p className="text-slate-500 font-medium mt-2">5 Full-Stack Powerhouses built for Scale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Exforce E-Commerce",
                type: "Shopping Ecosystem",
                icon: <ShoppingCart className="text-indigo-400" />,
                desc: "A massive multi-vendor e-commerce platform with real-time inventory tracking, Razorpay/Stripe integration, and an advanced admin cockpit.",
                tech: ["Next.js", "Redux", "Node.js", "PostgreSQL"]
              },
              {
                title: "Chatpap Pro",
                type: "Instant Communication",
                icon: <MessageSquare className="text-blue-400" />,
                desc: "Enterprise-grade chat app featuring end-to-end encryption, real-time message delivery status, and AI-driven smart replies.",
                tech: ["Socket.io", "React", "MongoDB", "Express"]
              },
              {
                title: "DineFlow Restaurant",
                type: "Digital Gastronomy",
                icon: <Utensils className="text-orange-400" />,
                desc: "Smart restaurant POS system with QR code ordering, kitchen display management, and automated sales analytics.",
                tech: ["MERN Stack", "Cloudinary", "Framer Motion"]
              },
              {
                title: "Elite Coaching PDF",
                type: "LMS & EdTech",
                icon: <BookOpen className="text-emerald-400" />,
                desc: "A secure digital library for coaching institutes. Features automated PDF watermarking, student subscriptions, and offline viewing protection.",
                tech: ["Node.js", "Firebase", "React Native"]
              },
              {
                title: "Admya Clinic Booking",
                type: "HealthTech Solution",
                icon: <CalendarDays className="text-pink-400" />,
                desc: "Advanced medical appointment engine with automated SMS reminders, patient history management, and doctor-patient real-time dashboard.",
                tech: ["Next.js 14", "MongoDB", "Tailwind", "Twilio"]
              }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/20 p-8 hover:bg-slate-900/40 transition-all hover:border-indigo-500/30 flex flex-col h-full shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-800/80 rounded-2xl text-white group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <div className="flex gap-2">
                    <Github size={18} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                    <ExternalLink size={18} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20 w-fit">
                  {p.type}
                </span>

                <h3 className="text-2xl font-black mt-5 mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
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

            {/* Ready to Build Card */}
            <div className="rounded-[2.5rem] border-2 border-dashed border-slate-800 flex flex-col items-center justify-center p-8 text-center group hover:border-indigo-500/50 transition-colors bg-indigo-500/[0.02]">
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-4 group-hover:animate-bounce">
                <Rocket className="text-indigo-500" />
              </div>
              <h4 className="text-lg font-black uppercase">Next Project?</h4>
              <p className="text-slate-500 text-xs mt-2 mb-6 tracking-wide">Your vision could be the next featured deployment.</p>
              <button className="text-[10px] font-black uppercase tracking-widest px-6 py-3 bg-white text-black rounded-xl hover:bg-indigo-500 hover:text-white transition-all">
                Let's Build
              </button>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}