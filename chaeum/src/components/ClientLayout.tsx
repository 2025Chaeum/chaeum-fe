'use client';

import { usePathname } from 'next/navigation';
import Layout from '@/components/layout';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  return pathname === '/' ? children : <Layout>{children}</Layout>;
}
