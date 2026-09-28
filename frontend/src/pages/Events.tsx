import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState("calendar");
  const [timeframe, setTimeframe] = useState("month");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // You can add canvas scripts here if needed
  }, []);
  
  return (
    <>
      

<aside className="fixed left-0 top-0 h-full w-64 bg-surface z-50 flex flex-col justify-between border-r border-outline-variant select-none">
<div className="flex flex-col">

<div className="h-16 px-5 flex items-center gap-3 border-b border-outline-variant bg-surface">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-outline-variant">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-sm font-bold leading-tight tracking-tight text-on-surface uppercase">GIT CLUB</span>
<span className="font-label-caps text-[10px] tracking-widest text-outline uppercase font-semibold">COMMAND CENTER</span>
</div>
</div>

<div className="px-5 py-3">
<div className="font-label-caps text-[11px] font-semibold uppercase text-outline tracking-wider">Workspace</div>
</div>
<nav className="px-3 flex flex-col gap-1">
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg font-medium text-sm" data-path="dashboard" to="/">
<span className="material-symbols-outlined text-[20px] text-outline">hub</span>
<span className="font-label-ui">Command Center</span>
</Link>
<Link aria-current="page" className="flex items-center gap-3 px-3 py-2 transition-colors rounded-lg bg-surface-container-high text-primary font-semibold text-sm border-l-4 border-primary" data-path="events" to="/events">
<span className="material-symbols-outlined text-[20px] text-primary">event_available</span>
<span className="font-label-ui">Events</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg font-medium text-sm" data-path="members" to="/members">
<span className="material-symbols-outlined text-[20px] text-outline">group</span>
<span className="font-label-ui">Members</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg font-medium text-sm" data-path="projects" to="/projects">
<span className="material-symbols-outlined text-[20px] text-outline">deployed_code</span>
<span className="font-label-ui">Projects</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg font-medium text-sm" data-path="announcements" to="/announcements">
<span className="material-symbols-outlined text-[20px] text-outline">campaign</span>
<span className="font-label-ui">Announcements</span>
</Link>
</nav>
<div className="my-4 mx-4 border-t border-outline-variant"></div>
<div className="px-5 pb-2">
<div className="font-label-caps text-[11px] font-semibold uppercase text-outline tracking-wider">System</div>
</div>
<nav className="px-3 flex flex-col gap-1">
<Link className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors rounded-lg font-medium text-sm" data-path="settings" to="/settings">
<span className="material-symbols-outlined text-[20px] text-outline">settings</span>
<span className="font-label-ui">Settings</span>
</Link>
</nav>
</div>

<div className="p-4 border-t border-outline-variant bg-surface-container-high/60">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded bg-surface border border-outline-variant flex items-center justify-center text-primary shadow-xs">
<span className="material-symbols-outlined text-primary text-[15px]">account_balance</span>
</div>
<div className="flex flex-col">
<span className="font-label-code text-xs font-semibold uppercase tracking-tight text-on-surface">GIT CLUB</span>
<span className="font-label-caps text-[10px] text-outline">CHARUSAT UNIT</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface border border-outline-variant shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-caps text-[10px] text-primary font-bold uppercase">NODE ACTIVE</span>
</div>
</div>
</div>
</aside>

<div className="pl-64">

<header className="fixed top-0 left-64 right-0 h-16 bg-surface/95 backdrop-blur-md z-40 border-b border-outline-variant flex items-center justify-between px-6 shadow-xs">
<div className="flex items-center gap-2">
<span className="font-label-code text-xs text-outline font-semibold uppercase tracking-wider">COMMAND CENTER</span>
<span className="text-outline-variant text-sm">//</span>
<span className="font-label-code text-xs text-primary font-bold uppercase tracking-wider">OVERVIEW</span>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant text-on-surface-variant focus-within:border-primary/50 focus-within:bg-surface transition-all">
<span className="material-symbols-outlined text-[18px] text-outline">search</span>
<span className="font-label-ui text-xs text-outline pr-4">Search node repository...</span>
<kbd className="px-1.5 py-0.5 rounded bg-surface border border-outline-variant font-label-code text-[10px] text-outline font-semibold shadow-xs">⌘K</kbd>
</div>

<button aria-label="Notifications" className="relative w-9 h-9 rounded-lg bg-surface border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shadow-xs">
<span className="material-symbols-outlined text-[20px]">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary ring-2 ring-surface"></span>
</button>

<div className="flex items-center gap-2.5 pl-3 border-l border-outline-variant">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-xs">
<span className="material-symbols-outlined text-[18px]">person</span>
</div>
<div className="flex flex-col text-left">
<div className="flex items-center gap-1">
<span className="font-label-ui text-sm font-semibold text-on-surface leading-none">Riddhi</span>
<span className="material-symbols-outlined text-outline text-[14px]">arrow_drop_down</span>
</div>
<span className="font-label-caps text-[10px] font-bold text-primary leading-tight uppercase">Admin</span>
</div>
</div>
</div>
</header>

<main className="w-full pt-16 bg-background min-h-screen">
<div className="max-w-[1440px] mx-auto p-6 md:p-8">
<div className="flex flex-col w-full gap-8">

<div className="flex flex-col gap-6">

<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-outline text-xs font-semibold">
<span className="font-label-caps uppercase tracking-widest text-primary font-bold">NODE // 02</span>
<span className="font-label-caps uppercase tracking-widest">/ OPERATIONS</span>
<span className="text-outline-variant">•</span>
<span className="font-label-caps uppercase tracking-widest text-outline">CHARUSAT IT ECOSYSTEM</span>
</div>
<h1 className="font-headline-xl text-3xl md:text-4xl text-on-surface tracking-tight font-extrabold">EVENTS DIRECTORY</h1>
<p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-2xl">
                  Manage upcoming, ongoing, and past Git Club activities and registrations. Synchronized across university infrastructure nodes.
                </p>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="h-9 px-3.5 bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface rounded-lg flex items-center gap-2 shadow-[0_2px_8px_rgba(29,41,35,0.06)] transition-all" id="date-range-btn">
<span className="material-symbols-outlined text-outline text-[18px]">calendar_month</span>
<span className="font-label-code text-xs font-semibold text-on-surface">Fall 2025 Semester</span>
<span className="material-symbols-outlined text-outline text-[16px]">expand_more</span>
</button>
<button className="h-9 px-3.5 bg-surface hover:bg-surface-container-high border border-outline-variant text-on-surface-variant hover:text-on-surface rounded-lg flex items-center gap-2 transition-colors shadow-[0_2px_8px_rgba(29,41,35,0.06)] font-label-ui text-xs font-semibold">
<span className="material-symbols-outlined text-[18px]">campaign</span>
<span>Publish Announcement</span>
</button>
<button onClick={() => setIsDrawerOpen(true)} className="h-9 px-4 bg-primary hover:bg-[#526f60] text-white rounded-lg flex items-center gap-1.5 font-semibold text-xs shadow-[0_2px_8px_rgba(29,41,35,0.08)] transition-all cursor-pointer group" >
<span className="material-symbols-outlined text-[18px] group-hover:rotate-90 transition-transform duration-200">add</span>
<span className="font-label-ui">Create Event</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col justify-between shadow-[0_2px_8px_rgba(29,41,35,0.06)] relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-outline-variant group-hover:bg-primary transition-colors"></div>
<div className="flex items-center justify-between text-outline">
<span className="font-label-caps text-[11px] font-bold tracking-wider uppercase">ALL NODES</span>
<span className="material-symbols-outlined text-[16px] text-outline">dataset</span>
</div>
<div className="mt-3">
<span className="font-headline-md text-2xl font-bold text-on-surface">18</span>
<span className="font-label-caps text-[10px] text-outline ml-1 font-semibold">TOTAL</span>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col justify-between shadow-[0_2px_8px_rgba(29,41,35,0.06)] relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-center justify-between text-primary">
<span className="font-label-caps text-[11px] font-bold tracking-wider uppercase text-primary">SCHEDULED</span>
<span className="material-symbols-outlined text-[16px] text-primary">event_upcoming</span>
</div>
<div className="mt-3">
<span className="font-headline-md text-2xl font-bold text-primary">3</span>
<span className="font-label-caps text-[10px] text-outline ml-1 font-semibold">UPCOMING</span>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col justify-between shadow-[0_2px_8px_rgba(29,41,35,0.06)] relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-[11px] font-bold tracking-wider uppercase text-secondary">LIVE STREAM</span>
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
</div>
<div className="mt-3">
<span className="font-headline-md text-2xl font-bold text-secondary">1</span>
<span className="font-label-caps text-[10px] text-outline ml-1 font-semibold">ONGOING</span>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col justify-between shadow-[0_2px_8px_rgba(29,41,35,0.06)] relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
<div className="flex items-center justify-between text-outline">
<span className="font-label-caps text-[11px] font-bold tracking-wider uppercase">ARCHIVED</span>
<span className="material-symbols-outlined text-[16px]">inventory_2</span>
</div>
<div className="mt-3">
<span className="font-headline-md text-2xl font-bold text-on-surface">14</span>
<span className="font-label-caps text-[10px] text-outline ml-1 font-semibold">COMPLETED</span>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col justify-between shadow-[0_2px_8px_rgba(29,41,35,0.06)] relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-tertiary"></div>
<div className="flex items-center justify-between">
<span className="font-label-caps text-[11px] font-bold tracking-wider uppercase text-[#967733]">RELIABILITY</span>
<span className="material-symbols-outlined text-[#967733] text-[16px]">query_stats</span>
</div>
<div className="mt-3">
<span className="font-headline-md text-2xl font-bold text-on-surface">88%</span>
<span className="font-label-caps text-[10px] text-outline ml-1 font-semibold">AVG ATTENDANCE</span>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col justify-between shadow-[0_2px_8px_rgba(29,41,35,0.06)] relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-center justify-between text-outline">
<span className="font-label-caps text-[11px] font-bold tracking-wider uppercase text-on-surface-variant">REACH</span>
<span className="material-symbols-outlined text-[16px] text-primary">groups</span>
</div>
<div className="mt-3">
<span className="font-headline-md text-2xl font-bold text-primary">1,420+</span>
<span className="font-label-caps text-[10px] text-outline ml-1 font-semibold">ATTENDEES</span>
</div>
</div>
</div>
</div>

<div className="bg-surface p-4 rounded-xl border border-outline-variant flex flex-col gap-4 shadow-[0_2px_8px_rgba(29,41,35,0.06)]">

<div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">

<div className="relative flex-1 min-w-[280px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="w-full h-10 pl-10 pr-10 bg-surface-container-high text-on-surface placeholder:text-outline rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="event-search-input" placeholder="Search events by name, lead, venue, or tag..." type="text" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface" >
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>

<div className="flex items-center gap-1 bg-surface-container-high p-1 rounded-lg border border-outline-variant">
<button className="status-tab px-3 py-1.5 rounded font-label-code text-xs font-semibold transition-all bg-surface text-primary shadow-xs flex items-center gap-1.5" data-filter="all" >
<span>All Stages</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px]">18</span>
</button>
<button className="status-tab px-3 py-1.5 rounded font-label-code text-xs font-medium transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1.5" data-filter="upcoming" >
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Upcoming</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface text-primary text-[10px] font-bold">3</span>
</button>
<button className="status-tab px-3 py-1.5 rounded font-label-code text-xs font-medium transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1.5" data-filter="ongoing" >
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Ongoing</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface text-secondary text-[10px] font-bold">1</span>
</button>
<button className="status-tab px-3 py-1.5 rounded font-label-code text-xs font-medium transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1.5" data-filter="completed" >
<span>Completed</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface text-outline text-[10px]">14</span>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1 border-t border-outline-variant/60">
<div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
<span className="font-label-caps text-xs text-outline uppercase font-semibold mr-1.5 tracking-wider">CATEGORY:</span>
<button className="category-pill px-3 py-1 rounded-full bg-primary text-white font-label-caps text-xs font-bold uppercase transition-all shadow-xs" data-cat="all" >All</button>
<button className="category-pill px-3 py-1 rounded-full bg-surface-container-high hover:bg-surface text-on-surface-variant hover:text-on-surface border border-outline-variant font-label-caps text-xs font-medium uppercase transition-all" data-cat="workshop" >Workshop</button>
<button className="category-pill px-3 py-1 rounded-full bg-surface-container-high hover:bg-surface text-on-surface-variant hover:text-on-surface border border-outline-variant font-label-caps text-xs font-medium uppercase transition-all" data-cat="competition" >Competition</button>
<button className="category-pill px-3 py-1 rounded-full bg-surface-container-high hover:bg-surface text-on-surface-variant hover:text-on-surface border border-outline-variant font-label-caps text-xs font-medium uppercase transition-all" data-cat="hackathon" >Hackathon</button>
<button onClick={() => setFilter('community')} className={`px-3 py-1.5 rounded-full font-label-caps text-label-caps uppercase transition-colors whitespace-nowrap ${filter === 'community' ? 'bg-text-primary text-surface' : 'bg-surface-subtle border border-border-subtle text-text-secondary hover:text-text-primary'}`}>Community</button>
<button className="category-pill px-3 py-1 rounded-full bg-surface-container-high hover:bg-surface text-on-surface-variant hover:text-on-surface border border-outline-variant font-label-caps text-xs font-medium uppercase transition-all" data-cat="social" >Social</button>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<span className="font-label-caps text-xs text-outline uppercase tracking-wider font-semibold">SORT:</span>
<select className="h-8 bg-surface-container-high text-on-surface font-label-code text-xs px-2.5 rounded-lg border border-outline-variant cursor-pointer focus:outline-none focus:border-primary" id="sort-select" >
<option value="date-asc">Date (Earliest First)</option>
<option value="date-desc">Date (Latest First)</option>
<option value="capacity-desc">Capacity (Highest)</option>
<option value="name-asc">Alphabetical (A-Z)</option>
</select>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="events-grid">

