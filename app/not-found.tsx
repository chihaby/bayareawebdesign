import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}
