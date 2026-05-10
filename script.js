/* ======================
THEME TOGGLE (Dark / Light)
====================== */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function syncThemeIcon() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if (themeIcon) {
    themeIcon.className = current === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

syncThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncThemeIcon();
  });
}

/* ======================
SAFE DOM REFERENCES
====================== */
document.body.classList.add('js-loaded');

const loaderEl = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
const loaderPct = document.getElementById('loaderPct');
const scrollProgressEl = document.getElementById('scrollProgress');

const cursorEl = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

const burger = document.getElementById('burger');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobLinks = document.querySelectorAll('.mob-link');

const bmCursor = document.getElementById('bmCursor');

/* ======================
LOADER
====================== */
if (loaderEl && loaderFill && loaderPct) {
  let pct = 0;

  const loaderInterval = setInterval(() => {
    pct += Math.random() * 18;

    if (pct >= 100) {
      pct = 100;
      clearInterval(loaderInterval);
      setTimeout(() => {
        loaderEl.classList.add('done');
      }, 400);
    }

    loaderFill.style.width = `${pct}%`;
    loaderPct.textContent = `${Math.floor(pct)}%`;
  }, 100);
}

/* ======================
SCROLL PROGRESS
====================== */
window.addEventListener(
  'scroll',
  () => {
    if (!scrollProgressEl) return;

    const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min((window.scrollY / total) * 100, 100);

    scrollProgressEl.style.width = `${progress}%`;
  },
  { passive: true }
);

/* ======================
CUSTOM CURSOR
====================== */
if (cursorEl && cursorRing) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  cursorEl.style.left = mouseX + 'px';
  cursorEl.style.top = mouseY + 'px';
  cursorEl.style.transform = 'translate(-50%, -50%)';
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  cursorRing.style.transform = 'translate(-50%, -50%)';

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Use clientX/Y which are always in viewport coordinates, unaffected by RTL
    cursorEl.style.left = mouseX + 'px';
    cursorEl.style.top = mouseY + 'px';
    cursorEl.style.transform = 'translate(-50%, -50%)';
  });

  function animRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    cursorRing.style.transform = 'translate(-50%, -50%)';
    requestAnimationFrame(animRing);
  }

  animRing();

  document
    .querySelectorAll(
      'a, button, .btn-magnetic, .pill, .project-item, .contact-link, .skill-row, .nav-item, .lang-btn, .back-top'
    )
    .forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });
}

/* ======================
NAVBAR SCROLL
====================== */
if (navbar) {
  window.addEventListener(
    'scroll',
    () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);

      let current = '';

      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.getAttribute('id');
      });

      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
      });
    },
    { passive: true }
  );
}

/* ======================
BURGER / MOBILE MENU
====================== */
if (burger && mobileOverlay) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
  });

  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
      burger.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ======================
MAGNETIC BUTTONS
====================== */
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  // Skip contact-links since they have their own hover translateX effect
  const isContactLink = btn.classList.contains('contact-link');

  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    const inner = btn.querySelector('.btn-inner');

    if (!isContactLink) {
      btn.style.transform = `translate(${dx * 0.5}px, ${dy * 0.5}px)`;
    }
    if (inner) inner.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    const inner = btn.querySelector('.btn-inner');
    if (!isContactLink) btn.style.transform = '';
    if (inner) inner.style.transform = '';
  });
});

/* ======================
SCROLL ANIMATIONS
====================== */
const animEls = document.querySelectorAll('.anim-fade-up');

