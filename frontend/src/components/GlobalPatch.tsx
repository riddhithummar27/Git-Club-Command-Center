import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GlobalPatch() {
  const location = useLocation();

  useEffect(() => {
    // Run this logic shortly after the page renders its innerHTML
    const timer = setTimeout(() => {
      applyPatches(location.pathname);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function applyPatches(path: string) {
  // 1. DASHBOARD QUICK ACTIONS & METRICS
  if (path === '/dashboard' || path === '/') {
    
    // Update Metrics Counters (Mock logic to show dynamic data capability)
    const metricsContainers = document.querySelectorAll('.font-label-mono-sm.text-on-surface.font-semibold');
    metricsContainers.forEach(container => {
        if (container.textContent?.includes('MEMBERS:')) {
            container.textContent = `MEMBERS: ${Math.floor(250 + Math.random() * 50)}`;
        }
        if (container.textContent?.includes('EVENTS:')) {
            container.textContent = `EVENTS: ${Math.floor(10 + Math.random() * 5)}`;
        }
        if (container.textContent?.includes('PROJECTS:')) {
            container.textContent = `PROJECTS: ${Math.floor(15 + Math.random() * 10)}`;
        }
    });

    // Quick Actions
    const quickActions = document.querySelector('.fixed.bottom-6.right-6');
    if (quickActions) {
      const eventBtn = quickActions.querySelector('a[data-path="events"]');
      if (eventBtn) {
        eventBtn.removeAttribute('data-path');
        eventBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector<HTMLElement>('#root a[data-path="events"]')?.click();
          setTimeout(() => (window as any).toggleModal?.('modal-event', true), 300);
        });
      }
      
      const memberBtn = quickActions.querySelector('a[data-path="members"]');
      if (memberBtn) {
        memberBtn.removeAttribute('data-path');
        memberBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector<HTMLElement>('#root a[data-path="members"]')?.click();
          setTimeout(() => (window as any).toggleModal?.('add-member-modal', true), 300);
        });
      }

      const projBtn = quickActions.querySelector('a[data-path="projects"]');
      if (projBtn) {
        projBtn.removeAttribute('data-path');
        projBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector<HTMLElement>('#root a[data-path="projects"]')?.click();
          setTimeout(() => (window as any).toggleModal?.('modal-add-project', true), 300);
        });
      }
      
      const broadcastBtn = quickActions.querySelector('a[data-path="announcements"]');
      if (broadcastBtn) {
        broadcastBtn.removeAttribute('data-path');
        broadcastBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector<HTMLElement>('#root a[data-path="announcements"]')?.click();
          setTimeout(() => (window as any).togglePublishModal?.(true), 300);
        });
      }
    }
  }

  // 2. MEMBERS: Add Member and Edit Member
  if (path === '/members') {
    // Override handleMemberSubmit to update DOM
    (window as any).handleMemberSubmit = function(e: any) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const name = fd.get('name') as string;
      const role = fd.get('role') as string;
      const dept = fd.get('department') as string;
      
      const grid = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2');
      if (grid) {
        const cardHtml = `
          <div class="relative p-space-md rounded-xl bg-surface-container shadow hover:shadow-md transition-all group border border-outline/10">
            <div class="flex items-start gap-space-md">
              <img alt="${name}" class="w-16 h-16 rounded-full object-cover ring-2 ring-primary-container" src="https://api.dicebear.com/7.x/notionists/svg?seed=${name}" />
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h3 class="font-title-md text-title-md text-on-surface truncate pr-2">${name}</h3>
                </div>
                <div class="text-primary font-label-mono-sm text-label-mono-sm mt-0.5">${role}</div>
                <div class="text-on-surface-variant font-body-sm text-body-sm mt-1 truncate">${dept}</div>
              </div>
            </div>
          </div>
        `;
        grid.insertAdjacentHTML('afterbegin', cardHtml);
      }
      
      const modal = document.getElementById('add-member-modal');
      if (modal) modal.classList.add('hidden');
      if ((window as any).triggerFeedback) (window as any).triggerFeedback('Member record added: ' + name);
    };
  }

  // 3. PROJECTS: Add Project and Project Details
  if (path === '/projects') {
    (window as any).handleProjectSubmit = function(e: any) {
      e.preventDefault();
      const fd = new FormData(e.target);
      const name = fd.get('name') as string;
      const desc = fd.get('description') as string;
      const domain = fd.get('domain') as string;
      
      const grid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2');
      if (grid) {
        const cardHtml = `
          <div class="project-card relative p-space-md rounded-xl bg-surface-container shadow-md border border-outline/10 flex flex-col h-full group" data-category="web">
            <h3 class="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">${name}</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">${desc}</p>
            <div class="mt-4 pt-4 border-t border-surface-container-highest flex items-center justify-between">
               <span class="px-2 py-1 bg-surface-container-high rounded text-xs text-on-surface">${domain}</span>
            </div>
          </div>
        `;
        grid.insertAdjacentHTML('afterbegin', cardHtml);
      }
      
      const modal = document.getElementById('modal-add-project');
      if (modal) modal.classList.add('hidden');
      if ((window as any).triggerFeedback) (window as any).triggerFeedback('Project initialized successfully.');
    };
    // Define openProjectModal globally so native buttons work
    (window as any).openProjectModal = function(name: string) {
       const modal = document.getElementById('modal-project-inspect');
       if (modal) {
           const titleEl = document.getElementById('inspect-modal-title');
           if (titleEl) titleEl.textContent = name;
           modal.classList.remove('hidden');
       }
    };
    
    // Bind Project Inspect Drawer for whole card click
    document.querySelectorAll('.project-card').forEach(card => {
       card.addEventListener('click', (e) => {
          // Don't trigger if they clicked a button inside the card
          if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) return;
          const drawer = document.getElementById('project-inspect-drawer');
          if (drawer) drawer.classList.remove('translate-x-full');
       });
    });
  }

  // 4. ANNOUNCEMENTS: Append to Timeline
  if (path === '/announcements') {
    const originalToggle = (window as any).togglePublishModal;
    if (originalToggle) {
        const form = document.getElementById('announcementForm');
        if (form && !form.dataset.patched) {
            form.dataset.patched = "true";
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = (document.getElementById('title') as HTMLInputElement).value;
                const message = (document.getElementById('message') as HTMLTextAreaElement).value;
                const category = (document.getElementById('category') as HTMLSelectElement).value;
                
                const feed = document.querySelector('.space-y-space-md');
                if (feed) {
                    const post = `
                    <div class="announcement-item p-space-md rounded-xl bg-surface-container shadow-sm border border-outline/5 relative group" data-category="general">
                      <div class="flex gap-space-md">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                          <span class="material-symbols-outlined text-[20px]">campaign</span>
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="flex items-start justify-between gap-4">
                            <div>
                              <div class="flex items-center gap-space-sm mb-1">
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-surface-container-highest text-on-surface">${category}</span>
                                <span class="text-xs text-outline font-label-mono-sm">Just now</span>
                              </div>
                              <h3 class="text-body-lg font-title-md text-on-surface font-semibold">${title}</h3>
                            </div>
                          </div>
                          <p class="text-body-md text-on-surface-variant mt-space-xs whitespace-pre-wrap">${message}</p>
                        </div>
                      </div>
                    </div>`;
                    feed.insertAdjacentHTML('afterbegin', post);
                }
                originalToggle(false);
                if ((window as any).triggerFeedback) (window as any).triggerFeedback('Broadcasted: ' + title);
            });
        }
    }
  }
}
