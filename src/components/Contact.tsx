import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-300 mb-8">
              Tem dúvidas sobre nossas máquinas virtuais GPU? Nossa equipe está aqui para ajudar.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-white mr-3" />
                <span>contato@horizoncloud.games</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-white mr-3" />
                <span>+55 (11) 4002-8922</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-white mr-3" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:outline-none focus:border-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 focus:outline-none focus:border-white h-32"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button className="w-full bg-white hover:bg-gray-200 text-black py-2 rounded-lg font-semibold transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}