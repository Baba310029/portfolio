import { useEffect, useRef, useState } from "react";
import SectionContacts from "../components/SectionContacts";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative bg-white py-32
        transition-all duration-[900ms] ease-out p-4
        ${visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-60 translate-y-16 scale-95"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* BIG STATEMENT */}
        <div className="mb-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold
                        text-slate-900 leading-tight">
            I believe{" "}
            <span className="text-teal-600">
              well-engineered systems
            </span>
            <br />
            create{" "}
            <span className="text-teal-600">
              meaningful impact
            </span>.
          </h1>
        </div>

        {/* TOP AREA */}
        <div className="grid gap-20 md:grid-cols-2 items-center">

          {/* LEFT — TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              About Me
            </h2>

            <p className="text-slate-600 leading-relaxed max-w-xl">
              Hi, I’m <span className="font-semibold text-teal-600">Babasree</span>,
              a Computer Science undergraduate with a strong interest in
              full-stack development and machine learning.
              <br /><br />
              I enjoy building clean, reliable systems and understanding
              how data, logic, and user experience come together.
              I’m especially curious about backend design, authorization,
              and data-driven decision making.
            </p>

            <a
              href="/resume.pdf"
              className="inline-block mt-8 px-6 py-3
                         border border-teal-500 text-teal-600
                         rounded-lg hover:bg-teal-600 hover:text-white transition"
            >
              Resume
            </a>
          </div>

          {/* RIGHT — PHOTO / VISUAL */}
          <div className="flex justify-center">
            <div
              className="
                w-60 h-60 rounded-full
                bg-gradient-to-br from-teal-100 to-emerald-100
                flex items-center justify-center
                transition-all duration-300 ease-out
                hover:scale-115
                hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
              "
            >
              <img
                src="/my-photo.jpeg"
                alt="photo"
                className="
                  max-w-full max-h-full
                  object-contain
                  rounded-full
                  transition-opacity duration-300
                  hover:opacity-98
                "
              />
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:pt-6">

          <AboutCard
            title="Full Stack Developer"
            text="Experience building frontend interfaces and backend systems using modern web technologies."
            url={"about/about01.jpeg"}
          />

          <AboutCard
            title="Tech Enthusiast"
            text="Curious about new technologies, especially machine learning, AI, and system design."
            url={"about/about02.jpeg"}
          />

          <AboutCard
            title="Problem Solver"
            text="Enjoy breaking down complex problems and building structured, efficient solutions."
            url={"about/about03.jpeg"}
          />

          <AboutCard
            title="Vision Driven"
            text="Focused on continuous learning and building solutions that scale and matter."
            url={"about/about04.jpeg"}
          />

        </div>
        <SectionContacts/>
      </div>
    </section>
  );
}

function AboutCard({ title, text, url }) {
  return (
    <div
      className="text-center p-4 rounded-2xl
                 transition-all duration-300
                 hover:scale-[1.2]"
    >
        <div className="h-36 flex items-center justify-center p-4">
        <img
          src={url}
          alt={title}
          className="max-h-full object-contain"
        />
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 text-sm">
        {text}
      </p>
    </div>
  );
}

