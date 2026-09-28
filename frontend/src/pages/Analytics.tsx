import React from 'react';

export default function Analytics() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-40 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest"><img alt="gitclub logo.png" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VcLc2E_L_FHYuZ4ukokr497gnAe5UO5wXjga9-LFeHWH1UScEaCxSAUiolo7ZOIv2y6kPMpp6M2Q8kew_nz-wdc31PkCOBAY3mVlo8pM6z64_UQzX_MzKgph0zJ8qzPCJ6DNgsp4EiI7ZkcmSi4k_hT-6ICXawYD45ZoanJ-aaferLGZPoglYHLPgUwJVIPW6APz-tfFWpnQRJjucmYL2W_iZDU6Os_BYyUnWpAVUdL-JKhbWXmHVo1q2WdBBUo5iUFP0xE02URQ"/><div className="flex flex-col min-w-0"><span className="font-title-md text-title-md text-on-surface tracking-tight truncate">Git Club</span><span className="font-label-mono-sm text-label-mono-sm text-primary tracking-wide uppercase truncate">CHARUSAT HQ</span></div></div><div className="px-space-md py-space-sm"><div className="px-space-sm py-space-xs rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-outline flex items-center justify-between"><span>// BRANCH: main</span><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span></div></div><nav className="flex-1 px-space-sm space-y-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-title-md"><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px]">terminal</span><span className="font-body-md text-body-md font-medium">Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="events" href="#"><span className="material-symbols-outlined text-[20px]">event</span><span className="font-body-md text-body-md font-medium">Events</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="members" href="#"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-body-md text-body-md font-medium">Members</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary-container font-title-md" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px]">account_tree</span><span className="font-body-md text-body-md font-medium">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="announcements" href="#"><span className="material-symbols-outlined text-[20px]">campaign</span><span className="font-body-md text-body-md font-medium">Announcements</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics" href="#"><span className="material-symbols-outlined text-[20px]">insights</span><span className="font-body-md text-body-md font-medium">Analytics</span></a><div className="my-space-sm pt-space-xs"><div className="h-[1px] bg-surface-container-highest mx-space-xs"></div></div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="notifications" href="#"><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="font-body-md text-body-md font-medium">Notifications</span></div><span className="px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm">4</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-body-md text-body-md font-medium">Settings</span></a></nav></div><div className="p-space-sm bg-surface-container-lowest"><div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between"><div className="flex flex-col min-w-0"><span className="font-label-mono-sm text-label-mono-sm text-outline truncate">#GrowWith git</span><span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Build. Collab. Ship.</span></div><span className="material-symbols-outlined text-primary text-[18px]">commit</span></div></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl z-30 flex items-center justify-between px-gutter shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline"><span className="text-on-surface-variant">charusat</span><span>/</span><span className="text-primary font-medium">git-club-ops</span></div><button className="flex items-center gap-space-sm px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"><span className="material-symbols-outlined text-[16px]">search</span><span className="font-body-sm text-body-sm">Search or type command...</span><kbd className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-mono-sm text-[10px]">⌘K</kbd></button></div><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant"><span className="material-symbols-outlined text-[16px] text-secondary">shield_person</span><select className="bg-transparent text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none cursor-pointer"><option className="bg-surface-container-low text-on-surface" selected="">Role: Admin</option><option className="bg-surface-container-low text-on-surface">Role: Event Lead</option><option className="bg-surface-container-low text-on-surface">Role: Project Lead</option><option className="bg-surface-container-low text-on-surface">Role: Member</option></select></div><button className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Theme toggle"><span className="material-symbols-outlined text-[20px]">dark_mode</span></button><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Notifications"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="text-right hidden sm:block min-w-0"><div className="font-title-md text-body-sm text-on-surface font-semibold truncate leading-tight">Riddhi Thummar</div><div className="font-label-mono-sm text-label-mono-sm text-outline truncate leading-tight">Admin &amp; Tech Lead</div></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida/AEtjO1UrVJz7fo8AVpiImVFIAHDJwXkDVlSXn93D0d3A5ZTuVhLgBX69N5xXk78QmOy3xKkOuntLtHYFrvIpP6XdRFW7R9CNwFcN0DtZPPqUfKP6kPA8Y8tWGgGwdy3KhGt8XLX7pX374qfC3qo8PjxzS5EvEIRwJoPI5wwvXZzQnmybI32lpOTU5zt6jXd-LJUvgLrCg-2v-NrHB3RcGO5OsvtVhyw8r4cpfSUPaVYpVV9Y8dSUSDf6ZH5b6xM"/></div></div></header><main className="relative pt-16 w-full min-h-screen pb-24 bg-background px-gutter"><div className="max-w-7xl mx-auto py-space-lg"><div className="flex flex-col w-full space-y-space-xl">

<section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl">
<div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm font-label-mono-sm text-label-mono-sm text-primary uppercase tracking-wider">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span>// REPO_INDEX • #GrowWith git</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          ANALYTICS
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

<div className="flex flex-col items-center justify-center p-20 text-on-surface-variant"><span className="material-symbols-outlined text-6xl mb-4">construction</span><h2 className="text-2xl font-bold mb-2">Analytics Module</h2><p>This module is under construction. Stay tuned!</p></div><div className="fixed inset-0 z-50 hidden bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4" id="modal-project-inspect">
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
