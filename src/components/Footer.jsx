import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-slate-900 py-12"
    >
      <div
        className="max-w-7xl mx-auto px-6
                   flex flex-col md:flex-row
                   items-center justify-between gap-8"
      >

        {/* LEFT — SOCIAL ICONS */}
        <div className="flex gap-5">
          <SocialIcon
            icon={<FaLinkedinIn />}
            delay="0"
            visible={visible}
            link="https://linkedin.com"
          />
          <SocialIcon
            icon={<FaGithub />}
            delay="150"
            visible={visible}
            link="https://github.com"
          />
          <SocialIcon
            icon={<FaInstagram />}
            delay="400"
            visible={visible}
            link="https://instagram.com"
          />
        </div>

        {/* RIGHT — TEXT (TWO LINES) */}
        <div className="text-center md:text-right">
          <p className="text-slate-400 font-medium">
            Built with passion & purpose
          </p>
          <p className="text-slate-400 text-sm mt-1">
            © {new Date().getFullYear()} Babasree Bisai
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ---------- ICON COMPONENT ---------- */

function SocialIcon({ icon, delay, visible, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-11 h-11 rounded-full
                  border border-slate-600
                  flex items-center justify-center
                  text-slate-100
                  transition-all duration-700
                  hover:border-teal-500 hover:text-teal-500
                  hover:scale-110
                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-10 opacity-0"
                  }`}
    >
      {icon}
    </a>
  );
}
