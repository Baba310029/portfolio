import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "work", "skills", "contact"];

export default function PageDots() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50
                 hidden md:flex flex-col gap-3"
    >
      {SECTIONS.map((id) => (
        <span
          key={id}
          className={`w-2 h-2 rounded-full transition-all duration-300
            ${
              active === id
                ? "bg-teal-500 scale-150 shadow-[0_0_10px_rgba(20,184,166,0.9)]"
                : "bg-slate-400"
            }`}
        />
      ))}
    </div>
  );
}