<article className="event-card group bg-surface rounded-xl border border-outline-variant flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_rgba(29,41,35,0.06)] hover:shadow-[0_8px_20px_rgba(29,41,35,0.1)] transition-all duration-200" data-capacity="86" data-category="workshop" data-status="upcoming" data-timestamp="2025-10-03">
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Technical hands coding terminal commands and visualizing Git tree branch structures on a mechanical keyboard laptop screen in a dim university computer laboratory with green monitor glow and warm focused desk lamp." style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-primary text-white font-label-caps text-[10px] uppercase font-bold tracking-wider shadow-sm">WORKSHOP</span>
<span className="px-2.5 py-0.5 rounded-full bg-white/90 text-primary font-label-caps text-[10px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Upcoming
                  </span>
</div>
<div className="absolute top-3 right-3">
<span className="font-label-code text-[11px] px-2 py-0.5 rounded bg-white/90 text-on-surface font-semibold shadow-xs">ID // W-2501</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<div className="flex items-center gap-1.5 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
<span className="font-label-code">03 Oct 2025 • 4:00 PM - 6:30 PM</span>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1 justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1 text-outline font-label-caps text-xs font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
<span>CSPIT Lab 2 • 3rd Floor East Wing</span>
</div>
<h2 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    GIT &amp; GITHUB WORKSHOP
                  </h2>
