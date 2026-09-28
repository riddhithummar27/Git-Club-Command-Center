import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  useEffect(() => {
    // You can add canvas scripts here if needed
  }, []);
  
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#FFFFFF] z-50 flex flex-col justify-between border-r border-[#DDE3DD] select-none shadow-[1px_0_4px_rgba(29,41,35,0.03)]"><div className="flex flex-col"><div className="h-16 px-space-lg flex items-center gap-space-sm border-b border-[#DDE3DD]"><div className="w-8 h-8 rounded-lg bg-[#EEF1EC] flex items-center justify-center text-primary border border-[#DDE3DD]"><span className="material-symbols-outlined text-[18px]">terminal</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm leading-tight tracking-tight text-[#1D2923] uppercase">GIT CLUB</span><span className="font-label-caps text-label-caps tracking-widest text-[#8B958F] uppercase">COMMAND CENTER</span></div></div><div className="px-space-md py-space-sm"><div className="px-space-sm py-space-xs font-label-caps text-label-caps uppercase text-[#8B958F] tracking-wider">Workspace</div></div><nav className="px-space-sm flex flex-col gap-1" data-active-classes="bg-[#EEF1EC] text-primary border-l-2 border-primary font-semibold"><Link aria-current="page" className="flex items-center gap-space-sm px-space-md py-2 transition-colors rounded-r bg-[#EEF1EC] text-primary border-l-2 border-primary font-semibold" data-path="dashboard" to="/"><span className="material-symbols-outlined text-[20px]">hub</span><span className="font-label-ui text-label-ui">Command Center</span></Link><Link className="flex items-center gap-space-sm px-space-md py-2 text-[#66736C] hover:bg-[#EEF1EC] hover:text-[#1D2923] transition-colors rounded-r" data-path="events" to="/events"><span className="material-symbols-outlined text-[20px]">event_available</span><span className="font-label-ui text-label-ui">Events</span></Link><Link className="flex items-center gap-space-sm px-space-md py-2 text-[#66736C] hover:bg-[#EEF1EC] hover:text-[#1D2923] transition-colors rounded-r" data-path="members" to="/members"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-label-ui text-label-ui">Members</span></Link><Link className="flex items-center gap-space-sm px-space-md py-2 text-[#66736C] hover:bg-[#EEF1EC] hover:text-[#1D2923] transition-colors rounded-r" data-path="projects" to="/projects"><span className="material-symbols-outlined text-[20px]">deployed_code</span><span className="font-label-ui text-label-ui">Projects</span></Link><Link className="flex items-center gap-space-sm px-space-md py-2 text-[#66736C] hover:bg-[#EEF1EC] hover:text-[#1D2923] transition-colors rounded-r" data-path="announcements" to="/announcements"><span className="material-symbols-outlined text-[20px]">campaign</span><span className="font-label-ui text-label-ui">Announcements</span></Link></nav><div className="my-space-md mx-space-md border-t border-[#DDE3DD]"></div><div className="px-space-md pb-space-xs"><div className="px-space-sm py-space-xs font-label-caps text-label-caps uppercase text-[#8B958F] tracking-wider">System</div></div><nav className="px-space-sm flex flex-col gap-1" data-active-classes="bg-[#EEF1EC] text-primary border-l-2 border-primary font-semibold"><Link className="flex items-center gap-space-sm px-space-md py-2 text-[#66736C] hover:bg-[#EEF1EC] hover:text-[#1D2923] transition-colors rounded-r" data-path="settings" to="/settings"><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-label-ui text-label-ui">Settings</span></Link></nav></div><div className="p-space-md border-t border-[#DDE3DD] bg-[#EEF1EC]/60"><div className="flex items-center justify-between gap-space-sm mb-space-sm"><div className="flex items-center gap-space-xs"><div className="w-6 h-6 rounded bg-primary/10 border border-primary/25 flex items-center justify-center"><span className="material-symbols-outlined text-primary text-[14px]">account_balance</span></div><div className="flex flex-col"><span className="font-label-code text-label-code uppercase tracking-tight text-[#1D2923] font-medium">GIT CLUB</span><span className="font-label-caps text-label-caps text-[#8B958F]">CHARUSAT UNIT</span></div></div><div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#DDE3DD] shadow-xs"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="font-label-caps text-label-caps text-primary uppercase font-medium">NODE ACTIVE</span></div></div></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-[#FFFFFF]/90 backdrop-blur-md z-40 border-b border-[#DDE3DD] flex items-center justify-between px-space-lg shadow-xs"><div className="flex items-center gap-space-sm"><span className="font-label-code text-label-code text-[#8B958F] uppercase tracking-wider font-semibold">COMMAND CENTER</span><span className="text-[#C9D2CA] text-[14px]">//</span><span className="font-label-code text-label-code text-primary uppercase tracking-wider font-semibold">OVERVIEW</span></div><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] text-[#66736C] focus-within:border-primary transition-colors"><span className="material-symbols-outlined text-[18px]">search</span><span className="font-label-ui text-label-ui text-[#8B958F] pr-space-md">Search node repository...</span><kbd className="px-1.5 py-0.5 rounded bg-[#FFFFFF] border border-[#DDE3DD] font-label-code text-label-caps text-[#8B958F] shadow-2xs">⌘K</kbd></div><button aria-label="Notifications" className="relative w-9 h-9 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] flex items-center justify-center text-[#66736C] hover:text-[#1D2923] hover:bg-[#E7ECE7] transition-colors"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary ring-2 ring-white"></span></button><button aria-label="Toggle Theme" className="px-space-sm py-1.5 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] flex items-center gap-1.5 text-primary hover:text-[#1D2923] hover:bg-[#E7ECE7] transition-colors font-label-caps text-label-caps font-semibold" id="theme-toggle" ><span className="material-symbols-outlined text-[16px] text-primary">light_mode</span><span className="uppercase text-[#1D2923]">Light</span></button><div className="flex items-center gap-space-sm pl-space-sm border-l border-[#DDE3DD]"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-xs"><span className="material-symbols-outlined text-white text-[18px]">person</span></div><div className="flex flex-col text-left"><div className="flex items-center gap-1"><span className="font-label-ui text-label-ui text-[#1D2923] leading-none font-semibold">Riddhi</span><span className="material-symbols-outlined text-[#8B958F] text-[14px]">arrow_drop_down</span></div><span className="font-label-caps text-label-caps text-primary leading-tight uppercase font-semibold">Admin</span></div></div></div></header><main className="w-full pt-16 bg-[#F6F7F3] min-h-screen"><div className="max-w-[1440px] mx-auto p-space-lg"><div className="flex flex-col w-full">
<div className="w-full space-y-space-xl">
<!-- Top Greeting & Operational Header -->
<section className="flex flex-col gap-space-md pt-2">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-sm mb-1">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF1EC] border border-[#DDE3DD] text-primary font-label-caps text-label-caps uppercase tracking-wider font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              All systems operational
            </span>
