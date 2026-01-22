"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ContactSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            {/* ================= CONTACT ================= */}
            <section className="max-w-7xl mx-auto px-6 py-28 text-center">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-4"
                >
                    Let’s Build Something Great
                </motion.h2>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="text-lg text-slate-700 max-w-xl mx-auto mb-8 leading-relaxed"
                >
                    You can reach me at: <br />
                    <span className="font-semibold">Email:</span> indiandeveloper25@gmail.com <br />
                    <span className="font-semibold">Phone:</span> +91 6392831776 <br />
                    <span className="font-semibold">Telegram:</span>{" "}
                    <a href="https://t.me/indiandeveloper25" className="text-indigo-600 hover:underline">
                        t.me/indiandeveloper25
                    </a>
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="flex justify-center flex-wrap gap-4"
                >
                    <a
                        href="mailto:indiandeveloper25@gmail.com"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://github.com/indiandeveloper26"
                        className="px-6 py-3 rounded-xl border border-slate-300 font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                        <Github size={18} /> GitHub
                    </a>
                </motion.div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-slate-50 py-8 text-center text-sm text-slate-500 border-t border-slate-200">
                <p>© {new Date().getFullYear()} Suraj Gaud. All rights reserved.</p>
                <p className="mt-2 text-slate-400">Built with Next.js, Tailwind CSS & Framer Motion</p>
            </footer>
        </>
    );
}
