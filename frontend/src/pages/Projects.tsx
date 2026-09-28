import React from 'react';

export default function Projects() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-40 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest"><img alt="gitclub logo.png" className="h-8 w-auto object-contain" src="/gitclub-logo.png"/><div className="flex flex-col min-w-0"><span className="font-title-md text-title-md text-on-surface tracking-tight truncate">Git Club</span><span className="font-label-mono-sm text-label-mono-sm text-primary tracking-wide uppercase truncate">CHARUSAT HQ</span></div></div><div className="px-space-md py-space-sm"><div className="px-space-sm py-space-xs rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-outline flex items-center justify-between"><span>// BRANCH: main</span><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span></div></div><nav className="flex-1 px-space-sm space-y-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-title-md"><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px]">terminal</span><span className="font-body-md text-body-md font-medium">Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="events" href="#"><span className="material-symbols-outlined text-[20px]">event</span><span className="font-body-md text-body-md font-medium">Events</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="members" href="#"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-body-md text-body-md font-medium">Members</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary-container font-title-md" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px]">account_tree</span><span className="font-body-md text-body-md font-medium">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="announcements" href="#"><span className="material-symbols-outlined text-[20px]">campaign</span><span className="font-body-md text-body-md font-medium">Announcements</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics" href="#"><span className="material-symbols-outlined text-[20px]">insights</span><span className="font-body-md text-body-md font-medium">Analytics</span></a><div className="my-space-sm pt-space-xs"><div className="h-[1px] bg-surface-container-highest mx-space-xs"></div></div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="notifications" href="#"><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="font-body-md text-body-md font-medium">Notifications</span></div><span className="px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm">4</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-body-md text-body-md font-medium">Settings</span></a></nav></div><div className="p-space-sm bg-surface-container-lowest"><div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between"><div className="flex flex-col min-w-0"><span className="font-label-mono-sm text-label-mono-sm text-outline truncate">#GrowWith git</span><span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Build. Collab. Ship.</span></div><span className="material-symbols-outlined text-primary text-[18px]">commit</span></div></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl z-30 flex items-center justify-between px-gutter shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline"><span className="text-on-surface-variant">charusat</span><span>/</span><span className="text-primary font-medium">git-club-ops</span></div><button className="flex items-center gap-space-sm px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"><span className="material-symbols-outlined text-[16px]">search</span><span className="font-body-sm text-body-sm">Search or type command...</span><kbd className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-mono-sm text-[10px]">⌘K</kbd></button></div><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant"><span className="material-symbols-outlined text-[16px] text-secondary">shield_person</span><select className="bg-transparent text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none cursor-pointer"><option className="bg-surface-container-low text-on-surface" selected="">Role: Admin</option><option className="bg-surface-container-low text-on-surface">Role: Event Lead</option><option className="bg-surface-container-low text-on-surface">Role: Project Lead</option><option className="bg-surface-container-low text-on-surface">Role: Member</option></select></div><button className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Theme toggle"><span className="material-symbols-outlined text-[20px]">dark_mode</span></button><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Notifications"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="text-right hidden sm:block min-w-0"><div className="font-title-md text-body-sm text-on-surface font-semibold truncate leading-tight">Riddhi Thummar</div><div className="font-label-mono-sm text-label-mono-sm text-outline truncate leading-tight">Admin &amp; Tech Lead</div></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida/AEtjO1UrVJz7fo8AVpiImVFIAHDJwXkDVlSXn93D0d3A5ZTuVhLgBX69N5xXk78QmOy3xKkOuntLtHYFrvIpP6XdRFW7R9CNwFcN0DtZPPqUfKP6kPA8Y8tWGgGwdy3KhGt8XLX7pX374qfC3qo8PjxzS5EvEIRwJoPI5wwvXZzQnmybI32lpOTU5zt6jXd-LJUvgLrCg-2v-NrHB3RcGO5OsvtVhyw8r4cpfSUPaVYpVV9Y8dSUSDf6ZH5b6xM"/></div></div></header><main className="relative pt-16 w-full min-h-screen pb-24 bg-background px-gutter"><div className="max-w-7xl mx-auto py-space-lg"><div className="flex flex-col w-full space-y-space-xl">

