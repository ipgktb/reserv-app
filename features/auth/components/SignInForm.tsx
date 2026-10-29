
"use client";

import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [checking, setChecking] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const { data } = await supabaseClient.auth.getUser();

      if (data.user) {
        router.replace("/booking");
        return;
      }

      setChecking(false);
    };

    check();
  }, [router]);

  async function handleSignin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const { error: authError } =
      await supabaseClient.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (authError) {
      setError(authError.message);
      return;
    }

    router.refresh();
    router.replace("/booking");
  }

  if (checking) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#6844C7]/20 border-t-[#6844C7]" />
          <div className="text-sm text-gray-500">Loading</div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8FAFC] px-4 py-8 font-sans text-gray-900 sm:px-6 lg:px-10">
      {/* Soft purple background effects */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-600/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/[0.04] blur-[100px]" />

      {/* Main container */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-12">

        {/* Login form */}
        <section className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-7 shadow-xl shadow-gray-200/50 sm:p-9 md:col-span-5 lg:p-10">

          <div>
            {/* ICT branding */}
            <div className="mb-9 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6844C7] text-white shadow-lg shadow-purple-600/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 21h8m-4-4v4M8 9l2 2-2 2m5 0h3"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-base font-bold tracking-tight text-gray-900">
                  Sistem Tempahan ICT
                </h2>
                <p className="mt-1 text-xs text-gray-400">
                  Pengurusan tempahan ICT
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6844C7]">
                Selamat Datang
              </p>

              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Selamat Kembali
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Masukkan maklumat akaun anda untuk log masuk ke Sistem
                Tempahan ICT.
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div
                role="alert"
                className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSignin} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-400"
                >
                  Alamat E-mel
                </label>

                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400 transition-colors group-focus-within:text-[#6844C7]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] py-3.5 pl-12 pr-4 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-[#6844C7] focus:ring-1 focus:ring-[#6844C7]"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-400"
                >
                  Kata Laluan
                </label>

                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400 transition-colors group-focus-within:text-[#6844C7]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <rect x="4" y="10" width="16" height="11" rx="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10V7a4 4 0 018 0v3m-4 5v2"
                      />
                    </svg>
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] py-3.5 pl-12 pr-12 text-sm text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-[#6844C7] focus:ring-1 focus:ring-[#6844C7]"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 transition-colors hover:text-[#6844C7]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18M10.58 10.58A3 3 0 0013.41 13.41M9.88 4.13A10.94 10.94 0 0112 4c7 0 10 8 10 8a18.45 18.45 0 01-3.23 4.5M6.52 6.52A18.45 18.45 0 002 12s3 8 10 8a10.94 10.94 0 005.87-1.69"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2 12s3.5-8 10-8 10 8 10 8-3.5 8-10 8-10-8-10-8z"
                        />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#6844C7] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/10 transition duration-200 hover:bg-[#5635A8] hover:shadow-purple-600/20 active:scale-[0.99]"
              >
                Log Masuk
              </button>
            </form>
          </div>

          {/* Footer links */}
          <div className="mt-9 border-t border-gray-100 pt-6">
            <p className="text-center text-sm text-gray-600 md:text-left">
              Belum mempunyai akaun?{" "}
              <a
                href="/signup"
                className="font-semibold text-[#6844C7] transition-colors hover:text-[#5635A8]"
              >
                Daftar sekarang
              </a>
            </p>

            <div className="mt-4 text-center md:text-left">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-red-500 transition-colors hover:text-[#6844C7]"
              >
                Lupa kata laluan?
              </a>
            </div>
          </div>
        </section>

        {/* ICT promotional panel */}
        <section className="relative hidden min-h-[580px] overflow-hidden rounded-2xl border border-gray-200/80 shadow-xl md:col-span-7 md:block">
          {/* Existing background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/library-hero.png')",
            }}
          />

          {/* Original purple color palette */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#6844C7]/70 via-[#6844C7]/25 to-black/70" />

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#6844C7]/30 blur-3xl" />

          <div className="relative z-10 flex h-full min-h-[580px] flex-col justify-between p-8 sm:p-10 lg:p-12">
            {/* Top label */}
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-purple-300" />
              SISTEM TEMPAHAN ICT
            </div>

            {/* Main content */}
            <div className="max-w-lg pb-2">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 21h8m-4-4v4M8 9l2 2-2 2m5 0h3"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Tempahan ICT
                <br />
                <span className="text-purple-300">
                  Lebih Mudah.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                Urus tempahan kemudahan ICT dengan lebih mudah, teratur
                dan sistematik melalui satu platform.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4 text-sm text-white/90">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-400/20 text-purple-200">
                    ✓
                  </span>
                  Pengurusan tempahan ICT
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-400/20 text-purple-200">
                    ✓
                  </span>
                  Semakan maklumat tempahan
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-400/20 text-purple-200">
                    ✓
                  </span>
                  Rekod tempahan yang lebih teratur
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-5">
                <p className="text-xs leading-6 text-white/60">
                  Platform pengurusan tempahan ICT yang mudah dan
                  mesra pengguna.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
