// "use client";
// import { motion } from "framer-motion";
// import { Github, Mail, Phone } from "lucide-react";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
//       {/* NAVBAR */}
//       <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-slate-200">
//         <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
//           <a href="#home" className="font-extrabold text-xl tracking-tight">
//             Suraj <span className="text-indigo-600">Gaud</span>
//           </a>
//           <div className="hidden sm:flex gap-6 text-sm font-medium">
//             {["About", "Skills", "Projects", "Education", "Contact"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="hover:text-indigo-600 transition"
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section id="home" className="max-w-6xl mx-auto px-5 py-24 grid md:grid-cols-2 gap-10 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-black leading-tight">
//             Full Stack <span className="text-indigo-600">Developer</span>
//           </h1>
//           <p className="mt-4 text-slate-600 text-lg">
//             MERN · Next.js · React Native · Telegram Bot Developer
//           </p>
//           <p className="mt-4 max-w-prose text-slate-700">
//             I build powerful full-stack web & mobile apps with real-time chat,
//             automation bots, and seamless cloud integrations.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <a
//               href="mailto:indiandeveloper25@gmail.com"
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
//             >
//               <Mail size={16} /> Email
//             </a>
//             <a
//               href="https://github.com/indiandeveloper26"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow hover:bg-black"
//             >
//               <Github size={16} /> GitHub
//             </a>
//             <a
//               href="tel:6392831776"
//               className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50"
//             >
//               <Phone size={16} /> 6392831776
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-300 to-blue-100 blur-3xl rounded-3xl opacity-40" />
//           <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-lg p-6">
//             <p className="text-sm text-slate-500">Quick Facts</p>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li>🎓 BCA Final Year</li>
//               <li>⚡ Real-time Chat Apps (Socket.IO)</li>
//               <li>🤖 Telegram Trading Bots</li>
//               <li>🚀 Deployments with Docker & AWS</li>
//             </ul>
//           </div>
//         </motion.div>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="max-w-6xl mx-auto px-5 py-16">
//         <h2 className="text-3xl font-bold mb-6">🧠 Skills</h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-wrap gap-3"
//         >
//           {[
//             "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
//             "React Native", "Node.js", "Express.js", "MongoDB", "Socket.io",
//             "Telegraf.js", "Firebase", "Supabase", "Docker", "AWS", "Tailwind CSS", "Git",
//           ].map((s) => (
//             <span
//               key={s}
//               className="px-4 py-1.5 rounded-full text-sm border bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition"
//             >
//               {s}
//             </span>
//           ))}
//         </motion.div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="max-w-6xl mx-auto px-5 py-16">
//         <h2 className="text-3xl font-bold mb-6">🚀 Projects</h2>
//         <div className="grid sm:grid-cols-2 gap-8">
//           {[
//             {
//               title: "Full Chat App",
//               desc: "WhatsApp-style chat using React Native + Node.js + Socket.IO + AsyncStorage.",
//               tech: ["React Native", "Node.js", "Socket.IO", "MongoDB"],
//               link: "https://github.com/indiandeveloper26",
//             },
//             {
//               title: "Telegram Trading Bot",
//               desc: "Bot that sends crypto/stock buy-sell signals using RSI, MACD, and Razorpay subscriptions.",
//               tech: ["Node.js", "Telegraf", "Razorpay", "MongoDB"],
//               link: "https://github.com/indiandeveloper26/telegram-bot",
//             },
//             {
//               title: "AI Dashboard",
//               desc: "Next.js dashboard integrating OpenAI API, charts, and modern UI animations.",
//               tech: ["Next.js", "Chart.js", "OpenAI API"],
//             },
//             {
//               title: "Social E-Commerce",
//               desc: "Combined social feed + shop platform with posts, comments & checkout.",
//               tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
//             },
//           ].map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="group relative border border-slate-200 rounded-2xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
//             >
//               <h3 className="font-bold text-lg">{p.title}</h3>
//               <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
//               <div className="mt-3 flex flex-wrap gap-2 text-xs">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-2 py-1 rounded-full border bg-slate-50"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               {p.link && (
//                 <a
//                   href={p.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-block mt-4 text-indigo-600 font-semibold hover:underline"
//                 >
//                   View Project →
//                 </a>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="max-w-6xl mx-auto px-5 py-16">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center"
//         >
//           <h2 className="text-3xl font-bold">📩 Contact Me</h2>
//           <p className="mt-2 text-slate-700">
//             Let’s collaborate and build something amazing together.
//           </p>
//           <div className="mt-6 flex flex-wrap justify-center gap-3">
//             <a
//               href="mailto:indiandeveloper25@gmail.com"
//               className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
//             >
//               Say Hello
//             </a>
//             <a
//               href="https://github.com/indiandeveloper26"
//               target="_blank"
//               rel="noreferrer"
//               className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50"
//             >
//               GitHub
//             </a>
//           </div>
//         </motion.div>
//       </section>

//       <footer className="py-8 text-center text-sm text-slate-500">
//         © {new Date().getFullYear()} Suraj Gaud. All rights reserved.
//       </footer>
//     </main>
//   );
// }


















