import React from "react";

const Input = React.forwardRef(function Input({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
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
});

export default Input;
