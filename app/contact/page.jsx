export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <p className="text-gray-700 mb-4">You can reach me at:</p>
            <ul className="text-gray-700 space-y-2">
                <li>Email: <a href="mailto:indiandeveloper25@gmail.com" className="text-indigo-500 hover:underline">indiandeveloper25@gmail.com</a></li>
                <li>Phone: <a href="tel:6392831776" className="text-indigo-500 hover:underline">+91 6392831776</a></li>
                <li>Telegram: <a href="https://t.me/indiandeveloper25" className="text-indigo-500 hover:underline">t.me/indiandeveloper25</a></li>
            </ul>
        </div>
    );
}
