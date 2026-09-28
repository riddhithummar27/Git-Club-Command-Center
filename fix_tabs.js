const fs = require('fs');
let c = fs.readFileSync('frontend/src/pages/Dashboard.tsx', 'utf8');

if (!c.includes('activeTab')) {
  c = c.replace('export default function Dashboard() {', 'import { useState } from "react";\nexport default function Dashboard() {\n  const [activeTab, setActiveTab] = useState("events");\n');
  
  // replace tabs
  c = c.replace(/<button className="tab-activity-btn[^"]*" data-tab="events" type="button">Events<\/button>/, `<button onClick={() => setActiveTab('events')} className={\`tab-activity-btn px-2.5 py-1 rounded \${activeTab === 'events' ? 'bg-surface-container text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'} font-label-caps text-label-caps uppercase\`} data-tab="events" type="button">Events</button>`);
  
  c = c.replace(/<button className="tab-activity-btn[^"]*" data-tab="members" type="button">Members<\/button>/, `<button onClick={() => setActiveTab('members')} className={\`tab-activity-btn px-2.5 py-1 rounded \${activeTab === 'members' ? 'bg-surface-container text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'} font-label-caps text-label-caps uppercase\`} data-tab="members" type="button">Members</button>`);
  
  c = c.replace(/<button className="tab-activity-btn[^"]*" data-tab="projects" type="button">Projects<\/button>/, `<button onClick={() => setActiveTab('projects')} className={\`tab-activity-btn px-2.5 py-1 rounded \${activeTab === 'projects' ? 'bg-surface-container text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'} font-label-caps text-label-caps uppercase\`} data-tab="projects" type="button">Projects</button>`);

  fs.writeFileSync('frontend/src/pages/Dashboard.tsx', c);
}
