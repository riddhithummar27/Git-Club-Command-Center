const fs = require('fs');
let c = fs.readFileSync('frontend/src/pages/Members.tsx', 'utf8');

if (!c.includes('isDrawerOpen')) {
  c = c.replace('export default function Members() {', 'import { useState } from "react";\nexport default function Members() {\n  const [isDrawerOpen, setIsDrawerOpen] = useState(false);\n');
  
  // replace "Add Member" button
  c = c.replace(/<button[^>]+Add Member<\/button>/, `<button onClick={() => setIsDrawerOpen(true)} className="h-9 px-4 bg-primary hover:bg-[#526f60] text-white rounded-lg flex items-center gap-1.5 font-semibold text-xs shadow-[0_2px_8px_rgba(29,41,35,0.08)] transition-all cursor-pointer group">
  <span className="material-symbols-outlined text-[18px]">add</span>
  <span className="font-label-ui">Add Member</span>
  </button>`);

  c = c.replace(/<div className="fixed inset-0[^"]+" id="drawer-backdrop"[^>]*><\/div>/, "<div className={`fixed inset-0 bg-[#1D2923]/40 backdrop-blur-xs z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsDrawerOpen(false)}></div>");

  c = c.replace(/<div className="fixed top-0 right-0 h-full w-full[^"]+" id="add-member-drawer">/, "<div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto border-l border-border-subtle ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} id=\"add-member-drawer\">");

  fs.writeFileSync('frontend/src/pages/Members.tsx', c);
}
