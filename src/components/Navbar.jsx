import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 80) {
        setShow(true);
      } else if (currentY > lastScrollY) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Glass bar */}
      <div className="bg-white/70 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-6 py-4
                flex items-center justify-between
                [@media(min-width:787px)]:grid
                [@media(min-width:787px)]:grid-cols-3">
          {/* LEFT */}
          <div className="justify-self-start text-2xl font-extrabold tracking-widest
                          text-transparent bg-clip-text
                          bg-gradient-to-r from-teal-600 to-emerald-500">
            BABASREE
          </div>

          {/* CENTER (DESKTOP ONLY) */}
          <nav className="hidden [@media(min-width:787px)]:flex justify-self-center gap-10 text-xs font-medium tracking-wide uppercase text-slate-500">
            {["Home", "About", "Work", "Skills", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group uppercase tracking-wide
                          hover:text-teal-600 transition"
              >
                {item}

                {/* underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full
                            bg-gradient-to-r from-teal-500 to-emerald-500
                            scale-x-0 group-hover:scale-x-100
                            origin-left
                            transition-transform duration-300 ease-out"
                />
              </a>
            ))}
          </nav>

          {/* RIGHT (MOBILE ONLY) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="[@media(min-width:787px)]:hidden justify-self-end
                      w-10 h-10 rounded-full
                      bg-teal-600 text-white
                      flex items-center justify-center
                      shadow-md"
          >
            {menuOpen ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <div className="flex flex-col gap-[3px]">
                <span className="w-4 h-[2px] bg-white rounded"></span>
                <span className="w-4 h-[2px] bg-white rounded"></span>
                <span className="w-4 h-[2px] bg-white rounded"></span>
              </div>
            )}
          </button>

        </div>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
        )}

        {/* SLIDE-IN MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 h-screen w-[75vw]
                      bg-white z-50
                      transform transition-transform duration-500 ease-in-out
                      ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-7 z-50
                      w-10 h-10 rounded-full
                      bg-teal-600 text-white
                      flex items-center justify-center
                      text-xl font-bold shadow-md
                      cursor-pointer"
          >
            ✕
          </button>
          {/* Bubble background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <span className="absolute w-24 h-24 bg-teal-100 rounded-full top-16 -right-5"></span>
            <span className="absolute w-32 h-32 bg-emerald-100 rounded-full top-44 right-20"></span>
            <span className="absolute w-20 h-20 bg-teal-200 rounded-full bottom-24 right-16"></span>
          </div>

          {/* Menu content */}
          <nav className="relative z-10 pt-20 px-8 flex flex-col gap-6 text-xs font-semibold uppercase text-slate-500">
            {["Home", "About", "Work", "Skills", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-teal-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
