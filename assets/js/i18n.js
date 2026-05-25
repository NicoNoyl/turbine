const translations = {
    fr: {
        nav: {
            about:   'À propos',
            music:   'Musique',
            video:   'Vidéo',
            shows:   'Concerts',
            contact: 'Contact',
        },
        hero: {
            tagline: 'Rock — Montréal',
        },
        about: {
            title: 'À propos',
            p1: 'Turbine est un groupe de rock fondé à Montréal. Leur son unique mêle énergie brute et mélodies accrocheuses, créant une expérience musicale inoubliable.',
            p2: 'Depuis leur formation, le groupe s\'est démarqué sur la scène locale avec des performances live explosives et des compositions originales qui repoussent les limites du genre.',
        },
        music: {
            title: 'Musique',
        },
        video: {
            title:       'Vidéo',
            placeholder: 'Vidéo à venir',
        },
        shows: {
            title:   'Prochains concerts',
            none:    'Aucun concert prévu pour le moment. Restez à l\'affût !',
            tickets: 'Billets',
        },
        contact: {
            title:   'Contact',
            name:    'Votre nom',
            email:   'Votre courriel',
            message: 'Votre message',
            send:    'Envoyer',
            success: 'Message envoyé !',
        },
        footer: {
            rights: 'Tous droits réservés.',
        },
    },

    en: {
        nav: {
            about:   'About',
            music:   'Music',
            video:   'Video',
            shows:   'Next Shows',
            contact: 'Contact',
        },
        hero: {
            tagline: 'Rock — Montréal',
        },
        about: {
            title: 'About',
            p1: 'Turbine is a rock band founded in Montréal. Their unique sound blends raw energy with catchy melodies, creating an unforgettable musical experience.',
            p2: 'Since their formation, the band has made a name for itself on the local scene with explosive live performances and original compositions that push the boundaries of the genre.',
        },
        music: {
            title: 'Music',
        },
        video: {
            title:       'Video',
            placeholder: 'Video coming soon',
        },
        shows: {
            title:   'Next Shows',
            none:    'No upcoming shows at this time. Stay tuned!',
            tickets: 'Tickets',
        },
        contact: {
            title:   'Contact',
            name:    'Your name',
            email:   'Your email',
            message: 'Your message',
            send:    'Send',
            success: 'Message sent!',
        },
        footer: {
            rights: 'All rights reserved.',
        },
    },
};

let currentLang = localStorage.getItem('turbine-lang') || 'fr';

function t(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[currentLang]) ?? key;
}

function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('turbine-lang', lang);
    applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    applyTranslations();
});
