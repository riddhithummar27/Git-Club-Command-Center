import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import rawHtml from './stitch.html?raw';

export default function RawStitch() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Parse the raw HTML string into a DOM so we can extract just the body contents
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');
    
    // Set the container HTML to the body's innerHTML
    containerRef.current.innerHTML = doc.body.innerHTML;
    
    // Setup routing
    const setupNavigation = () => {
      const links = containerRef.current!.querySelectorAll('a[data-path]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const path = link.getAttribute('data-path');
          if (path) {
            navigate('/' + path);
          }
        });
      });
    };
    
    setupNavigation();
  }, [navigate]);

  // Handle active states based on current route
  useEffect(() => {
    if (!containerRef.current) return;
    
    const currentPath = location.pathname.substring(1) || 'dashboard';
    
    // Update navigation active states
    const navLinks = containerRef.current.querySelectorAll('a[data-path]');
    navLinks.forEach(link => {
      if (link.getAttribute('data-path') === currentPath) {
        link.classList.add('bg-primary/10', 'text-primary', 'border-r-2', 'border-primary');
        link.classList.remove('text-on-surface-variant');
      } else {
        link.classList.remove('bg-primary/10', 'text-primary', 'border-r-2', 'border-primary');
        link.classList.add('text-on-surface-variant');
      }
    });
    
    // Show the correct section
    const sections = containerRef.current.querySelectorAll('main > div[id]');
    sections.forEach(section => {
      if (section.id === 'view-' + currentPath) {
        section.classList.remove('hidden');
        section.classList.add('flex');
      } else if (section.id.startsWith('view-')) {
        section.classList.add('hidden');
        section.classList.remove('flex');
      }
    });
    
  }, [location.pathname]);

  return <div ref={containerRef} className="w-full h-full text-on-surface bg-surface font-sans" />;
}
