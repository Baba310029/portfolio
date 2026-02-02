export default function SocialRail() {
  return (
    <div className="fixed left-4 bottom-6 z-40
                hidden xl:flex flex-col gap-3">
      {["in", "gh", "ig"].map(icon => (
        <a
          key={icon}
          href="#"
          className="w-8 h-8 rounded-full
              bg-white shadow-sm
              flex items-center justify-center
              text-slate-500 hover:text-teal-600 transition"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
