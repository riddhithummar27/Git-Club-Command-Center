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
    
    // Setup routing for sidebar links and mobile navigation
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

    // Mobile menu toggle & drawer controller
    const setupMobileMenu = () => {
      const mobileMenuBtn = containerRef.current?.querySelector('#mobile-menu-btn');
      const sidebar = containerRef.current?.querySelector('#app-sidebar');
      const overlay = containerRef.current?.querySelector('#mobile-overlay');

      if (!sidebar) return;

      const closeSidebar = () => {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        overlay?.classList.add('hidden');
        document.body.style.overflow = '';
      };

      const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        overlay?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      };

      mobileMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('translate-x-0')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });

      overlay?.addEventListener('click', closeSidebar);

      sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeSidebar);
      });
    };
    setupMobileMenu();
    
    
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



      
        // Profile picture handled in settings catch(e) {}
      const profile = (window as any).GIT_CLUB_PROFILE || {};

        
        if (currentPath === 'settings') {
           const inputFirstName = containerRef.current.querySelector<HTMLInputElement>('#inputFirstName');
           const inputLastName = containerRef.current.querySelector<HTMLInputElement>('#inputLastName');
           const inputStudentId = containerRef.current.querySelector<HTMLInputElement>('#inputStudentId');
           const roleSelect = containerRef.current.querySelector<HTMLSelectElement>('#roleSelect');
           const roleCustom = containerRef.current.querySelector<HTMLInputElement>('#roleCustom');
           const inputPersonalEmail = containerRef.current.querySelector<HTMLInputElement>('#inputPersonalEmail');
           const bioTextarea = containerRef.current.querySelector<HTMLTextAreaElement>('#bioTextarea');
           const inputUsername = containerRef.current.querySelector<HTMLInputElement>('#inputUsername');
           const inputDepartment = containerRef.current.querySelector<HTMLInputElement>('#inputDepartment');
           const inputGithub = containerRef.current.querySelector<HTMLInputElement>('#inputGithub');
           const inputLinkedin = containerRef.current.querySelector<HTMLInputElement>('#inputLinkedin');
           const preview = containerRef.current.querySelector<HTMLImageElement>('#profilePicPreview');
           const fileInput = containerRef.current.querySelector<HTMLInputElement>('#profilePicInput');
           const removeBtn = containerRef.current.querySelector<HTMLButtonElement>('#removeProfilePicBtn');
           const topSaveBtn = containerRef.current.querySelector<HTMLElement>('#topSaveBtn');
           const dockSaveBtn = containerRef.current.querySelector<HTMLElement>('#dockSaveBtn');

           // Populate fields
           if (inputFirstName && profile.firstName) inputFirstName.value = profile.firstName;
           if (inputLastName && profile.lastName) inputLastName.value = profile.lastName;
           if (inputStudentId && profile.studentId) inputStudentId.value = profile.studentId;
           if (roleSelect && profile.role) roleSelect.value = profile.role;
           if (roleCustom && profile.roleCustom) roleCustom.value = profile.roleCustom;
           if (inputPersonalEmail && profile.email) inputPersonalEmail.value = profile.email;
           if (bioTextarea && profile.bio) bioTextarea.value = profile.bio;
           if (inputUsername && profile.username) inputUsername.value = profile.username;
           if (inputDepartment && profile.department) inputDepartment.value = profile.department;
           if (inputGithub && profile.github) inputGithub.value = profile.github;
           if (inputLinkedin && profile.linkedin) inputLinkedin.value = profile.linkedin;

           // Ensure preview shows user avatar if saved
           if (preview && (profile.profilePic || profile.avatar)) {
              preview.src = profile.profilePic || profile.avatar;
           }

           // Make all inputs editable
           const allInputs = [
             inputFirstName, inputLastName, inputStudentId, roleSelect, roleCustom,
             inputPersonalEmail, bioTextarea, inputGithub, inputLinkedin, inputUsername, inputDepartment
           ];
           allInputs.forEach(inp => {
             if (inp) inp.removeAttribute('disabled');
           });

           // Show save buttons
           if (topSaveBtn) topSaveBtn.classList.remove('hidden');
           if (dockSaveBtn) dockSaveBtn.classList.remove('hidden');

           // Profile photo upload handling
           if (fileInput && preview) {
              fileInput.addEventListener('change', (e: any) => {
                 const file = e.target.files?.[0];
                 if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev: any) => {
                       const img = new Image();
                       img.onload = () => {
                          const canvas = document.createElement('canvas');
                          const MAX_SIZE = 400;
                          let width = img.width;
                          let height = img.height;
                          if (width > height) {
                             if (width > MAX_SIZE) {
                                height = Math.round((height * MAX_SIZE) / width);
                                width = MAX_SIZE;
                             }
                          } else {
                             if (height > MAX_SIZE) {
                                width = Math.round((width * MAX_SIZE) / height);
                                height = MAX_SIZE;
                             }
                          }
                          canvas.width = width;
                          canvas.height = height;
                          const ctx = canvas.getContext('2d');
                          ctx?.drawImage(img, 0, 0, width, height);
                          const compressedUrl = canvas.toDataURL('image/jpeg', 0.85);
                          preview.src = compressedUrl;
                          profile.profilePic = compressedUrl;
                          profile.avatar = compressedUrl;
                          (window as any).GIT_CLUB_PROFILE = profile;
                          localStorage.setItem('userProfileData', JSON.stringify(profile));
                          
                          // Sync all profile images in DOM
                          containerRef.current?.querySelectorAll<HTMLImageElement>('img[alt="Profile"]').forEach(imgEl => {
                             imgEl.src = compressedUrl;
                          });
                       };
                       img.src = ev.target.result;
                    };
                    reader.readAsDataURL(file);
                 }
              });
           }

           // Remove photo handling
           if (removeBtn && preview) {
              removeBtn.addEventListener('click', () => {
                 const defaultAvatar = `https://api.dicebear.com/7.x/notionists/svg?seed=${profile.firstName || 'user'}`;
                 preview.src = defaultAvatar;
                 profile.profilePic = defaultAvatar;
                 profile.avatar = defaultAvatar;
                 (window as any).GIT_CLUB_PROFILE = profile;
                 localStorage.setItem('userProfileData', JSON.stringify(profile));
                 containerRef.current?.querySelectorAll<HTMLImageElement>('img[alt="Profile"]').forEach(imgEl => {
                    imgEl.src = defaultAvatar;
                 });
              });
           }

           const triggerSave = async () => {
              const requiredInputs = [
                { el: inputFirstName, name: "First Name" },
                { el: inputLastName, name: "Last Name" },
                { el: inputStudentId, name: "Student ID" },
                { el: inputPersonalEmail, name: "Email" },
                { el: inputUsername, name: "Username" },
                { el: inputDepartment, name: "Department" },
                { el: inputGithub, name: "GitHub URL" },
                { el: inputLinkedin, name: "LinkedIn URL" }
              ];
              
              for (const input of requiredInputs) {
                 if (input.el && !input.el.value.trim()) {
                    alert(input.name + ' is required!');
                    input.el.focus();
                    return;
                 }
              }

              if (inputFirstName) profile.firstName = inputFirstName.value;
              if (inputLastName) profile.lastName = inputLastName.value;
              if (inputStudentId) profile.studentId = inputStudentId.value;
              if (roleSelect) profile.role = roleSelect.value;
              if (roleCustom) profile.roleCustom = roleCustom.value;
              if (inputPersonalEmail) profile.email = inputPersonalEmail.value;
              if (bioTextarea) profile.bio = bioTextarea.value;
              if (inputUsername) profile.username = inputUsername.value;
              if (inputDepartment) profile.department = inputDepartment.value;
              if (inputGithub) profile.github = inputGithub.value;
              if (inputLinkedin) profile.linkedin = inputLinkedin.value;

              if (topSaveBtn) topSaveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">save</span><span>Saving...</span>';
              if (dockSaveBtn) dockSaveBtn.innerHTML = 'Saving...';

              const fullName = ((profile.firstName || '') + ' ' + (profile.lastName || '')).trim();
              const memberData = {
                  name: fullName,
                  role: profile.roleCustom || profile.role || 'Member',
                  department: profile.department || profile.studentId || 'No ID',
                  email: profile.email || '',
                  avatar: profile.profilePic || profile.avatar || ''
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
              } catch(e) { console.error('Member save note:', e); }

              localStorage.setItem('userProfileData', JSON.stringify(profile));
              (window as any).GIT_CLUB_PROFILE = profile;

              // Immediately sync header
              containerRef.current?.querySelectorAll('a[data-path="settings"]').forEach(link => {
                 const nameEl = link.querySelector('.font-title-md');
                 const roleEl = link.querySelector('.font-label-mono-sm');
                 const imgEl = link.querySelector<HTMLImageElement>('img[alt="Profile"]');
                 if (nameEl) nameEl.textContent = profile.firstName + ' ' + (profile.lastName || '');
                 if (roleEl) roleEl.textContent = profile.role || profile.roleCustom || 'Admin & Tech Lead';
                 if (imgEl && (profile.profilePic || profile.avatar)) imgEl.src = profile.profilePic || profile.avatar;
              });

              if (topSaveBtn) topSaveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span><span>Saved!</span>';
              if (dockSaveBtn) dockSaveBtn.innerHTML = 'Saved!';
              setTimeout(() => {
                 if (topSaveBtn) topSaveBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">save</span><span>Save Profile Changes</span>';
                 if (dockSaveBtn) dockSaveBtn.innerHTML = 'Save Changes';
              }, 2500);
           };

           if (topSaveBtn) topSaveBtn.addEventListener('click', triggerSave);
           if (dockSaveBtn) dockSaveBtn.addEventListener('click', triggerSave);
        }

