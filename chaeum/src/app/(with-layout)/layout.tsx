'use client';

import Header from '@/components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[80%] py-[100px]">{children}</div>
      <div>footer</div>
    </>
  );
}
