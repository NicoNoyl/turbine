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

    // ── Contact form ──────────────────────────────────
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', e => {
        e.preventDefault();
        // TODO: wire up to Formspree / EmailJS / your backend
        const msg = typeof t === 'function' ? t('contact.success') : 'Message sent!';
        alert(msg);
        form.reset();
    });

});
