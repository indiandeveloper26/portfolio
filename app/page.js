"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail, FileDown } from "lucide-react";
import ContactSection from "./component/Footer";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ---------------- PAGE ---------------- */
export default function Page() {
  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-slate-900 overflow-x-hidden">


      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        {/* glow blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >


          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg max-w-xl mx-auto leading-relaxed text-slate-900"
          >
            I’m a <span className="font-semibold">Full Stack Developer</span> specializing in MERN, Next.js, and React Native, building <span className="font-medium">scalable, high-performance web and mobile applications</span>.
            I create <span className="font-medium">responsive, user-friendly interfaces</span> with React, Tailwind CSS, and Framer Motion, while crafting <span className="font-medium">robust backends</span> using Node.js, Express, and MongoDB.
            Experienced in <span className="font-medium">cloud deployment, DevOps, and CI/CD</span>, I ensure every project is fast, secure, and production-ready.
          </motion.p>



          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="mailto:indiandeveloper25@gmail.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <Mail size={16} className="inline mr-2" />
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl border font-semibold hover:bg-slate-50 flex items-center gap-2"
            >
              <FileDown size={16} /> Resume
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "10+", t: "Projects" },
              { n: "3+", t: "Live Apps" },
              { n: "1K+", t: "Users" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl bg-white shadow-md p-4 text-center"
              >
                <p className="text-3xl font-black text-indigo-600">{s.n}</p>
                <p className="text-sm text-slate-600">{s.t}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10"
        >
          <Image
            src="/resume.png"
            width={520}
            height={520}
            alt="Suraj Gaud"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              border: "from-indigo-500 to-purple-500",
              desc:
                "I build fast, responsive and animated user interfaces with modern frameworks and best UI/UX practices.",
              items: [
                "HTML5, CSS3, JavaScript (ES6+)",
                "React.js & Next.js (App Router)",
                "React Native (Android & iOS apps)",
                "Tailwind CSS, ShadCN UI",
                "Framer Motion animations",
              ],
            },
            {
              title: "Backend Development",
              border: "from-emerald-400 to-teal-500",
              desc:
                "I design secure, scalable backend systems with real-time features and production-ready APIs.",
              items: [
                "Node.js & Express.js",
                "REST APIs & Socket.IO",
                "Authentication (JWT, OAuth)",
                "Payments (Razorpay / Stripe)",
                "MongoDB & MySQL",
              ],
            },
            {
              title: "DevOps & Cloud",
              border: "from-pink-500 to-rose-500",
              desc:
                "I deploy, manage and scale applications using cloud and DevOps tools.",
              items: [
                "Docker & Containerization",
                "AWS EC2, S3",
                "Nginx & PM2",
                "Git, GitHub Actions, Jenkins",
                "Basic Kubernetes",
              ],
            },
          ].map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative rounded-3xl p-[2px] bg-gradient-to-br ${s.border} shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {/* Inner Card */}
              <div className="rounded-3xl bg-white p-6 h-full flex flex-col justify-between">
                <h3 className="text-xl font-extrabold mb-3 text-slate-900">
                  {s.title}
                </h3>

                <p className="text-sm mb-4 text-slate-700">{s.desc}</p>

                <ul className="space-y-2 text-sm text-slate-600">
                  {s.items.map((i) => (
                    <li key={i} className="before:content-['•'] before:text-slate-500 before:mr-2">
                      {i}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow transition"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>




      {/* ================= PROJECTS ================= */}
      {/* ================= PROJECTS ================= */}

      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce App (Web + Mobile)",
                desc:
                  "Full-stack MERN e-commerce app with product management, payments and admin dashboard.",
                tech: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Real-Time Chat Application",
                desc:
                  "WhatsApp-style chat app with real-time messaging, online status and media sharing.",
                tech: ["React Native", "Socket.IO", "Node.js"],
                color: "from-emerald-400 to-teal-500",
              },
              {
                title: "Video Call App",
                desc:
                  "WebRTC-based video calling application with real-time chat support.",
                tech: ["React", "WebRTC", "Node.js"],
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Clinic Booking System",
                desc:
                  "Doctor appointment booking app with user, doctor and admin dashboards.",
                tech: ["React Native", "Node.js", "MongoDB"],
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "PDF Selling Platform",
                desc:
                  "Platform for selling free & paid PDFs with secure payments and access control.",
                tech: ["Next.js", "Node.js", "Stripe"],
                color: "from-cyan-400 to-blue-500",
              },
            ].map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-3xl p-[2px] bg-gradient-to-r ${p.color} shadow-lg transition-all duration-500`}
              >
                {/* Inner card */}
                <div className="rounded-3xl bg-white p-6 h-full flex flex-col justify-between">
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`mt-4 inline-block px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${p.color} hover:opacity-90 transition`}
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

    </main>
  );
}
