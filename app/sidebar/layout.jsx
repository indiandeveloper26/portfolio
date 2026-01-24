"use client"
import { useState } from "react";
; // sidebar component
import { X } from "lucide-react";
import Sidebar from "../component/sidebar";

export default function Layout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSidebar = () => setMobileOpen(!mobileOpen);

    return (
        <div className="flex h-screen bg-gray-100">

            {/* Desktop Sidebar */}
            <Sidebar isMobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/30 z-40 md:hidden"
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-auto">

                {/* Top Navbar (mobile only) */}
                <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow sticky top-0 z-50">
                    <h1 className="text-lg font-bold">MyApp</h1>
                    <button onClick={toggleSidebar} className="p-2 rounded-md border hover:bg-gray-100">
                        {mobileOpen ? <X size={24} /> : <X size={24} className="rotate-45" />} {/* Hamburger icon */}
                    </button>
                </div>

                {/* Page content */}
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}