<section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl">
<div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-wider">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span>// REPO_INDEX • #GrowWith git</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          WHAT WE'RE BUILDING
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Ideas becoming products inside Git Club. High-impact campus platforms, open-source utilities, and student-engineered tooling.
        </p>
</div>
<div className="flex flex-wrap items-center gap-space-md">

<div className="grid grid-cols-4 gap-space-xs bg-surface-container-lowest p-1.5 rounded-lg shadow-inner">
<div className="px-space-sm py-1 rounded bg-surface-container text-center">
<span className="block font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">12</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase text-[10px]">Total</span>
</div>
<div className="px-space-sm py-1 rounded bg-surface-container text-center">
<span className="block font-headline-sm text-headline-sm text-primary font-bold leading-tight">07</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase text-[10px]">Active</span>
</div>
<div className="px-space-sm py-1 rounded bg-surface-container text-center">
<span className="block font-headline-sm text-headline-sm text-tertiary font-bold leading-tight">03</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase text-[10px]">Done</span>
</div>
<div className="px-space-sm py-1 rounded bg-surface-container text-center">
<span className="block font-headline-sm text-headline-sm text-secondary font-bold leading-tight">02</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase text-[10px]">Plan</span>
</div>
</div>
<button className="group flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary-container font-title-md text-body-md hover:brightness-110 shadow-lg transition-all active:scale-[0.98]" onClick={() => { toggleModal('modal-add-project', true) }}>
<span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-90">add_circle</span>
<span>Add Project</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-5 rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col justify-between space-y-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-mono-sm text-label-mono-sm text-primary uppercase">// METRIC PULSE</span>
<h2 className="font-title-md text-title-md text-on-surface">Lifecycle Distribution</h2>
</div>
<span className="font-label-mono-sm text-label-mono-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">12 Active Repos</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-lg py-space-xs">

<div className="relative w-36 h-36 flex-shrink-0">
<svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">

<circle className="text-surface-container-highest" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeWidth="11" /></circle>

<circle className="text-primary-container" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="119.38" strokeLinecap="round" strokeWidth="11" /></circle>

<circle className="text-secondary" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="179.07" strokeLinecap="round" strokeWidth="11" /></circle>

<circle className="text-tertiary" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="199.06" strokeLinecap="round" strokeWidth="11" /></circle>

<circle className="text-outline" cx="50" cy="50" fill="transparent" r="38" stroke="currentColor" strokeDasharray="238.76" strokeDashoffset="218.96" strokeLinecap="round" strokeWidth="11" /></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">12</span>
<span className="font-label-mono-sm text-[10px] text-outline uppercase tracking-wider">Tracks</span>
</div>
</div>

<div className="flex-1 w-full space-y-2">
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-body-sm text-on-surface">Active Development</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm font-semibold text-on-surface">6 Repos (50%)</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-body-sm text-on-surface">Architecture &amp; Planning</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm font-semibold text-on-surface">3 Repos (25%)</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="font-body-sm text-on-surface">Shipped / Completed</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm font-semibold text-on-surface">2 Repos (17%)</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
<span className="font-body-sm text-on-surface">Maintenance / On Hold</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm font-semibold text-on-surface">1 Repo (8%)</span>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between font-label-mono-sm text-label-mono-sm text-outline border-t-0 bg-surface-container-low p-2 rounded">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-tertiary">sync</span>CHARUSAT internal sync 4m ago</span>
<span className="text-primary font-medium">94.8% SLA Health</span>
</div>
</div>

<div className="lg:col-span-7 rounded-xl bg-surface-container p-space-lg shadow-md flex flex-col justify-between space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<span className="font-label-mono-sm text-label-mono-sm text-primary uppercase">// SPRINT TELEMETRY</span>
<h2 className="font-title-md text-title-md text-on-surface">Sprint Q2-Cycle 04 Velocity</h2>
</div>
<div className="flex items-center gap-1.5 font-label-mono-sm text-label-mono-sm px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary-fixed">
<span className="material-symbols-outlined text-[16px]">bolt</span>
<span>189 Commits This Week</span>
</div>
</div>

