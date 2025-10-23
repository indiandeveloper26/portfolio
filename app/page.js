










// "use client";
// import React from "react";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
//       {/* NAVBAR */}
//       <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
//         <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
//           <a href="#home" className="font-extrabold tracking-tight">
//             Suraj <span className="text-indigo-600">Gaud</span>
//           </a>
//           <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
//             <a href="#about" className="hover:text-indigo-600">
//               About
//             </a>
//             <a href="#skills" className="hover:text-indigo-600">
//               Skills
//             </a>
//             <a href="#projects" className="hover:text-indigo-600">
//               Projects
//             </a>
//             <a href="#education" className="hover:text-indigo-600">
//               Education
//             </a>
//             <a href="#contact" className="hover:text-indigo-600">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section id="home" className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10 opacity-80 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
//           <div className="absolute -top-10 -left-16 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
//           <div className="absolute -bottom-10 -right-16 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
//         </div>

//         <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h1 className="text-3xl md:text-5xl font-black leading-tight">
//               Full Stack Developer
//             </h1>
//             <p className="mt-3 text-slate-600 text-lg">
//               MERN · Next.js · React Native
//             </p>
//             <p className="mt-4 max-w-prose text-slate-700">
//               Passionate MERN Stack Developer skilled in building scalable web
//               and mobile applications. Hands-on experience in real-time apps,
//               chat platforms, social media, and e-commerce.
//             </p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <a
//                 href="mailto:indiandeveloper25@gmail.com"
//                 className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
//               >
//                 ✉️ Email
//               </a>
//               <a
//                 href="https://github.com/indiandeveloper26"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow hover:bg-black"
//               >
//                 💻 GitHub
//               </a>
//               <a
//                 href="tel:6392831776"
//                 className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50"
//               >
//                 📞 6392831776
//               </a>
//             </div>
//           </div>

//           <div className="md:justify-self-end">
//             <div className="relative">
//               <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-200 via-blue-200 to-transparent blur-2xl" />
//               <div className="relative rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
//                 <p className="text-sm text-slate-500">Quick Facts</p>
//                 <ul className="mt-3 space-y-2 text-sm">
//                   <li>🎓 BCA — Final Year</li>
//                   <li>🧩 Loves component-driven UI</li>
//                   <li>⚡ Real-time (Socket.io) experience</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="max-w-6xl mx-auto px-5 py-10">
//         <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
//           <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
//           About
//         </h2>
//         <p className="mt-3 text-slate-700 leading-relaxed max-w-3xl">
//           I design and build full-stack products with MERN, Next.js and React
//           Native. I enjoy solving real problems, writing clean code, and
//           collaborating on products that users love.
//         </p>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="max-w-6xl mx-auto px-5 py-10">
//         <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
//           <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
//           Skills
//         </h2>
//         <div className="mt-5 flex flex-wrap gap-2">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Next.js",
//             "React Native",
//             "Node.js",
//             "Express.js",
//             "MongoDB",
//             "Tailwind CSS",
//             "Git",
//             "type-sript",
//             "Mql",
//             "GitHub",
//           ].map((s) => (
//             <span
//               key={s}
//               className="px-3 py-1 rounded-full text-sm border bg-white shadow-sm"
//             >
//               {s}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="max-w-6xl mx-auto px-5 py-10">
//         <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
//           <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
//           Projects
//         </h2>

//         <div className="mt-6 grid sm:grid-cols-2 gap-6">
//           {/* Chat App */}
//           <article className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//             <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-indigo-200 to-transparent opacity-0 group-hover:opacity-100 transition" />
//             <div className="relative">
//               <h3 className="text-lg font-bold">Full Chat Application</h3>
//               <p className="mt-1 text-sm text-slate-600">
//                 WhatsApp-style real-time chat app using React Native, Node.js,
//                 and Socket.IO with persistent local storage.
//               </p>
//               <div className="mt-3 flex flex-wrap gap-2 text-xs">
//                 {[
//                   "React Native",
//                   "Node.js",
//                   "Express",
//                   "MongoDB",
//                   "Socket.io",
//                 ].map((t) => (
//                   <span
//                     key={t}
//                     className="px-2 py-1 rounded-full border bg-slate-50"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </article>

//           {/* Social Media + E-commerce */}
//           <article className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//             <h3 className="text-lg font-bold">Social Media + E-commerce</h3>
//             <p className="mt-1 text-sm text-slate-600">
//               A full-stack app combining e-commerce flows with social features
//               like feeds, follows and comments.
//             </p>
//             <div className="mt-3 flex flex-wrap gap-2 text-xs">
//               {["Next.js", "Node.js", "MongoDB", "Tailwind"].map((t) => (
//                 <span
//                   key={t}
//                   className="px-2 py-1 rounded-full border bg-slate-50"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </article>
//         </div>
//       </section>

