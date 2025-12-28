"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail, Phone, FileDown } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            Suraj <span className="text-indigo-600">Gaud</span>
          </a>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            {["about", "Skills", "Projects", "Education", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="hover:text-indigo-600 transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative max-w-6xl mx-auto px-5 py-24 grid md:grid-cols-2 gap-10 items-center"
      >
        {/* BACKGROUND SHAPES */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -left-16 h-96 w-96 bg-indigo-100 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-16 h-96 w-96 bg-blue-100 blur-3xl rounded-full" />
        </div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="text-indigo-600 underline decoration-wavy">
              Suraj Gaud
            </span>
          </h1>
          <p className="mt-3 text-slate-600 text-lg font-medium">
            Full Stack Developer | MERN · Next.js · React Native · Telegram Bots
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
            Passionate developer crafting high-performance web & mobile apps.
            Clean architecture, scalable APIs, and smooth user experiences are
            my focus. I love solving real-world problems through code.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:indiandeveloper25@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition-transform hover:scale-105 focus:ring-2 focus:ring-indigo-400"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/indiandeveloper26"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow hover:bg-black transition-transform hover:scale-105 focus:ring-2 focus:ring-slate-700"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="tel:6392831776"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50 transition-transform hover:scale-105 focus:ring-2 focus:ring-indigo-400"
            >
              <Phone size={16} /> 6392831776
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-200 text-sm font-semibold hover:bg-indigo-50 transition-transform hover:scale-105 focus:ring-2 focus:ring-indigo-400"
            >
              <FileDown size={16} /> Resume
            </a>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto md:mx-0"
        >
          <div className="rounded-3xl overflow-hidden bg-white/70 backdrop-blur-sm border-[3px] border-transparent bg-clip-padding bg-gradient-to-tr from-indigo-400 to-purple-500 p-[2px] shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/portimg.png"
              alt="Suraj Gaud"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-3xl"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-6">🧠 Skills & Technologies</h2>
        <p className="text-slate-600 mb-6">
          Skilled in modern frontend frameworks, backend APIs, real-time
          systems, and cloud deployment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "🎨 Frontend",
              color: "indigo",
              items: [
                "HTML5, CSS3, JavaScript, TypeScript",
                "React.js, Next.js (App Router)",
                "React Native (Cross-platform Apps)",
                "Tailwind CSS, ShadCN UI, Framer Motion",
                "Responsive & Mobile-first Design",
              ],
            },
            {
              title: "⚙️ Backend",
              color: "green",
              items: [
                "Node.js, Express.js",
                "REST APIs & WebSocket (Socket.IO)",
                "Telegram Bots (Telegraf.js)",
                "Authentication (JWT, OAuth, Firebase Auth)",
                "Payment Integration (Razorpay, Stripe)",
              ],
            },
            {
              title: "🗄️ Databases",
              color: "yellow",
              items: [
                "MongoDB (Mongoose ODM)",
                "Firebase Firestore",
                "Supabase (PostgreSQL)",
                "Local Storage / AsyncStorage",
              ],
            },
            {
              title: "☁️ Cloud & DevOps",
              color: "teal",
              items: [
                "Docker & Containerization",
                "AWS (EC2, S3, Lightsail)",
                "Vercel / Netlify / Render Deployment",
                "Nginx & PM2 Setup",
              ],
            },
            {
              title: "🧩 Tools & Utilities",
              color: "purple",
              items: [
                "Git, GitHub, GitLab",
                "VS Code, Postman, Figma",
                "Chrome DevTools, ESLint, Prettier",
                "API Testing & Debugging",
              ],
            },
            {
              title: "🚀 Others",
              color: "pink",
              items: [
                "Real-time Chat Apps (Socket.IO)",
                "Telegram Trading Bots (RSI, MACD, EMA)",
                "API Integration (Fyers, Binance)",
                "Payment Systems (Razorpay Premium Access)",
              ],
            },
          ].map((section) => (
            <div
              key={section.title}
              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3
                className={`font-semibold text-lg mb-3 text-${section.color}-600`}
              >
                {section.title}
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold mb-6">🚀 Featured Projects</h2>
        <p className="text-slate-600 mb-8 max-w-3xl">
          Collection of my favorite full-stack projects — real-time apps,
          bots, and innovative solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "💬 Real-Time Chat App",
              desc: "WhatsApp-style chat app with React Native, Node.js & Socket.IO. Includes search, user management, offline storage.",
              tech: ["React Native", "Node.js", "Express", "MongoDB", "Socket.IO"],
              link: "https://github.com/indiandeveloper26/chat-app",
              color: "indigo",
            },
            {
              title: "🛍️ Social + E-Commerce App",
              desc: "Hybrid social + e-commerce platform with real-time updates and shopping features.",
              tech: ["Next.js", "MongoDB", "Tailwind", "Node.js"],
              link: "https://github.com/indiandeveloper26/social-ecommerce",
              color: "blue",
            },
            {
              title: "📖 Story App",
              desc: "Firebase-based Story App with Google login, posts, likes, and group chat.",
              tech: ["React Native", "Firebase", "Node.js"],
              link: "https://github.com/indiandeveloper26/story-app",
              color: "pink",
            },
            {
              title: "🤖 Telegram Signal Bot",
              desc: "Crypto trading bot using Binance API, Telegram integration, Razorpay premium access.",
              tech: ["Node.js", "Telegraf.js", "Binance API", "Razorpay"],
              link: "https://github.com/indiandeveloper26/telegram-bot",
              color: "teal",
            },
            {
              title: "📍 Location Tracker App",
              desc: "Real-time location tracking app with Google Maps API using React Native & Node.js.",
              tech: ["React Native", "Expo", "Google Maps API", "Node.js"],
              link: "https://github.com/indiandeveloper26/location-app",
              color: "green",
            },
          ].map((p) => (
            <article
              key={p.title}
              className={`group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-tr from-${p.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative p-6">
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full border bg-slate-50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 text-sm font-semibold hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-4">🎓 Education</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm max-w-xl">
          <h3 className="text-lg font-semibold">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            Completed — 2024 | College: XYZ Institute of Technology
          </p>
          <p className="mt-3 text-slate-700 text-sm leading-relaxed">
            Relevant Subjects: Web Development, Database Management Systems,
            Data Structures, Networking, Software Engineering.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-5 py-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center"
        >
          <h2 className="text-3xl font-bold">📩 Contact Me</h2>
          <p className="mt-2 text-slate-700">
            Let's connect and bring your ideas to life.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:indiandeveloper25@gmail.com"
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
            >
              Say Hello
            </a>
            <a
              href="https://github.com/indiandeveloper26"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Suraj Gaud. All rights reserved.
      </footer>
    </main>
  );
}
