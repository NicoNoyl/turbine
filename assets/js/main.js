document.addEventListener('DOMContentLoaded', () => {

    // ── Footer year ───────────────────────────────────
    document.querySelectorAll('.year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // ── Active nav link (by current page) ────────────
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
        link.classList.toggle('active-link', link.dataset.page === currentPage);
    });

    // ── Hamburger menu ────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── Navbar scroll shadow ──────────────────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── Contact form (Formsubmit.co) ──────────────────
    const form     = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form?.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;

        try {
            const res = await fetch('https://formsubmit.co/ajax/contact@turbinemusic.ca', {
                method:  'POST',
                headers: { 'Accept': 'application/json' },
                body:    new FormData(form),
            });

            if (res.ok) {
                feedback.textContent  = typeof t === 'function' ? t('contact.success') : 'Message envoyé !';
                feedback.className    = 'form-feedback success';
                form.reset();
            } else {
                throw new Error();
            }
        } catch {
            feedback.textContent = typeof t === 'function' ? t('contact.error') : 'Erreur — réessayez.';
            feedback.className   = 'form-feedback error';
        } finally {
            btn.disabled = false;
        }
    });

});
