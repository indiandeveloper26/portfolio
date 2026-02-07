'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Dashboard", href: "/sidebar" },
    { label: "About", href: "/sidebar/about" },
    { label: "User", href: "/sidebar/user" },

    { label: "Dashboffard", href: "/sidebar" },
    { label: "Aboerut", href: "/sidebar/about" },
    { label: "Usfsdfer", href: "/sidebar/user" },
];

export default function Sidebar({ isMobileOpen, setMobileOpen }) {
    const pathname = usePathname();

    return (
        <aside
            className={`bg-white border-r border-orange-400 shadow-sm h-screen p-6 fixed top-0 left-0 z-50 transform transition-transform duration-300
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
            md:relative md:translate-x-0 md:w-64 md:flex flex-col`}
        >
            {/* Header */}
            <h2 className="text-2xl font-bold mb-6 hidden md:block text-gray-800">MyApp</h2>

            {/* Menu */}
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`px-3 py-2 rounded-l-md transition flex items-center gap-2
                                ${isActive
                                    ? "border-l-4 border-indigo-600 bg-gray-100 text-gray-900 font-semibold"
                                    : "border-l-4 border-transparent hover:border-orange-400 hover:bg-gray-50 text-gray-800"
                                }`}
                        >
                            {/* Optional: small colored dot indicator */}
                            <span className={`w-2 h-2 rounded-full ${isActive ? "bg-indigo-600" : "bg-transparent"}`} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
