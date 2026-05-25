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
            p1: 'Turbine est un projet musical novateur qui fusionne l\'énergie brute du turntablism et la puissance des musiques électroniques, avec un accent marqué sur la basshouse, le breakbeat et la drum and bass. Imprégné de l\'ADN du hip hop et nourri aux DVDs de scratch, le trio repousse les frontières du scratch traditionnel en le réinventant sous forme d\'expérience dancefloor.',
            p2: 'En 2022, Turbine s\'est hissé à la 4e place des DMC World Championships, l\'une des compétitions les plus prestigieuses au monde. Cette reconnaissance a ouvert la voie à des sorties internationales, notamment sur le label français Banzai Lab, ainsi qu\'à des collaborations avec les labels Gorilla Warfare (UK) et Gravitas Recordings (US), avec les singles feat. Killa P (Roll Deep) et feat. Pav4n (Foreign Beggars).',
            p3: 'Sur scène, Turbine dévoile un live show hyperactif taillé pour les festivals, qui conjugue bass music, sound design et techniques de scratch explosives. Ce format unique, pensé pour le dancefloor, a déjà électrisé plusieurs scènes majeures, entre autres Osheaga, le Dox\'Art Festival et le FME, mettant en avant un mélange unique entre musique électronique et hip-hop sur la scène bass music.',
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
            p1: 'Turbine is a groundbreaking trio that fuses turntablism with high-energy bass music, pushing the boundaries of scratch culture by turning it into a full-on dancefloor experience. Rooted in hip hop and shaped by the legacy of scratch technique, the group reinvents DJing through explosive live performances blending basshouse, breakbeat and drum & bass.',
            p2: 'In 2022, Turbine placed 4th at the DMC World Championships, earning global recognition and opening the door to major collaborations. The trio has since released on Banzai Lab, Gorilla Warfare (feat. Killa P of Roll Deep) and Gravitas Recordings (feat. Pav4n of Foreign Beggars).',
            p3: 'Their hyperactive live show, driven by aggressive scratch techniques and heavy sound design, is built for big stages and festival crowds. Turbine has already shaken key events such as Osheaga, Dox\'Art Festival, and FME, bringing a unique crossover between electronic music and hip hop to the front of the bass scene.',
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