if (animEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  animEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 5) * 0.08}s`;
    observer.observe(el);
  });
}

/* ======================
COUNTER ANIMATION
====================== */
function animateCounter(el) {
  const target = parseInt(el.dataset.val, 10) || 0;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  let start = 0;

  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);

  const timer = setInterval(() => {
    start += increment;

    if (start >= target) {
      start = target;
      clearInterval(timer);
    }

    if (el.dataset.decimal) {
      const decimals = parseInt(el.dataset.decimal);
      const divisor = Math.pow(10, decimals);
      el.textContent = `${prefix}${(start / divisor).toFixed(decimals)}${suffix}`;
    } else if (prefix === '0.') {
      el.textContent = `0.${Math.floor(start).toString().padStart(2, '0')}`;
    } else {
      el.textContent = `${prefix}${Math.floor(start)}${suffix}`;
    }
  }, step);
}

const counterTargets = document.querySelectorAll('.hs-num');

if (counterTargets.length) {
  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterTargets.forEach(el => counterObserver.observe(el));
}

/* ======================
SKILL BARS ANIMATE
====================== */
const barFills = document.querySelectorAll('.bar-fill');

if (barFills.length) {
  const barObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // Store target width before resetting (must be inline style for reliability)
          const width = target.style.width || target.getAttribute('style')?.match(/width:\s*([\d.]+%)/)?.[1] || getComputedStyle(target).width;
          const safeWidth = width && width !== '0px' ? width : '0%';
          target.dataset.targetWidth = safeWidth;

          target.style.width = '0%';
          target.style.transition = 'none';

          setTimeout(() => {
            target.style.transition = 'width 1.4s cubic-bezier(0.25,0.46,0.45,0.94)';
            target.style.width = target.dataset.targetWidth;
          }, 100);

          barObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.3 }
  );

  barFills.forEach(el => barObserver.observe(el));
}

/* ======================
NOTEBOOK BARS ANIMATE
====================== */
const nbFills = document.querySelectorAll('.nb-fill');

if (nbFills.length) {
  const nbObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.style.width || getComputedStyle(target).width;

          target.style.width = '0%';

          setTimeout(() => {
            target.style.transition = 'width 1.2s cubic-bezier(0.25,0.46,0.45,0.94)';
            target.style.width = width;
          }, 200);

          nbObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.3 }
  );

  nbFills.forEach(el => nbObserver.observe(el));
}

/* ======================
BROWSER MOCKUP CURSOR
====================== */
if (bmCursor) {
  const positions = [
    { top: '50%', left: '50%' },
    { top: '28%', left: '65%' },
    { top: '65%', left: '35%' },
    { top: '20%', left: '25%' },
    { top: '75%', left: '70%' },
    { top: '40%', left: '55%' }
  ];

  let bmIdx = 0;

  setInterval(() => {
    bmIdx = (bmIdx + 1) % positions.length;
    bmCursor.style.transition = 'top 1s ease, left 1s ease';
    bmCursor.style.top = positions[bmIdx].top;
    bmCursor.style.left = positions[bmIdx].left;
  }, 1800);
}

/* ======================
SMOOTH SCROLL
====================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');

    if (!id || id === '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

/* ======================
LANGUAGE SWITCHER (i18n)
====================== */
const translations = {
  fr: {
    'nav.about': 'À propos',
    'nav.featured': 'Showcase',
    'nav.skills': 'Skills',
    'nav.projects': 'Projets',
    'nav.parcours': 'Parcours',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',

    'hero.tag': 'En stage chez GRDF · Data Engineering & BI',
    'hero.role1': 'Data Science',
    'hero.role2': 'Machine Learning',
    'hero.role3': 'Polytech Lille',
    'hero.desc': 'Élève-Ingénieur ISIA · Je construis des systèmes data complets — de l\'analyse exploratoire jusqu\'au déploiement en production.',
    'hero.btn1': 'Voir mes projets <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'Me contacter',
    'hero.stat1': 'Projets',
    'hero.stat2': 'Langages',
    'hero.stat3': 'Expertise Statistique',
    'hero.stat4': 'Stages',
    'hero.fc3val': 'En stage',

    'about.title': 'Data-Driven',
    'about.p1': 'Je m\'appelle <strong>Amine Nakrou</strong>, élève-ingénieur en 4e année à <strong>Polytech Lille</strong> (ISIA). Ce qui me passionne ? Transformer des données brutes en produits concrets — pipelines ML, dashboards interactifs, modèles déployés via Docker & MLflow.',
    'about.p2': 'Actuellement en stage chez <strong>GRDF</strong> à Saint-Denis (Data Engineering & BI). Disponible pour de nouvelles opportunités à partir de <strong>septembre 2026</strong>.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> Villeneuve-d\'Ascq, France',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> Polytech Lille — ISIA',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR · ES',
    'about.chip4': '<i class="fas fa-briefcase"></i> Stage GRDF · 2026',
    'about.badge': 'En Stage · GRDF',

    'featured.title': 'Phares',
    'proj1.title': 'Customer Churn Prediction',
    'proj1.desc': 'Un pipeline ML complet de bout en bout — feature engineering sur données déséquilibrées, XGBoost vs Random Forest (AUC 0.91), dashboard Streamlit, API Flask containerisée et tracking MLflow.',
    'proj2.title': 'EA Sports FC — Analyse FIFA',
    'proj2.desc': 'Plongée dans 18 000+ profils de joueurs FIFA sur 8 saisons. Corrélations salaire/performance, détection d\'outliers, portraits des top 10 et modèle de classification supervisée.',
    'feat.github': 'Voir sur GitHub <i class="fab fa-github"></i>',

    'skills.title': 'Stack',
    'skills.s1': 'Langages',
    'skills.s2': 'ML / Data',
    'skills.s3': 'Big Data & SI',
    'skills.s4': 'Databases',
    'skills.s5': 'Outils & Méthodes',

    'projects.title': 'Réalisations',
    'proj1.long': 'J\'ai construit un pipeline ML complet pour prédire l\'attrition clients : feature engineering sur données déséquilibrées, comparaison XGBoost vs Random Forest (AUC 0.91). Le tout accessible via un dashboard Streamlit et une API Flask containerisée avec Docker, tracking MLflow.',
    'proj2.long': 'Une plongée dans 18 000+ profils de joueurs sur 8 saisons FIFA (2016–2024). Analyse des liens salaire/performance, chasse aux outliers, portrait statistique des 10 meilleurs. En bonus : un modèle de classification pour prédire la catégorie d\'un joueur.',
    'proj3.title': 'Time Project — Estimation d\'Effort',
    'proj3.long': 'Comment estimer le temps d\'un projet logiciel avant de commencer ? Sur des données réelles AT&T, j\'ai comparé régression linéaire, k-NN et arbres de décision avec validation croisée — résultats présentés dans un rapport RMarkdown interactif.',
    'proj4.title': 'Optimisation de la Production',
    'proj4.long': 'Une société de parfums cherche à maximiser ses profits avec des ressources limitées — un classique de la recherche opérationnelle. J\'ai modélisé le problème en programmation linéaire, résolu avec Lindo, puis analysé la robustesse de la solution optimale.',
    'proj5.title': 'Suicide Rates Dashboard — USA',
    'proj5.long': 'Dix-huit ans de données sur les taux de suicide aux États-Unis (2000–2018), visualisées dans un dashboard interactif JavaScript. L\'outil permet d\'explorer les tendances par état, genre et tranche d\'âge — pour donner du sens aux chiffres derrière les statistiques.',
    'proj6.title': 'Promenade Aléatoire du Cavalier',
    'proj6.long': 'Un cavalier sur un échiquier infini qui se déplace au hasard — reviendra-t-il à son point de départ ? Via les chaînes de Markov et des simulations Python, j\'ai modélisé ce problème et rédigé un rapport complet en LaTeX sur ses propriétés mathématiques.',
    'proj7.title': 'PageRank — Wikispeedia',
    'proj7.long': 'Vous connaissez l\'algorithme qui propulse Google ? Je l\'ai réimplémenté et appliqué à Wikispeedia, un jeu basé sur la structure des liens Wikipédia. Deux versions — standard et personnalisée — pour classer l\'importance des articles selon la topologie du réseau.',
    'proj8.title': 'Algorithme de Dinic — Flot Maximum',
    'proj8.long': 'Implémentation en C de l\'algorithme de Dinic pour calculer le flot maximum dans un réseau orienté (format DIMACS). Un problème fondamental en théorie des graphes, aux applications allant de la logistique à la distribution d\'énergie.',
    'proj9.title': 'Flood It — Jeu de Puzzle',
    'proj9.long': 'Un jeu de puzzle développé de zéro en HTML/CSS/JavaScript. Le principe : remplir toute la grille d\'une seule couleur en partant du coin supérieur gauche, en un minimum de coups. Simple à expliquer, mais la stratégie optimale est un vrai casse-tête.',
    'proj10.title': 'CKOALA — Moteur de Recherche',
    'proj10.long': 'Un moteur de recherche Java conçu pour explorer et analyser des arbres de typologies. CKOALA parcourt des structures hiérarchiques complexes et permet d\'en extraire de l\'information de façon efficace.',

    'exp.title': 'Expérience & Formation',
    'xp.badge': 'Expérience',
    'xp.t2': 'Stagiaire Data Engineering & BI',
    'xp.l3': 'Data Engineering et Business Intelligence au sein de GRDF, gestionnaire du réseau de distribution de gaz naturel en France.',
    'xp.l4': 'Développement de pipelines de données, tableaux de bord Power BI et analyses pour le pilotage métier.',
    'xp.t1': 'Stagiaire Développeur Data & Web',
    'xp.l1': 'Conception d\'une base de données relationnelle (modélisation, normalisation, SQL) et développement d\'un site web interne Flask pour la gestion et visualisation des données.',
    'xp.l2': 'Analyses exploratoires et préparation des données pour la production de rapports décisionnels.',
    'edu.badge': 'Formation',
    'edu.t1': 'Cycle Ingénieur ISIA',
    'edu.d1': 'ML, Data mining, SQL/NoSQL, Modèles markoviens, Statistiques avancées, Algorithmique, Big Data (Spark, Hadoop), Architecture SI, Gestion de projets (Agile/Scrum).',
    'edu.t2': 'Classes Préparatoires MPSI / MP',
    'edu.d2': 'Algèbre linéaire, Analyse, Algorithmique, Python, Statistiques.',
    'edu.t3': 'Baccalauréat Sciences Mathématiques',
    'edu.mention': 'Mention Très Bien ✦',

    'contact.title': 'Travaillons<br>Ensemble',
    'contact.sub': 'Actuellement en stage chez <strong>GRDF</strong> — Data Engineering & BI.<br>Saint-Denis, Île-de-France.<br>N\'hésitez pas à me contacter !',
    'contact.cv': 'Télécharger CV <i class="fas fa-download"></i>',

    'footer.text': '© 2026 Amine Nakrou — GitHub Pages',
    'about.prefix': 'Ingénieur',
    'featured.prefix': 'Projets',
    'skills.prefix': 'Mon',
    'projects.prefix': 'Mes',
    'exp.prefix': ''
  },

  en: {
    'nav.about': 'About',
    'nav.featured': 'Showcase',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.parcours': 'Journey',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',

    'hero.tag': 'Currently at GRDF · Data Engineering & BI',
    'hero.role1': 'Data Science',
    'hero.role2': 'Machine Learning',
    'hero.role3': 'Polytech Lille',
    'hero.desc': 'Engineering Student ISIA · I build end-to-end data systems — from exploratory analysis to production deployment.',
    'hero.btn1': 'View my projects <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'Contact me',
    'hero.stat1': 'Projects',
    'hero.stat2': 'Languages',
    'hero.stat3': 'Statistical Expertise',
    'hero.stat4': 'Internships',
    'hero.fc3val': 'Internship',

    'about.title': 'Data-Driven',
    'about.p1': 'I\'m <strong>Amine Nakrou</strong>, a 4th-year engineering student at <strong>Polytech Lille</strong> (ISIA). What drives me? Turning raw data into concrete products — ML pipelines, interactive dashboards, models deployed with Docker & MLflow.',
    'about.p2': 'Currently interning at <strong>GRDF</strong> in Saint-Denis (Data Engineering & BI). Available for new opportunities from <strong>September 2026</strong>.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> Villeneuve-d\'Ascq, France',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> Polytech Lille — ISIA',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR · ES',
    'about.chip4': '<i class="fas fa-briefcase"></i> GRDF Internship · 2026',
    'about.badge': 'Interning · GRDF',

    'featured.title': 'Projects',
    'proj1.title': 'Customer Churn Prediction',
    'proj1.desc': 'A complete end-to-end ML pipeline for predicting customer churn — feature engineering on imbalanced data, XGBoost vs Random Forest (AUC 0.91), Streamlit dashboard, Dockerized Flask API and MLflow tracking.',
    'proj2.title': 'EA Sports FC — FIFA Analysis',
    'proj2.desc': 'A deep dive into 18,000+ player profiles across 8 FIFA seasons. Salary/performance correlations, outlier detection, top-10 player portraits and a supervised classification model.',
    'feat.github': 'View on GitHub <i class="fab fa-github"></i>',

    'skills.title': 'Stack',
    'skills.s1': 'Languages',
    'skills.s2': 'ML / Data',
    'skills.s3': 'Big Data & IS',
    'skills.s4': 'Databases',
    'skills.s5': 'Tools & Methods',

    'projects.title': 'Work',
    'proj1.long': 'Built a full ML pipeline to predict customer churn: feature engineering on imbalanced data, XGBoost vs Random Forest (AUC 0.91). Everything wrapped in a Streamlit dashboard and a Dockerized Flask API, with MLflow experiment tracking.',
    'proj2.long': 'A deep dive into 18,000+ FIFA player profiles across 8 seasons (2016–2024). Salary/performance correlations, outlier hunting, statistical portraits of the top 10. Plus a classification model to predict a player\'s performance tier.',
    'proj3.title': 'Time Project — Effort Estimation',
    'proj3.long': 'How do you estimate software development time before it even starts? Using real AT&T data, I compared multiple linear regression, k-NN and decision trees with cross-validation — results presented in an interactive RMarkdown report.',
    'proj4.title': 'Production Optimization',
    'proj4.long': 'A perfume company wants to maximize profit with limited resources — a classic operations research problem. I modeled it as a linear program, solved it with Lindo, then analyzed the robustness of the optimal solution.',
    'proj5.title': 'Suicide Rates Dashboard — USA',
    'proj5.long': 'Eighteen years of US suicide rate data (2000–2018), visualized in an interactive JavaScript dashboard. Explore trends by state, gender and age group — turning statistics into something you can actually understand.',
    'proj6.title': 'Random Knight Walk',
    'proj6.long': 'A knight on an infinite chessboard making random moves — will it ever return to its starting square? Using Markov chains and Python simulations, I modeled this problem and wrote a full mathematical analysis report in LaTeX.',
    'proj7.title': 'PageRank — Wikispeedia',
    'proj7.long': 'Know the algorithm that powers Google? I reimplemented it and applied it to Wikispeedia, a game built on Wikipedia\'s link structure. Two versions — standard and custom — ranking article importance by network topology.',
    'proj8.title': 'Dinic\'s Algorithm — Max Flow',
    'proj8.long': 'C implementation of Dinic\'s algorithm for computing maximum flow in a directed network (DIMACS format). A fundamental graph theory problem with real-world applications from logistics to energy distribution.',
    'proj9.title': 'Flood It — Puzzle Game',
    'proj9.long': 'A puzzle game built from scratch in HTML/CSS/JavaScript. The goal: flood the entire grid with one color starting from the top-left corner, in as few moves as possible. Easy to explain, surprisingly hard to master.',
    'proj10.title': 'CKOALA — Search Engine',
    'proj10.long': 'A Java search engine designed to traverse and analyze typology trees. CKOALA navigates complex hierarchical structures and efficiently extracts meaningful information from them.',

    'exp.title': 'Experience & Education',
    'xp.badge': 'Experience',
    'xp.t2': 'Data Engineering & BI Intern',
    'xp.l3': 'Data Engineering and Business Intelligence at GRDF, the natural gas distribution network operator in France.',
    'xp.l4': 'Building data pipelines, Power BI dashboards and analyses for business reporting.',
    'xp.t1': 'Data & Web Developer Intern',
    'xp.l1': 'Designed a relational database (modeling, normalization, SQL) and developed an internal Flask web application for data management and visualization.',
    'xp.l2': 'Exploratory data analysis and data preparation for decision-making reports.',
    'edu.badge': 'Education',
    'edu.t1': 'Engineering Cycle ISIA',
    'edu.d1': 'ML, Data mining, SQL/NoSQL, Markov models, Statistics, Algorithms, Big Data, Project management.',
    'edu.t2': 'Preparatory Classes MPSI / MP',
    'edu.d2': 'Algebra, Analysis, Algorithms, Python, Statistics.',
    'edu.t3': 'Mathematics Baccalaureate',
    'edu.mention': 'Highest Honors ✦',

    'contact.title': 'Let\'s Work<br>Together',
    'contact.sub': 'Currently interning at <strong>GRDF</strong> — Data Engineering & BI.<br>Saint-Denis, Île-de-France.<br>Feel free to reach out!',
    'contact.cv': 'Download Resume <i class="fas fa-download"></i>',

    'footer.text': '© 2026 Amine Nakrou — GitHub Pages',
    'about.prefix': 'Engineer',
    'about.title': 'Data-Driven',
    'featured.prefix': 'Featured',
    'featured.title': 'Projects',
    'skills.prefix': 'My',
    'skills.title': 'Stack',
    'projects.prefix': 'My',
    'projects.title': 'Work',
    'exp.prefix': ''
  },

  ar: {
    'nav.about': 'عني',
    'nav.featured': 'الأعمال',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.parcours': 'المسيرة',
    'nav.contact': 'تواصل',
    'nav.cv': 'السيرة الذاتية',

    'hero.tag': 'في تدريب لدى GRDF · هندسة البيانات وذكاء الأعمال',
    'hero.role1': 'علم البيانات',
    'hero.role2': 'تعلم الآلة',
    'hero.role3': 'بوليتك ليل',
    'hero.desc': 'طالب هندسة ISIA · شغوف بخطوط أنابيب ML من البداية إلى النهاية وتثمين البيانات والنشر في الإنتاج.',
    'hero.btn1': 'مشاريعي <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'تواصل معي',
    'hero.stat1': 'مشاريع',
    'hero.stat2': 'لغات برمجة',
    'hero.stat3': 'خبرة إحصائية',
    'hero.stat4': 'تدريبات',
    'hero.fc3val': 'في تدريب',

    'about.title': 'موجه بالبيانات',
    'about.p1': 'أنا <strong>أمين نقرو</strong>، طالب هندسة في السنة الرابعة بـ <strong>بوليتك ليل</strong> (ISIA). أبني خطوط أنابيب <em>ML</em> متكاملة من المعالجة إلى النشر عبر Docker و MLflow.',
    'about.p2': 'أتدرب حالياً لدى <strong>GRDF</strong> في سان-دوني (هندسة البيانات وذكاء الأعمال). متاح لفرص جديدة ابتداءً من <strong>سبتمبر 2026</strong>.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> فيلنوف داسك، فرنسا',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> بوليتك ليل — ISIA',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR · ES',
    'about.chip4': '<i class="fas fa-briefcase"></i> تدريب GRDF · 2026',
    'about.badge': 'في تدريب · GRDF',

    'featured.title': 'المميزة',
    'proj1.title': 'التنبؤ بإلغاء اشتراك العملاء',
    'proj1.desc': 'خط أنابيب ML متكامل. هندسة الميزات على بيانات غير متوازنة، مقارنة Random Forest مع XGBoost. لوحة تحكم Streamlit، API Flask داخل Docker، وتتبع MLflow.',
    'proj2.title': 'EA Sports FC — تحليل FIFA',
    'proj2.desc': 'استكشاف قاعدة بيانات FIFA 2016–2024. تحليل الارتباط بين الراتب والأداء، الكشف عن القيم الشاذة، وصور إحصائية لأفضل 10 لاعبين. تصنيف موجّه.',
    'feat.github': 'عرض على GitHub <i class="fab fa-github"></i>',

    'skills.title': 'تقنياتي',
    'skills.s1': 'لغات البرمجة',
    'skills.s2': 'ML / البيانات',
    'skills.s3': 'البيانات الضخمة',
    'skills.s4': 'قواعد البيانات',
    'skills.s5': 'الأدوات والمنهجيات',

    'projects.title': 'مشاريعي',
    'proj1.long': 'بنيت خط أنابيب ML متكامل للتنبؤ بإلغاء اشتراك العملاء: هندسة الميزات على بيانات غير متوازنة، XGBoost مقابل Random Forest (AUC 0.91)، لوحة Streamlit و API Flask داخل Docker مع تتبع MLflow.',
    'proj2.long': 'استكشاف أكثر من 18,000 ملف لاعب عبر 8 مواسم FIFA (2016–2024). تحليل العلاقة بين الراتب والأداء، صيد القيم الشاذة، صور إحصائية لأفضل 10 لاعبين، ونموذج تصنيف للتنبؤ بفئة اللاعب.',
    'proj3.title': 'مشروع الوقت — تقدير الجهد',
    'proj3.long': 'كيف تقدّر وقت مشروع برمجي قبل البدء؟ على بيانات AT&T الحقيقية، قارنت الانحدار الخطي المتعدد و k-NN وأشجار القرار مع التحقق المتقاطع — النتائج في تقرير RMarkdown تفاعلي.',
    'proj4.title': 'تحسين الإنتاج',
    'proj4.long': 'شركة عطور تريد تعظيم أرباحها بموارد محدودة — مسألة كلاسيكية في بحوث العمليات. نمذجت المسألة كبرمجة خطية وحللتها في Lindo، ثم درست مدى قوة الحل الأمثل.',
    'proj5.title': 'لوحة معدلات الانتحار — الولايات المتحدة',
    'proj5.long': 'ثمانية عشر عامًا من بيانات معدلات الانتحار في الولايات المتحدة (2000–2018)، مرئية في لوحة تفاعلية بـ JavaScript. استكشف الاتجاهات حسب الولاية والجنس والفئة العمرية.',
    'proj6.title': 'المشي العشوائي للفارس',
    'proj6.long': 'فارس شطرنج على رقعة لا نهائية يتحرك عشوائيًا — هل سيعود لنقطة البداية؟ عبر سلاسل ماركوف ومحاكاة Python، نمذجت هذا المشكل وكتبت تقريرًا كاملاً بـ LaTeX.',
    'proj7.title': 'PageRank — Wikispeedia',
    'proj7.long': 'تعرف على الخوارزمية التي تُشغّل Google؟ أعدت تطبيقها وطبّقتها على Wikispeedia، لعبة مبنية على بنية روابط ويكيبيديا. نسختان — قياسية ومخصصة — لترتيب أهمية المقالات.',
    'proj8.title': 'خوارزمية Dinic — الجريان الأقصى',
    'proj8.long': 'تطبيق بلغة C لخوارزمية Dinic لحساب الجريان الأقصى في شبكة موجّهة (تنسيق DIMACS). مسألة أساسية في نظرية الرسوم البيانية، تطبيقاتها من اللوجستيك إلى توزيع الطاقة.',
    'proj9.title': 'Flood It — لعبة الألغاز',
    'proj9.long': 'لعبة ألغاز بُنيت من الصفر بـ HTML/CSS/JavaScript. الهدف: ملء الشبكة بلون واحد بدءًا من الزاوية العلوية اليسرى في أقل عدد من الحركات. سهلة الشرح، صعبة الإتقان.',
    'proj10.title': 'CKOALA — محرك بحث',
    'proj10.long': 'محرك بحث Java مصمم لاستكشاف وتحليل أشجار التصنيفات. CKOALA يتنقل في الهياكل الهرمية المعقدة ويستخرج منها المعلومات بكفاءة.',

    'exp.title': 'الخبرة والتكوين',
    'xp.badge': 'خبرة',
    'xp.t2': 'متدرب هندسة البيانات وذكاء الأعمال',
    'xp.l3': 'هندسة البيانات وذكاء الأعمال لدى GRDF، مشغل شبكة توزيع الغاز الطبيعي في فرنسا.',
    'xp.l4': 'تطوير خطوط أنابيب البيانات ولوحات Power BI والتحليلات لدعم قرار الأعمال.',
    'xp.t1': 'متدرب مطور بيانات وويب',
    'xp.l1': 'تصميم قاعدة بيانات علائقية (نمذجة، تطبيع، SQL) وتطوير تطبيق Flask داخلي لإدارة البيانات وتصورها.',
    'xp.l2': 'تحليلات استكشافية وإعداد البيانات لإنتاج تقارير دعم القرار.',
    'edu.badge': 'تكوين',
    'edu.t1': 'دورة المهندس ISIA',
    'edu.d1': 'ML، تنقيب البيانات، SQL/NoSQL، نماذج ماركوف، إحصاء، خوارزميات، بيانات ضخمة، وإدارة مشاريع.',
    'edu.t2': 'الفصول التحضيرية MPSI / MP',
    'edu.d2': 'الجبر، التحليل، الخوارزميات، Python، الإحصاء.',
    'edu.t3': 'بكالوريا العلوم الرياضية',
    'edu.mention': 'مرتبة الشرف الأولى ✦',

    'contact.title': 'لنعمل<br>معًا',
    'contact.sub': 'أتدرب حالياً لدى <strong>GRDF</strong> — هندسة البيانات وذكاء الأعمال.<br>سان-دوني، إيل-دو-فرانس.<br>لا تتردد في التواصل!',
    'contact.cv': 'تحميل السيرة الذاتية <i class="fas fa-download"></i>',

    'footer.text': '© 2026 أمين نقرو — GitHub Pages',
    'about.prefix': 'مهندس',
    'featured.prefix': 'المشاريع',
    'featured.title': 'المميزة',
    'skills.prefix': '',
    'projects.prefix': '',
    'exp.prefix': ''
  }
};

let currentLang = 'fr';

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  currentLang = lang;

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.style.scrollBehavior = 'smooth';

  // Cursor: always pointer-events:none, don't override visibility (CSS handles it)
  if (cursorEl) { cursorEl.style.pointerEvents = 'none'; }
  if (cursorRing) { cursorRing.style.pointerEvents = 'none'; }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  const cvEl = document.getElementById('cvLink');
  const cvEl2 = document.getElementById('cvLinkContact');
  const cvMap = {
    fr: 'cv_amine_nakrou_fr.pdf',
    en: 'cv_amine_nakrou_en.pdf',
    ar: 'cv_amine_nakrou_fr.pdf'
  };

  if (cvEl) cvEl.href = `assets/cv/${cvMap[lang]}`;
  if (cvEl2) cvEl2.href = `assets/cv/${cvMap[lang]}`;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html dir attribute properly for RTL
  document.body.classList.toggle('rtl', lang === 'ar');

  // Update section title prefix spans
  document.querySelectorAll('[data-i18n-prefix]').forEach(el => {
    const key = el.getAttribute('data-i18n-prefix');
    const val = dict[key];
    if (val !== undefined) {
      el.textContent = val ? val + '\u00a0' : '';
    }
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    // Sync all lang buttons (mobile + desktop)
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === btn.dataset.lang);
    });
  });
});

/* ======================
PILLS HOVER RIPPLE
====================== */
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => {
    const ripple = document.createElement('span');

    ripple.style.cssText = `
      position:absolute;
      width:6px;
      height:6px;
      border-radius:50%;
      background:rgba(200,241,53,0.4);
      transform:scale(0);
      transition:transform .4s ease, opacity .4s ease;
      pointer-events:none;
      top:50%;
      left:50%;
      translate:-50% -50%;
    `;

    pill.style.position = 'relative';
    pill.style.overflow = 'hidden';
    pill.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(12)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 500);
  });
});

/* ======================
PROJECT ITEMS TILT
====================== */
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mousemove', e => {
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;

    item.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transition = 'transform .5s ease';
    item.style.transform = '';

    setTimeout(() => {
      item.style.transition = '';
    }, 500);
  });
});

/* ======================
FEAT CARDS PARALLAX
====================== */
document.querySelectorAll('.feat-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const screen = card.querySelector('.feat-screen');

    if (screen) {
      screen.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateZ(8px)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    const screen = card.querySelector('.feat-screen');

    if (screen) {
      screen.style.transition = 'transform .6s ease';
      screen.style.transform = '';

      setTimeout(() => {
        screen.style.transition = '';
      }, 600);
    }
  });
});

/* ======================
JOURNEY ITEMS HOVER
====================== */
document.querySelectorAll('.journey-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const dot = item.querySelector('.ji-dot');
    if (dot && !dot.classList.contains('active')) {
      dot.style.borderColor = 'var(--accent)';
    }
  });

  item.addEventListener('mouseleave', () => {
    const dot = item.querySelector('.ji-dot');
    if (dot && !dot.classList.contains('active')) {
      dot.style.borderColor = '';
    }
  });
});

/* ======================
CONTACT LINKS HOVER
====================== */
document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const icon = link.querySelector('.cl-icon');
    if (icon) {
      icon.style.background = 'rgba(200,241,53,0.18)';
      icon.style.transform = 'scale(1.1) rotate(-5deg)';
    }
  });

  link.addEventListener('mouseleave', () => {
    const icon = link.querySelector('.cl-icon');
    if (icon) {
      icon.style.background = '';
      icon.style.transform = '';
    }
  });
});

/* ======================
FLOATING CARDS PARALLAX
====================== */
window.addEventListener(
  'mousemove',
  e => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    document.querySelectorAll('.float-card').forEach((fc, i) => {
      const factor = (i + 1) * 6;
      fc.style.setProperty('--mx', `${dx * factor}px`);
      fc.style.setProperty('--my', `${dy * factor}px`);
    });
  },
  { passive: true }
);

/* ======================
PAGE VISIBILITY
====================== */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = '👋 Reviens voir mon portfolio!';
  } else {
    document.title = 'Amine Nakrou — Data Science & ML';
  }
});

/* ======================
INIT
====================== */
applyLang('fr');

console.log(
  '%c AN. ',
  'background:#c8f135;color:#070707;font-size:20px;font-weight:900;padding:6px 12px;border-radius:4px;',
  '\n%cAmine Nakrou — Data Science & ML\nPortfolio v2.0 — 2026',
  'color:#c8f135;font-size:13px;'
);
