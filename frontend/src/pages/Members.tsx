import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
export default function Members() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // You can add canvas scripts here if needed
  }, []);
  
  return (
    <>
      

<aside className="fixed left-0 top-0 h-full w-64 bg-surface z-50 flex flex-col justify-between border-r border-border-subtle select-none">
<div className="flex flex-col">

<div className="h-16 px-6 flex items-center gap-3 border-b border-border-subtle">
<div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-primary border border-border-subtle">
<span className="material-symbols-outlined text-[19px]">terminal</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-base leading-tight font-bold tracking-tight text-text-primary uppercase">GIT CLUB</span>
<span className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">COMMAND CENTER</span>
</div>
</div>

<div className="px-5 pt-4 pb-1">
<div className="font-label-caps text-[11px] uppercase text-text-muted tracking-wider">Workspace</div>
</div>
<nav className="px-3 flex flex-col gap-1">
<Link className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:bg-surface-subtle hover:text-text-primary transition-colors rounded-lg" data-path="dashboard" to="/">
<span className="material-symbols-outlined text-[20px]">hub</span>
<span className="font-label-ui text-sm font-medium">Command Center</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:bg-surface-subtle hover:text-text-primary transition-colors rounded-lg" data-path="events" to="/events">
<span className="material-symbols-outlined text-[20px]">event_available</span>
<span className="font-label-ui text-sm font-medium">Events</span>
</Link>
<Link aria-current="page" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-lg bg-primary-container/70 text-primary border-l-[3px] border-primary font-semibold" data-path="members" to="/members">
<span className="material-symbols-outlined text-[20px]">group</span>
<span className="font-label-ui text-sm">Members</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:bg-surface-subtle hover:text-text-primary transition-colors rounded-lg" data-path="projects" to="/projects">
<span className="material-symbols-outlined text-[20px]">deployed_code</span>
<span className="font-label-ui text-sm font-medium">Projects</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:bg-surface-subtle hover:text-text-primary transition-colors rounded-lg" data-path="announcements" to="/announcements">
<span className="material-symbols-outlined text-[20px]">campaign</span>
<span className="font-label-ui text-sm font-medium">Announcements</span>
</Link>
</nav>
<div className="my-3 mx-4 border-t border-border-subtle"></div>

<div className="px-5 pb-1">
<div className="font-label-caps text-[11px] uppercase text-text-muted tracking-wider">System</div>
</div>
<nav className="px-3 flex flex-col gap-1">
<Link className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:bg-surface-subtle hover:text-text-primary transition-colors rounded-lg" data-path="settings" to="/settings">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-label-ui text-sm font-medium">Settings</span>
</Link>
</nav>
</div>

<div className="p-4 border-t border-border-subtle bg-surface-subtle/50">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-primary shadow-xs">
<span className="material-symbols-outlined text-[15px]">account_balance</span>
</div>
<div className="flex flex-col">
<span className="font-label-code text-xs uppercase font-semibold text-text-primary">GIT CLUB</span>
<span className="font-label-caps text-[10px] text-text-muted">CHARUSAT UNIT</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-border-subtle shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-caps text-[10px] font-semibold text-primary uppercase">ACTIVE</span>
</div>
</div>
</div>
</aside>

<div className="pl-64">

<header className="fixed top-0 left-64 right-0 h-16 bg-surface/95 backdrop-blur-md z-40 border-b border-border-subtle flex items-center justify-between px-8">
<div className="flex items-center gap-2 text-xs font-label-code">
<span className="text-text-muted uppercase tracking-wider font-medium">COMMAND CENTER</span>
<span className="text-border-subtle font-mono">//</span>
<span className="text-primary font-semibold uppercase tracking-wider">MEMBERS DIRECTORY</span>
</div>
<div className="flex items-center gap-3">

<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-subtle border border-border-subtle text-text-secondary text-sm">
<span className="material-symbols-outlined text-[18px] text-text-muted">search</span>
<span className="font-label-ui text-xs text-text-muted pr-4">Search repository...</span>
<kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle font-label-code text-[10px] text-text-secondary shadow-xs">⌘K</kbd>
</div>
<button aria-label="Notifications" className="relative w-9 h-9 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition-colors shadow-xs">
<span className="material-symbols-outlined text-[19px]">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary ring-2 ring-white"></span>
</button>
<div className="flex items-center gap-3 pl-3 border-l border-border-subtle">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium text-xs shadow-xs">
            RT
          </div>
<div className="flex flex-col text-left">
<div className="flex items-center gap-1">
<span className="font-label-ui text-sm text-text-primary font-semibold leading-tight">Riddhi</span>
<span className="material-symbols-outlined text-text-muted text-[14px]">arrow_drop_down</span>
</div>
<span className="font-label-caps text-[10px] text-primary font-semibold uppercase">Admin</span>
</div>
</div>
</div>
</header>

<main className="w-full pt-16 bg-background min-h-screen">
<div className="max-w-[1440px] mx-auto p-8">
<div className="flex flex-col w-full">

<section className="relative w-full rounded-2xl bg-surface border border-border-subtle p-8 mb-6 overflow-hidden shadow-card">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/10 via-primary/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
<div className="space-y-2 max-w-2xl">
<div className="flex items-center gap-2">
<span className="px-2.5 py-0.5 rounded-full bg-primary-container text-primary font-label-caps text-[11px] font-semibold uppercase tracking-wider">Git Node // Roster v2.4</span>
<span className="text-text-muted text-xs font-label-caps uppercase tracking-wider">Academic Session 2024-25</span>
</div>
<h1 className="font-headline-lg text-3xl font-bold text-text-primary tracking-tight uppercase">MEMBERS DIRECTORY</h1>
<p className="font-body-md text-text-secondary text-sm">Discover and manage the Git Club community, core engineering team, research leads, and emerging contributors.</p>
</div>

<div className="flex flex-wrap items-center gap-2.5">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle text-text-primary transition-colors font-label-ui text-sm font-medium shadow-card" id="exportBtn">
<span className="material-symbols-outlined text-[18px] text-text-secondary">file_download</span>
<span>Export (.CSV)</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle text-text-primary transition-colors font-label-ui text-sm font-medium shadow-card">
<span className="material-symbols-outlined text-[18px] text-text-secondary">tune</span>
<span>Batch Actions</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-[#4E6C5D] font-label-ui text-sm font-medium shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">person_add</span>
<span>+ Add Member</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border-subtle">
<div className="p-4 rounded-xl bg-surface-subtle border border-border-subtle/80 flex items-center justify-between">
<div>
<div className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider">Total Active</div>
<div className="font-headline-md text-2xl font-bold text-text-primary mt-0.5">248</div>
<div className="font-label-caps text-[11px] text-primary font-semibold mt-1">● 98.4% retention</div>
</div>
<div className="w-10 h-10 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-primary shadow-xs">
<span className="material-symbols-outlined text-[20px]">diversity_3</span>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-subtle border border-border-subtle/80 flex items-center justify-between">
<div>
<div className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider">Joined This Month</div>
<div className="font-headline-md text-2xl font-bold text-secondary mt-0.5">+24</div>
<div className="font-label-caps text-[11px] text-secondary font-semibold mt-1">↑ +14% vs last term</div>
</div>
<div className="w-10 h-10 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-secondary shadow-xs">
<span className="material-symbols-outlined text-[20px]">rocket_launch</span>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-subtle border border-border-subtle/80 flex items-center justify-between">
<div>
<div className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider">Core Maintainers</div>
<div className="font-headline-md text-2xl font-bold text-[#8C7A3E] mt-0.5">18</div>
<div className="font-label-caps text-[11px] text-text-secondary mt-1">Full commit access</div>
</div>
<div className="w-10 h-10 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-[#8C7A3E] shadow-xs">
<span className="material-symbols-outlined text-[20px]">shield_person</span>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-subtle border border-border-subtle/80 flex items-center justify-between">
<div>
<div className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider">Pending Review</div>
<div className="font-headline-md text-2xl font-bold text-text-primary mt-0.5">08</div>
<div className="font-label-caps text-[11px] text-text-muted mt-1">Requires review &amp; sign-off</div>
</div>
<div className="w-10 h-10 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-text-muted shadow-xs">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface rounded-2xl border border-border-subtle p-5 mb-6 shadow-card space-y-4">

<div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span>
<input className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface-subtle border border-border-subtle text-text-primary placeholder:text-text-muted text-sm font-body-md focus:outline-none focus:border-primary focus:bg-white transition-all shadow-xs" id="memberSearch" placeholder="Search by name, skill, branch, or USN (e.g. 22CE084)..." type="text" />
</div>
<div className="flex items-center gap-2 self-end md:self-auto font-label-code text-xs text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">filter_alt</span>
<span>Showing <strong className="text-text-primary font-semibold" id="visibleCount">6</strong> of 248 members</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pt-1">

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider font-semibold">Academic Year</label>
<div className="flex items-center gap-1 p-1 bg-surface-subtle border border-border-subtle rounded-xl font-label-code text-xs">
<button className="filter-pill filter-year active flex-1 py-1.5 rounded-lg bg-white text-primary font-semibold border border-border-subtle shadow-xs transition-all" data-year="all">All</button>
<button className="filter-pill filter-year flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-year="1st">1st</button>
<button className="filter-pill filter-year flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-year="2nd">2nd</button>
<button className="filter-pill filter-year flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-year="3rd">3rd</button>
<button className="filter-pill filter-year flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-year="4th">4th</button>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider font-semibold">Branch</label>
<div className="flex items-center gap-1 p-1 bg-surface-subtle border border-border-subtle rounded-xl font-label-code text-xs">
<button className="filter-pill filter-branch active flex-1 py-1.5 rounded-lg bg-white text-primary font-semibold border border-border-subtle shadow-xs transition-all" data-branch="all">All</button>
<button className="filter-pill filter-branch flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-branch="CSE">CSE</button>
<button className="filter-pill filter-branch flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-branch="IT">IT</button>
<button className="filter-pill filter-branch flex-1 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/60 transition-all" data-branch="CE">CE</button>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider font-semibold">Domain</label>
<div className="relative">
<select className="w-full px-3.5 py-2 rounded-xl bg-surface-subtle border border-border-subtle text-text-primary font-label-ui text-xs focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer shadow-xs" id="domainSelect">
<option value="all">All Domains (Engineering &amp; Product)</option>
<option value="Web Development">Web Development &amp; Architecture</option>
<option value="AI/ML">AI/ML &amp; Vision</option>
<option value="Cloud/DevOps">Cloud &amp; DevOps</option>
<option value="Mobile">Mobile &amp; Flutter</option>
<option value="UI/UX">UI/UX &amp; Product Design</option>
<option value="Security">App Security &amp; Infrastructure</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-[18px]">expand_more</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-[11px] text-text-muted uppercase tracking-wider font-semibold">Membership Role</label>
<div className="relative">
<select className="w-full px-3.5 py-2 rounded-xl bg-surface-subtle border border-border-subtle text-text-primary font-label-ui text-xs focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer shadow-xs" id="roleSelect">
<option value="all">All Roles</option>
<option value="Admin">Admin</option>
<option value="Core Team">Core Team</option>
<option value="Event Lead">Event Lead</option>
<option value="UI/UX Lead">UI/UX Lead</option>
<option value="Security Lead">Security Lead</option>
<option value="Member">Member / Contributor</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-[18px]">expand_more</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

<div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4" id="cardsGrid">

<article className="member-card group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-all cursor-pointer shadow-card ring-1 ring-primary/30" data-branch="CSE" data-card="riddhi" data-domain="Web Development" data-role="Admin" data-year="2nd">
<div>
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border-subtle shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a young South Asian female software engineer with glasses, calm ambient studio lighting in dark botanical tones, professional tech headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_c38Yl9_7cNMP2nNpOa5quMdJMIESIz63Z-F0n9MyYx7DYNcIdveu2eL8L5lVCaRTjbHRGA0edlViK0GRuT4goTPRXAdAD-lSJxDN6xobFuSo91RpyAe-EDY4diRPqeoN5UwpqII4ttITPmjd6LU2Bfk0G1TkvPfRtJNJfBRBvjNHjO2abZWzEZclStU9uZVUh8zJub0cqsc1yvdZHQ-sqqTvccyvFuVyRPeXybf8y50C32TKcBABJg" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-base font-bold text-text-primary group-hover:text-primary transition-colors">Riddhi Thummar</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Verified Maintainer">verified</span>
</div>
<div className="font-label-code text-xs text-text-muted">USN: 22CE084</div>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-primary-container text-primary font-label-caps text-[10px] font-semibold uppercase tracking-wider">Admin</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">school</span>
<span>2nd Year • Computer Science &amp; Eng.</span>
</div>
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">code_blocks</span>
<span className="text-text-primary font-medium">Web Dev &amp; Distributed Systems</span>
</div>

<div className="flex flex-wrap gap-1.5 pt-1.5">
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">React</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Node.js</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">UI/UX</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">PostgreSQL</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Docker</span>
</div>
</div>
</div>

<div className="pt-3 border-t border-border-subtle bg-surface-subtle/60 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-4 font-label-code text-xs">
<span className="flex items-center gap-1.5 text-text-primary font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">commit</span>
<strong>142</strong> commits
                    </span>
<span className="flex items-center gap-1.5 text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">terminal</span>
<strong>4</strong> projects
                    </span>
</div>
<div className="flex items-center gap-1.5">
<Link className="w-7 h-7 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-xs" to="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[15px]">code</span>
</Link>
<button className="inspect-btn ml-1 px-3 py-1 rounded-lg bg-primary-container text-primary hover:bg-primary hover:text-white font-label-caps text-[11px] font-semibold transition-all">Inspect →</button>
</div>
</div>
</article>

<article className="member-card group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-all cursor-pointer shadow-card" data-branch="IT" data-card="arjun" data-domain="AI/ML" data-role="Core Team" data-year="3rd">
<div>
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border-subtle shrink-0">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of an Indian male university computer science student with headphones around neck, dark ambient room with warm clay and sage rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqEMiZgQ4rVrkXbB8mOvdp9HDgdNWnAI9f5F8PY76PmFCsVwvjtASAUkRF1CIE34fb5JMTJgQOuf0LaprN89t6Ugp2C7WLDO9nPXHhECCXVHXKMsjRl_3RbI1--prgP9BMqm6PgS_kP7JiGvgfdaGNHgucWRy3ZGaZo1_eLQ_tAnfLUF4pmOdYV3YmQztPugKpClQs1Po88Vl3kZW7CGoJ93q7GHQDnPkQuB8r9SVIdtGubwX5suSEPQ" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-base font-bold text-text-primary group-hover:text-primary transition-colors">Arjun Mehta</h3>
<span className="material-symbols-outlined text-[16px] text-secondary" title="AI Lead">psychology</span>
</div>
<div className="font-label-code text-xs text-text-muted">USN: 21IT045</div>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-secondary font-label-caps text-[10px] font-semibold uppercase tracking-wider">AI Lead</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">school</span>
<span>3rd Year • Information Technology</span>
</div>
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-secondary">memory</span>
<span className="text-text-primary font-medium">AI/ML &amp; Computer Vision Labs</span>
</div>
<div className="flex flex-wrap gap-1.5 pt-1.5">
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">PyTorch</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Python</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Fastify</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">OpenCV</span>
</div>
</div>
</div>
<div className="pt-3 border-t border-border-subtle bg-surface-subtle/60 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-4 font-label-code text-xs">
<span className="flex items-center gap-1.5 text-text-primary font-medium">
<span className="material-symbols-outlined text-[16px] text-secondary">commit</span>
<strong>89</strong> commits
                    </span>
<span className="flex items-center gap-1.5 text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">co_present</span>
<strong>2</strong> workshops
                    </span>
</div>
<div className="flex items-center gap-1.5">
<Link className="w-7 h-7 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-xs" to="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[15px]">code</span>
</Link>
<button className="inspect-btn ml-1 px-3 py-1 rounded-lg bg-secondary-container text-secondary hover:bg-secondary hover:text-white font-label-caps text-[11px] font-semibold transition-all">Inspect →</button>
</div>
</div>
</article>

<article className="member-card group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-all cursor-pointer shadow-card" data-branch="CE" data-card="priya" data-domain="Cloud/DevOps" data-role="Event Lead" data-year="2nd">
<div>
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border-subtle shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of an Indian woman developer speaking in a technical conference breakout session, low key subtle background with green botanical tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQKp7bX2TufLRcxe3kDIozwMrPYRv8Q01BwvQUoj32n_fKH9CdG0uzg52BdmqApbTxvLLcmcgBNvqGEKuKKMXhLlJD52rl8N70i8mv_uxgSonIov7MYutnWvvAPlJ4vj1JnrOA7HYg-92arwxtzCSOn9nQhTTn-Z2JLdxM0x2kvgeTgHaP4Jqj4fHnu_uVkyHkDAUzHFhiSr1-pnXyll9SO3xidcu3gOwcK0uHYMie4NZ6REPnUTvefA" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-base font-bold text-text-primary group-hover:text-primary transition-colors">Priya Patel</h3>
<span className="material-symbols-outlined text-[16px] text-[#8C7A3E]" title="Event Operations">event_seat</span>
</div>
<div className="font-label-code text-xs text-text-muted">USN: 22CE112</div>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-[#FAF3DE] text-[#8C7A3E] font-label-caps text-[10px] font-semibold uppercase tracking-wider">Event Lead</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">school</span>
<span>2nd Year • Computer Engineering</span>
</div>
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">cloud_sync</span>
<span className="text-text-primary font-medium">Cloud &amp; Automated Infrastructure</span>
</div>
<div className="flex flex-wrap gap-1.5 pt-1.5">
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Kubernetes</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">AWS</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Go</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">CI/CD</span>
</div>
</div>
</div>
<div className="pt-3 border-t border-border-subtle bg-surface-subtle/60 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-4 font-label-code text-xs">
<span className="flex items-center gap-1.5 text-text-primary font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">commit</span>
<strong>64</strong> commits
                    </span>
<span className="flex items-center gap-1.5 text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">account_tree</span>
<strong>3</strong> pipelines
                    </span>
</div>
<div className="flex items-center gap-1.5">
<Link className="w-7 h-7 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-xs" to="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[15px]">code</span>
</Link>
<button className="inspect-btn ml-1 px-3 py-1 rounded-lg bg-[#FAF3DE] text-[#8C7A3E] hover:bg-[#8C7A3E] hover:text-white font-label-caps text-[11px] font-semibold transition-all">Inspect →</button>
</div>
</div>
</article>

<article className="member-card group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-all cursor-pointer shadow-card" data-branch="CSE" data-card="dev" data-domain="Mobile" data-role="Member" data-year="1st">
<div>
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border-subtle shrink-0 flex items-center justify-center text-primary font-headline-sm font-bold">
                        DS
                      </div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-base font-bold text-text-primary group-hover:text-primary transition-colors">Dev Shah</h3>
<span className="material-symbols-outlined text-[16px] text-text-muted">flutter</span>
</div>
<div className="font-label-code text-xs text-text-muted">USN: 23CS019</div>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-subtle text-text-secondary border border-border-subtle font-label-caps text-[10px] font-semibold uppercase tracking-wider">Contributor</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">school</span>
<span>1st Year • Computer Science &amp; Eng.</span>
</div>
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">phone_android</span>
<span className="text-text-primary font-medium">Cross-platform Mobile Development</span>
</div>
<div className="flex flex-wrap gap-1.5 pt-1.5">
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Flutter</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Dart</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Firebase</span>
</div>
</div>
</div>
<div className="pt-3 border-t border-border-subtle bg-surface-subtle/60 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-4 font-label-code text-xs">
<span className="flex items-center gap-1.5 text-text-primary font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">commit</span>
<strong>31</strong> commits
                    </span>
<span className="flex items-center gap-1.5 text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">deployed_code</span>
<strong>1</strong> project
                    </span>
</div>
<div className="flex items-center gap-1.5">
<Link className="w-7 h-7 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-xs" to="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[15px]">code</span>
</Link>
<button className="inspect-btn ml-1 px-3 py-1 rounded-lg bg-surface-subtle hover:bg-primary hover:text-white border border-border-subtle text-text-secondary font-label-caps text-[11px] font-semibold transition-all">Inspect →</button>
</div>
</div>
</article>

<article className="member-card group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-all cursor-pointer shadow-card" data-branch="CSE" data-card="ananya" data-domain="UI/UX" data-role="UI/UX Lead" data-year="3rd">
<div>
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border-subtle shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of creative design technologist woman working on modern laptop, minimalist dark environment, soft clay and amber lighting accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjRuYSjBmpe6gzoPOC62TqHnKxlCX-xHXX8kMGTtfygti9OnMsfpgvjBvg5pWsQx6CeUqYkCJeIBcZoVZcU2g3URVzVoGmnRaQ-54jQ2n4gJ2xsQ3yfoSHhQx3wWfP0c-CZ48OpNNmwYHbSw8EcXuilF8xE9Z2lLQnHVy6_MnebgYmtRPPZKJUrfGKidMO04MB5O3caE7jfMc3y7qy76-jINyjEs74f5JghbV3sbYTqn8SnxeDsEaP9Q" />
</div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-base font-bold text-text-primary group-hover:text-primary transition-colors">Ananya Joshi</h3>
<span className="material-symbols-outlined text-[16px] text-secondary">palette</span>
</div>
<div className="font-label-code text-xs text-text-muted">USN: 21CS092</div>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-secondary font-label-caps text-[10px] font-semibold uppercase tracking-wider">UI/UX Lead</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">school</span>
<span>3rd Year • Computer Science &amp; Eng.</span>
</div>
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-secondary">design_services</span>
<span className="text-text-primary font-medium">Design Systems &amp; HCI</span>
</div>
<div className="flex flex-wrap gap-1.5 pt-1.5">
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Figma</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Tailwind</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Design Tokens</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">A11y</span>
</div>
</div>
</div>
<div className="pt-3 border-t border-border-subtle bg-surface-subtle/60 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-4 font-label-code text-xs">
<span className="flex items-center gap-1.5 text-text-primary font-medium">
<span className="material-symbols-outlined text-[16px] text-secondary">brush</span>
<strong>52</strong> tokens
                    </span>
<span className="flex items-center gap-1.5 text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">layers</span>
<strong>3</strong> systems
                    </span>
</div>
<div className="flex items-center gap-1.5">
<Link className="w-7 h-7 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-xs" to="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[15px]">code</span>
</Link>
<button className="inspect-btn ml-1 px-3 py-1 rounded-lg bg-secondary-container text-secondary hover:bg-secondary hover:text-white font-label-caps text-[11px] font-semibold transition-all">Inspect →</button>
</div>
</div>
</article>

<article className="member-card group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary/50 transition-all cursor-pointer shadow-card" data-branch="IT" data-card="kabir" data-domain="Security" data-role="Security Lead" data-year="4th">
<div>
<div className="flex items-start justify-between gap-3 mb-4">
<div className="flex items-center gap-3">
<div className="relative w-12 h-12 rounded-xl overflow-hidden bg-surface-subtle border border-border-subtle shrink-0 flex items-center justify-center text-primary font-headline-sm font-bold">
                        KV
                      </div>
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-headline-sm text-base font-bold text-text-primary group-hover:text-primary transition-colors">Kabir Varma</h3>
<span className="material-symbols-outlined text-[16px] text-[#8C7A3E]">security</span>
</div>
<div className="font-label-code text-xs text-text-muted">USN: 20IT014</div>
</div>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-[#FAF3DE] text-[#8C7A3E] font-label-caps text-[10px] font-semibold uppercase tracking-wider">Security Lead</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">school</span>
<span>4th Year • Information Technology</span>
</div>
<div className="flex items-center gap-2 text-xs font-body-sm text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-[#8C7A3E]">lock</span>
<span className="text-text-primary font-medium">Application Security &amp; Cryptography</span>
</div>
<div className="flex flex-wrap gap-1.5 pt-1.5">
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Rust</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Crypto</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Linux</span>
<span className="px-2 py-0.5 rounded-md bg-surface-subtle border border-border-subtle text-text-secondary font-label-code text-[11px]">Zero Trust</span>
</div>
</div>
</div>
<div className="pt-3 border-t border-border-subtle bg-surface-subtle/60 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between">
<div className="flex items-center gap-4 font-label-code text-xs">
<span className="flex items-center gap-1.5 text-text-primary font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">commit</span>
<strong>104</strong> commits
                    </span>
<span className="flex items-center gap-1.5 text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">bug_report</span>
<strong>14</strong> audits
                    </span>
</div>
<div className="flex items-center gap-1.5">
<Link className="w-7 h-7 rounded-lg bg-surface border border-border-subtle hover:bg-surface-subtle flex items-center justify-center text-text-secondary hover:text-primary transition-colors shadow-xs" to="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[15px]">code</span>
</Link>
<button className="inspect-btn ml-1 px-3 py-1 rounded-lg bg-[#FAF3DE] text-[#8C7A3E] hover:bg-[#8C7A3E] hover:text-white font-label-caps text-[11px] font-semibold transition-all">Inspect →</button>
</div>
</div>
</article>
</div>

<aside className="xl:col-span-4 sticky top-20 flex flex-col rounded-2xl bg-surface border border-border-subtle p-6 shadow-card space-y-5" id="inspectPanel">

<div className="flex items-center justify-between pb-3 border-b border-border-subtle">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-caps text-xs uppercase tracking-wider text-text-secondary font-semibold">Telemetry Inspector</span>
</div>
<span className="font-label-code text-[11px] text-text-secondary bg-surface-subtle border border-border-subtle px-2 py-0.5 rounded-md font-semibold">ID: #0084</span>
</div>

<div className="p-4 rounded-xl bg-surface-subtle border border-border-subtle space-y-4">
<div className="flex items-center gap-3">
<div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-border-subtle shrink-0 shadow-xs">
<img className="w-full h-full object-cover" data-alt="Close-up developer avatar of Riddhi Thummar with calm focused posture in dark tech setting" id="inspectImg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL6nJ3isrtYvbGs2uyyP5qMzDTaLgk9C_WZ_IaTjt1v4eZbd-nuU7gUzW1IQELn4K_nXm8tOVRV6YrIumAh5ZAelawif622klpTxspwKuVGXVYSVKd8Dbw2WRNMA5ePKHz0EaZPTCljnU2bo4kUNg5v2_cSza4tzkVe1uTcjg9D3Up7yU1eHfWXwcdMl9OWVM-El3lQudG6cbNQ3Q2CmpqM7e1bEs7xBPUePijbl8su1G3X9tjhTipeQ" />
</div>
<div className="min-w-0">
<h4 className="font-headline-sm text-base font-bold text-text-primary truncate" id="inspectName">Riddhi Thummar</h4>
<div className="font-label-ui text-xs text-primary font-semibold" id="inspectRole">Admin &amp; Tech Lead</div>
<div className="font-label-code text-[11px] text-text-muted truncate" id="inspectSub">USN: 22CE084 • 2nd Year CSE</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-center font-label-code">
<div className="p-2.5 rounded-lg bg-white border border-border-subtle shadow-xs">
<div className="text-[10px] text-text-muted uppercase">COMMITS</div>
<div className="text-sm font-bold text-text-primary" id="inspectCommits">142</div>
</div>
<div className="p-2.5 rounded-lg bg-white border border-border-subtle shadow-xs">
<div className="text-[10px] text-text-muted uppercase">PRS MERGED</div>
<div className="text-sm font-bold text-primary" id="inspectPRs">38</div>
</div>
<div className="p-2.5 rounded-lg bg-white border border-border-subtle shadow-xs">
<div className="text-[10px] text-text-muted uppercase">REPOS</div>
<div className="text-sm font-bold text-secondary" id="inspectRepos">7</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-caps text-xs text-text-secondary uppercase tracking-wider font-semibold">Recent Activity Log</span>
<span className="font-label-code text-xs text-primary font-semibold cursor-pointer hover:underline">Live Feed</span>
</div>
<div className="space-y-2 pt-1 font-label-code text-xs">
<div className="p-3 rounded-xl bg-surface-subtle border border-border-subtle flex items-start gap-2.5">
<span className="material-symbols-outlined text-[17px] text-primary mt-0.5">merge_type</span>
<div className="min-w-0 flex-1">
<div className="text-text-primary truncate font-medium">Merged PR #124 into <span className="text-primary font-semibold">gitclub/core-web</span></div>
<div className="text-[10px] text-text-muted">24 mins ago • verified commit</div>
</div>
</div>
<div className="p-3 rounded-xl bg-surface-subtle border border-border-subtle flex items-start gap-2.5">
<span className="material-symbols-outlined text-[17px] text-secondary mt-0.5">new_releases</span>
<div className="min-w-0 flex-1">
<div className="text-text-primary truncate font-medium">Authored Release <span className="text-secondary font-semibold">v1.8.2-canary</span></div>
<div className="text-[10px] text-text-muted">4 hours ago • production build</div>
</div>
</div>
<div className="p-3 rounded-xl bg-surface-subtle border border-border-subtle flex items-start gap-2.5">
<span className="material-symbols-outlined text-[17px] text-[#8C7A3E] mt-0.5">verified_user</span>
<div className="min-w-0 flex-1">
<div className="text-text-primary truncate font-medium">Approved signing keys for onboarding lead</div>
<div className="text-[10px] text-text-muted">Yesterday • security ops</div>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="font-label-caps text-xs text-text-secondary uppercase tracking-wider font-semibold">Assigned Repositories</div>
<div className="space-y-1.5 font-label-code text-xs">
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-subtle border border-border-subtle">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">bookmark</span>
<span className="text-text-primary font-medium">charusat-git/monorepo</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-primary-container text-primary text-[10px] font-semibold">Maintainer</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-subtle border border-border-subtle">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-text-muted">terminal</span>
<span className="text-text-primary font-medium">gitclub/design-system</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-surface border border-border-subtle text-text-secondary text-[10px] font-semibold">Contributor</span>
</div>
</div>
</div>

<div className="pt-1 space-y-2">
<div className="font-label-caps text-xs text-text-secondary uppercase tracking-wider font-semibold">Node Permissions</div>
<div className="p-2.5 rounded-xl bg-surface-subtle border border-border-subtle flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">key</span>
<span className="text-xs font-body-sm text-text-primary font-medium">Branch Protection Bypass</span>
</div>
<span className="text-[10px] font-label-code text-primary uppercase font-bold">Granted</span>
</div>
</div>

<div className="pt-2 flex gap-2">
<button className="flex-1 py-2.5 rounded-xl bg-primary text-white font-label-ui text-sm font-semibold hover:bg-[#4E6C5D] transition-colors shadow-sm">
                  Open Full Dossier
                </button>
<button className="px-3.5 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-container-high border border-border-subtle text-text-secondary font-label-ui transition-colors">
<span className="material-symbols-outlined text-[18px]">more_horiz</span>
</button>
</div>
</aside>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
