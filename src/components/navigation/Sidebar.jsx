import { NavLink } from "react-router-dom";
import { X, Home, BookOpen, Info } from "lucide-react";
import IconButton from "../ui/IconButton";
import { useTheme } from "../../app/ThemeProvider";

const linkBase =
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors";

export default function Sidebar({ open, onClose }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const overlayClass = isDark ? "bg-black/40" : "bg-black/15";

  const drawerClass = isDark
    ? "bg-neutral-950/55 backdrop-blur-xl text-white ring-1 ring-white/10"
    : "bg-white text-neutral-900 ring-1 ring-black/10";

  const idleLink = isDark
    ? "text-white/85 hover:text-white hover:bg-white/6"
    : "text-neutral-800 hover:text-neutral-900 hover:bg-neutral-100";

  const activeLink = isDark
    ? "text-white bg-white/10"
    : "text-neutral-900 bg-neutral-100";

  const sectionLabel = isDark ? "text-white/55" : "text-neutral-500";

  const closeBtn = isDark
    ? "text-white/75 hover:text-white"
    : "text-neutral-700 hover:text-neutral-900";

  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={[
          "fixed inset-0 z-[70] transition-opacity duration-200",
          overlayClass,
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* drawer */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-[80] w-[280px]",
          drawerClass,
          "transform transition-transform duration-300 ease-out will-change-transform",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-3 py-3">
          <div className="text-sm font-semibold">Your Blog</div>
          <IconButton onClick={onClose} aria-label="Close menu" className={closeBtn}>
            <X size={18} />
          </IconButton>
        </div>

        <div className={["mx-3 h-px", isDark ? "bg-white/10" : "bg-black/10"].join(" ")} />

        <nav className="p-3 space-y-1">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              [linkBase, isActive ? activeLink : idleLink].join(" ")
            }
          >
            <Home size={16} />
            Home
          </NavLink>

          <div className={["pt-3 pb-1 text-xs px-3", sectionLabel].join(" ")}>
            Collections
          </div>

          <a className={[linkBase, idleLink].join(" ")} href="#/" onClick={onClose}>
            <BookOpen size={16} />
            Archive (later)
          </a>

          <a className={[linkBase, idleLink].join(" ")} href="#/" onClick={onClose}>
            <Info size={16} />
            About (later)
          </a>
        </nav>
      </aside>
    </>
  );
}
