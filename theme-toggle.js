// theme-toggle.js
// This script initializes and manages the theme toggle button
// It should be called whenever the navbar is loaded or reloaded

function initThemeToggle() {
    try {
        console.log('[theme-toggle] initializing');
        const btn = document.getElementById('theme-toggle');
        if (!btn) {
            console.log('[theme-toggle] button not found in DOM');
            return;
        }

        function updateButton(isRetro) {
            // Use a clear icon so the button is obvious even if styles vary
            btn.innerHTML = isRetro ? '☀️' : '🌙';
            btn.title = isRetro ? 'Switch to dark mode' : 'Switch to light mode';
            btn.setAttribute('aria-pressed', isRetro ? 'true' : 'false');
        }

        // Initialize from localStorage
        try {
            const saved = localStorage.getItem('site-theme');
            const isRetro = saved === 'retro';
            document.body.classList.toggle('retro-theme', isRetro);
            updateButton(isRetro);
            console.log('[theme-toggle] loaded state:', saved);
        } catch (e) {
            updateButton(false);
            console.error('[theme-toggle] error reading localStorage', e);
        }

        // Attach click handler
        btn.addEventListener('click', function(){
            const isRetro = document.body.classList.toggle('retro-theme');
            try { localStorage.setItem('site-theme', isRetro ? 'retro' : 'dark'); } catch(e){ console.error(e); }
            console.log('[theme-toggle] clicked; newState=', isRetro);
            updateButton(isRetro);
        });

        console.log('[theme-toggle] click handler attached');
    } catch (err) {
        console.error('[theme-toggle] initialization failed', err);
    }
}

// Initialize on first load
initThemeToggle();
