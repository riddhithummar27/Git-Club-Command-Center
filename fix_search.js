const fs = require('fs');
const files = [
  'frontend/src/pages/Dashboard.tsx',
  'frontend/src/pages/Events.tsx',
  'frontend/src/pages/Members.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let newSearch = '<input type="text" placeholder="Search node repository..." className="bg-transparent border-none outline-none font-label-ui text-label-ui text-text-primary placeholder:text-text-muted pr-space-md w-full" />';
  
  c = c.replace(/<span className="font-label-ui text-label-ui text-text-muted pr-space-md">Search node repository\.\.\.<\/span>/g, newSearch);
  
  fs.writeFileSync(f, c);
  console.log('updated', f);
});
