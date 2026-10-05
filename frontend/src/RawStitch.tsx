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



      
        // Profile picture handling
        const fileInput = containerRef.current.querySelector('#profilePicInput');
        const removeBtn = containerRef.current.querySelector('#removeProfilePicBtn');
        const preview = containerRef.current.querySelector<HTMLImageElement>('#profilePicPreview');

        if (fileInput && preview) {
            fileInput.addEventListener('change', (e: any) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev: any) => {
                        preview.src = ev.target.result;
                        (window as any).GIT_CLUB_PROFILE.profilePic = ev.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        if (removeBtn && preview) {
            removeBtn.addEventListener('click', () => {
                preview.src = "https://api.dicebear.com/7.x/notionists/svg?seed=user";
                (window as any).GIT_CLUB_PROFILE.profilePic = preview.src;
            });
        }

      
        
      try {
         const localData = localStorage.getItem('userProfileData');
         if (localData) {
            (window as any).GIT_CLUB_PROFILE = JSON.parse(localData);
         }
      } catch(e) {}
      const profile = (window as any).GIT_CLUB_PROFILE || {};

        if (currentPath === 'settings') {
           // Populate inputs
           const inputFirstName = containerRef.current.querySelector<HTMLInputElement>('#inputFirstName');
           const inputLastName = containerRef.current.querySelector<HTMLInputElement>('#inputLastName');
           const inputStudentId = containerRef.current.querySelector<HTMLInputElement>('#inputStudentId');
           const roleSelect = containerRef.current.querySelector<HTMLSelectElement>('#roleSelect');
           const roleCustom = containerRef.current.querySelector<HTMLInputElement>('#roleCustom');
           const inputPersonalEmail = containerRef.current.querySelector<HTMLInputElement>('#inputPersonalEmail');
           const bioTextarea = containerRef.current.querySelector<HTMLTextAreaElement>('#bioTextarea');

           if (inputFirstName && profile.firstName) inputFirstName.value = profile.firstName;
           if (inputLastName && profile.lastName) inputLastName.value = profile.lastName;
           if (inputStudentId && profile.studentId) inputStudentId.value = profile.studentId;
           if (roleSelect && profile.role) roleSelect.value = profile.role;
           if (roleCustom && profile.roleCustom) roleCustom.value = profile.roleCustom;
           if (inputPersonalEmail && profile.email) inputPersonalEmail.value = profile.email;
           if (bioTextarea && profile.bio) bioTextarea.value = profile.bio;

           
             // Hook save buttons
             
             
             const topDiscardBtn = containerRef.current.querySelector('#topDiscardBtn');
             const dockResetBtn = containerRef.current.querySelector('#dockResetBtn');
             
             const topEditBtn = containerRef.current.querySelector('#topEditBtn');
             const dockEditBtn = containerRef.current.querySelector('#dockEditBtn');
             
             
             
             
             
             
             const inputsToToggle = [
               inputFirstName, inputLastName, inputStudentId, roleSelect, roleCustom, inputPersonalEmail, bioTextarea
             ];

             const uploadPicLabel = containerRef.current.querySelector('#uploadPicLabel');
             const removeProfilePicBtn = containerRef.current.querySelector('#removeProfilePicBtn');
             
             const toggleEditMode = (enable: boolean) => {
               inputsToToggle.forEach(input => {
                 if (input) {
                   if (enable) {
                     input.removeAttribute('disabled');
                     input.classList.add('ring-1', 'ring-primary-container');
                   } else {
                     input.setAttribute('disabled', 'true');
                     input.classList.remove('ring-1', 'ring-primary-container');
                   }
                 }
               });
               
               if (enable) {
                 topEditBtn?.classList.add('hidden');
                 dockEditBtn?.classList.add('hidden');
                 topSaveBtn?.classList.remove('hidden');
                 topDiscardBtn?.classList.remove('hidden');
                 dockSaveBtn?.classList.remove('hidden');
                 dockResetBtn?.classList.remove('hidden');
                 uploadPicLabel?.classList.remove('hidden');
                 removeProfilePicBtn?.classList.remove('hidden');
               } else {
                 topEditBtn?.classList.remove('hidden');
                 dockEditBtn?.classList.remove('hidden');
                 topSaveBtn?.classList.add('hidden');
                 topDiscardBtn?.classList.add('hidden');
                 dockSaveBtn?.classList.add('hidden');
                 dockResetBtn?.classList.add('hidden');
                 uploadPicLabel?.classList.add('hidden');
                 removeProfilePicBtn?.classList.add('hidden');
               }
             };

             if (topEditBtn) topEditBtn.addEventListener('click', () => toggleEditMode(true));
             if (dockEditBtn) dockEditBtn.addEventListener('click', () => toggleEditMode(true));

             if (topDiscardBtn) topDiscardBtn.addEventListener('click', () => {
               // Revert
               if (inputFirstName && profile.firstName) inputFirstName.value = profile.firstName;
               if (inputLastName && profile.lastName) inputLastName.value = profile.lastName;
               if (inputStudentId && profile.studentId) inputStudentId.value = profile.studentId;
               if (roleSelect && profile.role) roleSelect.value = profile.role;
               if (roleCustom && profile.roleCustom) roleCustom.value = profile.roleCustom;
               if (inputPersonalEmail && profile.email) inputPersonalEmail.value = profile.email;
               if (bioTextarea && profile.bio) bioTextarea.value = profile.bio;
               toggleEditMode(false);
             });
             
             if (dockResetBtn) dockResetBtn.addEventListener('click', () => {
               if (topDiscardBtn) (topDiscardBtn as HTMLElement).click();
             });

             // Old hook save buttons
           const dockSaveBtn = containerRef.current.querySelector('#dockSaveBtn');
           const topSaveBtn = containerRef.current.querySelector('#topSaveBtn');

           const triggerSave = async () => {
              if (inputFirstName) profile.firstName = inputFirstName.value;
              if (inputLastName) profile.lastName = inputLastName.value;
              if (inputStudentId) profile.studentId = inputStudentId.value;
              if (roleSelect) profile.role = roleSelect.value;
              if (roleCustom) profile.roleCustom = roleCustom.value;
              if (inputPersonalEmail) profile.email = inputPersonalEmail.value;
              if (bioTextarea) profile.bio = bioTextarea.value;
              
              if (dockSaveBtn) dockSaveBtn.innerHTML = 'Saving...';
              
              const fullName = ((profile.firstName || '') + ' ' + (profile.lastName || '')).trim();
              const memberData = {
                  name: fullName,
                  role: profile.roleCustom || profile.role || 'Member',
                  department: profile.studentId || 'No ID',
                  email: profile.email || '',
                  avatar: profile.profilePic || ''
              };

              try {
                  if (profile.firebaseId) {
                      if ((window as any).firebaseUpdateMember) await (window as any).firebaseUpdateMember(profile.firebaseId, memberData);
                  } else {
                      if ((window as any).firebaseAddMember) {
                          const newId = await (window as any).firebaseAddMember(memberData);
                          profile.firebaseId = newId;
                      }
                  }
              } catch(e) { console.error('Firebase save failed', e); }

              localStorage.setItem('userProfileData', JSON.stringify(profile));
              (window as any).GIT_CLUB_PROFILE = profile;

              toggleEditMode(false);
              if (dockSaveBtn) dockSaveBtn.innerHTML = 'Saved!';
              if (topSaveBtn) topSaveBtn.innerHTML = 'Changes Saved';
              setTimeout(() => {
                 navigate('/dashboard');
              }, 1000);
           };

           if (dockSaveBtn) dockSaveBtn.addEventListener('click', triggerSave);
           if (topSaveBtn) topSaveBtn.addEventListener('click', triggerSave);
        }

        // Sync global profile state across all pages on load
      

      if (profile && containerRef.current) {
        // 1. Update the Header Profile Link (Name, Role, Avatar)
        containerRef.current.querySelectorAll('a[data-path="settings"]').forEach(link => {
           const nameEl = link.querySelector('.font-title-md');
           const roleEl = link.querySelector('.font-label-mono-sm');
           const imgEl = link.querySelector('img[alt="Profile"]');
           
           if (nameEl && profile.firstName) nameEl.textContent = profile.firstName + ' ' + (profile.lastName || '');
           if (roleEl && profile.roleCustom) roleEl.textContent = profile.roleCustom;
           else if (roleEl && profile.role) roleEl.textContent = profile.role;
           
           if (imgEl && profile.profilePic) {
             (imgEl as HTMLImageElement).src = profile.profilePic;
           }
        });

        // 2. Update the "Role: Admin" Chip in header
        const allSpans = containerRef.current.querySelectorAll('span');
        allSpans.forEach(span => {
          if (span.textContent?.startsWith('Role:')) {
             span.textContent = 'Role: ' + (profile.roleCustom || profile.role || 'Member');
          }
        });

        // 3. Update the Settings Page Hero Card
        if (currentPath === 'settings') {
          const heroName = containerRef.current.querySelector('h2.font-headline-sm');
          const heroRole = containerRef.current.querySelector('p.text-secondary');
          if (heroName && profile.firstName) heroName.textContent = profile.firstName + ' ' + (profile.lastName || '');
          if (heroRole) heroRole.textContent = profile.roleCustom || profile.role || 'Member';
          
          if (profile.profilePic) {
            const previewImg = containerRef.current.querySelector<HTMLImageElement>('#profilePicPreview');
            if (previewImg) previewImg.src = profile.profilePic;
          }
        }
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
