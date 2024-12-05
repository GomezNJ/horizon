import React from 'react';
import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Horizon Cloud Games</span>
            </div>
            <p className="text-gray-400">
              Capacitando jogadores e criadores com computação em nuvem de alto desempenho
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">VMs para Jogos</a></li>
              <li><a href="#" className="hover:text-white">VMs Workstation</a></li>
              <li><a href="#" className="hover:text-white">VMs Servidor</a></li>
              <li><a href="#" className="hover:text-white">Soluções Personalizadas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Carreiras</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-white">LGPD</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Horizon Cloud Games. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}