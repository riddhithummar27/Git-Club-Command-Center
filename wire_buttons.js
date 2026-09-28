const fs = require('fs');

// DASHBOARD
let dash = fs.readFileSync('frontend/src/pages/Dashboard.tsx', 'utf8');
if (!dash.includes('activeRole')) {
  dash = dash.replace(/const \[activeTab, setActiveTab\] = useState\("events"\);/, 'const [activeTab, setActiveTab] = useState("events");\n  const [activeRole, setActiveRole] = useState("admin");');
  
  // Replace role buttons
  const roleClassesStr = 'px-3 py-1.5 rounded font-label-caps text-label-caps uppercase transition-all shadow-sm';
  
  dash = dash.replace(/<button class[^>]+data-role="admin"[^>]*>[\s\S]*?<\/button>/, `<button onClick={() => setActiveRole('admin')} className={\`${roleClassesStr} \${activeRole === 'admin' ? 'bg-primary text-on-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-surface-container'}\`}>Admin</button>`);
  
  dash = dash.replace(/<button class[^>]+data-role="event_lead"[^>]*>[\s\S]*?<\/button>/, `<button onClick={() => setActiveRole('event_lead')} className={\`${roleClassesStr} \${activeRole === 'event_lead' ? 'bg-primary text-on-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-surface-container'}\`}>Event Lead</button>`);
  
  dash = dash.replace(/<button class[^>]+data-role="project_lead"[^>]*>[\s\S]*?<\/button>/, `<button onClick={() => setActiveRole('project_lead')} className={\`${roleClassesStr} \${activeRole === 'project_lead' ? 'bg-primary text-on-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-surface-container'}\`}>Project Lead</button>`);
  
  dash = dash.replace(/<button class[^>]+data-role="member"[^>]*>[\s\S]*?<\/button>/, `<button onClick={() => setActiveRole('member')} className={\`${roleClassesStr} \${activeRole === 'member' ? 'bg-primary text-on-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-surface-container'}\`}>Member</button>`);
  
  fs.writeFileSync('frontend/src/pages/Dashboard.tsx', dash);
}

// EVENTS
let ev = fs.readFileSync('frontend/src/pages/Events.tsx', 'utf8');
if (!ev.includes('viewMode')) {
  ev = ev.replace(/const \[isDrawerOpen, setIsDrawerOpen\] = useState\(false\);/, 'const [isDrawerOpen, setIsDrawerOpen] = useState(false);\n  const [viewMode, setViewMode] = useState("calendar");\n  const [timeframe, setTimeframe] = useState("month");\n  const [filter, setFilter] = useState("all");');

  // Timeframe buttons
  ev = ev.replace(/<button[^>]+Month<\/button>/, `<button onClick={() => setTimeframe('month')} className={\`px-3 py-1.5 rounded font-label-caps text-label-caps font-semibold transition-colors \${timeframe === 'month' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}\`}>Month</button>`);
  ev = ev.replace(/<button[^>]+Week<\/button>/, `<button onClick={() => setTimeframe('week')} className={\`px-3 py-1.5 rounded font-label-caps text-label-caps font-semibold transition-colors \${timeframe === 'week' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}\`}>Week</button>`);
  ev = ev.replace(/<button[^>]+Day<\/button>/, `<button onClick={() => setTimeframe('day')} className={\`px-3 py-1.5 rounded font-label-caps text-label-caps font-semibold transition-colors \${timeframe === 'day' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}\`}>Day</button>`);

  // View mode buttons
  ev = ev.replace(/<button[^>]+calendar_view_month.*?<\/button>/s, `<button onClick={() => setViewMode('calendar')} className={\`w-8 h-8 rounded flex items-center justify-center transition-colors \${viewMode === 'calendar' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}\`}><span className="material-symbols-outlined text-[18px]">calendar_view_month</span></button>`);
  ev = ev.replace(/<button[^>]+view_list.*?<\/button>/s, `<button onClick={() => setViewMode('list')} className={\`w-8 h-8 rounded flex items-center justify-center transition-colors \${viewMode === 'list' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}\`}><span className="material-symbols-outlined text-[18px]">view_list</span></button>`);

  // Filter pills
  const renderFilter = (val, label) => `<button onClick={() => setFilter('${val}')} className={\`px-3 py-1.5 rounded-full font-label-caps text-label-caps uppercase transition-colors whitespace-nowrap \${filter === '${val}' ? 'bg-text-primary text-surface' : 'bg-surface-subtle border border-border-subtle text-text-secondary hover:text-text-primary'}\`}>${label}</button>`;
  
  ev = ev.replace(/<button[^>]+>All Events<\/button>/, renderFilter('all', 'All Events'));
  ev = ev.replace(/<button[^>]+>Workshops<\/button>/, renderFilter('workshops', 'Workshops'));
  ev = ev.replace(/<button[^>]+>Competitions<\/button>/, renderFilter('competitions', 'Competitions'));
  ev = ev.replace(/<button[^>]+>Community<\/button>/, renderFilter('community', 'Community'));

  fs.writeFileSync('frontend/src/pages/Events.tsx', ev);
}

// MEMBERS
let mem = fs.readFileSync('frontend/src/pages/Members.tsx', 'utf8');
if (!mem.includes('filter')) {
  mem = mem.replace(/const \[isDrawerOpen, setIsDrawerOpen\] = useState\(false\);/, 'const [isDrawerOpen, setIsDrawerOpen] = useState(false);\n  const [filter, setFilter] = useState("all");');

  const renderFilter = (val, label) => `<button onClick={() => setFilter('${val}')} className={\`px-3 py-1.5 rounded-full font-label-caps text-label-caps uppercase transition-colors whitespace-nowrap \${filter === '${val}' ? 'bg-text-primary text-surface' : 'bg-surface-subtle border border-border-subtle text-text-secondary hover:text-text-primary'}\`}>${label}</button>`;
  
  mem = mem.replace(/<button[^>]+>All Members<\/button>/, renderFilter('all', 'All Members'));
  mem = mem.replace(/<button[^>]+>Core Team<\/button>/, renderFilter('core', 'Core Team'));
  mem = mem.replace(/<button[^>]+>Project Leads<\/button>/, renderFilter('leads', 'Project Leads'));
  mem = mem.replace(/<button[^>]+>Event Leads<\/button>/, renderFilter('event', 'Event Leads'));
  mem = mem.replace(/<button[^>]+>Alumni<\/button>/, renderFilter('alumni', 'Alumni'));

  fs.writeFileSync('frontend/src/pages/Members.tsx', mem);
}

console.log('Done wiring state to buttons');
