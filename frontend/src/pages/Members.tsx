import React from 'react';

export default function Members() {
  return (
    <>
<aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low z-40 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.4)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest"><img alt="gitclub logo.png" className="h-8 w-auto object-contain" src="/gitclub-logo.png"/><div className="flex flex-col min-w-0"><span className="font-title-md text-title-md text-on-surface tracking-tight truncate">Git Club</span><span className="font-label-mono-sm text-label-mono-sm text-primary tracking-wide uppercase truncate">CHARUSAT HQ</span></div></div><div className="px-space-md py-space-sm"><div className="px-space-sm py-space-xs rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-outline flex items-center justify-between"><span>// BRANCH: main</span><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span></div></div><nav className="flex-1 px-space-sm space-y-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-title-md"><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[20px]">terminal</span><span className="font-body-md text-body-md font-medium">Command Center</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="events" href="#"><span className="material-symbols-outlined text-[20px]">event</span><span className="font-body-md text-body-md font-medium">Events</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary-container font-title-md" data-path="members" href="#"><span className="material-symbols-outlined text-[20px]">group</span><span className="font-body-md text-body-md font-medium">Members</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="projects" href="#"><span className="material-symbols-outlined text-[20px]">account_tree</span><span className="font-body-md text-body-md font-medium">Projects</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="announcements" href="#"><span className="material-symbols-outlined text-[20px]">campaign</span><span className="font-body-md text-body-md font-medium">Announcements</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics" href="#"><span className="material-symbols-outlined text-[20px]">insights</span><span className="font-body-md text-body-md font-medium">Analytics</span></a><div className="my-space-sm pt-space-xs"><div className="h-[1px] bg-surface-container-highest mx-space-xs"></div></div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="notifications" href="#"><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="font-body-md text-body-md font-medium">Notifications</span></div><span className="px-space-xs py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm">4</span></a><a className="flex items-center gap-space-sm px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span className="font-body-md text-body-md font-medium">Settings</span></a></nav></div><div className="p-space-sm bg-surface-container-lowest"><div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between"><div className="flex flex-col min-w-0"><span className="font-label-mono-sm text-label-mono-sm text-outline truncate">#GrowWith git</span><span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">Build. Collab. Ship.</span></div><span className="material-symbols-outlined text-primary text-[18px]">commit</span></div></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface/85 backdrop-blur-xl z-30 flex items-center justify-between px-gutter shadow-[0_1px_8px_rgba(0,0,0,0.25)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline"><span className="text-on-surface-variant">charusat</span><span>/</span><span className="text-primary font-medium">git-club-ops</span></div><button className="flex items-center gap-space-sm px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"><span className="material-symbols-outlined text-[16px]">search</span><span className="font-body-sm text-body-sm">Search or type command...</span><kbd className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline font-label-mono-sm text-[10px]">⌘K</kbd></button></div><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant"><span className="material-symbols-outlined text-[16px] text-secondary">shield_person</span><select className="bg-transparent text-on-surface font-label-mono-sm text-label-mono-sm focus:outline-none cursor-pointer"><option className="bg-surface-container-low text-on-surface" selected="">Role: Admin</option><option className="bg-surface-container-low text-on-surface">Role: Event Lead</option><option className="bg-surface-container-low text-on-surface">Role: Project Lead</option><option className="bg-surface-container-low text-on-surface">Role: Member</option></select></div><button className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Theme toggle"><span className="material-symbols-outlined text-[20px]">dark_mode</span></button><button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Notifications"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-container ring-2 ring-surface"></span></button><div className="flex items-center gap-space-sm pl-space-xs"><div className="text-right hidden sm:block min-w-0"><div className="font-title-md text-body-sm text-on-surface font-semibold truncate leading-tight">Riddhi Thummar</div><div className="font-label-mono-sm text-label-mono-sm text-outline truncate leading-tight">Admin &amp; Tech Lead</div></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida/AEtjO1UrVJz7fo8AVpiImVFIAHDJwXkDVlSXn93D0d3A5ZTuVhLgBX69N5xXk78QmOy3xKkOuntLtHYFrvIpP6XdRFW7R9CNwFcN0DtZPPqUfKP6kPA8Y8tWGgGwdy3KhGt8XLX7pX374qfC3qo8PjxzS5EvEIRwJoPI5wwvXZzQnmybI32lpOTU5zt6jXd-LJUvgLrCg-2v-NrHB3RcGO5OsvtVhyw8r4cpfSUPaVYpVV9Y8dSUSDf6ZH5b6xM"/></div></div></header><main className="relative pt-16 w-full min-h-screen pb-24 bg-background px-gutter"><div className="max-w-7xl mx-auto py-space-lg"><div className="flex flex-col w-full">

<section className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
<div className="space-y-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm font-label-mono-sm text-label-mono-sm text-primary">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span>// DIRECTORY :: CHARUSAT_NODE_SYNC</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase">
        The People Behind <span className="text-primary-container font-black">The Code</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
        Find the right people to learn, build, and collaborate with across every commit and milestone.
      </p>
</div>
<div className="flex flex-wrap items-center gap-space-md">

<div className="flex items-center gap-space-md px-space-md py-space-sm rounded-xl bg-surface-container-low shadow-sm">
<div className="px-space-xs">
<span className="font-label-mono-sm text-label-mono-sm text-outline block uppercase">Total Base</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">248</span>
</div>
<div className="w-px h-8 bg-surface-container-highest"></div>
<div className="px-space-xs">
<span className="font-label-mono-sm text-label-mono-sm text-outline block uppercase">Mtd Joined</span>
<div className="flex items-center gap-1">
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">+12</span>
<span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
</div>
</div>
<div className="w-px h-8 bg-surface-container-highest"></div>
<div className="px-space-xs">
<span className="font-label-mono-sm text-label-mono-sm text-outline block uppercase">Active Sync</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">84</span>
</div>
</div>

<button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-primary-container text-on-primary-container font-title-md text-body-md font-semibold hover:brightness-110 shadow-lg transition-all active:scale-95" onClick={() => { document.getElementById('add-member-modal').classList.remove('hidden') }}>
<span className="material-symbols-outlined text-[20px]">person_add</span>
<span>+ Add Member</span>
</button>
</div>
</section>

<section className="mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
<span>// 01. CORE LEADERSHIP SPOTLIGHT</span>
</div>
<span className="font-label-mono-sm text-label-mono-sm text-outline-variant">EST. 2024 • DEP_GIT_EXEC</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="relative group rounded-xl bg-surface-container-low p-space-lg overflow-hidden shadow-md transition-all hover:bg-surface-container">
<div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-primary-container/10 blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
<div className="flex items-start justify-between gap-space-md mb-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover shadow-md" data-alt="Close up professional portrait of Riddhi Thummar, a young South Asian female engineer student wearing glasses with warm studio amber rim lighting and clean charcoal dark background, highly focused gaze, 8k resolution" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAqhRXrtB-bRoYp4Xs2pibumYK6Uinfb4Jv1dCdr8u1faSmFXJEv9QwPskFvZIuj36x26Ft8Q6HXDj_5mwPGUoXdr-G9DSTPTXQirEkQr62V8W9ascxc42IXaGfU2m_hOJ3nV9jSFGGEsXeNwTdCe7pE3Vl3EBn5pCyN9PNtCY1qQkSThqi8ng_0S34ajPzHdU-DrUcdT1gLOUwoqnlmpfSpwYknaBo7xDiSdPc-3M7HvN0fEo5KdHyg"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-primary-fixed/20 text-primary-fixed font-label-mono-sm text-label-mono-sm font-semibold uppercase">Admin &amp; Tech Lead</span>
</div>
</div>
<div className="space-y-space-xs mb-space-md">
<div className="flex items-baseline justify-between">
<h2 className="font-title-md text-title-md text-on-surface font-bold">Riddhi Thummar</h2>
<span className="font-label-mono-sm text-label-mono-sm text-outline">2nd Year CSE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Spearheading technical pipeline deployments and student open-source mentor circles across Charusat.
          </p>
</div>
<div className="flex flex-wrap gap-space-xs mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Git Internals</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">React</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Architecture</span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm text-outline">
<a className="hover:text-primary transition-colors flex items-center" href="https://github.com" target="_blank" title="GitHub">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</a>
<a className="hover:text-primary transition-colors flex items-center" href="https://linkedin.com" target="_blank" title="LinkedIn">
<span className="material-symbols-outlined text-[18px]">share</span>
</a>
</div>
<button className="font-label-mono-sm text-label-mono-sm text-primary flex items-center gap-1 hover:text-on-surface transition-colors" onClick={() => { openInspectDrawer() }}>
<span>INSPECT CELL</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>

<div className="relative group rounded-xl bg-surface-container-low p-space-lg overflow-hidden shadow-md transition-all hover:bg-surface-container">
<div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-secondary-container/10 blur-2xl group-hover:bg-secondary-container/20 transition-all"></div>
<div className="flex items-start justify-between gap-space-md mb-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover shadow-md" data-alt="Portrait photo of Anushka Patel, Indian female student tech lead in a dark navy collegiate hoodie, warm ambient workspace lighting with code monitors in soft-focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRpn5rinTMDW5iNcvzFlV5Bnld0s0VujHr8C9QpUfGqu5ml6v1NZmkzbyEFdt3UaXQYOPT-JzH3fqvgDUGJM_1HpzXo-vzy5qkkSCdyfdrUVxDFpdL1k_CMy4-2GphbwG5TdsygoiRuNKanzVojNChdLIyTkJZaMkmnN6FMzNhFCQL-MoSOsxmNsg07g91ZrkvbfCV7rTeCn7VL6hmlIVS6J3xEZ5WzTnGrJVQsNor85h2VeXn33wRuA"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-secondary-fixed/20 text-secondary-fixed font-label-mono-sm text-label-mono-sm font-semibold uppercase">Project Lead</span>
</div>
</div>
<div className="space-y-space-xs mb-space-md">
<div className="flex items-baseline justify-between">
<h2 className="font-title-md text-title-md text-on-surface font-bold">Anushka Patel</h2>
<span className="font-label-mono-sm text-label-mono-sm text-outline">3rd Year IT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Managing cross-team release trains, backend services, and repository maintenance standards.
          </p>
</div>
<div className="flex flex-wrap gap-space-xs mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Python</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Cloud</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Node.js</span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm text-outline">
<a className="hover:text-primary transition-colors flex items-center" href="https://github.com" target="_blank" title="GitHub">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</a>
<a className="hover:text-primary transition-colors flex items-center" href="https://linkedin.com" target="_blank" title="LinkedIn">
<span className="material-symbols-outlined text-[18px]">share</span>
</a>
</div>
<button className="font-label-mono-sm text-label-mono-sm text-secondary flex items-center gap-1 hover:text-on-surface transition-colors">
<span>INSPECT CELL</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>

<div className="relative group rounded-xl bg-surface-container-low p-space-lg overflow-hidden shadow-md transition-all hover:bg-surface-container">
<div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-tertiary-container/10 blur-2xl group-hover:bg-tertiary-container/20 transition-all"></div>
<div className="flex items-start justify-between gap-space-md mb-space-md">
<div className="relative">
<img className="w-16 h-16 rounded-xl object-cover shadow-md" data-alt="Portrait photo of Jay Shah, energetic Indian college student, wearing dark jacket with subtle orange logo badge, warm indoor workshop background, creative look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBWlm-Y3kj8A2Iib_DY73QqLLJkm40lLe2wqPW4QCAIL3nPiZ3ZIKglxeJEEI0eVV1V35R7mVnUYxGH6Lr13L_CsdkmNX8jXehDdVTOA9BCPDG0sgcXhiFrPzV8LtDsr-k6rYIEGSU5vofgFtKV3-fhGdubSmWYBK4eKKcL0G5VW7Fp-BwwkrppPQ6IzlbYCR-KdyAHubz-yyqqKedItN0E-_eDpY6TFiviC6TZD_jcdvSYILkojtB1A"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center">
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-tertiary-fixed/20 text-tertiary-fixed font-label-mono-sm text-label-mono-sm font-semibold uppercase">Event Lead</span>
</div>
</div>
<div className="space-y-space-xs mb-space-md">
<div className="flex items-baseline justify-between">
<h2 className="font-title-md text-title-md text-on-surface font-bold">Jay Shah</h2>
<span className="font-label-mono-sm text-label-mono-sm text-outline">2nd Year CE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Directing community bootcamps, git hackfests, and collaborative branch showdowns across engineering institutes.
          </p>
</div>
<div className="flex flex-wrap gap-space-xs mb-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Community</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">DevOps</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface">Public Speaking</span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-sm text-outline">
<a className="hover:text-primary transition-colors flex items-center" href="https://github.com" target="_blank" title="GitHub">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</a>
<a className="hover:text-primary transition-colors flex items-center" href="https://linkedin.com" target="_blank" title="LinkedIn">
<span className="material-symbols-outlined text-[18px]">share</span>
</a>
</div>
<button className="font-label-mono-sm text-label-mono-sm text-tertiary flex items-center gap-1 hover:text-on-surface transition-colors">
<span>INSPECT CELL</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

<section className="space-y-space-md mb-space-xl">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm space-y-space-sm">
<div className="flex flex-col md:flex-row items-center gap-space-md">

<div className="relative flex-1 w-full">
<span className="absolute left-space-md top-1/2 -translate-y-1/2 text-primary font-label-mono-sm text-label-mono-sm">❯</span>
<input className="w-full pl-8 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-label-mono-sm text-label-mono-sm focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" placeholder="Search by name, skill, or role..." type="text"/>
</div>

<div className="flex items-center gap-space-xs text-outline font-label-mono-sm text-label-mono-sm">
<span>QUERY_SCOPE:</span>
<span className="text-on-surface font-semibold">ALL_CAMPUS_RECORDS</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">

<div className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-surface-container-lowest">
<button className="px-space-sm py-1 rounded bg-surface-container text-primary font-label-mono-sm text-label-mono-sm font-semibold">All Branches</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-mono-sm text-label-mono-sm transition-colors">CSE</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-mono-sm text-label-mono-sm transition-colors">IT</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-mono-sm text-label-mono-sm transition-colors">CE</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-mono-sm text-label-mono-sm transition-colors">Other</button>
</div>

<div className="flex flex-wrap items-center gap-space-xs">
<div className="flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-outline">
<span>YEAR:</span>
<select className="bg-transparent text-on-surface cursor-pointer focus:outline-none">
<option className="bg-surface-container-low text-on-surface">All Years</option>
<option className="bg-surface-container-low text-on-surface">1st Year</option>
<option className="bg-surface-container-low text-on-surface" selected="">2nd Year</option>
<option className="bg-surface-container-low text-on-surface">3rd Year</option>
<option className="bg-surface-container-low text-on-surface">4th Year</option>
</select>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-outline">
<span>ROLE:</span>
<select className="bg-transparent text-on-surface cursor-pointer focus:outline-none">
<option className="bg-surface-container-low text-on-surface">All Roles</option>
<option className="bg-surface-container-low text-on-surface">Core Team</option>
<option className="bg-surface-container-low text-on-surface">Lead</option>
<option className="bg-surface-container-low text-on-surface">Active Contributor</option>
<option className="bg-surface-container-low text-on-surface">Member</option>
</select>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-space-md mb-space-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px] text-primary">group</span>
<span>// 02. ACTIVE REGISTRY (SHOWING 8 OF 248)</span>
</div>
<div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline">
<span>SORT:</span>
<button className="text-on-surface hover:text-primary font-semibold">RECENT COMMITS ↓</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Meet Vaghasiya, young male Indian student smiling wearing a minimal black graphic tech t-shirt against modern concrete architectural studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt_o1tt3DRW_33jJM0JSJBa99qFU2cjtaTA0iSXBnS-vOzT8KNl-CwFNq9IhriZggHcF27So--ZlmDnznFHDs6f6-kgY24JoPHWyZQYbSfkEz19akoe4p-SrfIQf3tNWdH6lKcmieHRP5Ql7AltlzleFvR-cX4yw0lHA6c7FQu99hW_MNYdglI6YgKgEXLWWD6ipam743aWZmJ13j5rf3iq5lDMhsJK0S2BAe-5IPbrIu0lJUx260Hzw"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-tertiary-fixed/20 text-tertiary-fixed font-semibold">Active Contributor</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Meet Vaghasiya</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">3rd Year CSE</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">React</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Tailwind</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Next.js</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs border-t-0">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Priyanshi Dave, female Indian software engineering student with glasses in front of warm wooden library shelves with soft depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9qmfGu93NKi9owSlIjJ-wt_W9vqipQU26akVLmzHqnFQJ24FDxOUjPWSxloIZFgpGOl_GQ3gXY1KaGeiFA-FTcWPelUcLYn__esExpy5yrIkjy8lLeLKj6JX7v9r9-lCVrdoxGkJCqVFdlFcITkdBfCpkUPP1LWsZqgiXy9-uhb_OcQqLIjs-mFv_xLnQa4f2ewKjbZG44I4_LOK5Q-4Kdl-1EaT2_gs9rPcxIA1hNTr7OV9_bWSrA"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-secondary-fixed/20 text-secondary-fixed font-semibold">Project Member</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Priyanshi Dave</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">2nd Year IT</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Docker</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Linux</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Python</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Dhruv Prajapati, male Indian student in collegiate lab setting with soft neon backlight, focused and confident expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHcoSabLuvLOld_O3ImtMUuju7SOpLIcBruFS1Q_2NcpKNsxAeFYqNmwPjl8xII-zIJhohuSF_vdPPNxJjg_LFWwYz9yzW_-0PIGSOFvse8FUCCw_8RSoZgjoTYt3oiZvblsoOdBOAhTxwUCmzrMD8ePaWiqpLLsSdbHLrNDAo921QFILT7-MivXU6HmHug9VDMtlCTKyv7tpyR2_J-Hbxi3krCTTLUCNNmDYiVdDbNw3qvnheIuDk2A"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-primary-fixed/20 text-primary-fixed font-semibold">Core Contributor</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Dhruv Prajapati</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">2nd Year CE</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Go</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Kubernetes</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">gRPC</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Tanvi Joshi, creative female student designer in minimalist white shirt with headphones around neck, dark muted warm backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb9zhxA_YFcfp62u6qmACHzURucx4_tjOJbtr5irHuyynMcHxbc8oSr1jwzsL8yqYg4Cpn3b2G1Ehc4DSmRGIxCyURiCdooSmcjXsQvR3Xb6JGi-KJSKZF7uiaQbYWybuD6BK11rpqcMP4l6jOOVmoQ0ER-8S4FsF5Rp2szu_yebiD2Yd_tYYzW0jJgvUvG181MSthYocw18niTebc0hIm2JtO-OK1g_k5QTBvJmX5knvtwULg3D8C9w"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-secondary-fixed/20 text-secondary-fixed font-semibold">Design &amp; UI</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Tanvi Joshi</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">3rd Year CSE</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">UI/UX</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Figma</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">CSS Arc</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Parth Soni, South Asian male student engineer in glasses and dark sweater with warm orange backlighting, focused gaze" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGKnw2IX1qH1zrnGDqjKtGlFkCuLeKdKABYR8WGkyI_o9RlOGjbHMI-DetChR5BfoCFbN1k3yGU0Uu99Igr_TH539IJ9pBIZ9wbVsfUuHQj6yoS-SU-RQihao1-JxBzH0wtiiGzUwGQe9ti6Ysl55uAHSylWSS7ZBh0If52-NQVzTVVPZ_zLvXIDxCi2Tb0dpfSgAW2oEfE_veuLyF6Z6gM4zBjgVPcB2BIpSumk6VJPkMS6maIgSeHQ"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-tertiary-fixed/20 text-tertiary-fixed font-semibold">Active Contributor</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Parth Soni</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">1st Year IT</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">C++</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Algorithms</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Git Flow</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Mansi Trivedi, female college engineer in collegiate campus makerspace room with laptops and workshop gear, natural ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2O7XpK2r78nZltVl1dW87fNZXLOFnt2zbcKos2nusSfhRD7tQESPwM2mmOQSBr9AgQbY3zMziLjDSTR4giAO66vw-x2MZDZEKTHI9aTLOSgk32rA40MdO5rTTz3Ys6ukK0APrmUptztgqy1kSjA5-JBS_0Ine7HiU_gYON1aSAZ6oh--R0Ec5PhP6gyJ0Jpkysq8cyhuzmJqHm1czbrUP1QldoAOaL4NXG3u1CXg7o1AjmmwHZly6qw"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-outline-variant/30 text-outline font-semibold">Member</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Mansi Trivedi</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">2nd Year CE</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Node.js</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">MongoDB</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Express</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Kevin Choksi, young male Indian student smiling with laptop sticker visible in background, warm tech laboratory atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhxI3IF558k-V0LGWtjT6Ge_G4HoQh-2QUT-O2pbfe6owDnJe1Lk8Un36PlMPblCFO7lvdTb9gDXACds17Rh6YL-5-gb9O8jyYckhaAUUHvSJ5zUI7xk-9qkJ-BnDUP0HIkGtiKUvdxNgqttxNtqTSm-DxFkGigJgUiRRePqz1Gpu9GcKG6I1lyiLHGBQjpdHWlLjg31EKRvxSi9GvVehOU67AcUz-9ppOZhQ4sHpoVbn8DyM_-nSIhg"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-tertiary-fixed/20 text-tertiary-fixed font-semibold">Active Contributor</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Kevin Choksi</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">4th Year CSE</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Rust</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Wasm</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">CI/CD</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-sm hover:bg-surface-container transition-all group">
<div>
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<img className="w-12 h-12 rounded-lg object-cover" data-alt="Portrait of Harshita Mehta, female IT undergraduate student smiling warmly in front of a lecture theater with subtle ambient overhead lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIhjwxPUK7hwI9ejEVBJLn3L77189tksJmIL5ltypQ7mTvE4ww2emJ-u5mJEdOsW2Z9cmIpGtjweFPGu-eOEMq1viXwdfyKIlMA5aPEgI6OaxYeX0fxdmwiXehaOc_-7wgNKY32LTwPBqeTqsyeHMaDid6Aj7vYfDaU7UoXHDK1HyrqZzEHBWLstLNjQ0s4dySpm9ZW9xUnCY57jaqD40QDibeEdygWiYmOb2-I1FY5IQ2pir2RGEV6A"/>
<span className="px-2 py-0.5 rounded font-label-mono-sm text-[10px] bg-secondary-fixed/20 text-secondary-fixed font-semibold">Event Lead Team</span>
</div>
<h3 className="font-title-md text-body-lg text-on-surface font-semibold group-hover:text-primary transition-colors">Harshita Mehta</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline mb-space-sm">2nd Year IT</p>
<div className="flex flex-wrap gap-1 mb-space-md">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">DevOps</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">GitHub CLI</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-[10px]">Docs</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="flex items-center gap-space-xs text-outline">
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">code</span></a>
<a className="p-1 rounded hover:text-on-surface transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
</div>
<button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm transition-all" onClick={() => { openInspectDrawer() }}>Profile</button>
</div>
</div>
</div>
</section>

