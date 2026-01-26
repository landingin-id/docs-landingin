import Link from 'next/link';
import Image from 'next/image';
import type { SVGProps } from 'react';
import { source } from '@/lib/source';

// Inline SVG icons
const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
  </svg>
);

const EditorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 21l3-9 9-9 6 6-9 9-9 3z" />
    <path d="M15 6l3 3" />
  </svg>
);

const ServiceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <polygon points="12,4 13.5,7.5 17,9 13.5,10.5 12,14 10.5,10.5 7,9 10.5,7.5" />
    <polygon points="5,16 6,18 8,19 6,20 5,22 4,20 2,19 4,18" />
  </svg>
);

const LegalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
  </svg>
);

const HelpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9a3 3 0 015 2c0 1.5-2 2-2 3" />
    <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const BookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 6a3 3 0 013-3h6v16H6a3 3 0 00-3 3V6z" />
    <path d="M21 6a3 3 0 00-3-3h-6v16h6a3 3 0 013 3V6z" />
  </svg>
);

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10v7" />
    <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default async function HomePage() {
  // Build featured sections and quick links based on existing content
  const sections = [
    {
      title: 'Dashboard',
      href: '/docs/Dashboard',
      icon: <DashboardIcon className="w-7 h-7 text-fd-foreground/90" />,
      description: 'Kelola toko, order, transaksi, dan statistik bisnis.',
    },
    {
      title: 'Editor',
      href: '/docs/Editor',
      icon: <EditorIcon className="w-7 h-7 text-fd-foreground/90" />,
      description: 'Rancang landing page dengan editor visual Landingin.',
    },
    {
      title: 'Layanan',
      href: '/docs/Layanan',
      icon: <ServiceIcon className="w-7 h-7 text-fd-foreground/90" />,
      description: 'Informasi paket layanan dan fitur yang tersedia.',
    },
    {
      title: 'Legal',
      href: '/docs/Legal',
      icon: <LegalIcon className="w-7 h-7 text-fd-foreground/90" />,
      description: 'Kebijakan, ketentuan, dan informasi hukum.',
    },
    {
      title: 'Bantuan',
      href: '/docs/Bantuan',
      icon: <HelpIcon className="w-7 h-7 text-fd-foreground/90" />,
      description: 'Pusat bantuan, panduan, dan kontak dukungan.',
    },
  ];

  const quickLinks = [
    {
      title: 'Panduan Memulai',
      href: '/docs/panduan_memulai',
      icon: <BookIcon className="w-12 h-12 text-fd-foreground/90" />,
    },
    {
      title: 'Tentang Landingin',
      href: '/docs/tentang_landingin',
      icon: <InfoIcon className="w-12 h-12 text-fd-foreground/90" />,
    },
  ];

  // Optional: read tree to show total pages
  const totalPages = source.pageTree.children?.reduce((acc, cur) => {
    const countChild = (node: any): number => {
      const children = node.children ?? [];
      return 1 + children.reduce((a: number, c: any) => a + countChild(c), 0);
    };
    return acc + countChild(cur);
  }, 0) ?? 0;

  return (
    <main className="flex flex-1 flex-col items-center">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Dokumentasi Landingin</h1>
          </div>
          <p className="text-fd-muted-foreground mx-auto max-w-2xl">
            Kuasai Landingin lebih cepat. Jelajahi fitur, panduan langkah demi langkah, dan pusat bantuan—ringkas, jelas, dan kaya visual.
          </p>
          <div className="mt-4 text-xs text-fd-muted-foreground">Total halaman: {totalPages}</div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-xl font-semibold">Mulai Cepat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center">
          {quickLinks.map((q) => (
            <Link key={q.href} href={q.href} className="group rounded-xl border bg-white/60 dark:bg-neutral-900/60 shadow-sm hover:shadow-md transition-shadow max-w-md w-full">
              <div className="flex items-center gap-4 p-4 justify-center">
                <div className="shrink-0">
                  {q.icon}
                </div>
                <div>
                  <div className="text-base font-semibold group-hover:text-fd-foreground">{q.title}</div>
                  <div className="text-sm text-fd-muted-foreground">Buka {q.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-6xl px-6 mt-10 text-center">
        <h2 className="mb-4 text-xl font-semibold">Kategori Utama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group rounded-xl border bg-white/60 dark:bg-neutral-900/60 shadow-sm hover:shadow-md transition-all max-w-md w-full">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  {s.icon}
                  <div className="text-lg font-semibold group-hover:text-fd-foreground">{s.title}</div>
                </div>
                <p className="text-sm text-fd-muted-foreground">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA to Documentation */}
      <section className="mx-auto max-w-6xl px-6 mt-12 mb-16">
        <div className="rounded-2xl border bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/40 dark:to-indigo-950/40 p-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">Butuh referensi lengkap?</div>
            <div className="text-sm text-fd-muted-foreground">Jelajahi seluruh dokumentasi di satu tempat.</div>
          </div>
          <Link href="/docs" className="inline-flex items-center gap-2 rounded-md bg-[#824cab] text-white px-4 py-2 font-medium shadow hover:opacity-95">
            <Image src="/uploads/logo.svg" alt="Docs" width={20} height={20} />
            Buka /docs
          </Link>
        </div>
      </section>
    </main>
  );
}
