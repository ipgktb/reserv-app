
import Link from "next/link";
import { PublicFooter } from "@/features/shared/PublicFooter";
import {
  CalendarDays,
  Clock3,
  Monitor,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Maklumat Makmal",
    description:
      "Lihat maklumat dan kemudahan makmal ICT yang tersedia.",
  },
  {
    icon: CalendarDays,
    title: "Tempahan Mudah",
    description:
      "Pilih tarikh dan masa yang sesuai dengan keperluan anda.",
  },
  {
    icon: Clock3,
    title: "Status Tempahan",
    description:
      "Semak status dan rekod tempahan anda pada bila-bila masa.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] text-[#18392D]">
      {/* Navigation */}
      <header className="border-b border-[#E1E8E0]">
        <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-4 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#176B50] text-white">
              <Monitor size={21} />
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight sm:text-base">
                TEMPAHAN MAKMAL ICT
              </p>
              <p className="mt-0.5 text-xs text-[#68766D]">
                Sistem Pengurusan Makmal
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/signin"
              className="text-sm font-medium text-[#52665A] transition-colors hover:text-[#176B50]"
            >
              Log Masuk
            </Link>

            <Link
              href="/signup"
              className="rounded-md bg-[#176B50] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12543F]"
            >
              Daftar
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#176B50]">
              SISTEM TEMPAHAN MAKMAL
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Tempah makmal.
              <span className="mt-2 block text-[#176B50]">
                Dengan lebih mudah.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#68766D]">
              Semak ketersediaan makmal ICT dan urus
              tempahan anda melalui satu sistem yang
              mudah, teratur dan efisien.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 rounded-md bg-[#176B50] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12543F]"
              >
                Mula Membuat Tempahan
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/signup"
                className="inline-flex items-center rounded-md border border-[#D4DED4] bg-white px-5 py-3 text-sm font-semibold text-[#18392D] transition-colors hover:bg-[#EFF4EE]"
              >
                Daftar Akaun
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#68766D]">
              Untuk kegunaan pelajar dan staf yang berdaftar.
            </p>
          </div>

          {/* Simple visual */}
          <div className="border-l-2 border-[#176B50] py-4 pl-6 sm:pl-8">
            <p className="text-sm font-medium text-[#68766D]">
              SATU SISTEM
            </p>

            <div className="mt-6 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E5EEE5] text-[#176B50]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {feature.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#68766D]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Simple call to action */}
      <section className="border-t border-[#E1E8E0] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Perlukan makmal ICT?
            </h2>
            <p className="mt-2 text-sm text-[#68766D]">
              Log masuk untuk mengurus tempahan anda.
            </p>
          </div>

          <Link
            href="/signin"
            className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-[#176B50] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12543F] sm:self-auto"
          >
            Log Masuk
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
