import React from 'react';

export default function Dashboard() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-40 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest"><img alt="gitclub logo.png" className="h-8 w-auto object-contain" src="/gitclub-logo.png"/><div className="flex flex-col min-w-0"><span className="font-title-md text-title-md text-on-surface tracking-tight truncate">Git Club</span><span className="font-label-mono-sm text-label-mono-sm text-primary tracking-wide uppercase truncate">CHARUSAT HQ</span></div></div><div className="px-space-md py-space-sm"><div className="px-space-sm py-space-xs rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-outline flex items-center justify-between"><span>// BRANCH: main</span><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span></div></div><nav className="flex-1 px-space-sm space-y-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-title-md"><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary-container font-title-md" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px]">terminal</span><span className="font-body-md text-body-md font-medium">Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="events" href="#"><span className="material-symbols-outlined text-[20px]">event</span><span className="font-body-md text-body-md font-medium">Events</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="members" href="#"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-body-md text-body-md font-medium">Members</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px]">account_tree</span><span className="font-body-md text-body-md font-medium">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="announcements" href="#"><span className="material-symbols-outlined text-[20px]">campaign</span><span className="font-body-md text-body-md font-medium">Announcements</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics" href="#"><span className="material-symbols-outlined text-[20px]">insights</span><span className="font-body-md text-body-md font-medium">Analytics</span></a><div className="my-space-sm pt-space-xs"><div className="h-[1px] bg-surface-container-highest mx-space-xs"></div></div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="notifications" href="#"><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="font-body-md text-body-md font-medium">Notifications</span></div><span className="px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm">4</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-body-md text-body-md font-medium">Settings</span></a></nav></div><div className="p-space-sm bg-surface-container-lowest"><div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between"><div className="flex flex-col min-w-0"><span className="font-label-mono-sm text-label-mono-sm text-outline truncate">#GrowWith git</span><span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Build. Collab. Ship.</span></div><span className="material-symbols-outlined text-primary text-[18px]">commit</span></div></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl z-30 flex items-center justify-between px-gutter shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline"><span className="text-on-surface-variant">charusat</span><span>/</span><span className="text-primary font-medium">git-club-ops</span></div><button className="flex items-center gap-space-sm px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"><span className="material-symbols-outlined text-[16px]">search</span><span className="font-body-sm text-body-sm">Search or type command...</span><kbd className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-mono-sm text-[10px]">⌘K</kbd></button></div><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant"><span className="material-symbols-outlined text-[16px] text-secondary">shield_person</span><select className="bg-transparent text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none cursor-pointer"><option className="bg-surface-container-low text-on-surface" selected="">Role: Admin</option><option className="bg-surface-container-low text-on-surface">Role: Event Lead</option><option className="bg-surface-container-low text-on-surface">Role: Project Lead</option><option className="bg-surface-container-low text-on-surface">Role: Member</option></select></div><button className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Theme toggle"><span className="material-symbols-outlined text-[20px]">dark_mode</span></button><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Notifications"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="text-right hidden sm:block min-w-0"><div className="font-title-md text-body-sm text-on-surface font-semibold truncate leading-tight">Riddhi Thummar</div><div className="font-label-mono-sm text-label-mono-sm text-outline truncate leading-tight">Admin &amp; Tech Lead</div></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida/AEtjO1UrVJz7fo8AVpiImVFIAHDJwXkDVlSXn93D0d3A5ZTuVhLgBX69N5xXk78QmOy3xKkOuntLtHYFrvIpP6XdRFW7R9CNwFcN0DtZPPqUfKP6kPA8Y8tWGgGwdy3KhGt8XLX7pX374qfC3qo8PjxzS5EvEIRwJoPI5wwvXZzQnmybI32lpOTU5zt6jXd-LJUvgLrCg-2v-NrHB3RcGO5OsvtVhyw8r4cpfSUPaVYpVV9Y8dSUSDf6ZH5b6xM"/></div></div></header><main className="relative pt-16 w-full min-h-screen pb-24 bg-background px-gutter"><div className="max-w-7xl mx-auto py-space-lg"><div className="flex flex-col w-full space-y-space-xl">

