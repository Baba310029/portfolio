export default function FloatingSkill({ label, style }) {
  return (
    <div
      className="absolute px-4 py-2 rounded-full
                 bg-white shadow-md
                 text-sm font-medium text-teal-700
                 animate-float"
      style={style}
    >
      {label}
    </div>
  );
}
