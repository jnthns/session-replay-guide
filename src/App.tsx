import { Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Full Guide' },
  { to: '/before-you-begin', label: 'Before You Begin' },
  { to: '/privacy', label: 'Privacy & Masking' },
  { to: '/deletion', label: 'Data Deletion' },
  { to: '/validation', label: 'Validation' },
];

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen">
      <header className="bg-amp-blue text-white py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">
            <Link to="/" className="hover:text-indigo-200 transition-colors">
              Session Replay Implementation Guide
            </Link>
          </h1>
          <p className="mt-1 text-sm text-indigo-200">
            Follow each step to set up Amplitude Session Replay for your platform.
          </p>
          <nav className="mt-4 flex flex-wrap gap-2">
            {navItems.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-indigo-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