//       {/* EDUCATION */}
//       <section
//         id="education"
//         className="max-w-6xl mx-auto px-5 py-10"
//       >
//         <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
//           <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
//           Education
//         </h2>
//         <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//           <div className="font-semibold">
//             Bachelor of Computer Applications (BCA) — Final Year
//           </div>
//           <div className="text-sm text-slate-600">College: Add your college name</div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="max-w-6xl mx-auto px-5 py-12">
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
//             <p className="mt-1 text-slate-700">
//               Let’s build something great together.
//             </p>
//             <div className="mt-3 space-y-1 text-sm text-slate-700">
//               <div>✉️ indiandeveloper25@gmail.com</div>
//               <div>📞 6392831776</div>
//               <div>
//                 💻{" "}
//                 <a
//                   className="underline"
//                   href="https://github.com/indiandeveloper26"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   github.com/indiandeveloper26
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-3">
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
//               View GitHub
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-8 text-center text-sm text-slate-500">
//         © {new Date().getFullYear()} Suraj Gaud. All rights reserved.
//       </footer>
//     </main>
//   );
// }







"use client";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl">
            Suraj <span className="text-indigo-600">Gaud</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#education" className="hover:text-indigo-600">
              Education
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-80 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute -top-10 -left-16 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
          <div className="absolute -bottom-10 -right-16 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Full Stack Developer
            </h1>
            <p className="mt-3 text-slate-600 text-lg">
              MERN · Next.js · React Native · Telegram Bot Developer
            </p>
            <p className="mt-4 max-w-prose text-slate-700">
              Passionate MERN Stack Developer skilled in building scalable web
              and mobile applications. Hands-on experience in real-time apps,
              chat platforms, social media, e-commerce, and intelligent bots.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:indiandeveloper25@gmail.com"
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700"
              >
                ✉️ Email
              </a>
              <a
                href="https://github.com/indiandeveloper26"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow hover:bg-black"
              >
                💻 GitHub
              </a>
              <a
                href="tel:6392831776"
                className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-slate-50"
              >
                📞 6392831776
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-200 via-blue-200 to-transparent blur-2xl" />
              <div className="relative rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
                <p className="text-sm text-slate-500">Quick Facts</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>🎓 Bachelor of Computer Applications (BCA) — Final Year</li>
                  <li>🧩 Loves component-driven UI development</li>
                  <li>⚡ Experienced with real-time apps (Socket.IO)</li>
                  <li>🤖 Built intelligent Telegram bots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
          About
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed max-w-3xl">
          I design and build full-stack products with MERN, Next.js, React Native,
          and bot frameworks. I enjoy solving real problems, writing clean code,
          and collaborating on products that users love.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
          Skills
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "React Native",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "Telegraf.js",
            "Telegram API",
            "Tailwind CSS",
            "Git",
            "TypeScript",
          ].map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full text-sm border bg-white shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
          Projects
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {/* Chat App */}
          <article className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-indigo-200 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <h3 className="text-lg font-bold">Full Chat Application</h3>
              <p className="mt-1 text-sm text-slate-600">
                WhatsApp-style real-time chat app using React Native, Node.js,
                and Socket.IO with persistent local storage.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["React Native", "Node.js", "Express", "MongoDB", "Socket.io"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full border bg-slate-50"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </article>

          {/* Social Media + E-commerce */}
          <article className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold">Social Media + E-commerce</h3>
            <p className="mt-1 text-sm text-slate-600">
              A full-stack app combining e-commerce flows with social features
              like feeds, follows and comments.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Next.js", "Node.js", "MongoDB", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full border bg-slate-50"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Telegram Bot */}
          <article className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold">Telegram Bot</h3>
            <p className="mt-1 text-sm text-slate-600">
              An intelligent Telegram bot built with Node.js and Telegraf.js to
              automate tasks, answer queries, and interact with users smoothly.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Node.js", "Telegraf.js", "JavaScript", "Telegram API"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full border bg-slate-50"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/indiandeveloper26/telegram-bot"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-indigo-600 font-semibold hover:underline"
            >
              View Project on GitHub →
            </a>
          </article>

          {/* Location App */}
          <article className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold">Location-Based App</h3>
            <p className="mt-1 text-sm text-slate-600">
              A mobile app using React Native with real-time geolocation tracking
              and map integration for user-friendly location services.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["React Native", "Expo", "Google Maps API", "Node.js"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full border bg-slate-50"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="max-w-6xl mx-auto px-5 py-10"
      >
        <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
          <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600" />{" "}
          Education
        </h2>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-w-xl">
          <div className="font-semibold text-lg">
            Bachelor of Computer Applications (BCA) — Final Year
          </div>
          <div className="text-sm text-slate-600 mt-1">
            College: Add your college name
          </div>
          <div className="mt-3 text-slate-700">
            Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development.
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-5 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="mt-1 text-slate-700">
              Let’s build something great together.
            </p>
            <div className="mt-3 space-y-1 text-sm text-slate-700">
              <div>✉️ indiandeveloper25@gmail.com</div>
              <div>📞 6392831776</div>
              <div>
                💻{" "}
                <a
                  className="underline"
                  href="https://github.com/indiandeveloper26"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/indiandeveloper26
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Suraj Gaud. All rights reserved.
      </footer>
    </main>
  );
}