<div className="space-y-2">
<div className="h-28 w-full bg-surface-container-lowest rounded-lg p-2.5 flex items-end gap-2">

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-surface-container-high rounded-t group-hover:bg-primary/70 transition-all" style={{"height":"48%"}}></div>
<span className="font-label-mono-sm text-[10px] text-outline">MON</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-surface-container-high rounded-t group-hover:bg-primary/70 transition-all" style={{"height":"65%"}}></div>
<span className="font-label-mono-sm text-[10px] text-outline">TUE</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-surface-container-high rounded-t group-hover:bg-primary/70 transition-all" style={{"height":"38%"}}></div>
<span className="font-label-mono-sm text-[10px] text-outline">WED</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-primary-container rounded-t shadow-[0_0_8px_rgba(253,88,50,0.4)]" style={{"height":"92%"}}></div>
<span className="font-label-mono-sm text-[10px] text-primary font-bold">THU</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-surface-container-high rounded-t group-hover:bg-primary/70 transition-all" style={{"height":"74%"}}></div>
<span className="font-label-mono-sm text-[10px] text-outline">FRI</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-surface-container-high rounded-t group-hover:bg-primary/70 transition-all" style={{"height":"52%"}}></div>
<span className="font-label-mono-sm text-[10px] text-outline">SAT</span>
</div>

<div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
<div className="w-full bg-surface-container-high rounded-t group-hover:bg-primary/70 transition-all" style={{"height":"30%"}}></div>
<span className="font-label-mono-sm text-[10px] text-outline">SUN</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-space-sm pt-1">
<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-mono-sm text-[11px] text-outline">PULL REQUESTS</span>
<span className="font-title-md text-title-md text-on-surface font-bold">34 Closed</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-mono-sm text-[11px] text-outline">CONTRIBUTORS</span>
<span className="font-title-md text-title-md text-tertiary font-bold">29 Active</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-mono-sm text-[11px] text-outline">DEPLOYMENTS</span>
<span className="font-title-md text-title-md text-secondary font-bold">14 Live</span>
</div>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container-low p-space-md shadow-md space-y-space-md">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">

<div className="relative flex-1 min-w-[280px]">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container" id="project-search-input" placeholder="Search projects by title, tag, or lead..." type="text"/>
<kbd className="hidden sm:inline absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-container text-outline font-label-mono-sm text-[10px]">ESC to clear</kbd>
</div>

<div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0 scrollbar-none font-body-sm text-body-sm">
<button className="filter-category-btn px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-medium whitespace-nowrap transition-all" data-category="all">All Domains</button>
<button className="filter-category-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium whitespace-nowrap transition-all" data-category="web">Web Dev</button>
<button className="filter-category-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium whitespace-nowrap transition-all" data-category="ai">AI / ML</button>
<button className="filter-category-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium whitespace-nowrap transition-all" data-category="app">App Dev</button>
<button className="filter-category-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium whitespace-nowrap transition-all" data-category="cloud">Cloud &amp; DevOps</button>
<button className="filter-category-btn px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium whitespace-nowrap transition-all" data-category="iot">IoT</button>
</div>
</div>

<div className="flex items-center gap-space-xs flex-wrap pt-2 border-t-0">
<span className="font-label-mono-sm text-label-mono-sm text-outline mr-2">// TECH STACK:</span>
<button className="tech-pill flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-high transition-colors" data-tech="react">
<span className="w-1.5 h-1.5 rounded-full bg-[#00d8ff]"></span>
<span>React</span>
</button>
<button className="tech-pill flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-high transition-colors" data-tech="node">
<span className="w-1.5 h-1.5 rounded-full bg-[#68a063]"></span>
<span>Node.js</span>
</button>
<button className="tech-pill flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-high transition-colors" data-tech="python">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Python</span>
</button>
<button className="tech-pill flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-high transition-colors" data-tech="postgres">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
<span>PostgreSQL</span>
</button>
<button className="tech-pill flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-high transition-colors" data-tech="mongodb">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>MongoDB</span>
</button>
<button className="tech-pill flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-high transition-colors" data-tech="flutter">
<span className="w-1.5 h-1.5 rounded-full bg-[#54c5f8]"></span>
<span>Flutter</span>
</button>
</div>
</section>

