import React from 'react';
import { Cpu, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Máquinas Virtuais GPU de Alto Desempenho
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experimente jogos em nuvem com nossa infraestrutura GPU dedicada
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition">
              Começar Agora
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition">
              Saiba Mais
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Cpu className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">GPUs Potentes</h3>
              <p className="text-gray-300">Última tecnologia NVIDIA RTX</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Baixa Latência</h3>
              <p className="text-gray-300">Experiência ultra-responsiva</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plataforma Segura</h3>
              <p className="text-gray-300">Segurança empresarial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}