<aside className="fixed inset-y-0 right-0 w-full sm:w-[480px] bg-surface-container-low shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col justify-between overflow-y-auto" id="member-drawer">

<div className="p-space-lg bg-surface-container-lowest sticky top-0 z-10 flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-outline">
<span className="text-primary font-bold">#GrowWith git</span>
<span>/</span>
<span>NODE_INSPECT</span>
</div>
<button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-all" onClick={() => { closeInspectDrawer() }}>
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<div className="p-space-lg space-y-space-lg flex-1">

<div className="flex items-start gap-space-md">
<div className="relative">
<img className="w-20 h-20 rounded-xl object-cover shadow-md" data-alt="Detailed close up avatar portrait of Riddhi Thummar, tech admin lead student, studio warm lighting, charcoal backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvgoGO4RmvyuplUbtlgrHNAUIH1AZLnT-1VHGBgZbxxlp409Bg36a-XRiuwfKYjKSBRDvgyM5DIziRhE4sCOpssq9vsi2pO-LJ1DFtT7aOC8Sy2MauStJB3Nyaoum6xoL8BTvsNmbd0Cv48r6AbGiKLK_hwwQpbBhVMsiDxROasc9zsnkG3X0fQ3wa_XV0oL8DZfCGDvVb-TpFiXZpGUkU08OTrKjcktAy4MFqqowAQZdyKuozX5f1wQ"/>
<div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono-sm text-[9px] font-bold">ROOT</div>
</div>
<div className="space-y-1 min-w-0">
<span className="px-2 py-0.5 rounded bg-primary-fixed/20 text-primary-fixed font-label-mono-sm text-[10px] font-semibold uppercase">Admin &amp; Tech Lead</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Riddhi Thummar</h3>
<p className="font-label-mono-sm text-label-mono-sm text-outline">2nd Year CSE • CHARUSAT HQ</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container text-body-sm font-body-sm text-on-surface-variant">
        Passionate open-source maintainer, full-stack architect, and mentor at Git Club CHARUSAT. Leading technical curriculum, hands-on git workshops, and architecture reviews for internal college tooling.
      </div>

