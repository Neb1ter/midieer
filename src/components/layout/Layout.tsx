import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import GradualBlur from '@/components/ui/GradualBlur';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      
      <GradualBlur 
        preset="page-header" 
        zIndex={40} 
        style={{ 
          maxWidth: '1200px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '100%' 
        }} 
      />
      <GradualBlur 
        preset="page-footer" 
        zIndex={40}
        style={{ 
          maxWidth: '1200px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '100%' 
        }}
      />
      <Header />
      <main className="flex-grow pt-24"> {/* Added padding-top to account for fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
