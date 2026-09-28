const fs = require('fs');
const path = require('path');

const files = [
  'frontend/src/pages/Dashboard.tsx',
  'frontend/src/pages/Events.tsx',
  'frontend/src/pages/Members.tsx'
];

const colorMap = {
  'bg-[#F6F7F3]': 'bg-background',
  'bg-[#FFFFFF]': 'bg-surface',
  'bg-[#EEF1EC]': 'bg-surface-subtle',
  'bg-[#E7ECE7]': 'bg-surface-container',
  'bg-[#DDE3DD]': 'bg-surface-container-high',
  
  'border-[#DDE3DD]': 'border-border-subtle',
  'border-[#C9D2CA]': 'border-border-subtle', // close enough
  
  'text-[#1D2923]': 'text-text-primary',
  'text-[#66736C]': 'text-text-secondary',
  'text-[#8B958F]': 'text-text-muted',
  
  'text-[#C9D2CA]': 'text-border-subtle',
  
  'bg-primary': 'bg-primary',
  'text-primary': 'text-primary',
  'border-primary': 'border-primary',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  Object.keys(colorMap).forEach(hexClass => {
    // We need to replace the exact class
    // using regex boundary might be tricky because of brackets, so simple replaceAll
    content = content.split(hexClass).join(colorMap[hexClass]);
  });
  
  // also handle opacities like bg-[#EEF1EC]/60 -> bg-surface-subtle/60
  content = content.replace(/bg-\[#EEF1EC\]\/(\d+)/g, 'bg-surface-subtle/$1');
  content = content.replace(/border-\[#DDE3DD\]\/(\d+)/g, 'border-border-subtle/$1');
  
  fs.writeFileSync(file, content);
  console.log('Updated', file);
});
