document.addEventListener('DOMContentLoaded', () => {

    // ── Footer year ───────────────────────────────────
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

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

    // ── Active nav link on scroll ─────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navItems  = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active-link',
                        item.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => sectionObserver.observe(s));

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