<div className="grid grid-cols-2 gap-space-xs font-label-mono-sm text-label-mono-sm">
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<span className="text-outline block text-[10px]">EMAIL_HANDLE</span>
<span className="text-on-surface truncate block">riddhi@charusat.edu.in</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<span className="text-outline block text-[10px]">STUDENT_ID</span>
<span className="text-on-surface truncate block">22CSE049</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase">// COMMIT FREQUENCY (LAST 16 WEEKS)</span>
<span className="font-label-mono-sm text-label-mono-sm text-tertiary">412 Commits</span>
</div>
<svg className="w-full h-16" fill="none" viewBox="0 0 320 60" xmlns="http://www.w3.org/2000/svg">

<g className="transition-opacity">

<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="0" y="4" /></rect>
<rect className="text-tertiary-container" fill="currentColor" height="10" rx="2" width="14" x="20" y="4" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="40" y="4" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="60" y="4" /></rect>
<rect className="text-tertiary-container" fill="currentColor" height="10" rx="2" width="14" x="80" y="4" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="100" y="4" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="120" y="4" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="140" y="4" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="160" y="4" /></rect>
<rect className="text-tertiary-container" fill="currentColor" height="10" rx="2" width="14" x="180" y="4" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="200" y="4" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="220" y="4" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="240" y="4" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="260" y="4" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="280" y="4" /></rect>
<rect className="text-tertiary" fill="currentColor" height="10" rx="2" width="14" x="300" y="4" /></rect>

