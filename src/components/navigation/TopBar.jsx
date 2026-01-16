import { Menu, Search, Sun, Moon } from "lucide-react";
import IconButton from "../ui/IconButton";
import Input from "../ui/Input";
import { useTheme } from "../../app/ThemeProvider";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TopBar({ onMenu }) {
  const { theme, toggle } = useTheme();
  const inputRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const q = useMemo(() => {
    const sp = new URLSearchParams(location.search);
    return sp.get("q") ?? "";
  }, [location.search]);

  const [value, setValue] = useState(q);

  // keep local input in sync when user hits back/forward
  useEffect(() => setValue(q), [q]);

  // debounce pushing q to URL
  useEffect(() => {
      if (value === q) return; // critical: prevents redirect on route changes

      const id = setTimeout(() => {
        const trimmed = value.toLowerCase().normalize("NFKD").trim();

        const nextSp = new URLSearchParams();
        if (trimmed) nextSp.set("q", trimmed);

        const nextSearch = nextSp.toString();
        const nextUrl = `/${nextSearch ? `?${nextSearch}` : ""}`;

        navigate(nextUrl, { replace: true });
      }, 120);

      return () => clearTimeout(id);
    }, [value, q, navigate]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (!e.metaKey && !e.ctrlKey && e.key === "/") {
        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag !== "input" && tag !== "textarea") {
          e.preventDefault();
          inputRef.current?.focus();
        }
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setValue("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-screen border-b border-border bg-app/80 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <IconButton onClick={onMenu} aria-label="Open menu">
          <Menu size={18} />
        </IconButton>

        <div className="hidden lg:block text-sm text-muted">
          Archive <span className="text-muted/60">/</span> Home
        </div>

        <div className="ml-auto flex items-center gap-2 w-full max-w-xl">
          <div className="relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
              <Search size={16} />
            </div>

            <Input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
              placeholder="Search posts... (Ctrl K)"
              className="pl-9"
            />
          </div>

          <IconButton onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </IconButton>
        </div>
      </div>
    </header>
  );
}
