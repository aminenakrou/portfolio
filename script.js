/* =====================================================================
   Portfolio Amine Nakrou — contenu (FR / EN) et interactions.
   JavaScript natif, sans dépendance.
   ===================================================================== */
(function () {
  'use strict';

  var CV_URLS = { fr: 'assets/cv/cv_amine_nakrou_fr.pdf', en: 'assets/cv/cv_amine_nakrou_en.pdf' };
  function cvUrl() { return CV_URLS[lang] || CV_URLS.fr; }
  var GH = 'https://github.com/aminenakrou/';
  var PAGES = 'https://aminenakrou.github.io/';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Textes de l'interface
     ------------------------------------------------------------------ */
  var I18N = {
    fr: {
      'a11y.skip': 'Aller au contenu', 'a11y.nav': 'Navigation principale', 'a11y.lang': 'Langue', 'a11y.menu': 'Menu',
      'a11y.filters': 'Filtrer les projets', 'a11y.light': 'Passer au thème clair', 'a11y.dark': 'Passer au thème sombre',
      'nav.about': 'Profil', 'nav.experience': 'Expérience', 'nav.projects': 'Projets', 'nav.skills': 'Compétences',
      'nav.education': 'Formation', 'nav.contact': 'Contact', 'nav.cv': 'CV',
      'palette.open': 'Recherche rapide', 'palette.short': 'Rechercher', 'palette.ph': 'Aller à une section, un projet, une action',
      'palette.hint': '↑ ↓ pour choisir · Entrée pour ouvrir · Échap pour fermer', 'palette.none': 'Aucun résultat',
      'hero.eyebrow': 'Data science · Actuariat · Polytech Lille',
      'hero.title': "Des données d'assurance fiables, des modèles qu'on peut expliquer.",
      'hero.lede': "Je suis Amine Nakrou, futur ingénieur en alternance à l'<strong>actuariat santé collective de Swiss Life</strong>. J'automatise les contrôles de prestations, je fiabilise les données et je construis des modèles de sinistralité interprétables.",
      'hero.available': 'Disponible en CDI à partir de septembre 2027 · France et Luxembourg',
      'hero.projects': 'Voir les projets', 'hero.cv': 'Télécharger le CV (PDF)',
      'fig.num': 'Fig. 1', 'fig.title': 'Triangle de développement et projection Chain-Ladder',
      'fig.observed': 'Observé · payé', 'fig.projected': 'Projeté · réserve (Chain-Ladder)',
      'fig.replay': 'Rejouer le calcul', 'fig.bars': 'Payé et réserve estimée par année de survenance, en k€',
      'fig.note': "Montants cumulés simulés en k€, à titre d'illustration. Les facteurs de développement sont recalculés en direct dans le navigateur.",
      'fig.corner': 'Surv.', 'fig.ult': 'Ultime', 'fig.factors': 'Facteurs',
      'fig.total': 'Réserve totale estimée : {r} k€ · survolez ou touchez une ligne pour le détail',
      'fig.row': 'Survenance {y} : ultime estimé {u} k€ · réserve {r} k€',
      'figures.label': 'Repères chiffrés',
      'figures.f1': 'Reporting financier automatisé chez HAMATEL', 'figures.f2': 'Tableaux de bord Power BI livrés à la DSI de GRDF',
      'figures.f3': 'Outils du SI réunis dans un même modèle de données', 'figures.v4': '343',
      'figures.f4': 'Triangles de sinistres réels backtestés (provisionnement)',
      'about.p1': "Élève-ingénieur en dernière année à <strong>Polytech Lille</strong>, spécialité Informatique, Statistiques et IA (grade Master), je travaille en alternance au service <strong>Actuariat sur mesure de Swiss Life</strong>, sur les contrats santé collectifs d'entreprise.",
      'about.p2': "J'y rapproche les prestations versées par les délégataires de gestion avec le système interne, j'industrialise les contrôles et je développe un <strong>modèle de prédiction de la sinistralité</strong> (XGBoost, SHAP), comparé à la méthode Chain-Ladder.",
      'about.p3': "Avant cela, j'ai construit les tableaux de bord de pilotage de la DSI de <strong>GRDF</strong> et automatisé des rapports financiers au Maroc. Je cherche un premier poste en <strong>actuariat, data science ou data engineering</strong>, idéalement là où les trois se rencontrent.",
      'about.caption': 'Lille, 2026',
      'exp.now': 'En poste',
      'proj.sub': "Chaque projet s'ouvre sur le problème, les données, la méthode et le résultat.",
      'proj.github': 'Voir le code', 'proj.demo': 'Démo en ligne', 'proj.private': 'Projet de cours : code disponible sur demande.',
      'facts.problem': 'Problème', 'facts.data': 'Données', 'facts.method': 'Méthode', 'facts.result': 'Résultat', 'facts.stack': 'Outils',
      'lab.title': 'En cours de construction', 'lab.status': 'En cours',
      'lab.sub': "Un projet public qui prolonge mon travail en actuariat. Il apparaîtra ici avec son code dès qu'il sera terminé.",
      'more.title': 'Autres travaux', 'more.project': 'Projet', 'more.domain': 'Domaine', 'more.desc': 'Description', 'more.links': 'Liens', 'more.demo': 'démo',
      'contact.lead': 'Vous recrutez en actuariat, en data science ou en data engineering ? Écrivez-moi, je réponds sous 24 heures.',
      'contact.copy': "Copier l'adresse", 'contact.copied': 'Adresse copiée', 'contact.copyFail': "Copie impossible : sélectionnez l'adresse à la main", 'contact.cv': 'CV (PDF)',
      'footer.text': '© 2026 Amine Nakrou. Site codé à la main en HTML, CSS et JavaScript. Mis à jour en novembre 2026.', 'footer.top': 'Haut de page ↑',
      'wanted.label': 'Le poste que je cherche', 'wanted.k1': 'Postes visés', 'wanted.v1': "Chargé d'études actuarielles, data scientist, data engineer",
      'wanted.k2': 'Secteurs', 'wanted.v2': 'Assurance, réassurance, banque, conseil', 'wanted.k3': 'Lieux', 'wanted.v3': 'Paris, Lille, Luxembourg',
      'wanted.k4': 'Disponibilité', 'wanted.v4': 'CDI, septembre 2027', 'contact.cvMeta': 'CV : PDF, 1 page, mis à jour en novembre 2026',
      'proj.meta': '{a} choisis · {b} autres',
      'cmd.section': 'Section', 'cmd.project': 'Projet', 'cmd.action': 'Action', 'cmd.theme': 'Changer de thème',
      'cmd.lang': 'Switch to English', 'cmd.cv': 'Ouvrir le CV (PDF)', 'cmd.copy': "Copier l'adresse email",
      'cmd.github': 'Ouvrir GitHub', 'cmd.linkedin': 'Ouvrir LinkedIn'
    },
    en: {
      'a11y.skip': 'Skip to content', 'a11y.nav': 'Main navigation', 'a11y.lang': 'Language', 'a11y.menu': 'Menu',
      'a11y.filters': 'Filter projects', 'a11y.light': 'Switch to light theme', 'a11y.dark': 'Switch to dark theme',
      'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects', 'nav.skills': 'Skills',
      'nav.education': 'Education', 'nav.contact': 'Contact', 'nav.cv': 'Resume',
      'palette.open': 'Quick search', 'palette.short': 'Search', 'palette.ph': 'Jump to a section, a project, an action',
      'palette.hint': '↑ ↓ to choose · Enter to open · Esc to close', 'palette.none': 'No result',
      'hero.eyebrow': 'Data science · Actuarial · Polytech Lille',
      'hero.title': 'Reliable insurance data, models you can actually explain.',
      'hero.lede': "I'm Amine Nakrou, an engineering student working in <strong>Swiss Life's group health actuarial team</strong>. I automate claims controls, make data reliable and build interpretable claims experience models.",
      'hero.available': 'Available for a full-time role from September 2027 · France and Luxembourg',
      'hero.projects': 'See the projects', 'hero.cv': 'Download resume (PDF)',
      'fig.num': 'Fig. 1', 'fig.title': 'Development triangle and Chain-Ladder projection',
      'fig.observed': 'Observed · paid', 'fig.projected': 'Projected · reserve (Chain-Ladder)',
      'fig.replay': 'Replay the calculation', 'fig.bars': 'Paid and estimated reserve by accident year, in k€',
      'fig.note': 'Simulated cumulative amounts in k€, for illustration. Development factors are recomputed live in your browser.',
      'fig.corner': 'Acc. yr', 'fig.ult': 'Ultimate', 'fig.factors': 'Factors',
      'fig.total': 'Total estimated reserve: {r} k€ · hover or tap a row for details',
      'fig.row': 'Accident year {y}: estimated ultimate {u} k€ · reserve {r} k€',
      'figures.label': 'Key figures',
      'figures.f1': 'Financial reporting automated at HAMATEL', 'figures.f2': "Power BI dashboards delivered to GRDF's IT division",
      'figures.f3': 'IT tools brought into a single data model', 'figures.v4': '343',
      'figures.f4': 'Real claims triangles backtested (reserving)',
      'about.p1': "Final-year engineering student at <strong>Polytech Lille</strong> (Computer Science, Statistics & AI, Master's level), I work in the <strong>Bespoke Actuarial team at Swiss Life</strong> on group health insurance contracts.",
      'about.p2': 'I reconcile the claims paid by third-party administrators with the internal system, industrialise the controls and build a <strong>claims experience prediction model</strong> (XGBoost, SHAP), benchmarked against the Chain-Ladder method.',
      'about.p3': "Before that, I built the management dashboards of <strong>GRDF</strong>'s IT division and automated financial reporting in Morocco. I'm looking for a first role in <strong>actuarial science, data science or data engineering</strong>, ideally where the three meet.",
      'about.caption': 'Lille, 2026',
      'exp.now': 'Current',
      'proj.sub': 'Each project opens on the problem, the data, the method and the result.',
      'proj.github': 'View the code', 'proj.demo': 'Live demo', 'proj.private': 'Course project: code available on request.',
      'facts.problem': 'Problem', 'facts.data': 'Data', 'facts.method': 'Method', 'facts.result': 'Result', 'facts.stack': 'Tools',
      'lab.title': 'In progress', 'lab.status': 'In progress',
      'lab.sub': "A public project that extends my actuarial work. It will appear here with its code once finished.",
      'more.title': 'Other work', 'more.project': 'Project', 'more.domain': 'Field', 'more.desc': 'Description', 'more.links': 'Links', 'more.demo': 'demo',
      'contact.lead': "Hiring in actuarial science, data science or data engineering? Write to me, I reply within 24 hours.",
      'contact.copy': 'Copy address', 'contact.copied': 'Address copied', 'contact.copyFail': 'Copy failed: select the address manually', 'contact.cv': 'Resume (PDF)',
      'footer.text': '© 2026 Amine Nakrou. Hand-coded in HTML, CSS and JavaScript. Updated November 2026.', 'footer.top': 'Back to top ↑',
      'wanted.label': "The role I'm looking for", 'wanted.k1': 'Target roles', 'wanted.v1': 'Actuarial analyst, data scientist, data engineer',
      'wanted.k2': 'Sectors', 'wanted.v2': 'Insurance, reinsurance, banking, consulting', 'wanted.k3': 'Locations', 'wanted.v3': 'Paris, Lille, Luxembourg',
      'wanted.k4': 'Availability', 'wanted.v4': 'Full-time, September 2027', 'contact.cvMeta': 'Resume: PDF, 1 page, updated November 2026',
      'proj.meta': '{a} selected · {b} more',
      'cmd.section': 'Section', 'cmd.project': 'Project', 'cmd.action': 'Action', 'cmd.theme': 'Toggle theme',
      'cmd.lang': 'Passer en français', 'cmd.cv': 'Open resume (PDF)', 'cmd.copy': 'Copy email address',
      'cmd.github': 'Open GitHub', 'cmd.linkedin': 'Open LinkedIn'
    }
  };

  /* ------------------------------------------------------------------
     Contenu
     ------------------------------------------------------------------ */
  var JOBS = [
    {
      current: true, org: 'Swiss Life France',
      role: { fr: "Chargé d'études actuarielles (alternance)", en: 'Actuarial Analyst (work-study)' },
      date: { fr: 'Sept. 2026 – août 2027', en: 'Sep 2026 – Aug 2027' },
      place: { fr: 'Métropole lilloise', en: 'Lille area, France' },
      team: { fr: 'Direction technique · Assurance non-vie · Actuariat sur mesure, santé collective', en: 'Technical division · Non-life · Bespoke actuarial, group health' },
      result: { fr: 'Contrôles de prestations automatisés, modèle de sinistralité en cours', en: 'Automated claims controls, claims model in progress' },
      points: {
        fr: [
          "<strong>Automatise le rapprochement des prestations santé</strong> entre les délégataires de gestion et le système de gestion interne (SAS 9.4, SQL), puis analyse et explique les écarts.",
          "<strong>Industrialise les rapports de contrôle</strong> : synthèses, matrices survenance × exercice et contrôles de cohérence produits en un seul traitement.",
          "<strong>Fiabilise les données de prestations</strong> : normalisation des identifiants de contrat, détection et correction d'anomalies.",
          "<strong>Développe un modèle de prédiction de la sinistralité</strong> par contrat collectif (XGBoost, SHAP), comparé à la méthode Chain-Ladder, en appui de la tarification et du renouvellement.",
          "<strong>Diffuse les bonnes pratiques Python</strong> dans l'équipe : guide d'installation et modèle de projet."
        ],
        en: [
          '<strong>Automates the reconciliation of health claims</strong> between third-party administrators and the internal policy system (SAS 9.4, SQL), then analyses and explains the gaps.',
          '<strong>Industrialises control reports</strong>: summaries, accident-year × payment-year matrices and consistency checks produced in a single run.',
          '<strong>Makes claims data reliable</strong>: contract identifier normalisation, anomaly detection and correction.',
          '<strong>Builds a claims experience prediction model</strong> per group contract (XGBoost, SHAP), benchmarked against Chain-Ladder, to support pricing and renewals.',
          '<strong>Spreads Python best practices</strong> in the team: setup guide and project template.'
        ]
      },
      stack: 'SAS 9.4 · SQL · Python · XGBoost · SHAP · Excel'
    },
    {
      org: 'GRDF, direction des systèmes d\'information',
      orgEn: 'GRDF, IT division',
      role: { fr: 'Stagiaire data engineering & BI', en: 'Data Engineering & BI Intern' },
      date: { fr: 'Avr. – août 2026', en: 'Apr – Aug 2026' },
      place: { fr: 'Saint-Denis', en: 'Saint-Denis, France' },
      result: { fr: '≈ 10 tableaux de bord, 15 outils consolidés', en: '≈ 10 dashboards, 15 tools consolidated' },
      points: {
        fr: [
          "<strong>Conçu une dizaine de tableaux de bord Power BI</strong> de pilotage de la DSI, consolidant les indicateurs clés d'une quinzaine d'outils (Jira, GitLab, SonarQube, outils de déploiement, Kubernetes).",
          "<strong>Développé les pipelines d'extraction</strong> en Python (API REST et OData), automatisés en GitLab CI/CD et historisés.",
          '<strong>Modélisé les données en étoile</strong> (Power Query, Dataflows) et défini les indicateurs DAX.'
        ],
        en: [
          '<strong>Designed about ten Power BI dashboards</strong> for IT management, consolidating key indicators from around fifteen tools (Jira, GitLab, SonarQube, deployment tools, Kubernetes).',
          '<strong>Built the extraction pipelines</strong> in Python (REST and OData APIs), automated with GitLab CI/CD and historised.',
          '<strong>Designed the star-schema model</strong> (Power Query, Dataflows) and the DAX measures.'
        ]
      },
      stack: 'Power BI · DAX · Power Query · Python · API REST · OData · GitLab CI/CD'
    },
    {
      org: 'HAMATEL',
      role: { fr: 'Stagiaire développeur data & web', en: 'Data & Web Developer Intern' },
      date: { fr: 'Juin – août 2025', en: 'Jun – Aug 2025' },
      place: { fr: 'Maroc', en: 'Morocco' },
      result: { fr: 'Reporting financier : 1 semaine → 2 heures', en: 'Financial reporting: 1 week → 2 hours' },
      points: {
        fr: [
          "<strong>Automatisé les rapports financiers</strong> d'un groupe de grande distribution : une semaine de travail ramenée à 2 heures.",
          '<strong>Développé une application Flask</strong> de gestion des chantiers, des équipes et des interventions.'
        ],
        en: [
          '<strong>Automated the financial reporting</strong> of a retail group: one week of work reduced to 2 hours.',
          '<strong>Developed a Flask application</strong> to manage worksites, teams and interventions.'
        ]
      },
      stack: 'Python · Flask · SQL'
    }
  ];

  var FILTERS = [
    { id: 'all', fr: 'Tous', en: 'All' },
    { id: 'data', fr: 'Data engineering', en: 'Data engineering' },
    { id: 'ml', fr: 'Machine learning', en: 'Machine learning' },
    { id: 'risk', fr: 'Risque', en: 'Risk' },
    { id: 'viz', fr: 'Visualisation', en: 'Visualisation' }
  ];

  var PROJECTS = [
    {
      id: 'pricing', cat: 'risk',
      title: { fr: 'Tarification automobile', en: 'Motor insurance pricing' },
      metric: { fr: 'Gini 0,37', en: 'Gini 0.37' },
      summary: { fr: 'Une prime pure fréquence × coût sur 678 000 contrats : GLM Poisson et Gamma face à XGBoost.', en: 'A frequency × severity pure premium on 678,000 policies: Poisson and Gamma GLMs versus XGBoost.' },
      facts: {
        fr: ['Construire une prime pure lisible et vérifier ce que le machine learning apporte au GLM.', 'freMTPL2 : 678 013 contrats d\'assurance auto français (données publiques).', 'GLM Poisson (offset exposition) et Gamma, interactions avec le bonus-malus, XGBoost Poisson / Gamma, correction d\'équilibre, surcharge des sinistres graves, SHAP.', 'Gini 0,32 (GLM) → 0,33 (GLM + interactions) → 0,37 (XGBoost), écarts significatifs par bootstrap ; notebook exécuté et tests.'],
        en: ['Build a readable pure premium and measure what machine learning adds to the GLM.', 'freMTPL2: 678,013 French motor policies (public data).', 'Poisson (exposure offset) and Gamma GLMs, bonus-malus interactions, Poisson / Gamma XGBoost, balance correction, large-claim loading, SHAP.', 'Gini 0.32 (GLM) → 0.33 (GLM + interactions) → 0.37 (XGBoost), significant by bootstrap; executed notebook and tests.']
      },
      stack: 'Python · statsmodels · XGBoost · pandas',
      links: { github: GH + 'tarification-auto-glm-xgboost' }
    },
    {
      id: 'reserving', cat: 'risk',
      title: { fr: 'Provisionnement : Chain-Ladder face au ML', en: 'Reserving: Chain-Ladder versus ML' },
      metric: { fr: '343 triangles', en: '343 triangles' },
      summary: { fr: 'Chain-Ladder, Mack et Cape Cod comparés à XGBoost, avec un backtest sur des triangles réels.', en: 'Chain-Ladder, Mack and Cape Cod compared with XGBoost, backtested on real triangles.' },
      facts: {
        fr: ['Mesurer l\'erreur réelle des méthodes de provisionnement, ce qu\'un triangle seul ne permet pas.', 'CAS Loss Reserving Database : 343 triangles réels de 6 branches, avec les paiements réalisés après la date d\'estimation (données publiques).', 'Chain-Ladder, Mack et Cape Cod codés et validés sur RAA (Mack 1993) ; XGBoost en correction de Chain-Ladder, validation croisée par compagnie, sans fuite.', 'Erreur quadratique 6,6 % → 4,5 % des primes ; l\'intervalle à 95 % de Mack ne couvre que 77 % des réserves réelles.'],
        en: ['Measure the actual error of reserving methods, which a single triangle cannot show.', 'CAS Loss Reserving Database: 343 real triangles across 6 lines, with payments made after the valuation date (public data).', 'Chain-Ladder, Mack and Cape Cod implemented and validated on RAA (Mack 1993); XGBoost as a Chain-Ladder correction, company-level cross-validation, no leakage.', 'Root mean squared error 6.6% → 4.5% of premium; the Mack 95% interval covers only 77% of actual reserves.']
      },
      stack: 'Python · NumPy · XGBoost · SciPy',
      links: { github: GH + 'provisionnement-chain-ladder-ml' }
    },
    {
      id: 'medallion', cat: 'data',
      title: { fr: 'Pipeline de données médaillon', en: 'Medallion data pipeline' },
      metric: { fr: 'SCD2 · Dagster', en: 'SCD2 · Dagster' },
      summary: { fr: "Ingestion quotidienne et modélisation bronze, silver et gold des données d'une compagnie aérienne, orchestrée avec Dagster.", en: "Daily ingestion and bronze, silver and gold modelling of an airline's data, orchestrated with Dagster." },
      facts: {
        fr: ["Rendre exploitables des données opérationnelles qui arrivent chaque jour, sans perdre l'historique.", 'Jeu de référence et flux quotidiens d\'une compagnie aérienne, fournis pour le cours de data engineering.', 'Architecture médaillon sur DuckDB : bronze (brut), silver (nettoyé et typé), gold (tables analytiques). Historisation SCD2, orchestration Dagster avec backfill.', "Pipeline complet et documenté (diagramme d'architecture), compatible de DuckDB 0.10 à 2.0."],
        en: ['Make operational data that arrives every day usable, without losing history.', "An airline's reference dataset and daily feeds, provided for the data engineering course.", 'Medallion architecture on DuckDB: bronze (raw), silver (clean, typed), gold (analytical tables). SCD2 history, Dagster orchestration with backfill.', 'Complete, documented pipeline (architecture diagram), compatible from DuckDB 0.10 to 2.0.']
      },
      stack: 'Python · DuckDB · SQL · Dagster',
      links: { github: GH + 'tp-polytech-sujet-2026' }
    },
    {
      id: 'churn', cat: 'ml',
      title: { fr: 'Prédiction du churn client', en: 'Customer churn prediction' },
      metric: { fr: 'AUC 0,85', en: 'AUC 0.85' },
      summary: { fr: "Un projet de machine learning complet, de l'analyse des données jusqu'à une application Streamlit en ligne, conteneurisée avec Docker.", en: 'A complete machine learning project, from data analysis to an online Streamlit app, containerised with Docker.' },
      facts: {
        fr: ["Repérer les clients sur le point de résilier pour cibler les actions de fidélisation.", 'Données clients d\'un opérateur télécom (environ 7 000 clients), classes déséquilibrées.', 'Régression logistique, Random Forest et SVM comparés ; prétraitement, encodage et normalisation ; application Streamlit : tableau de bord, prédiction individuelle et en lot.', 'AUC de 0,85 avec la régression logistique, retenue pour sa lisibilité ; application en ligne et image Docker.'],
        en: ['Identify customers about to cancel in order to target retention actions.', "A telecom operator's customer data (about 7,000 customers), imbalanced classes.", 'Logistic regression, Random Forest and SVM compared; preprocessing, encoding and scaling; Streamlit app: dashboard, single and batch prediction.', 'AUC of 0.85 with logistic regression, chosen for its interpretability; online app and Docker image.']
      },
      stack: 'Python · scikit-learn · Streamlit · Docker',
      links: { github: GH + 'Projet-de-prediction-du-churn-client', demo: 'https://aminenakrou-churn-prediction.streamlit.app' }
    },
    {
      id: 'credit', cat: 'risk',
      title: { fr: 'Scoring de crédit', en: 'Credit scoring' },
      metric: { fr: 'ROC · Youden', en: 'ROC · Youden' },
      summary: { fr: "Évaluer le risque d'un client avant l'octroi d'un crédit, sur des données fortement déséquilibrées.", en: 'Assess a customer\'s risk before granting credit, on heavily imbalanced data.' },
      facts: {
        fr: ["Décider d'accorder ou non un crédit en limitant le risque de défaut.", 'Données financières avec un fort déséquilibre de classes.', 'Régression logistique, arbre de décision et forêt aléatoire ; rééquilibrage SMOTE ; courbes ROC et seuil de Youden.', 'Comparaison des modèles dans un rapport R Markdown interactif.'],
        en: ['Decide whether to grant credit while limiting default risk.', 'Financial data with strong class imbalance.', 'Logistic regression, decision tree and random forest; SMOTE rebalancing; ROC curves and Youden threshold.', 'Model comparison in an interactive R Markdown report.']
      },
      stack: 'R · R Markdown · SMOTE · ROC',
      links: { github: GH + 'scoring-credit-courbe-roc', demo: PAGES + 'scoring-credit-courbe-roc/' }
    },
    {
      id: 'health', cat: 'ml',
      title: { fr: 'Diagnostic sur radiographies thoraciques', en: 'Chest X-ray diagnosis' },
      metric: { fr: '14 pathologies', en: '14 conditions' },
      summary: { fr: 'Un réseau de neurones qui détecte 14 pathologies, évalué comme on évalue un test médical.', en: 'A neural network that detects 14 conditions, evaluated the way a medical test is evaluated.' },
      facts: {
        fr: ['Aider au diagnostic en détectant 14 pathologies sur des radiographies thoraciques.', 'NIH ChestX-ray8 : images annotées multi-label, classes très déséquilibrées, séparation par patient pour éviter toute fuite de données.', 'Transfer learning DenseNet121, perte pondérée, Grad-CAM pour montrer les zones qui justifient chaque prédiction.', 'AUC par pathologie, sensibilité et spécificité, VPP et VPN, intervalles de confiance par bootstrap, calibration de Platt.'],
        en: ['Support diagnosis by detecting 14 conditions on chest X-rays.', 'NIH ChestX-ray8: multi-label annotated images, highly imbalanced classes, patient-level split to prevent leakage.', 'DenseNet121 transfer learning, weighted loss, Grad-CAM to show the regions behind each prediction.', 'Per-class AUC, sensitivity and specificity, PPV and NPV, bootstrap confidence intervals, Platt calibration.']
      },
      stack: 'TensorFlow · Keras · DenseNet121 · scikit-learn',
      links: {}
    },
    {
      id: 'dashboard', cat: 'viz',
      title: { fr: 'Tableau de bord de santé publique', en: 'Public health dashboard' },
      metric: { fr: '2000 – 2018', en: '2000 – 2018' },
      summary: { fr: 'Une application web pour lire 19 ans de statistiques américaines par État, sexe et âge.', en: 'A web app to read 19 years of US statistics by state, sex and age.' },
      facts: {
        fr: ['Rendre lisibles des tendances longues de santé publique.', 'Données publiques américaines, 2000 à 2018.', 'HTML, CSS, JavaScript et Plotly : indicateurs clés, import de fichiers CSV par glisser-déposer, trois vues (tableau de bord, analyse, indicateurs).', 'Démo en ligne, utilisable sans installation.'],
        en: ['Make long-term public health trends readable.', 'US public data, 2000 to 2018.', 'HTML, CSS, JavaScript and Plotly: key indicators, drag-and-drop CSV import, three views (dashboard, analysis, indicators).', 'Online demo, no installation needed.']
      },
      stack: 'JavaScript · Plotly · HTML · CSS',
      links: { github: GH + 'dashboard-suicide-usa', demo: PAGES + 'dashboard-suicide-usa/' }
    },
    {
      id: 'water', cat: 'viz',
      title: { fr: 'Accès à l\'eau potable dans le monde', en: 'Access to drinking water worldwide' },
      metric: { fr: '776 M sans accès', en: '776 M without access' },
      summary: { fr: 'Un tableau de bord Tableau pour aider une ONG à choisir les pays et le domaine où investir.', en: 'A Tableau dashboard to help an NGO choose the countries and the field to invest in.' },
      facts: {
        fr: ['Repérer les pays en difficulté d\'accès à l\'eau potable et où concentrer les efforts, pour trois domaines : création, modernisation, conseil.', 'Données publiques OMS et FAO, 2000 à 2017 : accès à l\'eau, population, stabilité politique, mortalité.', 'Modèle de données Tableau (jointure et relations), indicateurs pondérés par la population, calculs FIXED, histoire en quatre tableaux de bord accessibles.', 'Publié sur Tableau Public ; chiffres clés vérifiés indépendamment avec pandas.'],
        en: ['Identify countries struggling with access to drinking water and where to focus, across three fields: building, upgrading, advising.', 'Public WHO and FAO data, 2000 to 2017: water access, population, political stability, mortality.', 'Tableau data model (join and relationships), population-weighted indicators, FIXED calculations, a story of four accessible dashboards.', 'Published on Tableau Public; key figures independently cross-checked with pandas.']
      },
      stack: 'Tableau · Python · pandas',
      links: { github: GH + 'acces-eau-potable-tableau', demo: 'https://public.tableau.com/app/profile/amine.nakrou/viz/AccsleaupotabledanslemondeDWFA/HistoireDWFA' }
    }
  ];

  var LAB = [
    { title: { fr: 'Tableau de bord de portefeuille', en: 'Portfolio dashboard' }, text: { fr: 'Sinistralité, fréquence et coût moyen par segment, publiés sur Tableau Public.', en: 'Loss experience, frequency and severity by segment, published on Tableau Public.' } }
  ];

  var OTHERS = [
    { title: { fr: 'Promenade aléatoire du cavalier', en: 'Random knight walk' }, dom: { fr: 'Probabilités', en: 'Probability' }, desc: { fr: 'Chaînes de Markov, simulations Python, rapport LaTeX', en: 'Markov chains, Python simulations, LaTeX report' }, gh: 'promenade-aleatoire-cavalier-markov', demo: true },
    { title: { fr: 'PageRank sur Wikispeedia', en: 'PageRank on Wikispeedia' }, dom: { fr: 'Graphes', en: 'Graphs' }, desc: { fr: 'PageRank standard et personnalisé', en: 'Standard and personalised PageRank' }, gh: 'pagerank-wikispeedia', demo: true },
    { title: { fr: 'Algorithme de Dinic', en: 'Dinic algorithm' }, dom: { fr: 'Algorithmique', en: 'Algorithms' }, desc: { fr: 'Flot maximum en C, graphes DIMACS', en: 'Maximum flow in C, DIMACS graphs' }, gh: 'dinic-flot-maximum', demo: true },
    { title: { fr: 'Optimisation de la production', en: 'Production optimisation' }, dom: { fr: 'Recherche opérationnelle', en: 'Operations research' }, desc: { fr: 'Programmation linéaire et analyse de robustesse (Lindo)', en: 'Linear programming and robustness analysis (Lindo)' } },
    { title: { fr: 'CKOALA', en: 'CKOALA' }, dom: { fr: 'Java', en: 'Java' }, desc: { fr: 'Moteur de recherche dans des arbres de typologies', en: 'Search engine over typology trees' }, gh: 'ckoala-recherche-typologies', demo: true },
    { title: { fr: 'Pente', en: 'Pente' }, dom: { fr: 'C', en: 'C' }, desc: { fr: 'Jeu de plateau 19 × 19 : coups, captures, alignements', en: '19 × 19 board game: moves, captures, alignments' }, gh: 'pente-jeu-de-plateau' },
    { title: { fr: 'Flood It', en: 'Flood It' }, dom: { fr: 'Web', en: 'Web' }, desc: { fr: 'Puzzle de couleurs jouable dans le navigateur', en: 'Colour puzzle playable in the browser' }, gh: 'flood-it-jeu', demo: true },
    { title: { fr: 'QUESACO', en: 'QUESACO' }, dom: { fr: 'Conception d\'interface', en: 'Interface design' }, desc: { fr: 'Maquettes React d\'une application d\'identification de la faune et de la flore', en: 'React mock-ups of a wildlife and plant identification app' }, gh: 'quesaco-maquettes', demo: true }
  ];

  var SKILLS = [
    { k: { fr: 'Actuariat et assurance', en: 'Actuarial & insurance' }, v: { fr: 'Santé collective, sinistralité, Chain-Ladder, logique survenance / exercice, contrôle des prestations, gestion déléguée', en: 'Group health, claims experience, Chain-Ladder, accident / payment year logic, claims controls, delegated administration' } },
    { k: { fr: 'Machine learning', en: 'Machine learning' }, v: { fr: 'Régression, classification, Random Forest, XGBoost, SHAP, deep learning (TensorFlow / Keras, PyTorch), statistiques', en: 'Regression, classification, Random Forest, XGBoost, SHAP, deep learning (TensorFlow / Keras, PyTorch), statistics' } },
    { k: { fr: 'Langages', en: 'Languages' }, v: 'Python, R, SQL, SAS, VBA, HTML / CSS / JavaScript' },
    { k: { fr: 'Librairies', en: 'Libraries' }, v: 'pandas, NumPy, scikit-learn, Matplotlib, Plotly, Flask, Streamlit, R Markdown' },
    { k: { fr: 'Bases de données', en: 'Databases' }, v: 'SAS Enterprise Guide, Snowflake, DuckDB, PostgreSQL, MySQL, MongoDB' },
    { k: { fr: 'Data engineering et MLOps', en: 'Data engineering & MLOps' }, v: 'Spark, Airflow, Dagster, Docker, Kubernetes, MLflow, Git / GitHub, GitLab CI/CD, API REST / OData' },
    { k: { fr: 'BI et reporting', en: 'BI & reporting' }, v: { fr: 'Power BI (DAX, Power Query, Dataflows), Tableau, Excel avancé', en: 'Power BI (DAX, Power Query, Dataflows), Tableau, advanced Excel' } },
    { k: { fr: 'Cloud et systèmes', en: 'Cloud & systems' }, v: 'Azure, AWS, Linux' },
    { k: { fr: 'Outils', en: 'Tools' }, v: 'Jupyter, VS Code, Jira, SonarQube, SharePoint, LeanIX' },
    { k: { fr: 'Langues', en: 'Languages spoken' }, v: { fr: 'Français courant, anglais C1, arabe langue maternelle, espagnol A2', en: 'French (fluent), English (C1), Arabic (native), Spanish (A2)' } }
  ];

  var EDU = [
    { date: '2024 – 2027', title: { fr: "Diplôme d'ingénieur, grade Master", en: "Engineering degree, Master's level" }, org: 'Polytech Lille · ISIA', text: { fr: 'Informatique, statistiques et intelligence artificielle : machine learning, data mining, MLOps, data engineering, optimisation. Dernière année en alternance.', en: 'Computer science, statistics and artificial intelligence: machine learning, data mining, MLOps, data engineering, optimisation. Final year as a work-study.' } },
    { date: '2022 – 2024', title: { fr: 'Classes préparatoires MPSI / MP', en: 'Preparatory classes MPSI / MP' }, org: 'Lycée Moulay Idriss, Fès', text: { fr: "Deux ans de mathématiques, de physique et d'algorithmique intensives, avant les concours des écoles d'ingénieurs.", en: 'Two years of intensive mathematics, physics and algorithms ahead of the engineering school entrance exams.' } },
    { date: '2022', title: { fr: 'Baccalauréat Sciences mathématiques', en: 'Baccalaureate in Mathematical Sciences' }, org: { fr: 'Mention Très bien · Maroc', en: 'Highest honours · Morocco' }, text: { fr: 'Filière scientifique à dominante mathématique.', en: 'Science track with a mathematics focus.' } }
  ];

  /* ------------------------------------------------------------------
     Outils
     ------------------------------------------------------------------ */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var lang = 'fr';
  function t(k, vars) {
    var s = (I18N[lang] && I18N[lang][k]) || I18N.fr[k] || k;
    if (vars) Object.keys(vars).forEach(function (n) { s = s.replace('{' + n + '}', vars[n]); });
    return s;
  }
  var L = function (o) { return typeof o === 'string' ? o : (o[lang] || o.fr); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (_) { /* sans stockage */ } }
  };
  function fmt(n, d) { return n.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { el.classList.remove('show'); }, 2400);
  }

  /* ------------------------------------------------------------------
     Fig. 1 : triangle de développement et Chain-Ladder
     Montants simulés de façon déterministe, puis projetés avec les
     facteurs de développement calculés sur la partie observée.
     ------------------------------------------------------------------ */
  var TRI = (function () {
    var years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
    var ultimates = [812, 846, 889, 905, 951, 998, 1034];
    var pattern = [0.58, 0.83, 0.93, 0.968, 0.987, 0.996, 1];
    var n = years.length, C = [], i, j;
    for (i = 0; i < n; i++) {
      C[i] = [];
      var cum = 0;
      for (j = 0; j < n; j++) {
        var share = pattern[j] - (j ? pattern[j - 1] : 0);
        cum += ultimates[i] * share * (1 + 0.09 * Math.sin(i * 1.9 + j * 2.7));
        C[i][j] = i + j <= n - 1 ? Math.round(cum) : null;
      }
    }
    var f = [];
    for (j = 0; j < n - 1; j++) {
      var num = 0, den = 0;
      for (i = 0; i + j + 1 <= n - 1; i++) { num += C[i][j + 1]; den += C[i][j]; }
      f[j] = num / den;
    }
    var P = C.map(function (row) { return row.slice(); });
    for (i = 0; i < n; i++) for (j = 1; j < n; j++) if (P[i][j] === null) P[i][j] = P[i][j - 1] * f[j - 1];
    var rows = years.map(function (y, k) {
      var latest = C[k][n - 1 - k], ult = P[k][n - 1];
      return { year: y, ult: ult, reserve: ult - latest };
    });
    return { years: years, n: n, C: C, P: P, f: f, rows: rows };
  }());

  function renderTriangle(play) {
    stopPlay();
    var tbl = $('#triangle'), n = TRI.n, html = '<thead><tr><th scope="col">' + esc(t('fig.corner')) + '</th>';
    for (var j = 0; j < n; j++) html += '<th scope="col">' + (j + 1) + '</th>';
    html += '<th scope="col">' + esc(t('fig.ult')) + '</th></tr></thead><tbody>';
    for (var i = 0; i < n; i++) {
      html += '<tr data-row="' + i + '" tabindex="0"><th scope="row">' + TRI.years[i] + '</th>';
      for (j = 0; j < n; j++) {
        var obs = TRI.C[i][j] !== null;
        html += '<td class="cell ' + (obs ? 'obs' : 'prj') + '" data-i="' + i + '" data-j="' + j + '">' + fmt(TRI.P[i][j]) + '</td>';
      }
      html += '<td class="cell ult' + (i > 0 ? ' est' : '') + '" data-i="' + i + '" data-j="' + n + '">' + fmt(TRI.rows[i].ult) + '</td></tr>';
    }
    html += '</tbody><tfoot><tr><th scope="row">' + esc(t('fig.factors')) + '</th>';
    for (j = 0; j < n; j++) html += '<td class="f" data-j="' + j + '">' + (j < n - 1 ? fmt(TRI.f[j], 3) : '') + '</td>';
    html += '<td></td></tr></tfoot>';
    tbl.innerHTML = html;
    renderBars();
    if (play && !reduceMotion) playTriangle(); else showTotal();
  }

  function renderBars() {
    var max = Math.max.apply(null, TRI.rows.map(function (r) { return r.ult; }));
    $('#bars').innerHTML = TRI.rows.map(function (r, i) {
      var paid = r.ult - r.reserve, wp = paid / max * 100, wr = r.reserve / max * 100;
      var label = t('fig.row', { y: r.year, u: fmt(r.ult), r: fmt(r.reserve) });
      return '<div class="bar" data-row="' + i + '" role="img" aria-label="' + esc(label) + '">' +
        '<span class="bar-y">' + r.year + '</span>' +
        '<span class="bar-track"><span class="bar-fill" style="--i:' + i + '">' +
        '<span class="seg paid' + (r.reserve < 0.5 ? ' last' : '') + '" style="width:' + wp.toFixed(2) + '%"></span>' +
        (r.reserve >= 0.5 ? '<span class="seg res" style="width:' + wr.toFixed(2) + '%"></span>' : '') +
        '</span></span><span class="bar-v">' + fmt(r.ult) + '</span></div>';
    }).join('');
  }

  /* Séquence : cellules observées, puis pour chaque colonne le facteur
     de développement et les cellules projetées, puis l'ultime et les barres. */
  var playTimers = [];
  function later(fn, ms) { playTimers.push(setTimeout(fn, ms)); }
  function stopPlay() {
    playTimers.forEach(clearTimeout); playTimers = [];
    var btn = $('#replay'); if (btn) btn.disabled = false;
  }
  function countTo(el, to, dec, ms) {
    var t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / ms), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(1 + (to - 1) * e, dec);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function playTriangle() {
    var tbl = $('#triangle'), n = TRI.n, bars = $('#bars'), btn = $('#replay');
    btn.disabled = true;
    $$('td.cell, td.f', tbl).forEach(function (c) { c.classList.add('pending'); });
    bars.classList.add('pending');
    $('#figReadout').textContent = '';
    var cell = function (i, j) { return tbl.querySelector('td[data-i="' + i + '"][data-j="' + j + '"]'); };
    var t0 = 450, step = 360;
    // 1. Diagonales observées
    for (var i = 0; i < n; i++) for (var j = 0; j < n; j++) {
      if (TRI.C[i][j] !== null) (function (c, d) { later(function () { c.classList.remove('pending'); }, t0 + d * 55); }(cell(i, j), i + j));
    }
    var t1 = t0 + n * 55 + 250;
    // 2. Balayage colonne par colonne
    for (var jj = 0; jj < n - 1; jj++) (function (j) {
      var start = t1 + j * step;
      var pair = [];
      for (var r = 0; r + j + 1 <= n - 1; r++) { pair.push(cell(r, j), cell(r, j + 1)); }
      later(function () {
        pair.forEach(function (c) { c.classList.add('scan'); });
        var f = tbl.querySelector('td.f[data-j="' + j + '"]');
        f.classList.remove('pending'); f.classList.add('hot');
        countTo(f, TRI.f[j], 3, step * 0.8);
      }, start);
      for (var i2 = 0; i2 < n; i2++) {
        if (TRI.C[i2][j + 1] === null) (function (c, k) {
          later(function () { c.classList.remove('pending'); c.classList.add('flash'); }, start + 140 + k * 35);
          later(function () { c.classList.remove('flash'); }, start + 640 + k * 35);
        }(cell(i2, j + 1), i2));
      }
      later(function () {
        pair.forEach(function (c) { c.classList.remove('scan'); });
        tbl.querySelector('td.f[data-j="' + j + '"]').classList.remove('hot');
      }, start + step);
    }(jj));
    // 3. Ultimes, barres, réserve totale
    var t2 = t1 + (n - 1) * step + 120;
    for (var u = 0; u < n; u++) (function (c, k) { later(function () { c.classList.remove('pending'); }, t2 + k * 45); }(cell(u, n), u));
    later(function () { tbl.querySelector('td.f[data-j="' + (n - 1) + '"]').classList.remove('pending'); bars.classList.remove('pending'); }, t2 + 120);
    later(function () { showTotal(); btn.disabled = false; }, t2 + 700);
  }

  function showTotal() {
    var total = TRI.rows.reduce(function (s, r) { return s + r.reserve; }, 0);
    $('#figReadout').textContent = t('fig.total', { r: fmt(total) });
  }
  function bindTriangle() {
    var tbl = $('#triangle'), bars = $('#bars');
    function select(i) {
      $$('tr.hl', tbl).concat($$('.bar.hl', bars)).forEach(function (x) { x.classList.remove('hl'); });
      if (i === null || isNaN(i)) { showTotal(); return; }
      var tr = tbl.querySelector('tbody tr[data-row="' + i + '"]'), bar = bars.querySelector('.bar[data-row="' + i + '"]');
      if (tr) tr.classList.add('hl');
      if (bar) bar.classList.add('hl');
      var r = TRI.rows[i];
      $('#figReadout').textContent = t('fig.row', { y: r.year, u: fmt(r.ult), r: fmt(r.reserve) });
    }
    var rowOf = function (e) { var el = e.target.closest('tbody tr, .bar'); return el ? +el.dataset.row : null; };
    [tbl, bars].forEach(function (root) {
      root.addEventListener('pointerover', function (e) { var i = rowOf(e); if (i !== null) select(i); });
      root.addEventListener('pointerleave', function () { select(null); });
      root.addEventListener('click', function (e) { var i = rowOf(e); if (i !== null) select(i); });
    });
    tbl.addEventListener('focusin', function (e) { var i = rowOf(e); if (i !== null) select(i); });
    tbl.addEventListener('focusout', function (e) { if (!tbl.contains(e.relatedTarget)) select(null); });
    $('#replay').addEventListener('click', function () { renderTriangle(true); });
  }

  /* Halo lumineux qui suit la souris dans l'ouverture */
  function initCursorGlow() {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
    var hero = $('#hero'), glow = $('.hero-glow'), dot = $('.cursor-glow');
    hero.addEventListener('pointermove', function (e) {
      var r = glow.getBoundingClientRect();
      dot.style.setProperty('--cx', (e.clientX - r.left) + 'px');
      dot.style.setProperty('--cy', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* Apparitions au défilement pour les navigateurs sans « scroll-driven animations ».
     Seuls les éléments situés sous l'écran au chargement sont masqués, puis révélés. */
  function initRevealFallback() {
    var supported = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
    if (supported || reduceMotion || !('IntersectionObserver' in window)) return;
    var sel = '.entry, article.proj, .skills > div, .lab li, .wanted > div, .prose > p, .portrait, .others tbody tr, .sub-title, .contact-lead, .mail-row, .figures-list > div';
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    function arm() {
      $$(sel).forEach(function (el, k) {
        if (el.classList.contains('rv')) return;
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add('rv');
        el.style.setProperty('--rd', (k % 4) * 60 + 'ms');
        obs.observe(el);
      });
    }
    document.documentElement.classList.add('io');
    arm();
    armReveal = arm;
  }
  var armReveal = function () {};

  /* Titre révélé mot par mot (au premier affichage seulement) */
  function splitTitle() {
    var h1 = $('.hero h1');
    var words = h1.textContent.trim().split(/\s+/);
    h1.setAttribute('aria-label', h1.textContent.trim());
    h1.innerHTML = words.map(function (w, i) { return '<span class="w" aria-hidden="true"><span style="--i:' + i + '">' + esc(w) + '</span></span>'; }).join(' ');
  }

  /* Compteurs des repères chiffrés */
  function initCounters() {
    var els = $$('.count');
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        var el = e.target, to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || '0', 10), t0 = null;
        (function step(ts) {
          if (!ts) { requestAnimationFrame(step); return; }
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / 1400), k = 1 - Math.pow(1 - p, 4);
          el.textContent = fmt(to * k, dec);
          if (p < 1) requestAnimationFrame(step);
        }());
      });
    }, { threshold: 0.8 });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ------------------------------------------------------------------
     Rendu des sections
     ------------------------------------------------------------------ */
  function renderJobs() {
    $('#jobs').innerHTML = JOBS.map(function (j) {
      var org = lang === 'en' && j.orgEn ? j.orgEn : j.org;
      return '<li class="entry"><div class="when">' + esc(L(j.date)) + '<br />' + esc(L(j.place)) +
        (j.current ? '<br /><span class="now"><span class="dot" aria-hidden="true"></span>' + esc(t('exp.now')) + '</span>' : '') + '</div>' +
        '<div><h3>' + esc(L(j.role)) + '</h3><p class="org">' + esc(org) + '</p>' +
        (j.team ? '<p class="team">' + esc(L(j.team)) + '</p>' : '') +
        '<span class="result">' + esc(L(j.result)) + '</span>' +
        '<ul>' + j.points[lang].map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
        '<p class="stack">' + esc(j.stack) + '</p></div></li>';
    }).join('');
  }

  function renderEdu() {
    $('#edu').innerHTML = EDU.map(function (e) {
      return '<li class="entry"><div class="when">' + esc(e.date) + '</div><div><h3>' + esc(L(e.title)) + '</h3>' +
        '<p class="org">' + esc(L(e.org)) + '</p><p class="edu-text">' + esc(L(e.text)) + '</p></div></li>';
    }).join('');
  }

  var activeFilter = 'all';
  var openIds = {};
  function catLabel(id) { var c = FILTERS.filter(function (f) { return f.id === id; })[0]; return c ? c[lang] : ''; }

  function renderFilters() {
    $('#filters').innerHTML = FILTERS.map(function (f) {
      return '<button type="button" data-filter="' + f.id + '" aria-pressed="' + (f.id === activeFilter) + '">' + esc(f[lang]) + '</button>';
    }).join('');
  }

  function renderProjects() {
    var keys = ['facts.problem', 'facts.data', 'facts.method', 'facts.result'];
    $('#projects').innerHTML = PROJECTS.map(function (p) {
      var open = !!openIds[p.id];
      var links = '';
      if (p.links.github) links += '<a class="btn small" href="' + p.links.github + '" target="_blank" rel="noopener noreferrer">' + esc(t('proj.github')) + ' ↗</a>';
      if (p.links.demo) links += '<a class="btn small" href="' + p.links.demo + '" target="_blank" rel="noopener noreferrer">' + esc(t('proj.demo')) + ' ↗</a>';
      if (!links) links = '<span class="note">' + esc(t('proj.private')) + '</span>';
      return '<article class="proj' + (open ? ' open' : '') + '" data-id="' + p.id + '" data-cat="' + p.cat + '">' +
        '<button class="proj-head" type="button" aria-expanded="' + open + '" aria-controls="panel-' + p.id + '">' +
        '<span class="proj-cat">' + esc(catLabel(p.cat)) + '</span>' +
        '<span class="proj-title">' + esc(L(p.title)) + '</span>' +
        '<span class="proj-metric">' + esc(L(p.metric)) + '</span>' +
        '<span class="proj-toggle" aria-hidden="true"></span></button>' +
        '<p class="proj-sum">' + esc(L(p.summary)) + '</p>' +
        '<div class="proj-panel" id="panel-' + p.id + '" role="region"><div><div class="proj-inner"><dl class="facts">' +
        p.facts[lang].map(function (f, i) { return '<dt>' + esc(t(keys[i])) + '</dt><dd>' + esc(f) + '</dd>'; }).join('') +
        '<dt>' + esc(t('facts.stack')) + '</dt><dd class="mono">' + esc(p.stack) + '</dd></dl>' +
        '<div class="proj-links">' + links + '</div></div></div></div></article>';
    }).join('');
    applyFilter();
  }
  function applyFilter() {
    $$('.proj').forEach(function (el) { el.classList.toggle('off', activeFilter !== 'all' && el.dataset.cat !== activeFilter); });
  }
  function toggleProject(id, force) {
    var el = $('.proj[data-id="' + id + '"]');
    if (!el) return;
    var open = typeof force === 'boolean' ? force : !el.classList.contains('open');
    el.classList.toggle('open', open);
    $('.proj-head', el).setAttribute('aria-expanded', String(open));
    if (open) openIds[id] = true; else delete openIds[id];
  }

  function renderLab() {
    $('#lab').innerHTML = LAB.map(function (x) {
      return '<li><span class="status">' + esc(t('lab.status')) + '</span><h4>' + esc(L(x.title)) + '</h4><p>' + esc(L(x.text)) + '</p></li>';
    }).join('');
  }

  function renderOthers() {
    var head = '<thead><tr><th scope="col">' + esc(t('more.project')) + '</th><th scope="col">' + esc(t('more.domain')) + '</th><th scope="col">' + esc(t('more.desc')) + '</th><th scope="col">' + esc(t('more.links')) + '</th></tr></thead>';
    var body = OTHERS.map(function (o) {
      var links = '';
      if (o.gh) links += '<a href="' + GH + o.gh + '" target="_blank" rel="noopener noreferrer">GitHub</a>';
      if (o.demo) links += '<a href="' + PAGES + o.gh + '/" target="_blank" rel="noopener noreferrer">' + esc(t('more.demo')) + '</a>';
      return '<tr><td>' + esc(L(o.title)) + '</td><td class="dom">' + esc(L(o.dom)) + '</td><td class="desc">' + esc(L(o.desc)) + '</td><td class="lk">' + (links || '–') + '</td></tr>';
    }).join('');
    $('#others').innerHTML = head + '<tbody>' + body + '</tbody>';
    $('#projMeta').textContent = t('proj.meta', { a: PROJECTS.length, b: OTHERS.length });
  }

  function renderSkills() {
    $('#skills').innerHTML = SKILLS.map(function (s) {
      return '<div><dt>' + esc(L(s.k)) + '</dt><dd>' + esc(L(s.v)) + '</dd></div>';
    }).join('');
  }

  /* ------------------------------------------------------------------
     Langue et thème
     ------------------------------------------------------------------ */
  function applyLang(next, opts) {
    opts = opts || {};
    lang = next === 'en' ? 'en' : 'fr';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); el.removeAttribute('aria-label'); });
    $$('.count').forEach(function (el) { el.textContent = fmt(parseFloat(el.dataset.to), parseInt(el.dataset.dec || '0', 10)); });
    $$('[data-i18n-placeholder]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('[data-i18n-title]').forEach(function (el) { el.title = t(el.dataset.i18nTitle); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    $$('.cv-link').forEach(function (a) { a.href = cvUrl(); });
    document.title = lang === 'fr' ? 'Amine Nakrou — Data science & actuariat' : 'Amine Nakrou — Data science & actuarial';
    renderTriangle(!!opts.animate);
    renderJobs(); renderFilters(); renderProjects(); renderLab(); renderOthers(); renderSkills(); renderEdu();
    armReveal();
    updateThemeLabel();
    if (!opts.silent) store.set('lang', lang);
  }

  function currentTheme() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function updateThemeLabel() {
    $('#themeBtn').setAttribute('aria-label', currentTheme() === 'dark' ? t('a11y.light') : t('a11y.dark'));
  }
  function toggleTheme() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
    updateThemeLabel();
  }

  /* ------------------------------------------------------------------
     Défilement : en-tête et section active
     ------------------------------------------------------------------ */
  function initScroll() {
    var top = $('#top');
    var onScroll = function () { top.classList.toggle('stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (!('IntersectionObserver' in window)) return;
    var links = $$('.nav a');
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['profil', 'experience', 'projets', 'competences', 'formation', 'contact'].forEach(function (id) {
      var s = document.getElementById(id); if (s) obs.observe(s);
    });
  }

  /* ------------------------------------------------------------------
     Recherche rapide (Ctrl / ⌘ + K)
     ------------------------------------------------------------------ */
  var palette = $('#palette'), pInput = $('#paletteInput'), pList = $('#paletteList'), pItems = [], pSel = 0;
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function go(id) { return function () { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); }; }
  function paletteData() {
    var sections = [['profil', 'nav.about'], ['experience', 'nav.experience'], ['projets', 'nav.projects'], ['competences', 'nav.skills'], ['formation', 'nav.education'], ['contact', 'nav.contact']];
    var list = sections.map(function (s) { return { label: t(s[1]), kind: t('cmd.section'), run: go(s[0]) }; });
    PROJECTS.forEach(function (p) {
      list.push({ label: L(p.title), kind: t('cmd.project'), run: function () {
        activeFilter = 'all'; renderFilters(); applyFilter(); toggleProject(p.id, true);
        var el = $('.proj[data-id="' + p.id + '"]'); if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      } });
    });
    list.push(
      { label: t('cmd.cv'), kind: t('cmd.action'), href: cvUrl() },
      { label: t('cmd.copy'), kind: t('cmd.action'), run: copyMail },
      { label: t('cmd.theme'), kind: t('cmd.action'), run: toggleTheme },
      { label: t('cmd.lang'), kind: t('cmd.action'), run: function () { applyLang(lang === 'fr' ? 'en' : 'fr'); } },
      { label: t('cmd.github'), kind: t('cmd.action'), href: 'https://github.com/aminenakrou' },
      { label: t('cmd.linkedin'), kind: t('cmd.action'), href: 'https://linkedin.com/in/amine-nakrou' }
    );
    return list;
  }
  function renderPalette() {
    var q = norm(pInput.value.trim());
    pItems = paletteData().filter(function (i) { return !q || norm(i.label + ' ' + i.kind).indexOf(q) !== -1; });
    pSel = Math.min(pSel, Math.max(0, pItems.length - 1));
    pList.innerHTML = pItems.length ? pItems.map(function (i, k) {
      return '<li role="option" data-k="' + k + '" aria-selected="' + (k === pSel) + '"><span>' + esc(i.label) + '</span><small>' + esc(i.kind) + '</small></li>';
    }).join('') : '<li class="empty">' + esc(t('palette.none')) + '</li>';
    var sel = pList.querySelector('[aria-selected="true"]');
    if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: 'nearest' });
  }
  function openPalette() {
    pInput.value = ''; pSel = 0; renderPalette();
    if (typeof palette.showModal === 'function') palette.showModal(); else palette.setAttribute('open', '');
    setTimeout(function () { pInput.focus(); }, 10);
  }
  function closePalette() { if (palette.open) { if (typeof palette.close === 'function') palette.close(); else palette.removeAttribute('open'); } }
  function runPalette(k) {
    var item = pItems[k];
    if (!item) return;
    closePalette();
    if (item.href) { window.open(item.href, '_blank', 'noopener'); return; }
    setTimeout(item.run, 50);
  }

  /* ------------------------------------------------------------------
     Copie de l'adresse (lue dans le lien de contact de la page)
     ------------------------------------------------------------------ */
  function copyMail() {
    var link = $('#mail');
    var addr = link ? link.textContent.trim() : '';
    if (!addr) return;
    var selectIt = function () {
      var r = document.createRange(); r.selectNodeContents(link);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      toast(t('contact.copyFail'));
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr).then(function () { toast(t('contact.copied')); }, selectIt);
    } else selectIt();
  }

  /* ------------------------------------------------------------------
     Branchements
     ------------------------------------------------------------------ */
  function bind() {
    $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.dataset.lang); }); });
    $('#themeBtn').addEventListener('click', toggleTheme);
    $('#copyMail').addEventListener('click', copyMail);

    var menuBtn = $('#menuBtn'), menu = $('#menu');
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { menuBtn.setAttribute('aria-expanded', 'false'); menu.hidden = true; }); });

    $('#filters').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      activeFilter = b.dataset.filter;
      $$('#filters button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      applyFilter();
    });
    $('#projects').addEventListener('click', function (e) {
      var head = e.target.closest('.proj-head'); if (!head) return;
      toggleProject(head.parentElement.dataset.id);
    });

    bindTriangle();

    var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    $('#kbd').textContent = isMac ? '⌘K' : 'Ctrl K';
    $('#paletteBtn').addEventListener('click', openPalette);
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (palette.open) closePalette(); else openPalette();
      }
    });
    pInput.addEventListener('input', function () { pSel = 0; renderPalette(); });
    pInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); pSel = Math.min(pItems.length - 1, pSel + 1); renderPalette(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); pSel = Math.max(0, pSel - 1); renderPalette(); }
      else if (e.key === 'Enter') { e.preventDefault(); runPalette(pSel); }
    });
    pList.addEventListener('click', function (e) { var li = e.target.closest('li[data-k]'); if (li) runPalette(+li.dataset.k); });
    palette.addEventListener('click', function (e) { if (e.target === palette) closePalette(); });

    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', updateThemeLabel); else if (mq.addListener) mq.addListener(updateThemeLabel);
  }

  function init() {
    bind();
    var saved = store.get('lang');
    var initial = saved || ((navigator.language || 'fr').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en');
    if (!reduceMotion) document.documentElement.classList.add('intro');
    applyLang(initial, { silent: true, animate: true });
    if (!reduceMotion) splitTitle();
    initScroll();
    initCounters();
    initCursorGlow();
    initRevealFallback();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
}());