<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="0" y="18" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="20" y="18" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="40" y="18" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="60" y="18" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="80" y="18" /></rect>
<rect className="text-tertiary" fill="currentColor" height="10" rx="2" width="14" x="100" y="18" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="120" y="18" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="140" y="18" /></rect>
<rect className="text-tertiary-container" fill="currentColor" height="10" rx="2" width="14" x="160" y="18" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="180" y="18" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="200" y="18" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="220" y="18" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="240" y="18" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="260" y="18" /></rect>
<rect className="text-tertiary" fill="currentColor" height="10" rx="2" width="14" x="280" y="18" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="300" y="18" /></rect>

<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="0" y="32" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="20" y="32" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="40" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="60" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="80" y="32" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="100" y="32" /></rect>
<rect className="text-tertiary" fill="currentColor" height="10" rx="2" width="14" x="120" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="140" y="32" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="160" y="32" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="180" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="200" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="220" y="32" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="240" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="260" y="32" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="280" y="32" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="300" y="32" /></rect>

<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="0" y="46" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="20" y="46" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="40" y="46" /></rect>
<rect className="text-tertiary" fill="currentColor" height="10" rx="2" width="14" x="60" y="46" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="80" y="46" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="100" y="46" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="120" y="46" /></rect>
<rect className="text-tertiary-container" fill="currentColor" height="10" rx="2" width="14" x="140" y="46" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="160" y="46" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="180" y="46" /></rect>
<rect className="text-primary" fill="currentColor" height="10" rx="2" width="14" x="200" y="46" /></rect>
<rect className="text-surface-container-high" fill="currentColor" height="10" rx="2" width="14" x="220" y="46" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="240" y="46" /></rect>
<rect className="text-tertiary" fill="currentColor" height="10" rx="2" width="14" x="260" y="46" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="280" y="46" /></rect>
<rect className="text-primary-container" fill="currentColor" height="10" rx="2" width="14" x="300" y="46" /></rect>
</g>
</svg>
</div>

