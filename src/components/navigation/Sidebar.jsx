import { NavLink } from "react-router-dom";
import { X, Home, BookOpen, Info } from "lucide-react";
import IconButton from "../ui/IconButton";

const linkBase = "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition";
const linkIdle = "text-muted hover:text-text hover:bg-surface2";
const linkActive = "text-text bg-surface2";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* overlay (all screen sizes) */}
      <div
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* drawer (all screen sizes) */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50",
          "w-[280px] bg-surface",
          "border-r border-border",
          "transform transition-transform duration-300 ease-out will-change-transform",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-3 py-3 border-b border-border">
          <div className="text-sm font-semibold">Your Blog</div>
          <IconButton onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </IconButton>
        </div>

        <nav className="p-3 space-y-1">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              [linkBase, isActive ? linkActive : linkIdle].join(" ")
            }
          >
            <Home size={16} />
            Home
          </NavLink>

          <div className="pt-3 pb-1 text-xs text-muted/80 px-3">Collections</div>

          <a className={[linkBase, linkIdle].join(" ")} href="#/" onClick={onClose}>
            <BookOpen size={16} />
            Archive (later)
          </a>

          <a className={[linkBase, linkIdle].join(" ")} href="#/" onClick={onClose}>
            <Info size={16} />
            About (later)
          </a>
        </nav>
      </aside>
    </>
  );
}