<section className="relative rounded-xl overflow-hidden bg-surface-container-low shadow-xl p-space-lg md:p-space-xl">

<div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 right-12 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">

<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-primary font-label-mono-sm text-label-mono-sm tracking-wider uppercase">
            GIT CLUB • CHARUSAT
          </span>
<div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container text-tertiary font-label-mono-sm text-label-mono-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
<span>• ALL SYSTEMS OPERATIONAL • Updated just now</span>
</div>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-none">
          Your community, <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">in motion.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Everything happening across Git Club — events, members, projects and activity, all in one place. Engineered for makers at CHARUSAT.
        </p>
<div className="pt-space-sm flex flex-wrap items-center gap-space-md">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-gradient-to-b from-primary to-primary-container text-on-primary-container font-title-md text-title-md shadow-md hover:brightness-110 active:translate-y-0.5 transition-all" onClick={() => { toggleModal('modal-event') }}>
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span>+ Create Event</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface font-title-md text-body-md hover:bg-surface-bright transition-all" onClick={() => { document.getElementById('activity-telemetry').scrollIntoView({behavior: 'smooth'}) }}>
<span className="material-symbols-outlined text-[18px]">terminal</span>
<span>Explore Activity</span>
</button>
<span className="font-label-mono-sm text-label-mono-sm text-outline hidden sm:inline-block">
            // HEAD: <span className="text-primary font-medium">origin/main</span>
</span>
</div>
</div>

<div className="lg:col-span-5 flex justify-center items-center py-space-md lg:py-0">
<div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_60s_linear_infinite]" viewBox="0 0 320 320">
<circle cx="160" cy="160" fill="none" opacity="0.25" r="140" stroke="#ab8981" strokeDasharray="4 6" strokeWidth="1" /></circle>
<circle cx="160" cy="160" fill="none" opacity="0.35" r="110" stroke="#fd5832" strokeDasharray="2 12" strokeWidth="1.5" /></circle>
</svg>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
<path d="M 160 50 L 160 160 L 270 160" fill="none" opacity="0.3" stroke="#ab8981" strokeWidth="2" /></path>
<path d="M 160 160 L 50 160 L 50 260" fill="none" opacity="0.45" stroke="#fd5832" strokeWidth="2" /></path>
<path d="M 160 160 L 250 250" fill="none" opacity="0.5" stroke="#9ad4a4" strokeDasharray="3 3" strokeWidth="2" /></path>
</svg>

<div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-transparent border border-primary-container/30 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(253,88,50,0.35)] flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
<div className="w-full h-full rounded-full bg-transparent p-4 flex items-center justify-center overflow-hidden">
<img alt="Git Club Emblem Logo" className="w-full h-full object-contain filter drop-shadow" src="/git-logo.png"/>
</div>
</div>


<div className="absolute top-2 left-1/2 -translate-x-1/2 px-space-sm py-1 rounded-full bg-surface-container-highest shadow-md flex items-center gap-1.5 z-30">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold">MEMBERS: 248</span>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 px-space-sm py-1 rounded-full bg-surface-container-highest shadow-md flex items-center gap-1.5 z-30">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold">EVENTS: 06</span>
</div>

<div className="absolute bottom-2 left-4 px-space-sm py-1 rounded-full bg-surface-container-highest shadow-md flex items-center gap-1.5 z-30">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold">PROJECTS: 12</span>
</div>

<div className="absolute bottom-4 right-4 px-space-sm py-1 rounded-full bg-surface-container-highest shadow-md flex items-center gap-1.5 z-30">
<span className="material-symbols-outlined text-primary text-[14px]">commit</span>
<span className="font-label-mono-sm text-label-mono-sm text-on-surface font-semibold">SYNCED</span>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="relative p-space-md rounded-xl bg-surface-container-low shadow-lg hover:shadow-xl transition-all group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase tracking-wider">// COMMITTED_PEERS</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">group</span>
</div>
</div>
<div className="mt-space-sm">
<div className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">248</div>
<div className="font-title-md text-title-md text-on-surface-variant font-medium mt-0.5">Club Members</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<span className="flex items-center text-tertiary font-label-mono-sm text-label-mono-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
          +12 this month
        </span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">• Active Cohort</span>
