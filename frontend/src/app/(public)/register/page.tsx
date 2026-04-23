import RegistrationForm from "@/components/RegistrationForm";
import Link from "next/link";
import GuestGuard from "@/components/GuestGuard";

export default function RegisterPage() {
  return (
    <GuestGuard>
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-10 px-6 py-16">
      <header className="flex flex-col gap-3 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint animate-pulse">Onboarding</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Join the Network</h1>
        <p className="text-sm text-slate-400">
          Create your merchant profile to start accepting Stellar payments and managing assets.
        </p>
      </header>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-[0_0_50px_rgba(45,212,191,0.05)] transition-all hover:shadow-[0_0_50px_rgba(45,212,191,0.1)]">
        <RegistrationForm />
      </div>

      <footer className="text-center">
        <p className="text-xs text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="text-mint hover:text-glow transition-colors hover:underline">
            Log in here
          </Link>
        </p>
      </footer>
    </main>
    </GuestGuard>
  );
}
