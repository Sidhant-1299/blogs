export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={[
        "h-10 w-full rounded-lg px-3",
        "bg-surface border border-border",
        "text-text placeholder:text-muted",
        "focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30",
        "transition",
        className,
      ].join(" ")}
    />
  );
}