</div>
</div>

<div className="relative p-space-md rounded-xl bg-surface-container-low shadow-lg hover:shadow-xl transition-all group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase tracking-wider">// SCHEDULED_HOOKS</span>
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
</div>
</div>
<div className="mt-space-sm">
<div className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">06</div>
<div className="font-title-md text-title-md text-on-surface-variant font-medium mt-0.5">Upcoming Events</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<span className="font-label-mono-sm text-label-mono-sm text-primary font-medium truncate max-w-[200px]">
          Next: Git &amp; GitHub Workshop
        </span>
</div>
</div>

<div className="relative p-space-md rounded-xl bg-surface-container-low shadow-lg hover:shadow-xl transition-all group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase tracking-wider">// REPOSITORIES</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
</div>
</div>
<div className="mt-space-sm">
<div className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">12</div>
<div className="font-title-md text-title-md text-on-surface-variant font-medium mt-0.5">Active Projects</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<span className="flex items-center text-secondary font-label-mono-sm text-label-mono-sm">
<span className="material-symbols-outlined text-[16px]">sync</span>
          3 updated this week
        </span>
</div>
</div>

<div className="relative p-space-md rounded-xl bg-surface-container-low shadow-lg hover:shadow-xl transition-all group overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
<div className="flex items-center justify-between">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase tracking-wider">// COMMUNITY_REACH</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[18px]">groups_2</span>
</div>
</div>
<div className="mt-space-sm">
<div className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">684</div>
<div className="font-title-md text-title-md text-on-surface-variant font-medium mt-0.5">Event Participants</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-space-xs">
<span className="flex items-center text-tertiary font-label-mono-sm text-label-mono-sm">
<span className="material-symbols-outlined text-[16px]">north_east</span>
          +18% this month
        </span>
</div>
</div>
</section>

<section className="flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">warning</span>
<h2 className="font-title-md text-title-md text-on-surface">Needs Immediate Attention</h2>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">// ACTION_REQUIRED: 04 TASKS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-sm">

<div className="p-space-md rounded-lg bg-surface-container shadow-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-mono-sm text-label-mono-sm uppercase font-semibold">
              URGENT • CLOSES TOMORROW
            </span>
<span className="material-symbols-outlined text-error text-[18px]">hourglass_top</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold pt-1">Hackathon 2.0 Registration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">92 of 100 maximum seats reserved. 8 spots pending final confirmation.</p>
</div>
<button className="mt-space-md text-left font-label-mono-sm text-label-mono-sm text-primary hover:text-primary-fixed flex items-center gap-1 group">
<span>View Event</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-mono-sm text-label-mono-sm uppercase font-semibold">
              REVIEW INTAKE
            </span>
<span className="material-symbols-outlined text-secondary text-[18px]">how_to_reg</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold pt-1">8 Member Applications</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sophomore developers from CSE &amp; IT awaiting team onboard review.</p>
</div>
<button className="mt-space-md text-left font-label-mono-sm text-label-mono-sm text-primary hover:text-primary-fixed flex items-center gap-1 group">
<span>Review Members</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-outline font-label-mono-sm text-label-mono-sm uppercase font-semibold">
              STALE REPOS
            </span>
<span className="material-symbols-outlined text-outline text-[18px]">inventory_2</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold pt-1">2 Stalled Repositories</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">No commits recorded in CampusConnect &amp; LabSync over 14 days.</p>
</div>
<button className="mt-space-md text-left font-label-mono-sm text-label-mono-sm text-primary hover:text-primary-fixed flex items-center gap-1 group">
<span>Review Projects</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-mono-sm text-label-mono-sm uppercase font-semibold">
              STAGED DRAFT
            </span>
