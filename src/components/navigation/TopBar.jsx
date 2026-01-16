import { Menu, Search, Sun, Moon } from "lucide-react";
import IconButton from "../ui/IconButton";
import Input from "../ui/Input";
import { useTheme } from "../../app/ThemeProvider";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function TopBar({ onMenu }) {
  const { theme, toggle } = useTheme();
  const inputRef = useRef(null);
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";

  useEffect(() => {
    const onKey = (e) => {
      // Cmd/Ctrl + K focuses search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // "/" focuses search (classic app behavior)
      if (!e.metaKey && !e.ctrlKey && e.key === "/") {
        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag !== "input" && tag !== "textarea") {
          e.preventDefault();
          inputRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-app/80 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <IconButton onClick={onMenu} className="" aria-label="Open menu">
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
              value={q}
              onChange={(e) => {
                const next = e.target.value;
                if (next) setParams({ q: next });
                else setParams({});
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