<span className="font-label-caps text-label-caps text-[#8B958F]">NODE // IN-GUJ-04</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-[#1D2923] tracking-tight font-bold">
            GOOD EVENING, RIDDHI 👋
          </h1>
<p className="font-body-md text-[#66736C] mt-0.5">
            Here's what's happening across Git Club CHARUSAT.
          </p>
</div>
<!-- Role Context Switcher -->
<div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] self-start lg:self-center shadow-xs">
<button className="role-pill-btn px-3 py-1.5 rounded font-label-caps text-label-caps uppercase transition-all bg-primary text-white font-semibold shadow-xs" data-role="admin" type="button">
            Admin
          </button>
<button className="role-pill-btn px-3 py-1.5 rounded font-label-caps text-label-caps uppercase text-[#66736C] hover:text-[#1D2923] hover:bg-[#FFFFFF] transition-all" data-role="event_lead" type="button">
            Event Lead
          </button>
<button className="role-pill-btn px-3 py-1.5 rounded font-label-caps text-label-caps uppercase text-[#66736C] hover:text-[#1D2923] hover:bg-[#FFFFFF] transition-all" data-role="project_lead" type="button">
            Project Lead
          </button>
<button className="role-pill-btn px-3 py-1.5 rounded font-label-caps text-label-caps uppercase text-[#66736C] hover:text-[#1D2923] hover:bg-[#FFFFFF] transition-all" data-role="member" type="button">
            Member
          </button>
