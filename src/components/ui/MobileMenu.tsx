import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 md:hidden">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 p-8">
        <a href="#produtos" onClick={onClose} className="text-white text-xl hover:text-gray-300">
          Produtos
        </a>
        <a href="#recursos" onClick={onClose} className="text-white text-xl hover:text-gray-300">
          Recursos
        </a>
        <a href="#precos" onClick={onClose} className="text-white text-xl hover:text-gray-300">
          Preços
        </a>
        <a href="#contato" onClick={onClose} className="text-white text-xl hover:text-gray-300">
          Contato
        </a>
      </nav>
    </div>
  );
}