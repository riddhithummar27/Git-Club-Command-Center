import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import dashboardHtml from './stitch.html?raw';
import membersHtml from './members.html?raw';
import projectsHtml from './projects.html?raw';
import eventsHtml from './events.html?raw';

const pages: Record<string, string> = {
  'dashboard': dashboardHtml,
  'members': membersHtml,
  'projects': projectsHtml,
  'events': eventsHtml,
};

export default function RawStitch() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const currentPath = location.pathname.substring(1) || 'dashboard';
  // Fallback to dashboard if the page HTML isn't available yet
  const htmlToLoad = pages[currentPath] || dashboardHtml;

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Parse the raw HTML string into a DOM so we can extract just the body contents
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlToLoad, 'text/html');
    
    // Set the container HTML to the body's innerHTML
    containerRef.current.innerHTML = doc.body.innerHTML;
    
    // Setup routing for sidebar links
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
  }, [navigate, htmlToLoad]);

  return <div ref={containerRef} className="w-full h-full text-on-surface bg-surface font-sans" />;
}
