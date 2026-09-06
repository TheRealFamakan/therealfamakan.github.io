const portfolioTranslations = {
    en: {
        'nav.home': 'Home',
        'nav.portfolio': 'Portfolio',
        'nav.about': 'About',
        'nav.certifications': 'Certifications',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'nav.viewCv': 'View CV',
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.system': 'System',
        'home.hello': 'Hello, my name is',
        'home.professionPrefix': "I'm a",
        'home.intro': 'Building intelligent systems, scalable data pipelines, and optimization models. Specialized in Machine Learning, Operations Research (MILP, metaheuristics), and RAG architectures.',
        'sections.portfolio': 'Portfolio',
        'sections.about': 'About Me',
        'sections.certifications': 'Certifications',
        'sections.services': 'Services',
        'sections.contact': 'Contact Me',
        'sections.education': 'Education',
        'sections.experience': 'Experience',
        'portfolio.latest': 'My Last Projects :',
        'about.title': 'Driven by Data, Powered by Code',
        'about.intro': 'I am a final-year (3rd year) Engineering student at ENSA Khouribga, specializing in Data Engineering and AI. I design end-to-end data pipelines, formulate and solve optimization problems (Mixed Integer Linear Programming, metaheuristics), train and fine-tune Deep Learning models (87% accuracy on medical imaging), and build RAG-based conversational agents. I am actively seeking a PFE internship (4-6 months) to apply my skills in a real-world, data-driven environment.',
        'about.statusLabel': 'Status :',
        'about.status': 'Seeking PFE Internship — from Feb. 2027',
        'skills.title': 'Technologies I work with',
        'actions.hireMe': 'Hire Me',
        'actions.downloadCv': 'Download CV',
        'actions.github': 'View on GitHub',
        'actions.sendMessage': 'Send Message',
        'contact.questions': 'Have You Any Questions ?',
        'contact.available': "I'M AT YOUR SERVICES",
        'contact.phone': 'Call Me On',
        'contact.location': 'Location',
        'contact.email': 'Email',
        'contact.website': 'Website',
        'contact.sendEmail': 'SEND ME AN EMAIL',
        'contact.responsive': "I'M VERY RESPONSIVE TO MESSAGES",
        'form.name': 'Name',
        'form.email': 'Email',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'footer.rights': '©2026 Famakan Camara. All rights reserved.'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.portfolio': 'Projets',
        'nav.about': 'À propos',
        'nav.certifications': 'Certifications',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'nav.viewCv': 'Voir le CV',
        'theme.light': 'Clair',
        'theme.dark': 'Sombre',
        'theme.system': 'Système',
        'home.hello': "Bonjour, je m'appelle",
        'home.professionPrefix': 'Je suis',
        'home.intro': "Je conçois des systèmes intelligents, des pipelines de données évolutifs et des modèles d'optimisation. Spécialisé en Machine Learning, recherche opérationnelle (MILP, métaheuristiques) et architectures RAG.",
        'sections.portfolio': 'Projets',
        'sections.about': 'À propos',
        'sections.certifications': 'Certifications',
        'sections.services': 'Services',
        'sections.contact': 'Contact',
        'sections.education': 'Formation',
        'sections.experience': 'Expérience',
        'portfolio.latest': 'Mes derniers projets :',
        'about.title': 'Les données au service du code',
        'about.intro': "Je suis étudiant ingénieur en 3e année à l'ENSA Khouribga, spécialisé en Data Engineering et en IA. Je conçois des pipelines de données de bout en bout, formule et résous des problèmes d'optimisation (programmation linéaire en nombres entiers, métaheuristiques), entraîne et affine des modèles de Deep Learning (87 % de précision en imagerie médicale) et construis des agents conversationnels basés sur le RAG. Je recherche actuellement un stage de fin d'études (4 à 6 mois) pour mettre mes compétences en pratique.",
        'about.statusLabel': 'Statut :',
        'about.status': 'À la recherche d’un stage PFE — à partir de février 2027',
        'skills.title': 'Technologies que j’utilise',
        'actions.hireMe': 'Me contacter',
        'actions.downloadCv': 'Télécharger le CV',
        'actions.github': 'Voir sur GitHub',
        'actions.sendMessage': 'Envoyer le message',
        'contact.questions': 'Vous avez des questions ?',
        'contact.available': 'JE SUIS À VOTRE SERVICE',
        'contact.phone': 'Téléphone',
        'contact.location': 'Localisation',
        'contact.email': 'E-mail',
        'contact.website': 'Site web',
        'contact.sendEmail': 'ENVOYEZ-MOI UN E-MAIL',
        'contact.responsive': 'JE RÉPONDS RAPIDEMENT AUX MESSAGES',
        'form.name': 'Nom',
        'form.email': 'E-mail',
        'form.subject': 'Objet',
        'form.message': 'Message',
        'footer.rights': '©2026 Famakan Camara. Tous droits réservés.'
    }
};

function setPortfolioLanguage(language) {
    const translations = portfolioTranslations[language] || portfolioTranslations.en;
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const translation = translations[element.dataset.i18n];
        if (translation) element.textContent = translation;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const translation = translations[element.dataset.i18nPlaceholder];
        if (translation) element.placeholder = translation;
    });

    document.querySelectorAll('.language-button').forEach((button) => {
        const isActive = button.dataset.language === language;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    localStorage.setItem('portfolio-language', language);
}

document.querySelectorAll('.language-button').forEach((button) => {
    button.addEventListener('click', () => setPortfolioLanguage(button.dataset.language));
});

setPortfolioLanguage(localStorage.getItem('portfolio-language') || 'en');