<span className="material-symbols-outlined text-tertiary text-[18px]">send</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold pt-1">Workshop Announcement</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Release notes and Slack schedule prepared by Riddhi. Ready to dispatch.</p>
</div>
<button className="mt-space-md text-left font-label-mono-sm text-label-mono-sm text-tertiary hover:text-tertiary-fixed flex items-center gap-1 group">
<span>Publish Broadcast</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">send</span>
</button>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg" id="activity-telemetry">

<div className="lg:col-span-8 flex flex-col space-y-space-md p-space-md lg:p-space-lg rounded-xl bg-surface-container-low shadow-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<div className="font-label-mono-sm text-label-mono-sm text-outline">// COMMITS • VELOCITY • PARTICIPATION</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Club Activity Stream</h2>
</div>
<div className="flex flex-wrap items-center gap-space-xs">

<div className="flex rounded-lg bg-surface-container p-0.5" id="chart-tabs">
<button className="chart-tab-btn active px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { setChartMode('events') }}>Events</button>
<button className="chart-tab-btn px-3 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { setChartMode('members') }}>Members</button>
<button className="chart-tab-btn px-3 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { setChartMode('projects') }}>Projects</button>
</div>

<select className="px-space-sm py-1 rounded bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none cursor-pointer">
<option>3 Months</option>
<option selected="">6 Months</option>
<option>This Year</option>
</select>
</div>
</div>

<div className="relative w-full h-64 sm:h-72 bg-surface-container-lowest rounded-lg p-space-sm flex flex-col justify-end overflow-hidden group">

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
<defs>
<lineargradient id="gitCurveGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#fd5832" stopOpacity="0.38"></stop>
<stop offset="100%" stopColor="#fd5832" stopOpacity="0.0"></stop>
</lineargradient>
<pattern height="40" id="gridPattern" patternUnits="userSpaceOnUse" width="60">
<path d="M 60 0 L 0 0 0 40" fill="none" stroke="#353534" strokeDasharray="2 4" strokeWidth="0.75" /></path>
</pattern>
</defs>
<rect fill="url(#gridPattern)" height="100%" width="100%" /></rect>

<polygon fill="url(#gitCurveGrad)" id="chart-area" points="40,240 40,190 120,160 200,180 280,110 360,130 440,70 520,85 600,45 680,60 760,20 760,240" /></polygon>

<polyline fill="none" id="chart-line" points="40,190 120,160 200,180 280,110 360,130 440,70 520,85 600,45 680,60 760,20" stroke="#fd5832" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /></polyline>

<circle cx="760" cy="20" fill="#fd5832" r="5" stroke="#fff" strokeWidth="2" /></circle>
<circle cx="600" cy="45" fill="#f5bd58" r="4" /></circle>
<circle cx="440" cy="70" fill="#fd5832" r="4" /></circle>
</svg>

<div className="absolute top-6 right-8 px-space-sm py-1 rounded bg-surface-container-high/90 backdrop-blur shadow-md flex items-center gap-space-xs pointer-events-none">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-mono-sm text-label-mono-sm text-on-surface">Peak Activity: <strong className="text-primary">142 actions</strong> (Oct 2024)</span>
</div>

<div className="relative z-10 flex justify-between px-space-md pt-space-xs text-outline font-label-mono-sm text-label-mono-sm">
<span>MAY</span>
<span>JUN</span>
<span>JUL</span>
<span>AUG</span>
<span>SEP</span>
<span className="text-primary font-bold">OCT (CURRENT)</span>
</div>
</div>