</div>
</div>
<!-- Quick Action Buttons Array -->
<div className="flex flex-wrap items-center gap-space-sm pt-2">
<button className="group flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary text-white font-label-ui text-label-ui font-semibold shadow-card hover:bg-primary/90 active:scale-[0.98] transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Create Event</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] text-[#1D2923] hover:bg-[#EEF1EC] font-label-ui text-label-ui font-medium transition-colors shadow-subtle" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">person_add</span>
<span>Add Member</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] text-[#1D2923] hover:bg-[#EEF1EC] font-label-ui text-label-ui font-medium transition-colors shadow-subtle" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">post_add</span>
<span>Add Project</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] text-[#1D2923] hover:bg-[#EEF1EC] font-label-ui text-label-ui font-medium transition-colors shadow-subtle" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">campaign</span>
<span>Publish Announcement</span>
</button>
<div className="ml-auto hidden xl:flex items-center gap-3 font-label-code text-label-caps text-[#8B958F]">
<span>LATENCY: 14ms</span>
<span>•</span>
<span>SYNC: MASTER @ 9fd310a</span>
</div>
</div>
</section>
<!-- Technical Network Canvas / Active Cluster Widget -->
<section className="w-full relative rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] overflow-hidden shadow-card">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none"></div>
<div className="relative z-10 p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md border-b border-[#DDE3DD]/70">
<div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">DIGITAL CLUSTER TOPOLOGY</span>
</div>
<h2 className="font-headline-md text-headline-md text-[#1D2923] mt-1 font-bold">Git Club Core Network Graph</h2>
<p className="font-body-sm text-[#66736C] max-w-xl">
            Live telemetry of interconnected campus repositories, micro-teams, and synchronized event nodes across CHARUSAT.
          </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-2 font-label-caps text-label-caps text-[#1D2923] bg-[#EEF1EC] border border-[#DDE3DD] px-3 py-1.5 rounded-lg shadow-2xs font-medium">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Repositories (12)
          </div>
<div className="flex items-center gap-2 font-label-caps text-label-caps text-[#1D2923] bg-[#EEF1EC] border border-[#DDE3DD] px-3 py-1.5 rounded-lg shadow-2xs font-medium">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Events (6)
          </div>
<div className="flex items-center gap-2 font-label-caps text-label-caps text-[#1D2923] bg-[#EEF1EC] border border-[#DDE3DD] px-3 py-1.5 rounded-lg shadow-2xs font-medium">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span> Review Queue (4)
          </div>
</div>
</div>
<!-- Canvas Network Visualizer -->
<div className="relative w-full h-44 sm:h-52 bg-[#F6F7F3] cursor-crosshair">
<canvas className="w-full h-full block" id="gitNetworkCanvas"></canvas>
<div className="absolute bottom-2 left-4 font-label-code text-label-caps text-[#8B958F]">
          NODES ACTIVE: 38 // EDGES CONNECTED: 54 // PULSE FREQ: 0.85Hz
        </div>
<div className="absolute bottom-2 right-4 flex items-center gap-2 font-label-code text-label-caps text-primary font-semibold">
<span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping"></span>
          REALTIME GRAPH ENGINE
        </div>
</div>
</section>
<!-- Four Elegant Metric Telemetry Blocks -->
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
<!-- Metric 1: Members -->
<div className="group p-space-lg rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] hover:border-[#C9D2CA] hover:bg-[#EEF1EC]/40 transition-all shadow-card flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">TOTAL MEMBERS</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-headline-xl text-headline-xl font-bold text-[#1D2923] tracking-tight">248</span>
<span className="font-label-code text-label-code text-[#8B958F]">devs</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">groups</span>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps font-semibold">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span>
            +24 this month
          </span>
<!-- Mini SVG Sparkline -->
<svg className="w-20 h-6 text-primary" fill="none" viewBox="0 0 80 24">
<path d="M2 18 L16 16 L30 19 L44 11 L58 13 L72 4 L78 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<!-- Metric 2: Events -->
<div className="group p-space-lg rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] hover:border-[#C9D2CA] hover:bg-[#EEF1EC]/40 transition-all shadow-card flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">UPCOMING EVENTS</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-headline-xl text-headline-xl font-bold text-[#1D2923] tracking-tight">06</span>
<span className="font-label-code text-label-code text-[#8B958F]">sched</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-[#f8e6e1] border border-[#C87963]/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">event</span>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label-caps text-label-caps font-semibold">
<span className="material-symbols-outlined text-[13px]">add</span>
            +2 this week
          </span>
<svg className="w-20 h-6 text-secondary" fill="none" viewBox="0 0 80 24">
<path d="M2 20 L20 14 L36 17 L52 9 L66 11 L78 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<!-- Metric 3: Active Projects -->
<div className="group p-space-lg rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] hover:border-[#C9D2CA] hover:bg-[#EEF1EC]/40 transition-all shadow-card flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">ACTIVE PROJECTS</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-headline-xl text-headline-xl font-bold text-[#1D2923] tracking-tight">12</span>
<span className="font-label-code text-label-code text-[#8B958F]">repos</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-[#fcf5e5] border border-[#C9A85C]/35 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">deployed_code</span>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary/15 border border-tertiary/25 text-tertiary font-label-caps text-label-caps font-semibold">
<span className="material-symbols-outlined text-[13px]">arrow_upward</span>
            +3 this month
          </span>
<svg className="w-20 h-6 text-tertiary" fill="none" viewBox="0 0 80 24">
<path d="M2 19 L18 17 L34 11 L48 14 L62 8 L78 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<!-- Metric 4: Participants -->
<div className="group p-space-lg rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] hover:border-[#C9D2CA] hover:bg-[#EEF1EC]/40 transition-all shadow-card flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">EVENT PARTICIPANTS</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-headline-xl text-headline-xl font-bold text-[#1D2923] tracking-tight">684</span>
<span className="font-label-code text-label-code text-[#8B958F]">attendees</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[20px]">how_to_reg</span>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps font-semibold">
<span className="material-symbols-outlined text-[13px]">trending_up</span>
            +18% this month
          </span>
<svg className="w-20 h-6 text-primary" fill="none" viewBox="0 0 80 24">
<path d="M2 22 L14 16 L28 17 L44 9 L58 12 L70 5 L78 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</section>
<!-- Two-Column Asymmetric Dashboard Workspace -->
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<!-- ================= LEFT COLUMN (MAIN - 7/12) ================= -->
<div className="lg:col-span-7 space-y-space-lg">
<!-- CLUB ACTIVITY ANALYTICS BLOCK -->
<div className="rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] p-space-lg shadow-card">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm border-b border-[#DDE3DD]/60">
<div>
<div className="flex items-center gap-2">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-primary font-bold">TELEMETRY</span>
<span className="text-[#8B958F] text-xs">•</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F]">SYSTEM ENGAGEMENT</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-[#1D2923] mt-0.5 font-bold">CLUB ACTIVITY</h3>
</div>
<!-- Activity Tabs & Timeframe -->
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center p-0.5 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD]">
<button className="tab-activity-btn px-2.5 py-1 rounded text-primary bg-[#FFFFFF] font-label-caps text-label-caps uppercase font-semibold shadow-xs" data-tab="events" type="button">Events</button>
<button className="tab-activity-btn px-2.5 py-1 rounded text-[#66736C] hover:text-[#1D2923] font-label-caps text-label-caps uppercase" data-tab="members" type="button">Members</button>
<button className="tab-activity-btn px-2.5 py-1 rounded text-[#66736C] hover:text-[#1D2923] font-label-caps text-label-caps uppercase" data-tab="projects" type="button">Projects</button>
</div>
<div className="flex items-center p-0.5 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD]">
<button className="px-2 py-1 rounded font-label-code text-label-caps text-[#66736C] hover:text-[#1D2923]" type="button">3M</button>
<button className="px-2 py-1 rounded font-label-code text-label-caps bg-[#FFFFFF] text-primary font-semibold shadow-xs" type="button">6M</button>
<button className="px-2 py-1 rounded font-label-code text-label-caps text-[#66736C] hover:text-[#1D2923]" type="button">1Y</button>
</div>
</div>
</div>
<!-- Main SVG Participation Trend Graph -->
<div className="w-full pt-4">
<div className="flex items-baseline justify-between mb-2">
<div>
<span className="font-headline-md text-headline-md font-bold text-[#1D2923]">824</span>
<span className="font-body-sm text-[#66736C] ml-2">Total registrations across past 6 months</span>
</div>
<div className="flex items-center gap-4 font-label-caps text-label-caps text-[#8B958F] font-medium">
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary"></span> ACTUAL</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#8B958F]"></span> TARGET</span>
</div>
</div>
<!-- SVG Smooth Area Curve -->
<div className="w-full h-56 relative">
<svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 220">
<defs>
<linearGradient id="sageGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#5F806F" stopOpacity="0.22"></stop>
<stop offset="70%" stopColor="#5F806F" stopOpacity="0.04"></stop>
<stop offset="100%" stopColor="#5F806F" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<!-- Grid Guideline lines -->
<line className="text-[#DDE3DD]" opacity="0.9" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="40" y2="40"></line>
<line className="text-[#DDE3DD]" opacity="0.9" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="90" y2="90"></line>
<line className="text-[#DDE3DD]" opacity="0.9" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="140" y2="140"></line>
<line className="text-[#DDE3DD]" opacity="0.9" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="190" y2="190"></line>
<!-- Target Path -->
<path className="text-[#8B958F]/60" d="M 10 160 C 90 140, 160 150, 220 120 C 280 90, 360 110, 440 70 C 500 45, 550 50, 590 35" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2"></path>
<!-- Area Fill Under Sage Curve -->
<path d="M 10 170 C 90 155, 170 140, 230 115 C 290 85, 370 100, 450 60 C 510 30, 560 38, 590 20 L 590 200 L 10 200 Z" fill="url(#sageGrad)"></path>
<!-- Main Trend Line -->
<path d="M 10 170 C 90 155, 170 140, 230 115 C 290 85, 370 100, 450 60 C 510 30, 560 38, 590 20" fill="none" stroke="#5F806F" strokeLinecap="round" strokeWidth="3"></path>
<!-- Data Points -->
<circle className="fill-white stroke-primary" cx="10" cy="170" r="4" strokeWidth="2.5"></circle>
<circle className="fill-white stroke-primary" cx="120" cy="148" r="4" strokeWidth="2.5"></circle>
<circle className="fill-white stroke-primary" cx="230" cy="115" r="4" strokeWidth="2.5"></circle>
<circle className="fill-white stroke-primary" cx="340" cy="92" r="4" strokeWidth="2.5"></circle>
<circle className="fill-white stroke-primary" cx="450" cy="60" r="5" strokeWidth="3"></circle>
<circle className="fill-primary stroke-white" cx="590" cy="20" r="5" strokeWidth="2"></circle>
</svg>
</div>
<!-- X-Axis Months -->
<div className="flex justify-between items-center px-2 pt-2 font-label-code text-label-caps text-[#66736C]">
<span>MAY</span>
<span>JUN</span>
<span>JUL</span>
<span>AUG</span>
<span>SEP</span>
<span className="text-primary font-bold">OCT (NOW)</span>
</div>
</div>
<!-- Bottom Metric & Donut Breakdown Panel -->
<div className="mt-space-lg pt-space-md bg-[#EEF1EC] border border-[#DDE3DD] rounded-xl p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full md:w-auto">
<!-- SVG Donut Chart for Project Status -->
<div className="relative w-20 h-20 shrink-0">
<svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
<!-- Background Ring -->
<circle className="text-[#DDE3DD]" cx="18" cy="18" fill="none" r="14" stroke="currentColor" strokeWidth="4.5"></circle>
<!-- Segment 1: Active 7/12 (58%) Sage -->
<circle cx="18" cy="18" fill="none" r="14" stroke="#5F806F" strokeDasharray="51.3 88" strokeDashoffset="0" strokeWidth="4.5"></circle>
<!-- Segment 2: Completed 3/12 (25%) Gold -->
<circle cx="18" cy="18" fill="none" r="14" stroke="#C9A85C" strokeDasharray="22 88" strokeDashoffset="-51.3" strokeWidth="4.5"></circle>
<!-- Segment 3: In Dev 2/12 (17%) Coral -->
<circle cx="18" cy="18" fill="none" r="14" stroke="#C87963" strokeDasharray="14.7 88" strokeDashoffset="-73.3" strokeWidth="4.5"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-label-code text-label-code font-bold text-[#1D2923]">12</span>
<span className="font-label-caps text-[8px] uppercase text-[#8B958F] font-semibold">Total</span>
</div>
</div>
<!-- Donut Breakdown Details -->
<div className="flex flex-col gap-1 text-xs">
<div className="font-label-ui font-semibold text-[#1D2923]">Project Pipeline Status</div>
<div className="flex items-center gap-3 font-label-code text-label-caps">
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-primary"></span> 7 Active</span>
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-tertiary"></span> 3 Completed</span>
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-secondary"></span> 2 In Dev</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto justify-end">
<div className="text-right">
<div className="font-label-caps text-label-caps uppercase text-[#8B958F] font-semibold">Git Commits (Past 30d)</div>
<div className="font-label-code text-label-code font-bold text-primary">1,482 commits</div>
</div>
<div className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] flex items-center justify-center text-primary shadow-xs">
<span className="material-symbols-outlined text-[18px]">commit</span>
</div>
</div>
</div>
</div>
<!-- UPCOMING EVENTS SHOWCASE -->
<div className="rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] p-space-lg shadow-card">
<div className="flex items-center justify-between pb-space-md border-b border-[#DDE3DD]/60">
<div>
<div className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">CALENDAR QUEUE</div>
<h3 className="font-headline-sm text-headline-sm text-[#1D2923] font-bold">UPCOMING EVENTS</h3>
</div>
<Link className="group inline-flex items-center gap-1 text-primary hover:text-primary/80 font-label-ui text-label-ui font-semibold transition-colors" to="/">
<span>View all</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</Link>
</div>
<!-- Cards Stack -->
<div className="space-y-space-md pt-space-md">
<!-- Event Card 1 -->
<div className="p-space-md rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] flex flex-col items-center justify-center shrink-0 shadow-xs">
<span className="font-label-caps text-[9px] uppercase text-primary font-bold">OCT</span>
<span className="font-headline-sm text-headline-sm text-[#1D2923] font-bold leading-none">03</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-caps text-label-caps uppercase bg-primary/10 border border-primary/25 text-primary font-semibold">Workshop</span>
<span className="font-label-code text-label-caps text-[#66736C]">4:00 PM IST</span>
<span className="font-label-code text-label-caps text-[#8B958F]">• CSPIT Lab 2</span>
</div>
<h4 className="font-headline-sm text-base font-bold text-[#1D2923] mt-1">GIT &amp; GITHUB WORKSHOP</h4>
<div className="flex items-center gap-3 mt-2 text-xs text-[#66736C] font-body-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[#8B958F]">person</span> 86 / 100 registered</span>
<span className="w-24 h-1.5 rounded-full bg-[#DDE3DD] overflow-hidden">
<span className="block h-full bg-primary rounded-full" style={{"width":"86%"}}></span>
</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<button className="px-3 py-1.5 rounded-lg bg-primary text-white font-label-ui text-label-ui font-semibold hover:bg-primary/90 transition-opacity shadow-xs" type="button">
                  View Event →
                </button>
</div>
</div>
<!-- Event Card 2 -->
<div className="p-space-md rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] flex flex-col items-center justify-center shrink-0 shadow-xs">
<span className="font-label-caps text-[9px] uppercase text-secondary font-bold">OCT</span>
<span className="font-headline-sm text-headline-sm text-[#1D2923] font-bold leading-none">12</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-caps text-label-caps uppercase bg-secondary/15 border border-secondary/30 text-secondary font-semibold">Competition</span>
<span className="font-label-code text-label-caps text-[#66736C]">10:00 AM IST</span>
<span className="font-label-code text-label-caps text-[#8B958F]">• CSPIT Auditorium</span>
</div>
<h4 className="font-headline-sm text-base font-bold text-[#1D2923] mt-1">HACKATHON 2.0: CODE SPRINT</h4>
<div className="flex items-center gap-3 mt-2 text-xs text-[#66736C] font-body-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[#8B958F]">person</span> 92 / 100 registered</span>
<span className="w-24 h-1.5 rounded-full bg-[#DDE3DD] overflow-hidden">
<span className="block h-full bg-secondary rounded-full" style={{"width":"92%"}}></span>
</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<button className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] text-[#1D2923] hover:bg-[#E7ECE7] font-label-ui text-label-ui font-medium transition-colors shadow-xs" type="button">
                  Details →
                </button>
</div>
</div>
<!-- Event Card 3 -->
<div className="p-space-md rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] flex flex-col items-center justify-center shrink-0 shadow-xs">
<span className="font-label-caps text-[9px] uppercase text-tertiary font-bold">OCT</span>
<span className="font-headline-sm text-headline-sm text-[#1D2923] font-bold leading-none">18</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-caps text-label-caps uppercase bg-tertiary/15 border border-tertiary/30 text-[#85651a] font-semibold">Community</span>
<span className="font-label-code text-label-caps text-[#66736C]">3:00 PM IST</span>
<span className="font-label-code text-label-caps text-[#8B958F]">• Virtual Meet</span>
</div>
<h4 className="font-headline-sm text-base font-bold text-[#1D2923] mt-1">AI/ML COMMUNITY SESSION: TRANSFORMERS DECODED</h4>
<div className="flex items-center gap-3 mt-2 text-xs text-[#66736C] font-body-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[#8B958F]">person</span> 44 registered</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center">
<button className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#DDE3DD] text-[#1D2923] hover:bg-[#E7ECE7] font-label-ui text-label-ui font-medium transition-colors shadow-xs" type="button">
                  Details →
                </button>
</div>
</div>
</div>
</div>
</div>
<!-- ================= RIGHT COLUMN (SIDEBAR - 5/12) ================= -->
<div className="lg:col-span-5 space-y-space-lg">
<!-- NEEDS ATTENTION ACTION QUEUE -->
<div className="rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] p-space-lg shadow-card">
<div className="flex items-center justify-between pb-space-sm border-b border-[#DDE3DD]/60">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">notifications_active</span>
<h3 className="font-headline-sm text-headline-sm text-[#1D2923] font-bold">NEEDS ATTENTION</h3>
</div>
<span className="px-2 py-0.5 rounded-full font-label-caps text-label-caps uppercase bg-secondary/15 text-secondary border border-secondary/30 font-bold">
              4 PENDING
            </span>
</div>
<!-- Action Items List -->
<div className="divide-y divide-transparent space-y-2 mt-3">
<!-- Item 1: Urgent Hackathon closing -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] flex items-start justify-between gap-space-sm transition-colors">
<div className="flex items-start gap-2.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-1.5 animate-pulse"></span>
<div>
<p className="font-body-sm text-[#1D2923] font-semibold leading-snug">Hackathon 2.0 registration closes tomorrow</p>
<p className="font-label-code text-label-caps text-[#8B958F] mt-0.5">Capacity: 92/100 seats confirmed</p>
</div>
</div>
<button className="shrink-0 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-secondary/30 hover:bg-secondary text-secondary hover:text-white font-label-caps text-label-caps uppercase font-semibold transition-colors shadow-2xs" type="button">
                Review →
              </button>
</div>
<!-- Item 2: Member Applications -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] flex items-start justify-between gap-space-sm transition-colors">
<div className="flex items-start gap-2.5">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary shrink-0 mt-1.5"></span>
<div>
<p className="font-body-sm text-[#1D2923] font-semibold leading-snug">8 member applications waiting for review</p>
<p className="font-label-code text-label-caps text-[#8B958F] mt-0.5">Campus Cohort 2024–2025</p>
</div>
</div>
<button className="shrink-0 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-tertiary/30 hover:bg-tertiary text-[#85651a] hover:text-white font-label-caps text-label-caps uppercase font-semibold transition-colors shadow-2xs" type="button">
                Review →
              </button>
</div>
<!-- Item 3: Stale Projects -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] flex items-start justify-between gap-space-sm transition-colors">
<div className="flex items-start gap-2.5">
<span className="w-2.5 h-2.5 rounded-full bg-[#8B958F] shrink-0 mt-1.5"></span>
<div>
<p className="font-body-sm text-[#1D2923] font-semibold leading-snug">2 projects haven't been updated this week</p>
<p className="font-label-code text-label-caps text-[#8B958F] mt-0.5">dev-nexus, smart-parking</p>
</div>
</div>
<button className="shrink-0 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#DDE3DD] hover:bg-[#E7ECE7] text-[#66736C] hover:text-[#1D2923] font-label-caps text-label-caps uppercase font-semibold transition-colors shadow-2xs" type="button">
                Review →
              </button>
</div>
<!-- Item 4: Workshop Announcement -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] flex items-start justify-between gap-space-sm transition-colors">
<div className="flex items-start gap-2.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-1.5"></span>
<div>
<p className="font-body-sm text-[#1D2923] font-semibold leading-snug">Upcoming workshop needs announcement</p>
<p className="font-label-code text-label-caps text-[#8B958F] mt-0.5">Target: Discord &amp; Campus Portal</p>
</div>
</div>
<button className="shrink-0 px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-primary/30 hover:bg-primary text-primary hover:text-white font-label-caps text-label-caps uppercase font-semibold transition-colors shadow-2xs" type="button">
                Publish →
              </button>
</div>
</div>
</div>
<!-- MEMBER OVERVIEW DEMOGRAPHICS -->
<div className="rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] p-space-lg shadow-card">
<div className="flex items-center justify-between pb-space-sm border-b border-[#DDE3DD]/60">
<div>
<div className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">DEMOGRAPHICS</div>
<h3 className="font-headline-sm text-headline-sm text-[#1D2923] font-bold">MEMBER OVERVIEW</h3>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm font-bold text-[#1D2923]">248</span>
<span className="block font-label-caps text-label-caps text-primary uppercase font-semibold">+24 this month</span>
</div>
</div>
<!-- Stacked Demographics Bar -->
<div className="w-full h-2 rounded-full bg-[#EEF1EC] border border-[#DDE3DD] overflow-hidden flex my-4">
<div className="bg-primary h-full" style={{"width":"57.2%"}} title="CSE: 142"></div>
<div className="bg-tertiary h-full" style={{"width":"24.6%"}} title="IT: 61"></div>
<div className="bg-secondary h-full" style={{"width":"11.3%"}} title="CE: 28"></div>
<div className="bg-[#8B958F] h-full" style={{"width":"6.9%"}} title="Other: 17"></div>
</div>
<!-- Department Horizontal Bars Breakdown -->
<div className="space-y-3 font-body-sm">
<div>
<div className="flex justify-between items-center text-xs font-label-ui mb-1">
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-primary"></span> Computer Science (CSE)</span>
<span className="font-label-code text-[#1D2923] font-semibold">142 <span className="text-[#8B958F] text-[11px]">(57%)</span></span>
</div>
<div className="w-full h-1.5 bg-[#EEF1EC] rounded-full overflow-hidden border border-[#DDE3DD]/50">
<div className="h-full bg-primary rounded-full" style={{"width":"57%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center text-xs font-label-ui mb-1">
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Information Technology (IT)</span>
<span className="font-label-code text-[#1D2923] font-semibold">61 <span className="text-[#8B958F] text-[11px]">(25%)</span></span>
</div>
<div className="w-full h-1.5 bg-[#EEF1EC] rounded-full overflow-hidden border border-[#DDE3DD]/50">
<div className="h-full bg-tertiary rounded-full" style={{"width":"25%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center text-xs font-label-ui mb-1">
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-secondary"></span> Computer Engineering (CE)</span>
<span className="font-label-code text-[#1D2923] font-semibold">28 <span className="text-[#8B958F] text-[11px]">(11%)</span></span>
</div>
<div className="w-full h-1.5 bg-[#EEF1EC] rounded-full overflow-hidden border border-[#DDE3DD]/50">
<div className="h-full bg-secondary rounded-full" style={{"width":"11%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center text-xs font-label-ui mb-1">
<span className="flex items-center gap-1.5 text-[#1D2923] font-medium"><span className="w-2 h-2 rounded-full bg-[#8B958F]"></span> Other Specializations</span>
<span className="font-label-code text-[#1D2923] font-semibold">17 <span className="text-[#8B958F] text-[11px]">(7%)</span></span>
</div>
<div className="w-full h-1.5 bg-[#EEF1EC] rounded-full overflow-hidden border border-[#DDE3DD]/50">
<div className="h-full bg-[#8B958F] rounded-full" style={{"width":"7%"}}></div>
</div>
</div>
</div>
</div>
<!-- PROJECT ACTIVITY STREAM -->
<div className="rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] p-space-lg shadow-card">
<div className="flex items-center justify-between pb-space-sm border-b border-[#DDE3DD]/60">
<div>
<div className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">REPOSITORIES</div>
<h3 className="font-headline-sm text-headline-sm text-[#1D2923] font-bold">PROJECT ACTIVITY</h3>
</div>
<span className="font-label-code text-label-caps text-[#8B958F] font-semibold">3 HIGHLIGHTED</span>
</div>
<div className="space-y-space-sm mt-3">
<!-- Project 1 -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-sm font-bold text-[#1D2923]">HomeVault</span>
<span className="px-2 py-0.5 rounded font-label-caps text-label-caps uppercase bg-primary/10 text-primary border border-primary/20 font-semibold">Active</span>
</div>
<p className="font-label-code text-[11px] text-[#66736C] mt-0.5">React • Node.js • PostgreSQL</p>
<div className="flex items-center justify-between gap-2 mt-2">
<div className="w-full h-1.5 bg-[#DDE3DD] rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"78%"}}></div>
</div>
<span className="font-label-code text-label-caps text-[#66736C] font-semibold">78%</span>
</div>
</div>
<!-- Project 2 -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-sm font-bold text-[#1D2923]">GitLearn</span>
<span className="px-2 py-0.5 rounded font-label-caps text-label-caps uppercase bg-secondary/15 text-secondary border border-secondary/30 font-semibold">In Dev</span>
</div>
<p className="font-label-code text-[11px] text-[#66736C] mt-0.5">Next.js • WASM • Monaco Editor</p>
<div className="flex items-center justify-between gap-2 mt-2">
<div className="w-full h-1.5 bg-[#DDE3DD] rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"62%"}}></div>
</div>
<span className="font-label-code text-label-caps text-[#66736C] font-semibold">62%</span>
</div>
</div>
<!-- Project 3 -->
<div className="p-3 rounded-lg bg-[#EEF1EC] border border-[#DDE3DD] hover:bg-[#E7ECE7] transition-colors">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-sm font-bold text-[#1D2923]">CampusConnect</span>
<span className="px-2 py-0.5 rounded font-label-caps text-label-caps uppercase bg-tertiary/15 text-[#85651a] border border-tertiary/30 font-semibold">Completed</span>
</div>
<p className="font-label-code text-[11px] text-[#66736C] mt-0.5">Flutter • Go • gRPC</p>
<div className="flex items-center justify-between gap-2 mt-2">
<div className="w-full h-1.5 bg-[#DDE3DD] rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style={{"width":"100%"}}></div>
</div>
<span className="font-label-code text-label-caps text-[#66736C] font-semibold">100%</span>
</div>
</div>
</div>
</div>
<!-- RECENT ACTIVITY TIMELINE -->
<div className="rounded-xl bg-[#FFFFFF] border border-[#DDE3DD] p-space-lg shadow-card">
<div className="flex items-center justify-between pb-space-sm border-b border-[#DDE3DD]/60">
<div>
<div className="font-label-caps text-label-caps uppercase tracking-wider text-[#8B958F] font-semibold">AUDIT LOG</div>
<h3 className="font-headline-sm text-headline-sm text-[#1D2923] font-bold">RECENT ACTIVITY</h3>
</div>
<span className="material-symbols-outlined text-[#8B958F] text-[18px]">history</span>
</div>
<div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#DDE3DD] mt-4">
<!-- Timeline Item 1 -->
<div className="relative">
<div className="absolute -left-[1.625rem] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
<div className="flex items-baseline justify-between">
<p className="font-body-sm text-[#1D2923] font-semibold">Riya joined Git Club</p>
<span className="font-label-code text-[11px] text-[#8B958F]">4m ago</span>
</div>
<p className="font-label-caps text-label-caps text-[#66736C]">Member onboarding verified</p>
</div>
<!-- Timeline Item 2 -->
<div className="relative">
<div className="absolute -left-[1.625rem] top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-white"></div>
<div className="flex items-baseline justify-between">
<p className="font-body-sm text-[#1D2923] font-semibold">Web Workshop hit 80 RSVPs</p>
<span className="font-label-code text-[11px] text-[#8B958F]">25m ago</span>
</div>
<p className="font-label-caps text-label-caps text-[#66736C]">80% threshold trigger reached</p>
</div>
<!-- Timeline Item 3 -->
<div className="relative">
<div className="absolute -left-[1.625rem] top-1 w-2.5 h-2.5 rounded-full bg-tertiary ring-4 ring-white"></div>
<div className="flex items-baseline justify-between">
<p className="font-body-sm text-[#1D2923] font-semibold">Team Alpha updated HomeVault</p>
<span className="font-label-code text-[11px] text-[#8B958F]">1h ago</span>
</div>
<p className="font-label-caps text-label-caps text-[#66736C]">Pushed 4 commits to feature/auth</p>
</div>
<!-- Timeline Item 4 -->
<div className="relative">
<div className="absolute -left-[1.625rem] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
<div className="flex items-baseline justify-between">
<p className="font-body-sm text-[#1D2923] font-semibold">Hackathon 2.0 was published</p>
<span className="font-label-code text-[11px] text-[#8B958F]">3h ago</span>
</div>
<p className="font-label-caps text-label-caps text-[#66736C]">Announcement deployed to campus portal</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></main></div>
    </>
  );
}