<section className="space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">featured_play_list</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Active Repositories &amp; Initiatives</h2>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-outline">Displaying 4 Featured</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<article className="project-card group rounded-xl bg-surface-container p-space-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-space-md relative overflow-hidden" data-category="web" data-tech="react node postgres">
<div className="absolute -right-16 -top-16 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none"></div>
<div>

<div className="flex items-start justify-between gap-space-sm mb-3">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-label-mono-sm text-label-mono-sm font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                ACTIVE • 78%
              </span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">v1.4-rc3</span>
</div>
<div className="flex items-center gap-1 text-outline">
<span className="material-symbols-outlined text-[18px]">lock_open</span>
<span className="font-label-mono-sm text-[11px]">MIT</span>
</div>
</div>

<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors flex items-center gap-2">
            HomeVault
            <span className="material-symbols-outlined text-[18px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
            Digital home management platform for household assets, warranty archives, maintenance alerts, and family document vaults.
          </p>

<div className="mt-4 rounded-lg overflow-hidden h-36 bg-surface-container-lowest relative group/img">
<img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" data-alt="Modern dark-themed SaaS interface for HomeVault dashboard showing document cards, warranty tracker, and digital folder hierarchy with orange and charcoal accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB84Co2qTb6D7WdI7t2IPpzQ_xzQyW8MPbaF6suk-yYiVvXCxtOpQ5gO0V9ZYPVXPrB1aYvIsdr_j4vNTlnVnseOjucrjmuH22L0JuWTNodZjJCFaAJujns144yN1e36ymv2Ck-NpSYCBUHeVRWsH-mYB1XccBXEpUSFknsTWJ0O_Kky6guIfnWNswBws52wevsdsQ24YBmxQkIpjaCyJZt4je5NQFqcFUi4Ga37jOyiTB-1va803wP7Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-surface/80 backdrop-blur font-label-mono-sm text-[10px] text-on-surface">repo: charusat/home-vault</span>
</div>

<div className="mt-4 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">React</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">Node.js</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">PostgreSQL</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">Firebase</span>
</div>
</div>

<div className="pt-space-sm space-y-space-sm">

<div className="space-y-1">
<div className="flex justify-between font-label-mono-sm text-label-mono-sm">
<span className="text-outline">Sprint Progress</span>
<span className="text-primary font-bold">78% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"78%"}}></div>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">RT</div>
<div className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">DP</div>
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">AK</div>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-mono-sm text-[10px] ring-2 ring-surface-container">+3</div>
</div>
<div className="flex items-center gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-title-md text-body-sm transition-colors flex items-center gap-1" onClick={() => { openProjectModal('HomeVault') }}>
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Inspect</span>
</button>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="https://github.com" target="_blank" title="GitHub Source">
<span className="material-symbols-outlined text-[18px]">code</span>
</a>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="#" title="Live Preview">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</div>
</div>
</div>
</article>

<article className="project-card group rounded-xl bg-surface-container p-space-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-space-md relative overflow-hidden" data-category="web" data-tech="react node">
<div className="absolute -right-16 -top-16 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none"></div>
<div>

<div className="flex items-start justify-between gap-space-sm mb-3">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container font-label-mono-sm text-label-mono-sm font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                ACTIVE • 62%
              </span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">v0.9.1</span>