<div className="grid grid-cols-3 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded bg-surface-container flex flex-col">
<span className="font-label-mono-sm text-label-mono-sm text-outline">PULL REQUESTS</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">48 Merged</span>
<span className="font-label-mono-sm text-label-mono-sm text-tertiary">98.4% success rate</span>
</div>
<div className="p-space-sm rounded bg-surface-container flex flex-col">
<span className="font-label-mono-sm text-label-mono-sm text-outline">COMMITS LOGGED</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">1,248 Pushes</span>
<span className="font-label-mono-sm text-label-mono-sm text-primary">+24% vs last term</span>
</div>
<div className="p-space-sm rounded bg-surface-container flex flex-col">
<span className="font-label-mono-sm text-label-mono-sm text-outline">CAMPUS CHAPTER</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">CHARUSAT HQ</span>
<span className="font-label-mono-sm text-label-mono-sm text-secondary">Tier 1 Chapter</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col space-y-space-md p-space-md lg:p-space-lg rounded-xl bg-surface-container-low shadow-lg">
<div className="flex items-center justify-between">
<div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">// CALENDAR_QUEUE</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">What's Next</h2>
</div>
<button className="p-1 rounded text-primary hover:bg-surface-container-high transition-colors" onClick={() => { toggleModal('modal-event') }} title="Create New Event">
<span className="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
<div className="space-y-space-md flex-1">

<div className="p-space-md rounded-lg bg-surface-container shadow hover:bg-surface-container-high transition-all flex flex-col space-y-space-xs relative overflow-hidden group">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm font-bold">
              03 OCT
            </span>
<span className="font-label-mono-sm text-label-mono-sm text-secondary">4:00 PM IST</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
            Git &amp; GitHub Workshop
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Learn Git workflows, branching, merge conflict resolution and upstream collaboration.
          </p>
<div className="pt-space-xs flex flex-wrap items-center gap-space-xs text-outline font-label-mono-sm text-label-mono-sm">
<span>WORKSHOP</span>
<span>•</span>
<span>AUDITORIUM</span>
<span>•</span>
<span className="text-tertiary font-semibold">120/150 participants</span>
</div>

<div className="w-full h-1.5 rounded-full bg-surface-container-lowest mt-1 overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"80%"}}></div>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow hover:bg-surface-container-high transition-all flex flex-col space-y-space-xs relative overflow-hidden group">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm font-bold">
              12 OCT
            </span>
<span className="font-label-mono-sm text-label-mono-sm text-error">CLOSING SOON</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
            Hackathon 2.0
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Build. Break. Ship. 36-hour overnight product hackathon for CHARUSAT engineering teams.
          </p>
<div className="pt-space-xs flex flex-wrap items-center gap-space-xs text-outline font-label-mono-sm text-label-mono-sm">
<span>HACKATHON</span>
<span>•</span>
<span>LAB 402</span>
<span>•</span>
<span className="text-primary font-semibold">92/100 participants</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container-lowest mt-1 overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"92%"}}></div>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow hover:bg-surface-container-high transition-all flex flex-col space-y-space-xs relative overflow-hidden group">
<div className="flex items-center justify-between">
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm font-bold">
              18 OCT
            </span>
<span className="font-label-mono-sm text-label-mono-sm text-tertiary">OPEN REGISTRATION</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
            AI / ML Community Session
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Practical AI projects, fine-tuning local LLMs and open-source models on consumer hardware.
          </p>
