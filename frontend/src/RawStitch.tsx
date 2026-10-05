import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import dashboardHtml from './stitch.html?raw';
import membersHtml from './members.html?raw';
import projectsHtml from './projects.html?raw';
import eventsHtml from './events.html?raw';
import announcementsHtml from './announcements.html?raw';
import notificationsHtml from './notifications.html?raw';
import settingsHtml from './settings.html?raw';
import analyticsHtml from './analytics.html?raw';
import loginHtml from './login.html?raw';
import showcaseHtml from './showcase.html?raw';
import messagesHtml from './messages.html?raw';

const pages: Record<string, string> = {
  'dashboard': dashboardHtml,
  'members': membersHtml,
  'projects': projectsHtml,
  'events': eventsHtml,
  'announcements': announcementsHtml,
  'notifications': notificationsHtml,
  'messages': messagesHtml,
  'settings': settingsHtml,
  'analytics': analyticsHtml,
  'login': loginHtml,
  'showcase': showcaseHtml,
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
    
    // Execute any scripts that came with the HTML (since innerHTML strips them)
    const scripts = doc.body.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = oldScript.textContent;
      document.body.appendChild(newScript);
      // Clean up script tag after execution to prevent clutter
      document.body.removeChild(newScript);
    });
    
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

      // Enforce admin restrictions
      
      // Check if profile is empty
      setTimeout(() => {
        try {
          const profileStr = localStorage.getItem('userProfileData');
          const profile = profileStr ? JSON.parse(profileStr) : {};
          const isComplete = profile.firstName && profile.lastName;
          
          const currentPath = window.location.pathname;
          if (!isComplete && currentPath !== '/settings' && currentPath !== '/login' && currentPath !== '/showcase' && currentPath !== '/') {
             alert('Please complete your profile configuration first!');
             navigate('/settings');
             return;
          }

          const isAdmin = profile.role && profile.role.toLowerCase().includes('admin');
          
          if (!isAdmin) {
            // Hide action buttons
            const buttons = document.querySelectorAll<HTMLElement>('button, a');
            buttons.forEach(b => {
               const text = b.textContent || '';
               if (text.includes('+ Add Member') || text.includes('+ New Project') || text.includes('+ Schedule Event') || text.includes('Broadcast')) {
                  b.style.display = 'none';
               }
            });
            
            // Hide floating shortcuts
            const shortcuts = document.querySelectorAll<HTMLElement>('.fixed.bottom-6.right-6 a');
            shortcuts.forEach(s => {
               if(!s.textContent.includes('Messages')) s.style.display = 'none';
            });
          }
        } catch(e) {}
      }, 100);



      // Sync global profile state across all pages on load
      const profile = (window as any).GIT_CLUB_PROFILE;
      if (profile && containerRef.current) {
        containerRef.current.querySelectorAll('a[data-path="settings"]').forEach(link => {
           const nameEl = link.querySelector('.font-title-md');
           const roleEl = link.querySelector('.font-label-mono-sm');
           if (nameEl) nameEl.textContent = profile.firstName + ' ' + profile.lastName;
           if (roleEl) roleEl.textContent = profile.roleCustom;
        });
      }

      const handleForceNavigate = (e: any) => {
        if (e.detail && e.detail.path) {
          navigate(e.detail.path);
        }
      };
      window.addEventListener('force-navigate', handleForceNavigate);
      
      return () => {
        window.removeEventListener('force-navigate', handleForceNavigate);
      };

  }, [navigate, htmlToLoad]);

  return <div ref={containerRef} className="w-full h-full text-on-surface bg-surface font-sans" />;
}
