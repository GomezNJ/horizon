import React from 'react';
import { Globe, Clock, Shield, Zap, Headphones, Database } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Globe,
      title: "Rede Global",
      description: "Acesse sua VM de qualquer lugar com nossa infraestrutura mundial"
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Suas máquinas virtuais sempre prontas quando você precisar"
    },
    {
      icon: Shield,
      title: "Segurança Empresarial",
      description: "Medidas de segurança de última geração para proteger seus dados"
    },
    {
      icon: Zap,
      title: "Escalonamento Instantâneo",
      description: "Escale seus recursos para cima ou para baixo instantaneamente"
    },
    {
      icon: Headphones,
      title: "Suporte Premium",
      description: "Suporte especializado disponível 24 horas por dia"
    },
    {
      icon: Database,
      title: "Backups Automáticos",
      description: "Backups regulares para garantir a segurança dos seus dados"
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher a Horizon</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg hover:bg-gray-50 transition">
              <feature.icon className="h-10 w-10 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}