<div className="pt-space-xs flex flex-wrap items-center gap-space-xs text-outline font-label-mono-sm text-label-mono-sm">
<span>COMMUNITY</span>
<span>•</span>
<span>CHARUSAT SEMINAR HALL</span>
<span>•</span>
<span className="text-on-surface font-semibold">78/100 participants</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container-lowest mt-1 overflow-hidden">
<div className="h-full bg-tertiary-container rounded-full" style={{"width":"78%"}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col space-y-space-md p-space-md lg:p-space-lg rounded-xl bg-surface-container-low shadow-lg">
<div className="flex items-center justify-between">
<div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">// REPOSITORIES &amp; DELIVERABLES</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">What We're Building</h2>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-bright transition-colors">
          + New Project
        </button>
</div>
<div className="space-y-space-sm">

<div className="p-space-md rounded-lg bg-surface-container shadow hover:bg-surface-container-high transition-all flex flex-col space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">folder</span>
<span className="font-title-md text-title-md text-on-surface font-bold">HomeVault</span>
<span className="px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-mono-sm text-label-mono-sm">ACTIVE</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-primary font-bold">78% Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Decentralized personal asset and credentials manager designed for student residency.
          </p>
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">React</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">Node.js</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">PostgreSQL</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">Firebase</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container-lowest mt-2 overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"78%"}}></div>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow hover:bg-surface-container-high transition-all flex flex-col space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">folder</span>
<span className="font-title-md text-title-md text-on-surface font-bold">GitLearn</span>
<span className="px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-mono-sm text-label-mono-sm">ACTIVE</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-secondary font-bold">62% Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Gamified interactive terminal simulator for 1st-year students to practice git commands.
          </p>
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">React</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">Node.js</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">Firebase</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container-lowest mt-2 overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"62%"}}></div>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container shadow hover:bg-surface-container-high transition-all flex flex-col space-y-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-outline text-[20px]">folder</span>
<span className="font-title-md text-title-md text-on-surface font-bold">CampusConnect</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-outline font-label-mono-sm text-label-mono-sm">PLANNING</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-outline font-bold">28% Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Inter-department event directory &amp; verified hackathon credential verifier.
          </p>
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">React</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest font-label-mono-sm text-label-mono-sm text-on-surface-variant">MongoDB</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container-lowest mt-2 overflow-hidden">
<div className="h-full bg-outline rounded-full" style={{"width":"28%"}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col space-y-space-md p-space-md lg:p-space-lg rounded-xl bg-surface-container-low shadow-lg">
<div className="flex items-center justify-between">
<div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">// AUDIT_LOG • CHRONO</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Recent Movement</h2>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
</div>

<div className="relative pl-6 space-y-space-md flex-1">

<div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-surface-container-highest"></div>

<div className="relative flex items-start gap-space-sm group">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary-container ring-4 ring-surface-container-low"></div>
<div className="flex-1 p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-title-md text-body-md text-on-surface font-semibold">Riddhi Thummar</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">12 min ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Created new staging event: <span className="text-primary font-medium">Git &amp; GitHub Workshop</span>
</p>
</div>
</div>

<div className="relative flex items-start gap-space-sm group">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-secondary ring-4 ring-surface-container-low"></div>
<div className="flex-1 p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-title-md text-body-md text-on-surface font-semibold">Anushka Patel</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">28 min ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Assigned as maintainer to <span className="text-secondary font-medium">HomeVault</span> core repository.
            </p>
</div>
</div>

<div className="relative flex items-start gap-space-sm group">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-outline ring-4 ring-surface-container-low"></div>
<div className="flex-1 p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-title-md text-body-md text-on-surface font-semibold">Jay Shah</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">1 hour ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Pushed 3 commits to <span className="text-on-surface font-medium">GitLearn/v2-simulator</span>.
            </p>
</div>
</div>

<div className="relative flex items-start gap-space-sm group">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-tertiary ring-4 ring-surface-container-low"></div>
<div className="flex-1 p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-title-md text-body-md text-on-surface font-semibold">Club Registry</span>
<span className="font-label-mono-sm text-label-mono-sm text-tertiary">Today</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              12 new verified student members registered across CHARUSAT departments.
            </p>
</div>
</div>
</div>
</div>
</div>

<section className="p-space-md lg:p-space-lg rounded-xl bg-surface-container-low shadow-lg flex flex-col space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">// TALENT_ROSTER • CITADEL</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">The People Behind the Code</h2>
</div>
<div className="flex items-center gap-space-sm font-label-mono-sm text-label-mono-sm">
<span className="px-space-sm py-1 rounded bg-surface-container text-on-surface">248 Total</span>
<span className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-semibold">12 New</span>
<span className="px-space-sm py-1 rounded bg-tertiary-container text-on-tertiary-container font-semibold">84 Active Contributors</span>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-title-md text-body-md text-on-surface font-semibold">Department Cohort Distribution</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">CHARUSAT Engineering</span>
</div>

<div className="w-full h-3 rounded-full bg-surface-container-lowest flex overflow-hidden">
<div className="bg-primary-container h-full" style={{"width":"51.6%"}} title="CSE: 128"></div>
<div className="bg-secondary h-full" style={{"width":"25.0%"}} title="IT: 62"></div>
<div className="bg-tertiary h-full" style={{"width":"12.5%"}} title="CE: 31"></div>
<div className="bg-outline h-full" style={{"width":"10.9%"}} title="Other: 27"></div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs font-label-mono-sm text-label-mono-sm">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="text-on-surface font-medium">CSE (128)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="text-on-surface font-medium">IT (62)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="text-on-surface font-medium">CE (31)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
<span className="text-on-surface font-medium">Other (27)</span>
</div>
</div>
</div>

<div>
<div className="font-label-mono-sm text-label-mono-sm text-outline uppercase mb-space-sm">// CORE_TEAM_MAINTAINERS</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="p-space-md rounded-lg bg-surface-container flex items-center gap-space-md hover:bg-surface-container-high transition-colors">
<img alt="Riddhi Thummar" className="w-12 h-12 rounded-full object-cover shadow" src="https://lh3.googleusercontent.com/aida/AEtjO1UrVJz7fo8AVpiImVFIAHDJwXkDVlSXn93D0d3A5ZTuVhLgBX69N5xXk78QmOy3xKkOuntLtHYFrvIpP6XdRFW7R9CNwFcN0DtZPPqUfKP6kPA8Y8tWGgGwdy3KhGt8XLX7pX374qfC3qo8PjxzS5EvEIRwJoPI5wwvXZzQnmybI32lpOTU5zt6jXd-LJUvgLrCg-2v-NrHB3RcGO5OsvtVhyw8r4cpfSUPaVYpVV9Y8dSUSDf6ZH5b6xM"/>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface font-bold truncate">Riddhi Thummar</span>
<span className="font-label-mono-sm text-label-mono-sm text-primary font-medium truncate">Admin &amp; Tech Lead</span>
<span className="font-body-sm text-body-sm text-outline truncate">CSE • Class of 2025</span>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container flex items-center gap-space-md hover:bg-surface-container-high transition-colors">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-title-md text-title-md font-bold shadow">
            AP
          </div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface font-bold truncate">Anushka Patel</span>
<span className="font-label-mono-sm text-label-mono-sm text-secondary font-medium truncate">Project Lead</span>
<span className="font-body-sm text-body-sm text-outline truncate">IT • Class of 2026</span>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container flex items-center gap-space-md hover:bg-surface-container-high transition-colors">
<div className="w-12 h-12 rounded-full bg-surface-bright text-on-surface flex items-center justify-center font-title-md text-title-md font-bold shadow">
            JS
          </div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface font-bold truncate">Jay Shah</span>
<span className="font-label-mono-sm text-label-mono-sm text-tertiary font-medium truncate">Event Lead</span>
<span className="font-body-sm text-body-sm text-outline truncate">CE • Class of 2025</span>
</div>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md p-space-md" id="modal-event">
<div className="w-full max-w-lg rounded-xl bg-surface-container-low shadow-2xl p-space-lg flex flex-col space-y-space-md transform transition-all">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[24px]">event</span>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Create New Club Event</h3>
</div>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => { toggleModal('modal-event') }}>
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="space-y-space-sm">
<div>
<label className="block font-label-mono-sm text-label-mono-sm text-outline mb-1 uppercase">// EVENT_TITLE</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="e.g. Open Source Hack Night" type="text"/>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<label className="block font-label-mono-sm text-label-mono-sm text-outline mb-1 uppercase">// DATE</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none focus:ring-1 focus:ring-primary-container" type="date" value="2024-10-25"/>
</div>
<div>
<label className="block font-label-mono-sm text-label-mono-sm text-outline mb-1 uppercase">// MAX_SEATS</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none focus:ring-1 focus:ring-primary-container" type="number" value="100"/>
</div>
</div>
<div>
<label className="block font-label-mono-sm text-label-mono-sm text-outline mb-1 uppercase">// DESCRIPTION &amp; PREREQUISITES</label>
<textarea className="w-full px-space-md py-space-sm rounded bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Brief outline, workshop tracks, and prerequisites..." rows="3"></textarea>
</div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-space-sm rounded bg-surface-container text-on-surface font-title-md text-body-md hover:bg-surface-container-high transition-colors" onClick={() => { toggleModal('modal-event') }}>
          Cancel
        </button>
