import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function SectionContacts({
  left = "1.5rem",
  bottom = "2rem",
}) {
  return (
    <div
      className="absolute z-20
                 hidden [@media(min-width:600px)]:flex
                 flex-col gap-3"
      style={{ left, bottom }}
    >
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full
                   bg-white shadow-sm
                   flex items-center justify-center
                   text-[15px] font-semibold
                   text-slate-600
                   hover:text-white
                   hover:bg-teal-600
                   hover:scale-115
                   transition"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full
                   bg-white shadow-sm
                   flex items-center justify-center
                   text-[15px] font-semibold
                   text-slate-600
                   hover:text-white
                   hover:bg-teal-600
                   hover:scale-115
                   transition"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://instagram.com/your-username"
        className="w-10 h-10 rounded-full
                   bg-white shadow-sm
                   flex items-center justify-center
                   text-[15px] font-semibold
                   text-slate-600
                   hover:text-white
                   hover:bg-teal-600
                   hover:scale-115
                   transition"
        title="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
