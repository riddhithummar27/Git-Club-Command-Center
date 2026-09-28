import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const navigation = [
  ['/dashboard', 'terminal', 'Command Center'], ['/events', 'event', 'Events'],
  ['/members', 'group', 'Members'], ['/projects', 'account_tree', 'Projects'],
  ['/announcements', 'campaign', 'Announcements'], ['/analytics', 'insights', 'Analytics'],
  ['/settings', 'settings', 'Settings'],
] as const;

export default function Layout({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  const location = useLocation();
  const { setProjectModalOpen, setEventModalOpen, setMemberModalOpen } = useGlobalContext();
  const [dark, setDark] = useState(() => localStorage.getItem('gitclub-theme') !== 'light');
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('gitclub-theme', dark ? 'dark' : 'light'); }, [dark]);
  
  // Quick fix: Add dummy setCommandOpen for the search bar
  const setCommandOpen = (x: boolean) => {};

  return <div className="min-h-screen bg-background text-on-surface">
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between bg-surface-container-low shadow-xl lg:flex">
      <div><div className="flex h-20 items-center gap-3 border-b border-outline-variant px-5"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-on-primary-container"><span className="material-symbols-outlined">terminal</span></div><div><div className="font-title-md">Git Club</div><div className="font-label-mono-sm uppercase text-primary">CHARUSAT HQ</div></div></div><div className="m-4 rounded bg-surface-container p-2 font-label-mono-sm text-outline">// BRANCH: main <span className="float-right text-tertiary">🟢</span></div><nav className="space-y-1 px-3">{navigation.map(([path, icon, label]) => <Link key={path} to={path} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${location.pathname === path ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}><span className="material-symbols-outlined text-[20px]">{icon}</span>{label}</Link>)}</nav></div>
      <div className="border-t border-outline-variant p-4 font-label-mono-sm text-outline">#GrowWith git<br /><span className="text-on-surface">Build. Collab. Ship.</span></div>
    </aside>
    <div className="lg:pl-64"><header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-outline-variant bg-surface/95 px-4 backdrop-blur-md sm:px-6"><div className="flex min-w-0 items-center gap-3"><span className="hidden font-label-mono-sm text-outline sm:inline">charusat /</span><span className="font-label-mono-sm text-primary">git-club-ops</span><button className="hidden items-center gap-2 rounded-lg bg-surface-container px-3 py-2 text-sm text-outline hover:text-on-surface sm:flex" onClick={() => setCommandOpen(true)}><span className="material-symbols-outlined text-[18px]">search</span>Search or type command... <kbd className="rounded bg-surface-container-high px-1 text-[10px]">Ctrl K</kbd></button></div><div className="flex items-center gap-2"><button aria-label="Open search" className="rounded-lg p-2 text-outline hover:bg-surface-container-high hover:text-on-surface sm:hidden" onClick={() => setCommandOpen(true)}><span className="material-symbols-outlined">search</span></button><button aria-label="Toggle theme" className="rounded-lg p-2 text-outline hover:bg-surface-container-high hover:text-on-surface" onClick={() => setDark(value => !value)}><span className="material-symbols-outlined">{dark ? 'light_mode' : 'dark_mode'}</span></button><Link aria-label="Notifications" to="/notifications" className="rounded-lg p-2 text-outline hover:bg-surface-container-high hover:text-on-surface"><span className="material-symbols-outlined">notifications</span></Link><div className="hidden text-right sm:block"><div className="text-sm font-semibold">Riddhi Thummar</div><div className="font-label-mono-sm text-outline">Admin &amp; Tech Lead</div></div></div></header><main className="mx-auto max-w-7xl px-4 py-8 sm:px-6"><div className="mb-8"><div className="mb-2 font-label-mono-sm uppercase tracking-widest text-primary">// {eyebrow}</div><h1 className="font-headline-xl text-headline-xl tracking-tight">{title}</h1><p className="mt-2 max-w-2xl text-on-surface-variant">{location.pathname === '/dashboard' ? 'Everything happening across Git Club, in one operational view.' : 'Manage your Git Club workspace and keep the community moving.'}</p></div>{children}</main></div>
  </div>;
}

export function Stat({ label, value, tone = 'text-on-surface' }: { label: string; value: string | number; tone?: string }) { return <div className="rounded-xl bg-surface-container-low p-4 shadow-sm"><div className="font-label-mono-sm uppercase text-outline">{label}</div><div className={`mt-2 text-3xl font-bold ${tone}`}>{value}</div></div>; }
