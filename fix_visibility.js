const fs = require('fs');
let c = fs.readFileSync('frontend/src/pages/Dashboard.tsx', 'utf8');

c = c.replace(/<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0 overflow-hidden">/, '<div className="fixed bottom-[-150px] right-[-100px] flex items-center justify-center opacity-15 pointer-events-none z-0">');

// wait, the regex was:
// <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0"> (no overflow hidden in the div, it was in the main tag)
c = c.replace(/<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">/, '<div className="fixed bottom-[-150px] right-[-100px] flex items-center justify-center opacity-15 pointer-events-none z-0">');

fs.writeFileSync('frontend/src/pages/Dashboard.tsx', c);