"use client";
import { motion } from "framer-motion";
import { Github, Mail, Phone, FileDown } from "lucide-react";
import Image from "next/image";
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            Suraj <span className="text-indigo-600">Gaud</span>
          </a>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            {["About", "Skills", "Projects", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-indigo-600 transition"
                >
                  {item}
                </a>
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
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-20 -left-16 h-96 w-96 bg-indigo-100 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-16 h-96 w-96 bg-blue-100 blur-3xl rounded-full" />
        </div>

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
            Full Stack Website & App Developer | MERN · Next.js · React Native · Telegram Bots
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
            A passionate full-stack developer crafting high-performance web and
            mobile apps. I focus on clean architecture, scalable APIs, and smooth
            user experiences. I love solving real problems through code and
            automation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:indiandeveloper25@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/indiandeveloper26"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow hover:bg-black"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="tel:6392831776"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50"
            >
              <Phone size={16} /> 6392831776
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-200 text-sm font-semibold hover:bg-indigo-50"
            >
              <FileDown size={16} /> Resume
            </a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >

          <div className="rounded-3xl overflow-hidden bg-white/70 backdrop-blur-sm border-[3px] border-transparent bg-clip-padding bg-gradient-to-tr from-indigo-400 to-purple-500 p-[2px]">
            <Image
              src="/portimg.png"
              alt="Web and App Development"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-3xl"
              priority
            />
          </div>



        </motion.div>


      </section>

      {/* ABOUT */}
      <section id="skills" className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-6">🧠 Skills & Technologies</h2>
        <p className="text-slate-600 mb-6">
          A complete Full Stack Developer skilled in modern frontend frameworks, backend APIs, real-time systems, and cloud deployment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* FRONTEND */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-3">🎨 Frontend</h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
              <li>• React.js, Next.js (App Router)</li>
              <li>• React Native (Cross-platform Apps)</li>
              <li>• Tailwind CSS, ShadCN UI, Framer Motion</li>
              <li>• Responsive & Mobile-first Design</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-3">⚙️ Backend</h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Node.js, Express.js</li>
              <li>• REST APIs & WebSocket (Socket.IO)</li>
              <li>• Telegram Bots (Telegraf.js)</li>
              <li>• Authentication (JWT, OAuth, Firebase Auth)</li>
              <li>• Payment Integration (Razorpay, Stripe)</li>
            </ul>
          </div>

          {/* DATABASES */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-3">🗄️ Databases</h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• MongoDB (Mongoose ODM)</li>
              <li>• Firebase Firestore</li>
              <li>• Supabase (PostgreSQL)</li>
              <li>• Local Storage / AsyncStorage</li>
            </ul>
          </div>

          {/* DEVOPS / CLOUD */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-3">☁️ Cloud & DevOps</h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Docker & Containerization</li>
              <li>• AWS (EC2, S3, Lightsail)</li>
              <li>• Vercel / Netlify / Render Deployment</li>
              <li>• Nginx & PM2 Setup</li>
            </ul>
          </div>

          {/* TOOLS */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-3">🧩 Tools & Utilities</h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Git, GitHub, GitLab</li>
              <li>• VS Code, Postman, Figma</li>
              <li>• Chrome DevTools, ESLint, Prettier</li>
              <li>• API Testing & Debugging</li>
            </ul>
          </div>

          {/* EXTRA */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600 text-lg mb-3">🚀 Others</h3>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Real-time Chat Apps (Socket.IO)</li>
              <li>• Telegram Trading Bots (RSI, MACD, EMA)</li>
              <li>• API Integration (Fyers, Binance)</li>
              <li>• Payment Systems (Razorpay Premium Access)</li>
            </ul>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-6">🧠 Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
            "React Native", "Node.js", "Express.js", "MongoDB", "Socket.io",
            "Telegraf.js", "Firebase", "Supabase", "Docker", "AWS", "TailwindCSS", "Git",
          ].map((s) => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-1.5 rounded-full text-sm border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold mb-6">🚀 Featured Projects</h2>
        <p className="text-slate-600 mb-8 max-w-3xl">
          A collection of my favorite full-stack projects — from real-time apps to intelligent bots.
          Each project is built with performance, scalability, and clean UI in mind.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CHAT APP */}
          <article className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative p-6">
              <h3 className="text-lg font-bold mb-2">💬 Real-Time Chat App</h3>
              <p className="text-sm text-slate-600">
                WhatsApp-style chat app built using React Native, Node.js & Socket.IO.
                Includes search, user management, and offline message storage.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React Native", "Node.js", "Express", "MongoDB", "Socket.IO"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border bg-slate-50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/indiandeveloper26/chat-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* SOCIAL + E-COMMERCE */}
          <article className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative p-6">
              <h3 className="text-lg font-bold mb-2">🛍️ Social + E-Commerce App</h3>
              <p className="text-sm text-slate-600">
                A hybrid platform combining social features with e-commerce —
                users can post stories, follow others, and shop products in real-time.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Next.js", "MongoDB", "Tailwind", "Node.js"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border bg-slate-50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/indiandeveloper26/social-ecommerce"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* STORY APP */}
          <article className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative p-6">
              <h3 className="text-lg font-bold mb-2">📖 Story App</h3>
              <p className="text-sm text-slate-600">
                Firebase-based Story App where users can log in with Google and share stories
                with text posts, likes, and group chat functionality.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React Native", "Firebase", "Node.js"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border bg-slate-50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/indiandeveloper26/story-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* TELEGRAM BOT */}
          <article className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative p-6">
              <h3 className="text-lg font-bold mb-2">🤖 Telegram Signal Bot</h3>
              <p className="text-sm text-slate-600">
                Crypto trading signal bot using Binance API, MACD/RSI/EMA indicators,
                and Telegram integration with Razorpay premium access.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Node.js", "Telegraf.js", "Binance API", "Razorpay"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border bg-slate-50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/indiandeveloper26/telegram-bot"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>

          {/* LOCATION APP */}
          <article className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative p-6">
              <h3 className="text-lg font-bold mb-2">📍 Location Tracker App</h3>
              <p className="text-sm text-slate-600">
                Real-time location tracking mobile app using Google Maps API,
                built with React Native and Node.js for geolocation services.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React Native", "Expo", "Google Maps API", "Node.js"].map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border bg-slate-50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/indiandeveloper26/location-app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
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
