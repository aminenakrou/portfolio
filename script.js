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

    'hero.tag': 'Disponible · Stage 4 mois · Avril 2026',
    'hero.role1': 'Data Science',
    'hero.role2': 'Machine Learning',
    'hero.role3': 'Polytech Lille',
    'hero.desc': 'Élève-Ingénieur ISIA · Passionné par les pipelines ML end-to-end, la valorisation des données et la mise en production.',
    'hero.btn1': 'Voir mes projets <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'Me contacter',
    'hero.stat1': 'Projets ML',
    'hero.stat2': 'Langages',
    'hero.stat3': 'Expertise Statistique',
    'hero.stat4': 'Mois XP',
    'hero.fc3val': 'Disponible',

    'about.title': 'Data-Driven',
    'about.p1': 'Je suis <strong>Amine Nakrou</strong>, élève-ingénieur en 4e année à <strong>Polytech Lille</strong> (ISIA). Passionné par la Data Science et le ML, je conçois des pipelines <em>end-to-end</em> du preprocessing jusqu\'à la mise en production via Docker & MLflow.',
    'about.p2': 'Curieux, rigoureux et orienté résultats, je recherche un <strong>stage de 4 mois à partir du 13 avril 2026</strong> pour contribuer à des projets ambitieux et à fort impact.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> Villeneuve-d\'Ascq, France',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> Polytech Lille — ISIA',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR · ES',
    'about.chip4': '<i class="fas fa-calendar-check"></i> Dispo. Avril 2026',
    'about.badge': 'Open to Work',

    'featured.title': 'Phares',
    'proj1.title': 'Customer Churn Prediction',
    'proj1.desc': 'Pipeline ML end-to-end complet. Feature engineering sur données déséquilibrées, comparaison Random Forest vs XGBoost. Dashboard interactif Streamlit, API Flask sous Docker, tracking MLflow.',
    'proj2.title': 'EA Sports FC — Analyse FIFA',
    'proj2.desc': 'Exploration d\'une base FIFA 2016–2024. Analyse de corrélation salaire/performance, détection d\'outliers, portraits statistiques des 10 meilleurs joueurs. Classification supervisée.',
    'feat.github': 'Voir sur GitHub <i class="fab fa-github"></i>',

    'skills.title': 'Stack',
    'skills.s1': 'Langages',
    'skills.s2': 'ML / Data',
    'skills.s3': 'Big Data & SI',
    'skills.s4': 'Databases',
    'skills.s5': 'Outils & Méthodes',

    'projects.title': 'Réalisations',
    'proj1.long': 'Pipeline ML end-to-end : feature engineering sur données déséquilibrées, comparaison Random Forest vs XGBoost. AUC 0.91 après optimisation. API Flask conteneurisée Docker, dashboard Streamlit, tracking MLflow.',
    'proj2.long': 'Exploration FIFA 2016–2024 : corrélation salaire/performance, détection d\'outliers, portraits des 10 meilleurs joueurs. Classification supervisée pour prédire la catégorie de performance.',
    'proj3.title': 'Time Project — Estimation d\'Effort',
    'proj3.long': 'Modélisation effort AT&T par régression linéaire multiple, sélection de variables, vérification des hypothèses. k-NN, arbres de décision et validation croisée. Rapport RMarkdown interactif.',
    'proj4.title': 'Optimisation de la Production',
    'proj4.long': 'Programmation linéaire pour maximiser le bénéfice d\'une société de parfums. Résolution exacte sous Lindo, analyse de sensibilité et interprétation des prix duaux.',

    'exp.title': 'Expérience & Formation',
    'xp.badge': 'Expérience',
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
    'contact.sub': 'Disponible pour un stage de 4 mois<br>à partir du <strong>13 avril 2026</strong>.<br>N\'hésitez pas à me contacter !',
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

    'hero.tag': 'Available · 4-month Internship · April 2026',
    'hero.role1': 'Data Science',
    'hero.role2': 'Machine Learning',
    'hero.role3': 'Polytech Lille',
    'hero.desc': 'Engineering Student ISIA · Passionate about end-to-end ML pipelines, data value creation and production deployment.',
    'hero.btn1': 'View my projects <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'Contact me',
    'hero.stat1': 'ML Projects',
    'hero.stat2': 'Languages',
    'hero.stat3': 'Statistical Expertise',
    'hero.stat4': 'Months XP',
    'hero.fc3val': 'Available',

    'about.title': 'Data-Driven',
    'about.p1': 'I am <strong>Amine Nakrou</strong>, a 4th-year engineering student at <strong>Polytech Lille</strong> (ISIA). Passionate about Data Science and ML, I build <em>end-to-end</em> pipelines from preprocessing to production via Docker & MLflow.',
    'about.p2': 'Curious, rigorous and results-driven, I am seeking a <strong>4-month internship starting April 13, 2026</strong> to contribute to ambitious, high-impact projects.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> Villeneuve-d\'Ascq, France',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> Polytech Lille — ISIA',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR · ES',
    'about.chip4': '<i class="fas fa-calendar-check"></i> Available April 2026',
    'about.badge': 'Open to Work',

    'featured.title': 'Projects',
    'proj1.title': 'Customer Churn Prediction',
    'proj1.desc': 'Full end-to-end ML pipeline. Feature engineering on imbalanced data, Random Forest vs XGBoost comparison. Interactive Streamlit dashboard, Flask API in Docker, MLflow tracking.',
    'proj2.title': 'EA Sports FC — FIFA Analysis',
    'proj2.desc': 'Exploration of a FIFA 2016–2024 dataset. Salary/performance correlation analysis, outlier detection, statistical portraits of top 10 players. Supervised classification.',
    'feat.github': 'View on GitHub <i class="fab fa-github"></i>',

    'skills.title': 'Stack',
    'skills.s1': 'Languages',
    'skills.s2': 'ML / Data',
    'skills.s3': 'Big Data & IS',
    'skills.s4': 'Databases',
    'skills.s5': 'Tools & Methods',

    'projects.title': 'Work',
    'proj1.long': 'End-to-end ML pipeline: feature engineering on imbalanced data, Random Forest vs XGBoost comparison. AUC 0.91 after optimization. Dockerized Flask API, Streamlit dashboard, MLflow tracking.',
    'proj2.long': 'FIFA 2016–2024 exploration: salary/performance correlation, outlier detection, portraits of top 10 players. Supervised classification to predict performance category.',
    'proj3.title': 'Time Project — Effort Estimation',
    'proj3.long': 'AT&T effort modeling via multiple linear regression, variable selection, hypothesis checking. k-NN, decision trees and cross-validation. Interactive RMarkdown report.',
    'proj4.title': 'Production Optimization',
    'proj4.long': 'Linear programming to maximize a perfume company\'s profit. Exact resolution in Lindo, sensitivity analysis and dual price interpretation.',

    'exp.title': 'Experience & Education',
    'xp.badge': 'Experience',
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
    'contact.sub': 'Available for a 4-month internship<br>starting <strong>April 13, 2026</strong>.<br>Feel free to reach out!',
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

    'hero.tag': 'متاح · تدريب 4 أشهر · أبريل 2026',
    'hero.role1': 'علم البيانات',
    'hero.role2': 'تعلم الآلة',
    'hero.role3': 'بوليتك ليل',
    'hero.desc': 'طالب هندسة ISIA · شغوف بخطوط أنابيب ML من البداية إلى النهاية وتثمين البيانات والنشر في الإنتاج.',
    'hero.btn1': 'مشاريعي <i class="fas fa-arrow-right"></i>',
    'hero.btn2': 'تواصل معي',
    'hero.stat1': 'مشاريع ML',
    'hero.stat2': 'لغات برمجة',
    'hero.stat3': 'خبرة إحصائية',
    'hero.stat4': 'أشهر خبرة',
    'hero.fc3val': 'متاح',

    'about.title': 'موجه بالبيانات',
    'about.p1': 'أنا <strong>أمين نقرو</strong>، طالب هندسة في السنة الرابعة بـ <strong>بوليتك ليل</strong> (ISIA). أبني خطوط أنابيب <em>ML</em> متكاملة من المعالجة إلى النشر عبر Docker و MLflow.',
    'about.p2': 'أبحث عن <strong>تدريب مدته 4 أشهر ابتداءً من 13 أبريل 2026</strong> للمساهمة في مشاريع طموحة وذات تأثير كبير.',
    'about.chip1': '<i class="fas fa-map-marker-alt"></i> فيلنوف داسك، فرنسا',
    'about.chip2': '<i class="fas fa-graduation-cap"></i> بوليتك ليل — ISIA',
    'about.chip3': '<i class="fas fa-language"></i> FR · EN (C1) · AR · ES',
    'about.chip4': '<i class="fas fa-calendar-check"></i> متاح أبريل 2026',
    'about.badge': 'متاح للعمل',

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
    'proj1.long': 'خط أنابيب ML متكامل: هندسة الميزات على بيانات غير متوازنة، مقارنة Random Forest و XGBoost. AUC 0.91. API Flask داخل Docker، لوحة Streamlit، وتتبع MLflow.',
    'proj2.long': 'استكشاف FIFA 2016–2024: ارتباط الراتب/الأداء، الكشف عن الشذوذات، وصور إحصائية لأفضل 10 لاعبين. تصنيف موجّه لتوقع فئة الأداء.',
    'proj3.title': 'مشروع الوقت — تقدير الجهد',
    'proj3.long': 'نمذجة جهد AT&T عبر انحدار خطي متعدد، اختيار المتغيرات، والتحقق من الفرضيات. k-NN وأشجار القرار والتحقق المتقاطع. تقرير RMarkdown تفاعلي.',
    'proj4.title': 'تحسين الإنتاج',
    'proj4.long': 'برمجة خطية لتعظيم أرباح شركة عطور. الحل الدقيق في Lindo، تحليل الحساسية، وتفسير الأسعار الثنائية.',

    'exp.title': 'الخبرة والتكوين',
    'xp.badge': 'خبرة',
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
    'contact.sub': 'متاح لتدريب مدته 4 أشهر<br>ابتداءً من <strong>13 أبريل 2026</strong>.<br>لا تتردد في التواصل!',
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
