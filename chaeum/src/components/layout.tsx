'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-[80%] mx-auto py-[100px]">{children}</main>
      <Footer />
    </div>
  );
}
