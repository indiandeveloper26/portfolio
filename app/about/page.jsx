export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start mb-8">

                <div>
                    <h1 className="text-5xl font-bold mb-2">Suraj Gaud</h1>
                    <p className="text-gray-700 text-lg">
                        Full-Stack Developer | React Native, Next.js, Node.js, Telegram Bots
                    </p>
                </div>
            </div>

            {/* About Text */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 mb-4">
                    Hi, I am <strong>Suraj Gaud</strong>, a passionate full-stack developer from India. I specialize in building modern mobile and web applications with real-time features, API integrations, and seamless user experiences.
                </p>
                <p className="text-gray-700">
                    I enjoy transforming ideas into functional applications and solving complex problems using the latest technologies.
                </p>
            </section>

            {/* Skills */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="list-disc list-inside">
                        <li>React Native – Mobile Apps (Chat apps, Real-time apps)</li>
                        <li>React.js / Next.js – Web Apps & Streaming / SSR</li>
                        <li>Node.js / Express – Backend APIs & Socket.IO</li>
                    </ul>
                    <ul className="list-disc list-inside">
                        <li>Telegram Bots – Crypto / Trading / Signal Bots</li>
                        <li>Razorpay / Cashfree – Payment Integration</li>
                        <li>Fyers / Binance API Integration – Trading Bots</li>
                    </ul>
                </div>
            </section>

            {/* Projects / Experience */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Projects & Experience</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>WhatsApp-style real-time chat app (React Native + Node.js + Socket.IO)</li>
                    <li>Crypto trading signal bot with Telegram integration and Razorpay premium subscription</li>
                    <li>Next.js portfolio website with Suspense & streaming features</li>
                    <li>Fyers & Binance API integration for trading bots</li>
                </ul>
            </section>

            {/* Call to Action */}
            <section className="mt-8 text-center">
                <p className="text-gray-700 mb-4">
                    Want to work together or hire me for a project?
                </p>
                <a
                    href="/contact"
                    className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition"
                >
                    Contact Me
                </a>
            </section>
        </div>
    );
}