<div className="space-y-space-xs">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase block">// ACTIVE PROJECT CONTRIBUTIONS</span>
<div className="space-y-2">
<div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">folder_code</span>
<div>
<span className="font-title-md text-body-md text-on-surface font-semibold block leading-tight">HomeVault</span>
<span className="font-label-mono-sm text-[11px] text-outline">Core Contributor • v1.4.0</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-mono-sm text-[10px]">Merged 24 PRs</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">school</span>
<div>
<span className="font-title-md text-body-md text-on-surface font-semibold block leading-tight">GitLearn</span>
<span className="font-label-mono-sm text-[11px] text-outline">Lead Architect • Interactive Sandbox</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-mono-sm text-[10px]">Maintainer</span>
</div>
</div>
</div>

<div className="space-y-space-xs">
<span className="font-label-mono-sm text-label-mono-sm text-outline uppercase block">// PAST EVENTS &amp; SESSIONS</span>
<div className="p-space-sm rounded-lg bg-surface-container space-y-2">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface font-medium">Git Merge Conflict Showdown '24</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">Mentor</span>
</div>
<div className="w-full h-px bg-surface-container-highest"></div>
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface font-medium">CHARUSAT Open Source Summit</span>
<span className="font-label-mono-sm text-label-mono-sm text-outline">Speaker</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-lowest sticky bottom-0 z-10 flex items-center gap-space-sm">
<button className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-title-md text-body-md font-semibold hover:brightness-110 transition-all text-center">
        Edit Profile
      </button>
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-title-md text-body-md hover:bg-surface-bright transition-all" onClick={() => { closeInspectDrawer() }}>
        Close
      </button>
