import { ReactNode } from 'react';
import { MobileMenuProvider } from '@/contexts/MobileMenuContext';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MobileMenuProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </MobileMenuProvider>
  );
};

export default Layout;
