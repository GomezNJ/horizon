import React from 'react';
import { Monitor, Gamepad, Server } from 'lucide-react';

export function Products() {
  const products = [
    {
      title: "VM para Jogos",
      icon: Gamepad,
      specs: "RTX 4080 • 32GB RAM • 1TB NVMe",
      price: "R$ 24,99/hora",
      features: ["Jogos em 4K", "Ray Tracing", "Suporte DLSS", "Baixa Latência"]
    },
    {
      title: "VM Workstation",
      icon: Monitor,
      specs: "RTX 4090 • 64GB RAM • 2TB NVMe",
      price: "R$ 34,99/hora",
      features: ["Renderização 8K", "Suporte CUDA", "Armazenamento Ilimitado", "Suporte 24/7"]
    },
    {
      title: "VM Servidor",
      icon: Server,
      specs: "4x RTX 4090 • 256GB RAM • 4TB NVMe",
      price: "Personalizado",
      features: ["Suporte Multi-GPU", "SLA Empresarial", "Configuração Personalizada", "Suporte Prioritário"]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nossas Máquinas Virtuais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <product.icon className="h-12 w-12 text-black mb-6" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.specs}</p>
              <p className="text-2xl font-bold text-black mb-6">{product.price}</p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-black hover:bg-gray-900 text-white py-2 rounded-lg font-semibold transition">
                Selecionar Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}