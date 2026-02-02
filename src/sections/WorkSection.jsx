import { useEffect, useRef, useState } from "react";
import SectionContacts from "../components/SectionContacts";
import { FaGithub, FaEye } from "react-icons/fa";

const FILTERS = [
  "All",
  "ReactJS",
  "Full Stack",
  "Machine Learning",
  // "Python",
];

const PROJECTS = [
  {
    title: "PermissionGraph",
    domain: "Full Stack",
    tag: "Full Stack",
    image: "/projects/permissiongraph.jpeg",
    description:
      "A role & permission management system with secure JWT authentication, role-based access control, audit logs, and undo functionality, built with React, Node, Express and PostgreSQL.",
    demo: "https://github.com/Baba310029/permission-graph/issues/1#issue-3866377935",
    github: "https://github.com/Baba310029/permission-graph",
  },
  {
    title: "DecisionLatencyML",
    domain: "Machine Learning",
    tag: "Machine Learning",
    image: "/projects/decisionlatencyml.jpeg",
    description:
      "A behavioral machine learning dashboard analyzing decision speed vs accuracy using clustering, regression, temporal features, and an interactive Streamlit UI.",
    demo: "https://github.com/Baba310029/DecisionLatencyML/issues/1#issue-3866596611",
    github: "https://github.com/Baba310029/DecisionLatencyML",
  },
  {
    title: "Portfolio Website",
    domain: "ReactJS",
    tag: "ReactJS",
    image: "/projects/portfolio.png",
    description:
      "Your personal portfolio built with React, Vite and Tailwind CSS showcasing skills, UI animations, projects and professional info.",
    demo: "https://baba310029.github.io/",
    github: "https://github.com/Baba310029/portfolio",
  },
  {
    title: "Amazon Clone",
    domain: "Full Stack",
    tag: "Full Stack",
    image: "/projects/amazonclone.jpeg",
    description:
      "An e-commerce Amazon clone with product browsing, cart functions, UI search and interactions — built using React and backend (Firebase/Node/Stripe depending on your setup).",
    demo: "https://baba310029.github.io/Amazon_clone/",
    github: "https://github.com/Baba310029/Amazon_clone",
  },
  {
    title: "Password Generator",
    domain: "ReactJS",
    tag: "ReactJS",
    image: "/projects/passwordgenerator.jpeg",
    description:
      "A live password generator with selectable length, uppercase, lowercase, digits and symbols options, deployed on GitHub Pages.",
    // demo: "https://baba310029.github.io/project01/",
    github: "https://github.com/Baba310029/project01",
  },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(p => p.domain === activeFilter);

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
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
      id="work"
      ref={sectionRef}
      className={`relative bg-[#f1f6fb] py-32
        transition-all duration-[900ms] ease-out p-4
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-60 translate-y-16"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-6">
          Things I’ve Been{" "}
          <span className="text-teal-600">
            Building
          </span>
        </h2>

        {/* FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-lg text-sm font-medium
                transition
                ${
                  activeFilter === filter
                    ? "bg-teal-600 text-white"
                    : "bg-white text-slate-700 hover:text-teal-600"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

      </div>
      <SectionContacts left="1rem" bottom="3rem" />
    </section>
  );
}

function ProjectCard({ title, image, tag, description, demo, github }) {
  return (
    <div
      className="group bg-white rounded-2xl
                shadow-sm hover:shadow-lg
                transition-all duration-300
                overflow-hidden h-80 w-70 p-3 rouned-lg"
    >
      {/* IMAGE AREA */}
      <div className="relative overflow-hidden">
        <div className="relative h-50 overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-black/50
                      opacity-0 group-hover:opacity-100
                      transition flex items-center justify-center gap-6"
          >
            {demo && <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black/50 opacity-80
                        flex items-center justify-center
                        text-white hover:text-black
                        hover:scale-110 hover:bg-slate-400 transition"
            >
              <FaEye />
            </a>
            }

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black/50 opacity-80
                  flex items-center justify-center
                  text-white hover:text-black
                  hover:scale-110 hover:bg-slate-400
                  transition"
            >
              <FaGithub />
            </a>
          </div>
          {/* DOMAIN TAG */}
          <span
            className="absolute bottom-3 left-3
                      px-3 py-1 rounded-full
                      bg-white/90 backdrop-blur
                      text-xs font-medium
                      text-teal-700"
          >
            {tag}
          </span>
        </div>

        {/* HOVER OVERLAY */}

        <div className="p-5 flex flex-col justify-between h-fit">
          <div>
            <h3 className="text-base font-sans font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
