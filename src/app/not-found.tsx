import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pt-12 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
