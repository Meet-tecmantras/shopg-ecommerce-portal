import './globals.css';
import type { PropsWithChildren } from 'react';

export const metadata = {
  title: 'ShopG Commerce',
  description:
    'Responsive e-commerce experience with mock-data fallback and API-ready Next.js frontend'
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <header className="bg-white shadow-sm border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <span className="text-lg font-bold text-slate-900">Shop<span className="text-emerald-600">G</span></span>
              <nav className="flex items-center gap-6 text-sm text-slate-600">
                <a className="hover:text-slate-900" href="/">Home</a>
                <a className="hover:text-slate-900" href="/collections">Collections</a>
                <a className="hover:text-slate-900" href="/cart">Cart</a>
                <a className="hover:text-slate-900" href="/profile">Profile</a>
                <a className="hover:text-slate-900" href="/admin">Admin</a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">{children}</main>
          <footer className="border-t bg-white px-6 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Tecmantras Solutions · Responsive commerce UI with mock fallback.
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
