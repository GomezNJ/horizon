import React from 'react';

export function NavLinks() {
  return (
    <div className="flex items-center space-x-8">
      <a 
        href="#produtos" 
        className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
      >
        Produtos
      </a>
      <a 
        href="#recursos" 
        className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
      >
        Recursos
      </a>
      <a 
        href="#precos" 
        className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
      >
        Preços
      </a>
      <a 
        href="#contato" 
        className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
      >
        Contato
      </a>
    </div>
  );
}