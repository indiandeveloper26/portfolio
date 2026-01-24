'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Dashboard", href: "/sidebar" },
    { label: "About", href: "/sidebar/about" },
    { label: "User", href: "/sidebar/user" },
    { label: "Details", href: "/sidebar/details" },
];

export default function Sidebar({ isMobileOpen, setMobileOpen }) {
    const pathname = usePathname();

    return (
        <aside
            className={`bg-white border-r shadow-sm h-screen p-6 fixed top-0 left-0 z-50 transform transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:w-64 md:flex flex-col`}
        >
            {/* Header */}
            <h2 className="text-2xl font-bold mb-6 hidden md:block">MyApp</h2>

            {/* Menu */}
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-3 py-2 rounded transition ${pathname === item.href
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-gray-100 text-gray-800"
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