</div>
<div className="flex items-center gap-1 text-outline">
<span className="material-symbols-outlined text-[18px]">school</span>
<span className="font-label-mono-sm text-[11px]">Campus Lab</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors flex items-center gap-2">
            GitLearn
            <span className="material-symbols-outlined text-[18px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
            Interactive university Git branch sandbox with real-time visual tree commits, rebase simulations, and automated lab assessments.
          </p>

<div className="mt-4 rounded-lg overflow-hidden h-36 bg-surface-container-lowest relative group/img">
<img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" data-alt="Interactive web application showing Git branching graphs, terminal console simulator, and code comparison tree in vibrant dark theme with orange connectors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1faXVGK3JWxmpwBuFo505uZcXSdfCGDBQZ_4Ade9fdSkH5eBS5t-uM8KXTn_TsBYFp0B9h3SU5SKsQq_8C8KTV6YnkFxlOMLem3Lf7pRahK6s0YQnaj7Hvk85Vy-phK1NQpBgAzrNd-l9QIZPJqn9auqIFtE6YrabHpXgJ7adjEOe71j7V5shogUSe8SPsg-iEs-qStvLubIoplxM1VUTTje7Nlh-7EWZsg-82mguQQ2jZwIvWJ9xCA"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-surface/80 backdrop-blur font-label-mono-sm text-[10px] text-on-surface">repo: charusat/gitlearn-hub</span>
</div>

<div className="mt-4 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">React</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">Node.js</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">Firebase</span>
</div>
</div>

<div className="pt-space-sm space-y-space-sm">
<div className="space-y-1">
<div className="flex justify-between font-label-mono-sm text-label-mono-sm">
<span className="text-outline">Sprint Progress</span>
<span className="text-primary font-bold">62% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"62%"}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">VS</div>
<div className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">MJ</div>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-mono-sm text-[10px] ring-2 ring-surface-container">+2</div>
</div>
<div className="flex items-center gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-title-md text-body-sm transition-colors flex items-center gap-1" onClick={() => { openProjectModal('GitLearn') }}>
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Inspect</span>
</button>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[18px]">code</span>
</a>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</div>
</div>
</div>
</article>

<article className="project-card group rounded-xl bg-surface-container p-space-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-space-md relative overflow-hidden" data-category="web" data-tech="react mongodb">
<div className="absolute -right-16 -top-16 w-40 h-40 bg-secondary-container/20 rounded-full blur-2xl group-hover:bg-secondary-container/30 transition-all pointer-events-none"></div>
<div>

<div className="flex items-start justify-between gap-space-sm mb-3">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-mono-sm text-label-mono-sm font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                PLANNING • 28%
              </span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">v0.2.0-spec</span>
</div>
<div className="flex items-center gap-1 text-outline">
<span className="material-symbols-outlined text-[18px]">diversity_3</span>
<span className="font-label-mono-sm text-[11px]">Peer Hub</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-secondary transition-colors flex items-center gap-2">
            CampusConnect
            <span className="material-symbols-outlined text-[18px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
            Collaborative student exchange network with verified peer tutoring, past-paper vaults, and department hackathon matchmaking.
          </p>

<div className="mt-4 rounded-lg overflow-hidden h-36 bg-surface-container-lowest relative group/img">
<img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" data-alt="Student forum and peer mentoring portal UI showing discussion threads, course cards, and calendar schedule on a sleek dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4GYCQ4YvevB1n_DWdMvA0s723tbdVsu42-lORn6dSW-u2jy3UQpwfu9_J__G9A3URcWCaw477TdhzJl4hslNtnQ1RJIcZBpT0OUnEXQc-m8QannhCFhoz0K4dVr-6whFLeDJhniIeKYyelaFXf9B0bp00YnpBLzi8vs2BcDiogbHUaj5Idgc5nZam3EXhgesAMMbEsdizsWK-pnNtXB2PSgmQJ74-d1lwj1uKBd869Cmz3D6RHSCGKg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-surface/80 backdrop-blur font-label-mono-sm text-[10px] text-on-surface">repo: charusat/campus-connect</span>
</div>

<div className="mt-4 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">React</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">MongoDB</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">Express</span>
</div>
</div>

