export default function IconButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center rounded-md",
        "h-9 w-9",
        "hover:bg-surface2 active:scale-[0.98]",
        "text-muted hover:text-text",
        "transition",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
