const fs = require('fs');
let c = fs.readFileSync('frontend/src/pages/Events.tsx', 'utf8');

c = c.replace(/<div className="fixed inset-0[^"]+" id="drawer-backdrop"[^>]*><\/div>/, "<div className={`fixed inset-0 bg-[#1D2923]/40 backdrop-blur-xs z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsDrawerOpen(false)}></div>");

c = c.replace(/<div className="fixed top-0 right-0 h-full w-full[^"]+" id="create-event-drawer">/, "<div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto border-l border-border-subtle ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} id=\"create-event-drawer\">");

fs.writeFileSync('frontend/src/pages/Events.tsx', c);
