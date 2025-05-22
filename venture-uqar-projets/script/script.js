// Configuration des emails
const EMAIL_CONFIG = {
    professor: 'yacine_yaddaden@uqar.ca',
    projects: {
        macvision: {
            subject: 'Candidature - Projet MacVision AI (Détection d\'anomalies)',
            body: `Bonjour Professeur Yaddaden,

Je me permets de vous écrire concernant le projet MacVision AI proposé par Venture Carpets dans le cadre du cours d'Intelligence Artificielle II.

Je suis particulièrement intéressé(e) par ce projet car :
- J'ai un vif intérêt pour la vision par ordinateur et l'apprentissage automatique
- L'aspect industriel et concret du projet m'attire énormément
- Je souhaite développer mes compétences en C# et en détection d'anomalies
- L'opportunité de travailler sur un système temps réel me motive

Mes compétences actuelles incluent :
- [Veuillez décrire vos compétences pertinentes]
- [Langages de programmation maîtrisés]
- [Projets ou expériences en IA/vision par ordinateur]

Je serais ravi(e) de discuter plus en détail de ce projet et de ma candidature.

Cordialement,
[Votre nom]
[Votre programme d'études]
[Votre numéro d'étudiant]
[Votre email]`
        },
        presentgen: {
            subject: 'Candidature - Projet PrésenGen (Assistant IA présentations)',
            body: `Bonjour Professeur Yaddaden,

Je vous contacte au sujet du projet PrésenGen proposé par Venture Carpets dans le cadre du cours d'Intelligence Artificielle II.

Ce projet m'intéresse particulièrement pour les raisons suivantes :
- Passion pour l'intelligence artificielle générative
- Intérêt pour les applications commerciales de l'IA
- Désir d'acquérir une expérience en automatisation de processus
- Motivation pour créer des solutions ayant un impact business direct

Mes compétences et expériences pertinentes :
- [Décrivez vos compétences en programmation]
- [Expérience avec les bases de données]
- [Projets en IA ou développement d'applications]
- [Compétences en UI/UX si applicable]

Je suis enthousiaste à l'idée de contribuer à ce projet innovant et d'apprendre auprès de l'équipe de Venture Carpets.

Dans l'attente de votre retour,

Cordialement,
[Votre nom]
[Votre programme d'études]
[Votre numéro d'étudiant]
[Votre email]`
        }
    }
};

// Fonction pour postuler à un projet
function applyProject(projectType) {
    const config = EMAIL_CONFIG.projects[projectType];
    if (!config) {
        console.error('Type de projet non reconnu:', projectType);
        return;
    }

    const subject = encodeURIComponent(config.subject);
    const body = encodeURIComponent(config.body);
    const mailtoLink = `mailto:${EMAIL_CONFIG.professor}?subject=${subject}&body=${body}`;

    // Ouvrir le client email
    window.location.href = mailtoLink;

    // Analytics (optionnel)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'project_application', {
            project_type: projectType,
            method: 'email'
        });
    }
}

// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fermer le menu lors du clic sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling pour les liens d'ancrage
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Effet de parallaxe léger pour le hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Animation au scroll (intersection observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.project-card, .project-detail-card, .contact-card');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Changement d'apparence du header au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Fonction utilitaire pour copier du texte
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Texte copié avec succès');
    }).catch(function(err) {
        console.error('Erreur lors de la copie: ', err);
    });
}

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Performance monitoring (optionnel)
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Temps de chargement:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
