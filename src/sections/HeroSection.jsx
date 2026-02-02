export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#f8fafc] pt-36 pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-16
                      md:grid-cols-2 md:items-center">

        {/* LEFT — TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            I explore ideas,<br />
            build systems,<br />
            and turn{" "}
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r from-teal-600 to-emerald-500">
              curiosity
            </span>{" "}
            into code.
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-xl">
            I’m Babasree — a Computer Science undergraduate who enjoys
            experimenting with full-stack development and machine learning
            to understand how real systems behave.
          </p>

          <p className="mt-4 text-slate-500 max-w-xl">
            From secure role-based platforms to behavioral ML experiments,
            I like working where logic, data, and design meet.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-lg
                         bg-gradient-to-r from-teal-600 to-emerald-500
                         text-white font-medium
                         hover:opacity-90 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg
                         border border-teal-300
                         text-teal-700 font-medium
                         hover:bg-teal-50 transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>

        {/* RIGHT — VISUAL */}
        <div className="relative flex justify-center md:justify-end">
          {/* Soft background shape */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96
                          bg-gradient-to-br from-teal-100 to-emerald-100
                          rounded-full blur-3xl" />

          {/* Placeholder illustration */}
          <div className="relative z-10 w-64 md:w-80">
            <img
              src="/hero-illustration.svg"
              alt="Developer illustration"
              className="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