<p className="font-body-sm text-xs leading-relaxed text-on-surface-variant line-clamp-2">
                    Master the essentials of distributed version control, interactive rebase, pull-request lifecycles, and open-source contribution patterns.
                  </p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-[10px] font-bold">
                        MP
                      </div>
<div className="flex flex-col">
<span className="font-label-ui text-xs font-semibold text-on-surface leading-none">Meet Patel</span>
<span className="font-label-caps text-[10px] text-outline">Lead Maintainer</span>
</div>
</div>
<span className="font-label-code text-xs text-outline">@meetpatel</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-code text-xs">
<span className="text-on-surface-variant">Confirmed Registrations</span>
<span className="text-primary font-bold">86 / 100 <span className="text-outline font-normal">(86%)</span></span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/60">
<div className="h-full bg-primary rounded-full" style={{"width":"86%"}}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface rounded-lg font-label-ui text-xs font-semibold transition-colors" >
                      View Details
                    </button>
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface-variant hover:text-on-surface rounded-lg font-label-ui text-xs font-medium transition-colors">
                      Manage Registrations
                    </button>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" title="Share Event Link">
<span className="material-symbols-outlined text-[16px]">share</span>
</button>
</div>
</div>
</article>

<article className="event-card group bg-surface rounded-xl border border-outline-variant flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_rgba(29,41,35,0.06)] hover:shadow-[0_8px_20px_rgba(29,41,35,0.1)] transition-all duration-200" data-capacity="92" data-category="competition" data-status="upcoming" data-timestamp="2025-10-12">
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="High intensity university hackathon floor with groups of engineering students collaborating in front of glowing multi monitor setups, whiteboard system diagrams, and neon green and deep black ambient staging lights." style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-[#C9A85C] text-white font-label-caps text-[10px] uppercase font-bold tracking-wider shadow-sm">COMPETITION</span>
<span className="px-2.5 py-0.5 rounded-full bg-white/90 text-secondary font-label-caps text-[10px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Closing Soon
                  </span>
</div>
<div className="absolute top-3 right-3">
<span className="font-label-code text-[11px] px-2 py-0.5 rounded bg-white/90 text-[#8C6D26] backdrop-blur-sm font-bold shadow-xs">₹25,000 PRIZE</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<div className="flex items-center gap-1.5 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-tertiary">timer</span>
<span className="font-label-code">12 Oct 2025 • 10:00 AM - 10:00 PM</span>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1 justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1 text-outline font-label-caps text-xs font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-secondary">apartment</span>
<span>CSPIT Central Auditorium</span>
</div>
<h2 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    HACKATHON 2.0: CODE SPRINT
                  </h2>
<p className="font-body-sm text-xs leading-relaxed text-on-surface-variant line-clamp-2">
                    12-hour continuous sprint building decentralized tools, local AI runtimes, and developer infrastructure primitives for academic hubs.
                  </p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary text-white flex items-center justify-center font-label-caps text-[10px] font-bold">
                        GC
                      </div>
<div className="flex flex-col">
<span className="font-label-ui text-xs font-semibold text-on-surface leading-none">Git Club Core Team</span>
<span className="font-label-caps text-[10px] text-outline">Mentorship Board</span>
</div>
</div>
<span className="font-label-caps text-xs text-[#8C6D26] px-2 py-0.5 rounded bg-tertiary/20 font-bold">36 Teams</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-code text-xs">
<span className="text-on-surface-variant">Capacity Status</span>
<span className="text-secondary font-bold">92 / 100 <span className="text-outline font-normal">(8 Slots Left)</span></span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/60">
<div className="h-full bg-secondary rounded-full" style={{"width":"92%"}}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface rounded-lg font-label-ui text-xs font-semibold transition-colors" >
                      View Details
                    </button>
<button className="h-8 px-3 bg-secondary hover:bg-[#b56954] text-white rounded-lg font-label-ui text-xs font-semibold transition-colors shadow-xs">
                      Review Applications
                    </button>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" title="Share Event Link">
<span className="material-symbols-outlined text-[16px]">share</span>
</button>
</div>
</div>
</article>

<article className="event-card group bg-surface rounded-xl border border-outline-variant flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_rgba(29,41,35,0.06)] hover:shadow-[0_8px_20px_rgba(29,41,35,0.1)] transition-all duration-200" data-capacity="60" data-category="community" data-status="upcoming" data-timestamp="2025-10-18">
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Neural network mathematical architecture diagrams projected behind an academic lecturer discussing attention mechanisms and tensor operations in an amphitheater lecture hall with students focused on code." style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-caps text-[10px] uppercase font-bold tracking-wider shadow-sm border border-outline-variant">COMMUNITY</span>
<span className="px-2.5 py-0.5 rounded-full bg-white/90 text-primary font-label-caps text-[10px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Upcoming
                  </span>
</div>
<div className="absolute top-3 right-3">
<span className="font-label-code text-[11px] px-2 py-0.5 rounded bg-white/90 text-on-surface font-semibold shadow-xs">HYBRID MODE</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<div className="flex items-center gap-1.5 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-primary">event</span>
<span className="font-label-code">18 Oct 2025 • 3:00 PM</span>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1 justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1 text-outline font-label-caps text-xs font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-primary">cast_connected</span>
<span>Virtual &amp; Seminar Hall A (Dual Stream)</span>
</div>
<h2 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    AI/ML COMMUNITY: TRANSFORMERS DECODED
                  </h2>
<p className="font-body-sm text-xs leading-relaxed text-on-surface-variant line-clamp-2">
                    Deconstructing multi-head self-attention mechanics from scratch in pure PyTorch with edge deployment strategies.
                  </p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-[10px] font-bold">
                        DR
                      </div>
<div className="flex flex-col">
<span className="font-label-ui text-xs font-semibold text-on-surface leading-none">Prof. D. Rawal</span>
<span className="font-label-caps text-[10px] text-outline">Guest Speaker</span>
</div>
</div>
<span className="font-label-code text-xs text-outline">AI Research Lab</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-code text-xs">
<span className="text-on-surface-variant">Dual Stream Registrations</span>
<span className="text-on-surface font-bold">45 / 75 <span className="text-outline font-normal">(60%)</span></span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/60">
<div className="h-full bg-primary rounded-full" style={{"width":"60%"}}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface rounded-lg font-label-ui text-xs font-semibold transition-colors" >
                      View Details
                    </button>
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface-variant hover:text-on-surface rounded-lg font-label-ui text-xs font-medium transition-colors">
                      Stream Link
                    </button>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" title="Share Event Link">
<span className="material-symbols-outlined text-[16px]">share</span>
</button>
</div>
</div>
</article>

<article className="event-card group bg-surface rounded-xl border border-outline-variant flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_rgba(29,41,35,0.06)] hover:shadow-[0_8px_20px_rgba(29,41,35,0.1)] transition-all duration-200" data-capacity="91" data-category="workshop" data-status="ongoing" data-timestamp="2025-09-30">
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Dark linux kernel terminal session showing C code compile errors and patch verification pipelines on dual monitors with developers wearing headphones collaborating over remote audio call." style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-primary text-white font-label-caps text-[10px] uppercase font-bold tracking-wider shadow-sm">WORKSHOP</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary text-white font-label-caps text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1 font-bold animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span> LIVE NOW
                  </span>
</div>
<div className="absolute top-3 right-3 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span className="font-label-code text-[11px] px-2 py-0.5 rounded bg-white/90 text-secondary font-bold shadow-xs">ONLINE</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<div className="flex items-center gap-1.5 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-secondary">sensors</span>
<span className="font-label-code">Today • 2:00 PM (Started 45m ago)</span>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1 justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1 text-outline font-label-caps text-xs font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-secondary">videocam</span>
<span>Online Meet Room #3 • Live Channel</span>
</div>
<h2 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    OPEN SOURCE DAY: CONTRIBUTING TO LINUX
                  </h2>
<p className="font-body-sm text-xs leading-relaxed text-on-surface-variant line-clamp-2">
                    Live patch generation walkthrough: configuring git-send-email, navigating kernel maintainer mailing lists, and submitting subsystem patches.
                  </p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-label-caps text-[10px] font-bold">
                        KP
                      </div>
<div className="flex flex-col">
<span className="font-label-ui text-xs font-semibold text-on-surface leading-none">Karan Panchal</span>
<span className="font-label-caps text-[10px] text-outline">Kernel Fellow</span>
</div>
</div>
<span className="font-label-code text-secondary text-xs flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 110 Listening
                    </span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-code text-xs">
<span className="text-on-surface-variant">Live Active Attendees</span>
<span className="text-secondary font-bold">110 / 120 <span className="text-outline font-normal">(91%)</span></span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/60">
<div className="h-full bg-secondary rounded-full" style={{"width":"91%"}}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-secondary hover:bg-[#b56954] text-white rounded-lg font-label-ui text-xs font-semibold transition-colors flex items-center gap-1 shadow-xs">
<span className="material-symbols-outlined text-[14px]">login</span>
                      Join Session
                    </button>
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface rounded-lg font-label-ui text-xs font-medium transition-colors" >
                      Console Log
                    </button>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" title="Share Event Link">
<span className="material-symbols-outlined text-[16px]">share</span>
</button>
</div>
</div>
</article>

<article className="event-card group bg-surface rounded-xl border border-outline-variant flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_rgba(29,41,35,0.06)] hover:shadow-[0_8px_20px_rgba(29,41,35,0.1)] transition-all duration-200" data-capacity="100" data-category="workshop" data-status="completed" data-timestamp="2025-09-15">
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125" data-alt="Auditorium full of university software engineering students raising hands with web browser developer tools open on their screens during an interactive modern JavaScript framework lecture." style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-surface text-on-surface-variant font-label-caps text-[10px] uppercase font-bold tracking-wider shadow-sm border border-outline-variant">WORKSHOP</span>
<span className="px-2.5 py-0.5 rounded-full bg-white/90 text-outline font-label-caps text-[10px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Completed
                  </span>
</div>
<div className="absolute top-3 right-3">
<span className="font-label-code text-[11px] px-2 py-0.5 rounded bg-white/90 text-outline font-semibold shadow-xs">ARCHIVED</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<div className="flex items-center gap-1.5 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-outline">history</span>
<span className="font-label-code text-white/90">Concluded 15 Sep 2025</span>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1 justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1 text-outline font-label-caps text-xs font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
<span>CSPIT Seminar Hall 1 • Full House</span>
</div>
<h2 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    WEB DEVELOPMENT BOOTCAMP 2025
                  </h2>
<p className="font-body-sm text-xs leading-relaxed text-on-surface-variant line-clamp-2">
                    Comprehensive 3-day deep dive covering modern DOM APIs, state management, HTTP caching, and deployment on serverless platforms.
                  </p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-outline text-white flex items-center justify-center font-label-caps text-[10px] font-bold">
                        AS
                      </div>
<div className="flex flex-col">
<span className="font-label-ui text-xs font-semibold text-on-surface leading-none">Aanand Sharma</span>
<span className="font-label-caps text-[10px] text-outline">Alumni Speaker</span>
</div>
</div>
<span className="font-label-code text-primary text-xs font-bold">4.9 / 5.0 Rating</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-code text-xs">
<span className="text-on-surface-variant">Final Turnout</span>
<span className="text-on-surface font-bold">100 / 100 <span className="text-primary font-bold">(100% Attended)</span></span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/60">
<div className="h-full bg-primary rounded-full" style={{"width":"100%"}}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface rounded-lg font-label-ui text-xs font-semibold transition-colors" >
                      Access Artifacts
                    </button>
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface-variant hover:text-on-surface rounded-lg font-label-ui text-xs font-medium transition-colors">
                      Survey Report
                    </button>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" title="Download Records">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
</article>

<article className="event-card group bg-surface rounded-xl border border-outline-variant flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_rgba(29,41,35,0.06)] hover:shadow-[0_8px_20px_rgba(29,41,35,0.1)] transition-all duration-200" data-capacity="55" data-category="workshop" data-status="upcoming" data-timestamp="2025-10-25">
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
<div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Continuous integration pipeline status graphs and GitHub actions workflow terminal displays showing automated green test badges on multiple vertical developer screens." style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-primary text-white font-label-caps text-[10px] uppercase font-bold tracking-wider shadow-sm">WORKSHOP</span>
<span className="px-2.5 py-0.5 rounded-full bg-white/90 text-primary font-label-caps text-[10px] uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Upcoming
                  </span>
</div>
<div className="absolute top-3 right-3">
<span className="font-label-code text-[11px] px-2 py-0.5 rounded bg-white/90 text-on-surface font-semibold shadow-xs">ID // W-2504</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
<div className="flex items-center gap-1.5 text-xs font-semibold">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
<span className="font-label-code">25 Oct 2025 • 4:30 PM</span>
</div>
</div>
</div>
<div className="p-5 flex flex-col flex-1 justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1 text-outline font-label-caps text-xs font-semibold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
<span>CSPIT Lab 1 • Network Wing</span>
</div>
<h2 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    AUTOMATED CI/CD &amp; SECURITY AUDIT
                  </h2>
<p className="font-body-sm text-xs leading-relaxed text-on-surface-variant line-clamp-2">
                    Build bulletproof GitHub Actions pipelines: static analysis, semantic version tagging, container registry pushes, and signed provenance.
                  </p>
</div>
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded-lg border border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-[10px] font-bold">
                        RJ
                      </div>
<div className="flex flex-col">
<span className="font-label-ui text-xs font-semibold text-on-surface leading-none">Riddhi Joshi</span>
<span className="font-label-caps text-[10px] text-outline">DevOps Lead</span>
</div>
</div>
<span className="font-label-code text-outline text-xs">@riddhijoshi</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-code text-xs">
<span className="text-on-surface-variant">Seat Reservations</span>
<span className="text-primary font-bold">55 / 80 <span className="text-outline font-normal">(68%)</span></span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/60">
<div className="h-full bg-primary rounded-full" style={{"width":"68%"}}></div>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface rounded-lg font-label-ui text-xs font-semibold transition-colors" >
                      View Details
                    </button>
<button className="h-8 px-3 bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface-variant hover:text-on-surface rounded-lg font-label-ui text-xs font-medium transition-colors">
                      Manage Registrations
                    </button>
</div>
<button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" title="Share Event Link">
<span className="material-symbols-outlined text-[16px]">share</span>
</button>
</div>
</div>
</article>
</div>
</div>
</div>
</main>
</div>

<div className={`fixed inset-0 bg-[#1D2923]/40 backdrop-blur-xs z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsDrawerOpen(false)}></div>
<div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto border-l border-border-subtle ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} id="create-event-drawer">

<div className="p-6 bg-surface border-b border-outline-variant flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-caps text-xs font-bold uppercase tracking-widest text-primary">INITIALIZE NODE EVENT</span>
</div>
<h3 className="font-headline-sm text-xl font-bold text-on-surface mt-1">Create New Event</h3>
</div>
<button className="w-9 h-9 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-outline hover:text-on-surface flex items-center justify-center transition-colors" >
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<form className="p-6 flex flex-col gap-5 flex-1" id="create-event-form" >

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-event-name">Event Name / Designation</label>
<input className="h-10 px-3 bg-surface-container-high text-on-surface placeholder:text-outline rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-event-name" placeholder="e.g., Rust for Systems Programming" required type="text" />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-category">Category</label>
<select className="h-10 px-3 bg-surface-container-high text-on-surface rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-category">
<option value="Workshop">Workshop</option>
<option value="Competition">Competition</option>
<option value="Hackathon">Hackathon</option>
<option value="Community">Community</option>
<option value="Social">Social</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-lead">Event Lead / Host</label>
<input className="h-10 px-3 bg-surface-container-high text-on-surface placeholder:text-outline rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-lead" placeholder="e.g., Riddhi Joshi" type="text" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-date">Date</label>
<input className="h-10 px-3 bg-surface-container-high text-on-surface rounded-lg font-label-code text-xs border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-date" type="date" value="2025-11-05" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-time">Time Window</label>
<input className="h-10 px-3 bg-surface-container-high text-on-surface placeholder:text-outline rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-time" placeholder="e.g., 3:00 PM - 5:30 PM" type="text" />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="sm:col-span-2 flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-venue">Venue Location</label>
<input className="h-10 px-3 bg-surface-container-high text-on-surface placeholder:text-outline rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-venue" placeholder="e.g., CSPIT Lab 3 / Online Discord" type="text" />
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-capacity">Max Capacity</label>
<input className="h-10 px-3 bg-surface-container-high text-on-surface rounded-lg font-label-code text-xs border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-capacity" max="500" min="1" type="number" value="100" />
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-xs font-semibold text-on-surface uppercase tracking-wider" htmlFor="drawer-desc">Detailed Abstract</label>
<textarea className="p-3 bg-surface-container-high text-on-surface placeholder:text-outline rounded-lg font-body-sm text-sm border border-outline-variant focus:outline-none focus:border-primary focus:bg-surface transition-all" id="drawer-desc" placeholder="Specify prerequisites, agenda modules, required local toolchains, and post-session repo artifacts..." rows={4}></textarea>
</div>

<div className="p-4 bg-surface-container-high rounded-lg border border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[22px]">videocam</span>
<div className="flex flex-col">
<span className="font-label-ui text-sm text-on-surface font-semibold leading-none">Automate Stream Provisioning</span>
<span className="font-label-caps text-[11px] text-outline mt-1 font-medium">Generates Zoom / Google Meet cluster node</span>
</div>
</div>
<input checked className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</div>
<div className="hidden p-3 rounded-lg bg-surface-container-high text-primary font-label-code text-xs border border-primary/30" id="form-feedback">
        Event node deployed to campus registry.
      </div>
</form>

<div className="p-6 bg-surface border-t border-outline-variant flex items-center justify-end gap-3">
<button className="h-10 px-4 rounded-lg bg-surface-container-high hover:bg-surface border border-outline-variant text-on-surface font-label-ui text-xs font-semibold transition-colors"  type="button">
        Cancel
      </button>
<button className="h-10 px-5 rounded-lg bg-primary hover:bg-[#526f60] text-white font-label-ui text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5" form="create-event-form" type="submit">
<span className="material-symbols-outlined text-[18px]">publish</span>
<span>Register &amp; Deploy Event</span>
</button>
</div>
</div>

<div className="fixed inset-0 bg-[#1D2923]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden" id="detail-modal">
<div className="bg-surface w-full max-w-lg rounded-xl shadow-[0_12px_32px_rgba(29,41,35,0.14)] border border-outline-variant overflow-hidden flex flex-col">
<div className="p-5 bg-surface border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
<span className="font-label-caps text-xs font-bold uppercase tracking-wider text-on-surface">NODE TELEMETRY INSPECTOR</span>
</div>
<button className="text-outline hover:text-on-surface" >
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<div className="p-6 flex flex-col gap-4">
<div>
<span className="font-label-caps text-[11px] font-bold text-primary uppercase">TITLE</span>
<h4 className="font-headline-sm text-lg font-bold text-on-surface mt-0.5" id="detail-title">Event Name</h4>
</div>
<div className="grid grid-cols-2 gap-3 bg-surface-container-high p-4 rounded-lg border border-outline-variant">
<div>
<span className="font-label-caps text-[10px] font-bold text-outline uppercase">LEAD COORDINATOR</span>
<p className="font-label-ui text-xs text-on-surface mt-0.5 font-semibold" id="detail-lead">Lead Name</p>
</div>
<div>
<span className="font-label-caps text-[10px] font-bold text-outline uppercase">SCHEDULE</span>
<p className="font-label-ui text-xs text-on-surface mt-0.5 font-semibold" id="detail-time">Time</p>
</div>
<div className="col-span-2 pt-2 border-t border-outline-variant/60">
<span className="font-label-caps text-[10px] font-bold text-outline uppercase">VENUE / DISPATCH</span>
<p className="font-label-ui text-xs text-on-surface mt-0.5 font-semibold" id="detail-venue">Venue</p>
</div>
</div>
<div className="flex items-center justify-between text-outline text-xs font-label-code">
<span>Campus Node: <strong className="text-primary font-bold">VERIFIED</strong></span>
<span>Security Protocol: <strong className="text-primary font-bold">ACTIVE</strong></span>
</div>
</div>
<div className="p-4 bg-surface border-t border-outline-variant flex justify-end">
<button className="h-8 px-4 bg-primary text-white rounded-lg font-label-ui text-xs font-semibold hover:bg-[#526f60] transition-colors" >
          Close Inspector
        </button>
</div>
</div>
</div>



    </>
  );
}
