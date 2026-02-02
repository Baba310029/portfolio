import { useState } from "react";
import SectionContacts from "../components/SectionContacts";
// Programming Languages
import { FaJava, FaPython } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

// Frontend
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

// Backend
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFastapi } from "react-icons/si"; // Express.js, REST APIs

// Databases
import { FaDatabase } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

// Machine Learning Libraries
import { SiNumpy, SiPandas, SiScikitlearn, SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";

// Tools & Platforms
import { FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";

/* =========================
   DATA — YOUR REAL CONTENT
   ========================= */

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiVite />, name: "Vite"},
    ],
    proof: "Built responsive UIs, interactive components, and complete frontend systems.",
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js"},
      { icon: <SiFastapi />, name: "RestApi"},
      { icon: <SiMysql />, name: "MySQL"},
      { icon: <SiPostgresql />, name: "Postgresql"},
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaDatabase />, name: "REST APIs" },
    ],
    proof: "Developed backend services, authentication flows, and data-driven APIs.",
  },
  {
    title: "DSA & CS",
    items: [
      { icon: <SiC />, name: "C" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      {icon: <SiCplusplus />, name: "C++"},
    ],
    proof: "Strong foundations in problem-solving, data structures, and core CS concepts.",
  },
  {
    title: "Machine Learning",
    items: [
      { icon: <SiNumpy />, name: "Numpy"},
      { icon: <SiPandas />, name: "Pandas"},
      { icon: <SiScikitlearn />, name: "SciKitlearn"},
      { icon: <SiTensorflow />, name: "TensorFlow"},
    ],
    proof: "Worked on ML models, data preprocessing, and real-world ML experiments.",
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: <FaGitAlt />, name: "GitAlt"},
      { icon: <FaGithub />, name: "GitHub"},
      { icon: <FaAws />, name: "AWS cloud"},
      { icon: <SiStreamlit />, name: "Streamlit"},
    ],
    proof: "I used these platforms for deploy my projects, and now learning vercel and netlify also."
  },
];

const CERTIFICATIONS = [
  {
    name: "Machine Learning Fundamentals",
    org: "Online Certification",
    year: "2025",
    details: "Covered supervised learning, model evaluation, and ML workflows.",
  },
  {
    name: "Full Stack Development",
    org: "Online Certification",
    year: "2024",
    details: "Frontend + backend development with hands-on projects.",
  },
];

/* =========================
   MAIN SECTION
   ========================= */

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-24">
          Skills &{" "}
          <span className="text-teal-600">Certifications</span>
        </h2>

        {/* SKILLS + TIMELINE */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-24 mb-32">

          {/* LEFT — SKILLS */}
          <div className="space-y-10">
            {SKILL_GROUPS.map((group, i) => (
              <SkillGroup key={i} {...group} />
            ))}
          </div>

          {/* RIGHT — TIMELINE */}
          <Timeline />

        </div>

        {/* CERTIFICATIONS (CENTERED BELOW) */}
        <div className="max-w-3xl mx-auto space-y-8">
          {CERTIFICATIONS.map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
      </div>
      <SectionContacts/>
    </section>
  );
}

/* =========================
   SKILL GROUP CARD
   ========================= */

function SkillGroup({ title, items, proof }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-slate-50 rounded-2xl p-6
                 transition-all duration-300
                 hover:shadow-xl"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* HEADER */}
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {title}
      </h3>

      {/* SKILL ICONS */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <div key={i} className="relative group">
            {/* ICON */}
            <div
              className="w-10 h-10 rounded-full bg-white
                        flex items-center justify-center
                        text-xl text-teal-600
                        shadow-sm transition-transform
                        hover:scale-110 hover:mt-1"
            >
              {skill.icon}
            </div>

            {/* TOOLTIP */}
            <span
              className="absolute -top-5 left-1/2 -translate-x-1/2
                        px-2 py-1 rounded-md text-xs font-medium
                        bg-teal-600 text-white
                        opacity-0 scale-95
                        group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-200
                        pointer-events-none whitespace-nowrap"
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* EXPANDING EXPLANATION (PUSHES DOWN OTHERS) */}
      <div
        className={`overflow-hidden transition-all duration-300
          ${open ? "max-h-40 mt-4" : "max-h-0"}
        `}
      >
        <p className="text-sm text-slate-600">
          {proof}
        </p>
      </div>
    </div>
  );
}

/* =========================
   CERTIFICATION CARD
   ========================= */

const TIMELINE = [
  {
    year: "2026",
    title: "Deepening ML & Problem Solving",
    subtitle: "Advanced Machine Learning, LeetCode practice",
    type: "Individual",
  },
  {
    year: "2025",
    title: "Backend & Machine Learning",
    subtitle: "Backend development, DSA training, ML projects",
    type: "Individual",
  },
  {
    year: "2024",
    title: "Frontend Growth & DSA",
    subtitle: "React, Tailwind CSS, JavaScript, Java, DSA",
    type: "Individual",
  },
  {
    year: "2023",
    title: "Programming Foundations",
    subtitle: "HTML, CSS, Python, C programming",
    type: "Individual",
  },
];


function CertificateCard({ name, org, year, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-slate-200
                 rounded-2xl p-6
                 transition-all duration-300
                 hover:shadow-xl cursor-pointer hover:border-teal-500"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <h3 className="font-semibold text-slate-900">
        {name}
      </h3>

      <p className="text-sm text-slate-500">
        {org} · {year}
      </p>

      {/* PUSH-DOWN DETAILS */}
      <div
        className={`overflow-hidden transition-all duration-300
          ${open ? "max-h-40 mt-4" : "max-h-0"}
        `}
      >
        <p className="text-sm text-slate-600">
          {details}
        </p>
      </div>
    </div>
  );
}


/* =========================
   TIMELINE BACKBONE
   ========================= */

function Timeline() {
  return (
    <div className="mt-32 space-y-14">
      {TIMELINE.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-[90px_1fr] gap-6"
        >
          {/* YEAR */}
          <div className="text-teal-600 font-semibold text-lg">
            {item.year}
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="text-slate-600 mt-1">
              {item.subtitle}
            </p>

            <p className="text-slate-400 text-sm mt-1">
              {item.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
