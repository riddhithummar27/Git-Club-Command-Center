const fs = require('fs');
let c = fs.readFileSync('frontend/src/pages/Dashboard.tsx', 'utf8');

c = c.replace(/<div className="absolute inset-0 flex items-center justify-center opacity-\[0.03\] pointer-events-none mix-blend-luminosity z-0">/, '<div className="fixed -bottom-40 -right-40 flex items-center justify-center opacity-15 pointer-events-none z-0">');

fs.writeFileSync('frontend/src/pages/Dashboard.tsx', c);