<button className="px-space-md py-space-sm rounded bg-primary-container text-on-primary-container font-title-md text-body-md hover:brightness-110 shadow transition-all" onClick={() => { toggleModal('modal-event'); triggerFeedback('Event created &amp; staged to main calendar!'); }}>
          Deploy Event Hook
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-start justify-center pt-24 bg-surface-container-lowest/80 backdrop-blur-md p-space-md" id="modal-cmd">
<div className="w-full max-w-xl rounded-xl bg-surface-container-low shadow-2xl p-space-md flex flex-col space-y-space-sm">
<div className="flex items-center gap-space-sm px-space-sm py-space-xs rounded bg-surface-container">
<span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
<input className="w-full bg-transparent text-on-surface placeholder:text-outline font-label-mono-md text-label-mono-md focus:outline-none" id="cmd-input" placeholder="Type a command or jump to destination..." type="text"/>
<kbd className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-mono-sm text-[10px]">ESC</kbd>
</div>
<div className="space-y-1 pt-space-xs">
<div className="px-space-sm py-1.5 rounded hover:bg-surface-container flex items-center justify-between cursor-pointer" onClick={() => { toggleModal('modal-cmd'); toggleModal('modal-event'); }}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-outline text-[18px]">add_box</span>
<span className="font-body-md text-body-md text-on-surface">git event create --interactive</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">Action</span>
</div>
<div className="px-space-sm py-1.5 rounded hover:bg-surface-container flex items-center justify-between cursor-pointer" onClick={() => { toggleModal('modal-cmd'); triggerFeedback('Member intake directory loaded.'); }}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-outline text-[18px]">group_add</span>
<span className="font-body-md text-body-md text-on-surface">git members review --pending</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-secondary">Review</span>
</div>
<div className="px-space-sm py-1.5 rounded hover:bg-surface-container flex items-center justify-between cursor-pointer" onClick={() => { toggleModal('modal-cmd'); triggerFeedback('Pushed latest announcements.'); }}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-outline text-[18px]">campaign</span>
<span className="font-body-md text-body-md text-on-surface">git broadcast send --channel #general</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-tertiary">Broadcast</span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 hidden px-space-md py-space-sm rounded-full bg-surface-container-highest/95 backdrop-blur shadow-2xl text-on-surface font-label-mono-sm text-label-mono-sm flex items-center gap-space-sm transition-all" id="toast-notification">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span id="toast-text">Operation completed.</span>
</div>


</div></div></main></div><div className="fixed bottom-6 right-6 z-50 flex items-center gap-space-xs p-1.5 rounded-full bg-surface-container-highest/90 backdrop-blur-xl shadow-[0_12px_32px_-4px_rgba(0,0,0,0.65)]"><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-primary-container text-on-primary-container font-title-md text-body-sm hover:brightness-110 transition-all"><span className="material-symbols-outlined text-[18px]">add</span><span>Event</span></button><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all"><span className="material-symbols-outlined text-[18px]">person_add</span><span>Member</span></button><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all"><span className="material-symbols-outlined text-[18px]">create_new_folder</span><span>Project</span></button><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all"><span className="material-symbols-outlined text-[18px]">campaign</span><span>Broadcast</span></button></div></body></html>...</textarea></form></div></div></div></main></div>
</>
  );
}
