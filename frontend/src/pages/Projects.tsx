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
<input className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface"></textarea></form></div></div></div></main></div>
</>
  );
}
