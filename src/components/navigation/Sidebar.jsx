import { NavLink } from "react-router-dom";
import { X, Home, BookOpen, Info } from "lucide-react";
import IconButton from "../ui/IconButton";

const linkBase =
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition";
const linkIdle = "text-muted hover:text-text hover:bg-surface2";
const linkActive = "text-text bg-surface2";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* overlay for mobile */}
      <div
        onClick={onClose}
        className={[
          "fixed inset-0 z-30 bg-black/50 md:hidden transition",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <aside
        className={[
          "fixed z-40 md:static md:z-auto",
          "h-screen w-[280px] shrink-0 border-r border-border bg-surface",
          "transition-transform",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-3 py-3 border-b border-border">
          <div className="text-sm font-semibold">Your Blog</div>
          <IconButton onClick={onClose} className="md:hidden" aria-label="Close menu">
            <X size={18} />
          </IconButton>
        </div>

        <nav className="p-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [linkBase, isActive ? linkActive : linkIdle].join(" ")
            }
          >
            <Home size={16} />
            Home
          </NavLink>

          <div className="pt-3 pb-1 text-xs text-muted/80 px-3">Collections</div>

          <a className={[linkBase, linkIdle].join(" ")} href="#/">
            <BookOpen size={16} />
            Archive (later)
          </a>

          <a className={[linkBase, linkIdle].join(" ")} href="#/">
            <Info size={16} />
            About (later)
          </a>
        </nav>
      </aside>
    </>
  );
}
