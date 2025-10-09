import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, Roboto } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Roboto({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