</div>
</aside>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md hidden p-space-md" id="add-member-modal">
<div className="w-full max-w-lg rounded-xl bg-surface-container-low shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

<div className="px-space-lg py-space-md bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-primary">
<span className="material-symbols-outlined text-[18px]">person_add</span>
<span>// REGISTER_NEW_MEMBER</span>
</div>
<button className="p-1 rounded text-outline hover:text-on-surface" onClick={() => { document.getElementById('add-member-modal').classList.add('hidden') }}>
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>

<div className="p-space-lg space-y-space-md">
<div className="grid grid-cols-2 gap-space-md">
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-outline block">FULL NAME</label>
<input className="w-full px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="e.g. Aarav Patel" type="text"/>
</div>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-outline block">STUDENT ID</label>
<input className="w-full px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="e.g. 23IT082" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-outline block">DEPARTMENT / BRANCH</label>
<select className="w-full px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
<option>Computer Science (CSE)</option>
<option>Information Tech (IT)</option>
<option>Computer Eng (CE)</option>
<option>Other Department</option>
</select>
</div>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-outline block">ACADEMIC YEAR</label>
<select className="w-full px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
<option>1st Year</option>
<option selected="">2nd Year</option>
<option>3rd Year</option>
<option>4th Year</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-outline block">CLUB ROLE</label>
<select className="w-full px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container">
<option>General Member</option>
<option>Active Contributor</option>
<option>Project Member</option>
<option>Core Team Lead</option>
</select>
</div>
<div className="space-y-1">
<label className="font-label-mono-sm text-label-mono-sm text-outline block">INITIAL SKILL TOKENS (COMMA SEPARATED)</label>
<input className="w-full px-3 py-2 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="e.g. React, Git, Docker, Go" type="text"/>
</div>
<div className="p-space-sm rounded bg-surface-container-lowest flex items-center gap-space-sm">
<input checked="" className="accent-primary-container w-4 h-4 cursor-pointer" id="invite-box" type="checkbox"/>
<label className="font-label-mono-sm text-label-mono-sm text-outline cursor-pointer select-none" htmlFor="invite-box">Send Git Club CHARUSAT onboarding packet &amp; GitHub team invite</label>
</div>
</div>

