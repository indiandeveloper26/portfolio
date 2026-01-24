"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "DEVOPS", href: "#devops" },
    { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b shadow-sm">
            <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="font-black text-xl text-gray-900">
                    Suraj<span className="text-indigo-600">.dev</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {menuItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            whileHover={{ y: -2 }}
                            className="relative text-gray-800 hover:text-indigo-600 transition group"
                        >
                            {item.label}
                            {/* underline hover */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all"></span>
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-gray-800 hover:bg-gray-100 transition"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white shadow-lg border-b"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-800 font-medium hover:text-indigo-600 transition"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