<div className="pt-space-sm space-y-space-sm">
<div className="space-y-1">
<div className="flex justify-between font-label-mono-sm text-label-mono-sm">
<span className="text-outline">Architecture Review</span>
<span className="text-secondary font-bold">28% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"28%"}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">SP</div>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-mono-sm text-[10px] ring-2 ring-surface-container">+3</div>
</div>
<div className="flex items-center gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-title-md text-body-sm transition-colors flex items-center gap-1" onClick={() => { openProjectModal('CampusConnect') }}>
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Inspect</span>
</button>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[18px]">code</span>
</a>
<span className="p-1.5 text-outline cursor-not-allowed" title="Not deployed yet">
<span className="material-symbols-outlined text-[18px]">pause_circle</span>
</span>
</div>
</div>
</div>
</article>

<article className="project-card group rounded-xl bg-surface-container p-space-lg shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-space-md relative overflow-hidden" data-category="iot" data-tech="python">
<div className="absolute -right-16 -top-16 w-40 h-40 bg-tertiary/10 rounded-full blur-2xl group-hover:bg-tertiary/20 transition-all pointer-events-none"></div>
<div>

<div className="flex items-start justify-between gap-space-sm mb-3">
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-mono-sm text-label-mono-sm font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                COMPLETED • 90%
              </span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">v2.0-stable</span>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[18px]">sensors</span>
<span className="font-label-mono-sm text-[11px]">Hardware</span>
</div>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-tertiary transition-colors flex items-center gap-2">
            SmartCampus IoT
            <span className="material-symbols-outlined text-[18px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">
            Classroom environmental sensing, air quality index mapping, and automated HVAC telemetry powered by custom ESP32 nodes.
          </p>

<div className="mt-4 rounded-lg overflow-hidden h-36 bg-surface-container-lowest relative group/img">
<img className="w-full h-full object-cover opacity-85 group-hover/img:scale-105 transition-transform duration-500" data-alt="Hardware engineering workbench with ESP32 microcontrollers, soldered sensor shields, and a monitor displaying real-time telemetry gauges in green and cyan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7BwARWatMwvgsgj9-vrLl78Naf9MDn2kEdI-dPdxpbCNfO9iIkZKVTISwHAeRMzMkbIMNcFFVvowYXj5mQJfLIrp2-rcumjZBMe_QbGOmcHcvCGEeTBYbF15ha8GglYOGlOHvoRa97i44BiqD99f77TKFhQctzu2N1G1sQXT4mcKQiUwa2aayNwtHZZV8KdSz83cFW4tWoiztMLhA-JjauZ7Me9XbwAfLwoW2DNpzjpnW5swc5j6jg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-surface/80 backdrop-blur font-label-mono-sm text-[10px] text-on-surface">repo: charusat/smartcampus-iot</span>
</div>

<div className="mt-4 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">ESP32</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">Python</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">MQTT</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm">InfluxDB</span>
</div>
</div>

