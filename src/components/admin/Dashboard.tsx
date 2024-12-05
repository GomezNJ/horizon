import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import { LogOut, Users, Tag, Settings } from 'lucide-react';

export function Dashboard() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Painel Administrativo</h1>
          <button
            onClick={() => auth.signOut()}
            className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sair
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="Usuários"
            icon={Users}
            onClick={() => navigate('/admin/users')}
          />
          <DashboardCard
            title="Cupons"
            icon={Tag}
            onClick={() => navigate('/admin/coupons')}
          />
          <DashboardCard
            title="Configurações"
            icon={Settings}
            onClick={() => navigate('/admin/settings')}
          />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition flex items-center space-x-4"
    >
      <Icon className="h-8 w-8 text-black" />
      <span className="text-xl font-semibold">{title}</span>
    </button>
  );
}