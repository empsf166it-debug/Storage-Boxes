document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Active menu highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Desktop Nav
    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active', 'text-brand-accent');
        } else {
            link.classList.remove('active', 'text-brand-accent');
        }
    });

    // Mobile Nav
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-brand-accent', 'bg-brand-cream', 'dark:bg-brand-charcoal');
        } else {
            link.classList.remove('text-brand-accent', 'bg-brand-cream', 'dark:bg-brand-charcoal');
        }
    });

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Check local storage for theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            updateThemeIcons(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            updateThemeIcons(true);
        }
    }

    function updateThemeIcons(isDark) {
        const iconClass = isDark ? 'bx-sun' : 'bx-moon';
        if (themeToggleBtn) themeToggleBtn.innerHTML = `<i class='bx ${iconClass}'></i>`;
        if (themeToggleMobile) themeToggleMobile.innerHTML = `<i class='bx ${iconClass}'></i>`;
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

    // RTL Toggle Logic
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const html = document.documentElement;
            if (html.getAttribute('dir') === 'ltr') {
                html.setAttribute('dir', 'rtl');
                rtlToggleBtn.textContent = 'LTR';
            } else {
                html.setAttribute('dir', 'ltr');
                rtlToggleBtn.textContent = 'RTL';
            }
        });
    }

    // Header scroll effect
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.remove('border-transparent');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    }

    // Lazy load images smoothing (simple implementation)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('loaded'));
        }
    });
});