<div className="pt-space-sm space-y-space-sm">
<div className="space-y-1">
<div className="flex justify-between font-label-mono-sm text-label-mono-sm">
<span className="text-outline">Validation / Deployed</span>
<span className="text-tertiary font-bold">90% Shipped</span>
</div>
<div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style={{"width":"90%"}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">KR</div>
<div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs ring-2 ring-surface-container">NV</div>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-mono-sm text-[10px] ring-2 ring-surface-container">+4</div>
</div>
<div className="flex items-center gap-1.5">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-title-md text-body-sm transition-colors flex items-center gap-1" onClick={() => { openProjectModal('SmartCampus IoT') }}>
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Inspect</span>
</button>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[18px]">code</span>
</a>
<a className="p-1.5 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</div>
</div>
</div>
</article>
</div>
</section>

<div className="fixed inset-0 z-50 hidden bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4" id="modal-project-inspect">
<div className="relative w-full max-w-4xl max-h-[921px] bg-surface-container-low rounded-xl shadow-2xl overflow-y-auto flex flex-col">

<div className="sticky top-0 bg-surface-container-low/95 backdrop-blur z-20 px-space-lg py-space-md flex items-center justify-between border-b-0 shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm font-semibold">ACTIVE SPRINT</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold" id="inspect-modal-title">HomeVault</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">charusat/home-vault</span>
</div>
<button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors" onClick={() => { toggleModal('modal-project-inspect', false) }}>
<span className="material-symbols-outlined text-[22px]">close</span>
</button>
</div>

<div className="p-space-lg space-y-space-lg">

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-lg bg-surface-container">
<div className="flex items-center gap-1.5 text-error font-title-md text-body-md font-semibold mb-2">
<span className="material-symbols-outlined text-[18px]">error</span>
<span>The Problem Statement</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Household appliances, real estate paperwork, and recurring warranty services are dispersed across physical file cabinets or lost email threads, causing avoidable financial leaks and missed replacement deadlines.
            </p>
</div>
<div className="p-space-md rounded-lg bg-surface-container">
<div className="flex items-center gap-1.5 text-tertiary font-title-md text-body-md font-semibold mb-2">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span>The Proposed Solution</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A unified open-source dashboard indexing home inventory with smart OCR for warranty receipt parsing, auto-scheduled push reminders, and encrypted offline document sharing.
            </p>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono-sm text-label-mono-sm text-primary uppercase">// ARCHITECTURE PREVIEW</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">Microservices • Event Driven</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-lowest grid grid-cols-1 sm:grid-cols-4 gap-space-sm items-center text-center">
<div className="p-3 rounded bg-surface-container flex flex-col items-center">
<span className="material-symbols-outlined text-primary text-[24px]">devices</span>
<span className="font-title-md text-body-sm font-semibold mt-1">Client Layer</span>
<span className="font-label-mono-sm text-[11px] text-outline">React 18 + Tailwind</span>
</div>
<div className="flex justify-center text-outline">
<span className="material-symbols-outlined text-[20px] hidden sm:block">arrow_forward</span>
<span className="material-symbols-outlined text-[20px] sm:hidden">arrow_downward</span>
</div>
<div className="p-3 rounded bg-surface-container flex flex-col items-center">
<span className="material-symbols-outlined text-secondary text-[24px]">dns</span>
<span className="font-title-md text-body-sm font-semibold mt-1">API Engine</span>
<span className="font-label-mono-sm text-[11px] text-outline">Node / Express</span>
</div>
<div className="p-3 rounded bg-surface-container flex flex-col items-center">
<span className="material-symbols-outlined text-tertiary text-[24px]">database</span>
<span className="font-title-md text-body-sm font-semibold mt-1">Data Store</span>
<span className="font-label-mono-sm text-[11px] text-outline">PostgreSQL + S3</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded-lg bg-surface-container space-y-3">
<div className="flex items-center justify-between">
<span className="font-title-md text-body-md font-semibold text-on-surface">Active Sprint Checklist</span>
<span className="font-label-mono-sm text-label-mono-sm text-primary">Sprint 4/6</span>
</div>
<div className="space-y-2 font-body-sm text-body-sm">
<label className="flex items-center gap-2 text-on-surface p-1.5 rounded bg-surface-container-low cursor-pointer">
<input checked="" className="accent-primary-container w-4 h-4 rounded" type="checkbox"/>
<span className="line-through text-outline">OCR parser for utility receipts</span>
</label>
<label className="flex items-center gap-2 text-on-surface p-1.5 rounded bg-surface-container-low cursor-pointer">
<input checked="" className="accent-primary-container w-4 h-4 rounded" type="checkbox"/>
<span className="line-through text-outline">PostgreSQL migration schema v1.2</span>
</label>
<label className="flex items-center gap-2 text-on-surface p-1.5 rounded bg-surface-container-low cursor-pointer">
<input className="accent-primary-container w-4 h-4 rounded" type="checkbox"/>
<span className="text-on-surface">WebPush reminders for device warranties</span>
</label>
<label className="flex items-center gap-2 text-on-surface p-1.5 rounded bg-surface-container-low cursor-pointer">
<input className="accent-primary-container w-4 h-4 rounded" type="checkbox"/>
<span className="text-on-surface">End-to-end testing with Playwright</span>
</label>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container space-y-3">
<span className="font-title-md text-body-md font-semibold text-on-surface">Repository Pulse</span>
<div className="grid grid-cols-2 gap-2">
<div className="p-2.5 rounded bg-surface-container-low">
<span className="font-label-mono-sm text-[11px] text-outline">TOTAL COMMITS</span>
<div className="font-headline-sm text-headline-sm text-on-surface font-bold">248</div>
</div>
<div className="p-2.5 rounded bg-surface-container-low">
<span className="font-label-mono-sm text-[11px] text-outline">PULL REQUESTS</span>
<div className="font-headline-sm text-headline-sm text-primary font-bold">42</div>
</div>
<div className="p-2.5 rounded bg-surface-container-low">
<span className="font-label-mono-sm text-[11px] text-outline">OPEN ISSUES</span>
<div className="font-headline-sm text-headline-sm text-secondary font-bold">7</div>
</div>
<div className="p-2.5 rounded bg-surface-container-low">
<span className="font-label-mono-sm text-[11px] text-outline">FORKS</span>
<div className="font-headline-sm text-headline-sm text-tertiary font-bold">19</div>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<span className="font-label-mono-sm text-label-mono-sm text-primary uppercase">// SQUAD REPOSITORY LEADS</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center text-xs">RT</div>
<div className="min-w-0">
<div className="font-title-md text-body-sm font-semibold truncate">Riddhi Thummar</div>
<div className="font-label-mono-sm text-[10px] text-outline truncate">Project Lead • Core</div>
</div>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold flex items-center justify-center text-xs">DP</div>
<div className="min-w-0">
<div className="font-title-md text-body-sm font-semibold truncate">Dhruv Patel</div>
<div className="font-label-mono-sm text-[10px] text-outline truncate">Backend Architect</div>
</div>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-container">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center text-xs">AK</div>
<div className="min-w-0">
<div className="font-title-md text-body-sm font-semibold truncate">Aanya K.</div>
<div className="font-label-mono-sm text-[10px] text-outline truncate">UI/UX Contributor</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-2 font-label-mono-sm text-label-mono-sm text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>CI/CD Automated Checks Passing</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-title-md text-body-sm hover:bg-surface-container-high transition-colors" onClick={() => { toggleModal('modal-project-inspect', false) }}>
            Close
          </button>
<a className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-title-md text-body-sm hover:brightness-110 transition-all flex items-center gap-1.5" href="https://github.com" target="_blank">
<span className="material-symbols-outlined text-[16px]">code</span>
<span>View on GitHub</span>
</a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4" id="modal-add-project">
<div className="relative w-full max-w-2xl bg-surface-container-low rounded-xl shadow-2xl overflow-hidden flex flex-col">

<div className="px-space-lg py-space-md bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">create_new_folder</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Register New Project</h3>
</div>
<button className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors" onClick={() => { toggleModal('modal-add-project', false) }}>
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<form className="p-space-lg space-y-space-md overflow-y-auto max-h-[768px]" onSubmit={(e) => { e.preventDefault(); handleProjectSubmit(event) }}>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Project Name</label>
<input className="w-full px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="e.g. GitSync-CLI, EventPulse" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Domain Category</label>
<select className="w-full px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container">
<option>Web Development</option>
<option>AI / Machine Learning</option>
<option>App Development</option>
<option>Cloud &amp; DevOps</option>
<option>IoT / Hardware</option>
</select>
</div>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Initial Status</label>
<select className="w-full px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container">
<option>Planning Phase</option>
<option>Active Development</option>
<option>Completed / Shipped</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Short Pitch &amp; Objective</label>
<textarea className="w-full px-space-md py-2 rounded-lg bg-surface-container-lowest text


NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.</textarea></form></div></div></div></main></div>
</>
  );
}