<div className="px-space-lg py-space-md bg-surface-container-lowest flex items-center justify-end gap-space-sm">
<button className="px-space-md py-2 rounded bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all" onClick={() => { document.getElementById('add-member-modal').classList.add('hidden') }}>Cancel</button>
<button className="px-space-lg py-2 rounded bg-primary-container text-on-primary-container font-title-md text-body-sm font-semibold hover:brightness-110 shadow-md transition-all" onClick={() => { document.getElementById('add-member-modal').classList.add('hidden') }}>Register Contributor</button>
</div>
</div>
</div>


</div></div></main></div><div className="fixed bottom-6 right-6 z-50 flex items-center gap-space-xs p-1.5 rounded-full bg-surface-container-highest/90 backdrop-blur-xl shadow-[0_12px_32px_-4px_rgba(0,0,0,0.65)]"><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-primary-container text-on-primary-container font-title-md text-body-sm hover:brightness-110 transition-all"><span className="material-symbols-outlined text-[18px]">add</span><span>Event</span></button><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all"><span className="material-symbols-outlined text-[18px]">person_add</span><span>Member</span></button><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all"><span className="material-symbols-outlined text-[18px]">create_new_folder</span><span>Project</span></button><button className="flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm hover:bg-surface-bright transition-all"><span className="material-symbols-outlined text-[18px]">campaign</span><span>Broadcast</span></button></div></body></html></textarea></form></div></div></div></main></div>
</>
  );
}
