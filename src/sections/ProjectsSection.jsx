export default function ProjectsSection() {
  const projects = [
    {
      title: "PermissionGraph",
      desc: "Role & permission management system with JWT authentication and audit logs.",
      tech: "React · Node · PostgreSQL · RBAC",
    },
    {
      title: "DecisionLatencyML",
      desc: "Behavioral ML project analyzing decision speed vs decision quality.",
      tech: "Python · Pandas · scikit-learn · ML",
    },
  ];

  return (
    <section
      id="work"
      className="relative bg-[#f8fafc] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-slate-900 mb-16">
          Selected Work
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <div
      className="bg-white rounded-2xl p-8
                 shadow-sm
                 transition-all duration-300 ease-out
                 hover:scale-[1.04]
                 hover:shadow-xl
                 cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-slate-600 mb-4">
        {desc}
      </p>

      <span className="text-sm text-teal-600 font-medium">
        {tech}
      </span>
    </div>
  );
}