// Sync global profile state across all pages on load
      

      if (profile && profile.role === '') profile.role = 'Admin & Tech Lead';
        if (profile && containerRef.current) {
        // 1. Update the Header Profile Link (Name, Role, Avatar)
        containerRef.current.querySelectorAll('a[data-path="settings"]').forEach(link => {
           const nameEl = link.querySelector('.font-title-md');
           const roleEl = link.querySelector('.font-label-mono-sm');
           const imgEl = link.querySelector('img[alt="Profile"]');
           
           if (nameEl && profile.firstName) nameEl.textContent = profile.firstName + ' ' + (profile.lastName || '');
           if (roleEl) roleEl.textContent = profile.role || 'Member';
           
           if (imgEl && profile.profilePic) {
             (imgEl as HTMLImageElement).src = profile.profilePic;
           }
        });

        // 2. Update the "Role: Admin" Chip in header
        const allSpans = containerRef.current.querySelectorAll('span');
        allSpans.forEach(span => {
          if (span.textContent?.startsWith('Role:')) {
             let coreRole = profile.role || 'Member';
               if (coreRole.includes('Admin')) coreRole = 'Admin';
               span.textContent = 'Role: ' + coreRole;
          }
        });

        // 3. Update the Settings Page Hero Card
        if (currentPath === 'settings') {
          const heroName = containerRef.current.querySelector('h2.font-headline-sm');
          const heroRole = containerRef.current.querySelector('p.text-secondary');
          if (heroName && profile.firstName) heroName.textContent = profile.firstName + ' ' + (profile.lastName || '');
          if (heroRole) heroRole.textContent = profile.role || 'Member';
          
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
