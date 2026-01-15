import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-muted">This page does not exist.</p>
      <Link className="text-accent" to="/">Go home</Link>
    </div>
  );
}
