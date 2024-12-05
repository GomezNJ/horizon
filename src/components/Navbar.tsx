import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './ui/Logo';
import { NavLinks } from './ui/NavLinks';
import { MobileMenu } from './ui/MobileMenu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo à esquerda */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <Logo className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Horizon Cloud Games</span>
            </a>
          </div>
          
          {/* Links centralizados */}
          <div className="hidden md:flex flex-grow justify-center">
            <NavLinks />
          </div>
          
          {/* Espaço vazio à direita para manter o logo centralizado */}
          <div className="flex-shrink-0">
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  );
}