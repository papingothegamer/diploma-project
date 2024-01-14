// components/Layout.tsx
import React, { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Network Activity Tracker</h1>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
