import { useEffect, useState } from "react";
import SectionContacts from "../components/SectionContacts";

export default function HomeSection() {
  // ===== FLOATING LOGIC =====
  const [drift, setDrift] = useState(0);
  const [target, setTarget] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setTarget(window.scrollY * 0.18); // faster + smooth
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let raf;
    const animate = () => {
      setDrift(prev => prev + (target - prev) * 0.08);
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [target]);

  // ===== TYPEWRITER =====
  const roles = [
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "System Thinker",
    "Curious Builder",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(roles[roleIndex].slice(0, i + 1));
      i++;
      if (i === roles[roleIndex].length) {
        setTimeout(() => {
          setTyped("");
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1200);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [roleIndex]);

  // ===== SKILLS AROUND CIRCLE =====
  const skills = [
    { name: "JS", top: "6%", right: "22%" },
    { name: "React", top: "30%", right: "6%" },
    { name: "Node", bottom: "26%", right: "16%" },
    { name: "Postgres", bottom: "10%", left: "24%" },
    { name: "ML", top: "50%", left: "4%" },
  ];

  return (
    <section
      id="home"
      className={`relative bg-[#f8fafc] min-h-[100vh] md:min-h-[120vh] pt-40 pb-32 overflow-hidden
                  transition-opacity duration-500
                  ${inView ? "opacity-100" : "opacity-95"}`}
    >
      {/* BACKGROUND CIRCLE BUBBLES */}
      <div className="absolute inset-0 overflow-hidden -z-0">
        <span className="absolute w-[420px] h-[420px]
                        bg-teal-200/50 rounded-full
                        top-[-120px] left-[-180px]" />
        <span className="absolute w-[520px] h-[520px]
                        bg-emerald-200/40 rounded-full
                        top-[20%] right-[-220px]" />
        <span className="absolute w-[300px] h-[300px]
                        bg-slate-300/40 rounded-full
                        bottom-[-80px] left-[35%]" />
      </div>

      {/* SECTION CONTACT ICONS (SCROLL WITH BLOCK) */}
      <SectionContacts/>
      
      <div className="max-w-7xl mx-auto px-6
                      grid gap-20 md:grid-cols-2 items-center">
        
        {/* LEFT — WRITER STYLE */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3
                          bg-white/80 backdrop-blur
                          px-6 py-4 rounded-xl shadow-sm">
            <span className="text-slate-500 font-mono text-lg">
              Hello, I am
            </span>
            <span className="text-3xl font-bold text-slate-900 font-mono">
              Babasree
            </span>
          </div>

          <div className="text-xl text-teal-700 font-mono">
            {typed}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-slate-600 text-lg max-w-xl font-mono leading-relaxed">
            I enjoy understanding how systems behave —
            how data flows, how logic is enforced,
            and how decisions are modeled.
          </p>
        </div>

        {/* RIGHT — CENTRAL CIRCLE + FLOATING SKILLS */}
        <div className="relative h-[420px] flex items-center justify-center">

          {/* CENTRAL CIRCLE */}
          <img className="w-65 h-65 rounded-full
                       bg-gradient-to-br from-teal-100 to-emerald-100
                       shadow-inner"
                style={{ transform: `translateY(${drift}px)` }}
                src="/home-image.jpeg" alt="" />
          {/* </div> */}

          {skills.map((skill, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 md:w-20 md:h-20
                         rounded-full bg-white
                         shadow-md flex items-center justify-center
                         text-sm font-semibold text-teal-700
                         transition-transform duration-300
                         hover:-translate-y-3 hover:scale-105
                         animate-bounce-slow cursor-pointer"
              style={{
                ...skill,
                transform: `translateY(${drift * (0.7 + i * 0.12)}px)`,
              }}
            >
              {skill.name}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
