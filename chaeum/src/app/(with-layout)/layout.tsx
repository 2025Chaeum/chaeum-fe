'use client';

import Header from '@/components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[2000px] py-[100px]">{children}</div>
      <div>footer</div>
    </>
  );
}
