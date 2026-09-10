const SITE_TITLE = 'Amine Nakrou - Actuariat, Data Science & Machine Learning';
const CV = {
  fr: 'assets/cv/cv_amine_nakrou_fr.pdf',
  en: 'assets/cv/cv_amine_nakrou_en.pdf',
  ar: 'assets/cv/cv_amine_nakrou_fr.pdf'
};

const translations = {
  fr: {
    'a11y.skip': 'Aller au contenu',
    'nav.about': 'À propos',
    'nav.featured': 'Projets phares',
    'nav.skills': 'Compétences',
    'nav.experience': 'Parcours',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'hero.current': 'Chargé d\'études actuarielles @ Swiss Life',
    'hero.position': 'Actuarial Studies · Data Science · Machine Learning',
    'hero.summary': 'Profil quantitatif formé à Polytech Lille ISIA, actuellement en assurance non-vie chez Swiss Life à Roubaix. Je travaille sur le reporting actuariel, la fiabilisation des données, la modélisation et des outils d\'aide au pilotage.',
    'hero.projects': 'Voir mes projets',
    'hero.cv': 'Télécharger mon CV',
    'hero.contact': 'Me contacter',
    'hero.proof1': '12 projets publics intégrés',
    'hero.proof2': 'Actuariat · Data · ML',
    'hero.proof3': 'FR · EN · AR',
    'hero.panelStatus': 'Ouvert aux opportunités CDI',
    'hero.focus1Label': 'Actuel',
    'hero.focus1': 'Chargé d\'études actuarielles, assurance non-vie',
    'hero.focus2Label': 'Recherche',
    'hero.focus2Title': 'CDI après l\'expérience actuelle',
    'hero.focus2': 'Actuariat, Data, ML, Risk, BI',
    'hero.focus3Label': 'Socle',
    'hero.focus3': 'Reporting actuariel, fiabilisation, modélisation',
    'about.title': 'Profil quantitatif, actuariat et data',
    'about.p1': 'Je suis Amine Nakrou, élève ingénieur à Polytech Lille en spécialité Informatique, Statistiques et Intelligence Artificielle. Mon parcours combine statistiques appliquées, modélisation, programmation et projets data.',
    'about.p2': 'Depuis le 1er septembre 2026, je suis chargé d\'études actuarielles chez Swiss Life à Roubaix, dans le domaine de l\'assurance non-vie. Mes sujets couvrent notamment le reporting actuariel, l\'analyse et la fiabilisation des données, ainsi que des travaux de modélisation et de prédiction.',
    'about.p3': 'Cette expérience me permet de mobiliser conjointement actuariat, statistiques, analyse de données et programmation pour automatiser les analyses, améliorer les processus de reporting et transformer les données en informations utiles à la prise de décision. Pour la suite, je souhaite construire un CDI sur des problématiques quantitatives: actuariat, data science, risque, modélisation statistique, data engineering ou BI.',
    'about.chipSwiss': 'Swiss Life · Roubaix',
    'about.chipSchool': 'Polytech Lille · ISIA',
    'about.badge': 'Actuellement chez Swiss Life',
    'about.caption': 'Actuariat · Statistiques · Data',
    'featured.title': 'Preuves par les projets',
    'featured.sub': 'Chaque projet met en avant le problème, les données, la méthode, les technologies et les livrables disponibles.',
    'projects.kicker': 'Autres projets',
    'projects.title': 'Portfolio technique',
    'projects.sub': 'Une sélection plus large de projets data, statistiques, algorithmique et web. Les liens pointent vers les ressources existantes.',
    'case.title': 'Structure de case studies',
    'case.sub': 'Deux pages détaillées sont préparées pour les projets les mieux documentés actuellement. Les sections sans information vérifiée restent volontairement neutres.',
    'case.churn': 'Pipeline ML, données déséquilibrées, modèles comparés, Streamlit, Flask, Docker et MLflow.',
    'case.credit': 'Projet statistique autour du risque crédit, du déséquilibre de classes, de SMOTE et de la courbe ROC.',
    'skills.title': 'Compétences organisées pour les postes actuariat et data',
    'experience.title': 'Expérience et formation',
    'contact.title': 'Vous recrutez sur des sujets actuariat, data ou statistiques ?',
    'contact.sub': 'Échangeons autour d\'opportunités CDI pour la suite de mon expérience actuelle chez Swiss Life.',
    'contact.cv': 'Télécharger le CV',
    'contact.cvAlt': 'Version PDF selon la langue',
    'contact.emailLabel': 'Email',
    'footer.text': '© 2026 Amine Nakrou - Portfolio GitHub Pages',
    'footer.top': 'Retour en haut',
    'label.problem': 'Problème',
    'label.data': 'Données',
    'label.method': 'Méthode',
    'label.result': 'Resultat',
    'action.demo': 'Live Demo',
    'action.github': 'GitHub',
    'action.case': 'Case Study'
  },
  en: {
    'a11y.skip': 'Skip to content',
    'nav.about': 'About',
    'nav.featured': 'Featured projects',
    'nav.skills': 'Skills',
    'nav.experience': 'Journey',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'hero.current': 'Actuarial Studies Analyst @ Swiss Life',
    'hero.position': 'Actuarial Studies · Data Science · Machine Learning',
    'hero.summary': 'Quantitative profile trained at Polytech Lille ISIA, currently working in non-life insurance at Swiss Life in Roubaix. I work on actuarial reporting, data reliability, modelling and tools that support business monitoring.',
    'hero.projects': 'View projects',
    'hero.cv': 'Download resume',
    'hero.contact': 'Contact me',
    'hero.proof1': '12 public projects integrated',
    'hero.proof2': 'Actuarial · Data · ML',
    'hero.proof3': 'FR · EN · AR',
    'hero.panelStatus': 'Open to future full-time roles',
    'hero.focus1Label': 'Current',
    'hero.focus1': 'Actuarial studies, non-life insurance',
    'hero.focus2Label': 'Target',
    'hero.focus2Title': 'Full-time role after current experience',
    'hero.focus2': 'Actuarial, Data, ML, Risk, BI',
    'hero.focus3Label': 'Core',
    'hero.focus3': 'Actuarial reporting, data reliability, modelling',
    'about.title': 'Quantitative profile across actuarial work and data',
    'about.p1': 'I am Amine Nakrou, an engineering student at Polytech Lille in Computer Science, Statistics and Artificial Intelligence. My background combines applied statistics, modelling, programming and data projects.',
    'about.p2': 'Since September 1, 2026, I have been working as an actuarial studies analyst at Swiss Life in Roubaix, in non-life insurance. My work covers actuarial reporting, data analysis and reliability, as well as modelling and prediction tasks.',
    'about.p3': 'This experience lets me combine actuarial science, statistics, data analysis and programming to automate analyses, improve reporting processes and turn data into useful information for decision-making. For the next step, I am interested in a full-time role around quantitative topics: actuarial work, data science, risk, statistical modelling, data engineering or BI.',
    'about.chipSwiss': 'Swiss Life · Roubaix',
    'about.chipSchool': 'Polytech Lille · ISIA',
    'about.badge': 'Currently at Swiss Life',
    'about.caption': 'Actuarial · Statistics · Data',
    'featured.title': 'Project-backed evidence',
    'featured.sub': 'Each project highlights the problem, data, method, technologies and available deliverables.',
    'projects.kicker': 'Other projects',
    'projects.title': 'Technical portfolio',
    'projects.sub': 'A wider selection of data, statistics, algorithms and web projects. Links point to existing resources.',
    'case.title': 'Case study structure',
    'case.sub': 'Two detailed pages are prepared for the best documented projects. Sections without verified information remain deliberately neutral.',
    'case.churn': 'ML pipeline, imbalanced data, compared models, Streamlit, Flask, Docker and MLflow.',
    'case.credit': 'Statistical project around credit risk, class imbalance, SMOTE and ROC analysis.',
    'skills.title': 'Skills structured for actuarial and data roles',
    'experience.title': 'Experience and education',
    'contact.title': 'Hiring for actuarial, data or statistics topics?',
    'contact.sub': 'Let us talk about full-time opportunities after my current Swiss Life experience.',
    'contact.cv': 'Download resume',
    'contact.cvAlt': 'PDF version based on language',
    'contact.emailLabel': 'Email',
    'footer.text': '© 2026 Amine Nakrou - GitHub Pages portfolio',
    'footer.top': 'Back to top',
    'label.problem': 'Problem',
    'label.data': 'Data',
    'label.method': 'Method',
    'label.result': 'Result',
    'action.demo': 'Live demo',
    'action.github': 'GitHub',
    'action.case': 'Case Study'
  },
  ar: {
    'a11y.skip': 'تجاوز إلى المحتوى',
    'nav.about': 'عني',
    'nav.featured': 'مشاريع مختارة',
    'nav.skills': 'المهارات',
    'nav.experience': 'المسار',
    'nav.contact': 'تواصل',
    'nav.cv': 'السيرة',
    'hero.current': 'مكلف بدراسات اكتوارية @ Swiss Life',
    'hero.position': 'دراسات اكتوارية · علم البيانات · تعلم الآلة',
    'hero.summary': 'ملف كمي بتكوين في Polytech Lille ISIA، أعمل حاليا في التأمين غير الحياة لدى Swiss Life في Roubaix. أشتغل على التقارير الاكتوارية، موثوقية البيانات، النمذجة وأدوات دعم التوجيه.',
    'hero.projects': 'عرض المشاريع',
    'hero.cv': 'تحميل السيرة الذاتية',
    'hero.contact': 'تواصل معي',
    'hero.proof1': '12 مشروعا عاما مدمجا',
    'hero.proof2': 'اكتواريا · بيانات · تعلم آلة',
    'hero.proof3': 'FR · EN · AR',
    'hero.panelStatus': 'منفتح على فرص عمل دائمة لاحقا',
    'hero.focus1Label': 'حاليا',
    'hero.focus1': 'دراسات اكتوارية، تأمين غير الحياة',
    'hero.focus2Label': 'الهدف',
    'hero.focus2Title': 'عمل دائم بعد التجربة الحالية',
    'hero.focus2': 'اكتواريا، بيانات، تعلم آلة، مخاطر، BI',
    'hero.focus3Label': 'الأساس',
    'hero.focus3': 'تقارير اكتوارية، موثوقية البيانات، نمذجة',
    'about.title': 'ملف كمي بين الاكتواريا والبيانات',
    'about.p1': 'أنا أمين نقرو، طالب هندسة في Polytech Lille بتخصص المعلوماتية والإحصاء والذكاء الاصطناعي. يجمع مساري بين الإحصاء التطبيقي، النمذجة، البرمجة ومشاريع البيانات.',
    'about.p2': 'منذ 1 سبتمبر 2026، أعمل مكلفا بدراسات اكتوارية لدى Swiss Life في Roubaix، في مجال التأمين غير الحياة. تشمل مهامي التقارير الاكتوارية، تحليل وموثوقية البيانات، إضافة إلى أعمال النمذجة والتنبؤ.',
    'about.p3': 'تتيح لي هذه التجربة الجمع بين الاكتواريا، الإحصاء، تحليل البيانات والبرمجة لأتمتة التحليلات، تحسين عمليات التقارير وتحويل البيانات إلى معلومات مفيدة لاتخاذ القرار. للمرحلة التالية، أبحث عن عمل دائم في مواضيع كمية: الاكتواريا، علم البيانات، المخاطر، النمذجة الإحصائية، هندسة البيانات أو BI.',
    'about.chipSwiss': 'Swiss Life · Roubaix',
    'about.chipSchool': 'Polytech Lille · ISIA',
    'about.badge': 'حاليا لدى Swiss Life',
    'about.caption': 'اكتواريا · إحصاء · بيانات',
    'featured.title': 'إثبات من خلال المشاريع',
    'featured.sub': 'كل مشروع يوضح المشكلة، البيانات، المنهجية، التقنيات والموارد المتاحة.',
    'projects.kicker': 'مشاريع أخرى',
    'projects.title': 'ملف تقني',
    'projects.sub': 'مجموعة أوسع من مشاريع البيانات، الإحصاء، الخوارزميات والويب. الروابط تقود إلى الموارد الموجودة.',
    'case.title': 'هيكل دراسات حالة',
    'case.sub': 'تم إعداد صفحتين مفصلتين للمشاريع الأكثر توثيقا حاليا. الأقسام التي تنقصها معلومات مؤكدة بقيت محايدة.',
    'case.churn': 'خط تعلم آلة، بيانات غير متوازنة، نماذج مقارنة، Streamlit وFlask وDocker وMLflow.',
    'case.credit': 'مشروع إحصائي حول مخاطر الائتمان، عدم توازن الفئات، SMOTE وتحليل ROC.',
    'skills.title': 'مهارات منظمة لأدوار الاكتواريا والبيانات',
    'experience.title': 'الخبرة والتكوين',
    'contact.title': 'هل توظفون في الاكتواريا أو البيانات أو الإحصاء؟',
    'contact.sub': 'لنتبادل حول فرص عمل دائمة بعد تجربتي الحالية لدى Swiss Life.',
    'contact.cv': 'تحميل السيرة الذاتية',
    'contact.cvAlt': 'نسخة PDF حسب اللغة',
    'contact.emailLabel': 'البريد',
    'footer.text': '© 2026 أمين نقرو - Portfolio على GitHub Pages',
    'footer.top': 'العودة إلى الأعلى',
    'label.problem': 'المشكلة',
    'label.data': 'البيانات',
    'label.method': 'المنهجية',
    'label.result': 'النتيجة',
    'action.demo': 'تجربة مباشرة',
    'action.github': 'GitHub',
    'action.case': 'دراسة حالة'
  }
};

const projectTexts = {
  fr: {
    churn: ['Customer Churn Prediction', 'Prédire l\'attrition client et rendre le score exploitable via un tableau de bord et une API.', 'Données client déséquilibrées, traitées avec feature engineering.', 'Comparaison Random Forest et XGBoost, suivi d\'expériences et exposition applicative.', 'AUC 0.91 indiquée dans le projet existant.', 'Pipeline ML end-to-end avec dashboard Streamlit, API Flask containerisée et suivi MLflow.'],
    credit: ['Scoring de Crédit - ROC & SMOTE', 'Évaluer le risque client avant l\'accord d\'un crédit.', 'Données financières avec fort déséquilibre de classes indiqué dans le rapport.', 'Régression logistique, arbre de décision, forêt aléatoire, SMOTE, ROC et seuil de Youden.', 'Résultats présentés dans un rapport RMarkdown interactif, sans ajouter de nouvelle métrique.', 'Projet statistique très pertinent pour risque, actuariat et modélisation.'],
    dashboard: ['Dashboard interactif - Indicateurs USA', 'Rendre lisibles des tendances statistiques longues par état, genre et âge.', 'Données USA 2000-2018 selon le projet existant.', 'Dashboard interactif HTML, CSS et JavaScript.', 'Visualisation web disponible en démonstration.', 'Projet de data visualisation et d\'exploration interactive.'],
    fifa: ['EA Sports FC - Analyse FIFA', 'Explorer les facteurs associés aux performances et valeurs de joueurs.', 'Profils de joueurs FIFA 2016-2024 mentionnés dans le projet.', 'Analyse exploratoire, corrélations, détection d\'outliers et classification supervisée.', 'Notebook d\'analyse; métriques détaillées à documenter dans une future case study.', 'Analyse data orientée statistiques descriptives et machine learning.'],
    markov: ['Promenade aléatoire du cavalier', 'Étudier le retour possible d\'un cavalier aléatoire sur un échiquier infini.', 'Simulations et cadre mathématique.', 'Chaînes de Markov, simulation Python et rapport LaTeX.', 'Rapport mathématique complet disponible.', 'Projet statistique et mathématique utile pour montrer le socle quantitatif.'],
    pagerank: ['PageRank - Wikispeedia', 'Classer l\'importance de pages dans un graphe de liens.', 'Dataset Wikispeedia.', 'Implémentation PageRank standard et personnalisée.', 'Analyse de graphes disponible sur GitHub et demo.', 'Projet big data, graphes et algorithmique.'],
    dinic: ['Algorithme de Dinic - Flot Maximum', 'Calculer un flot maximum dans un réseau orienté.', 'Graphes au format DIMACS.', 'Implémentation C de l\'algorithme de Dinic.', 'Code source et page projet disponibles.', 'Projet d\'algorithmique avancée et optimisation de réseaux.'],
    ckoala: ['CKOALA - Moteur de recherche', 'Explorer et rechercher dans des arbres de typologies.', 'Structures hiérarchiques.', 'Développement Java.', 'Code source et page projet disponibles.', 'Projet logiciel autour des structures de données.'],
    flood: ['Flood It - Jeu de puzzle', 'Développer une expérience web interactive autour d\'un puzzle de couleurs.', 'Grilles générées dans le navigateur.', 'HTML, CSS et JavaScript.', 'Jeu jouable en ligne.', 'Projet web interactif conservé comme preuve de développement front-end.'],
    pente: ['Pente - Jeu de plateau 19x19', 'Implémenter un jeu de plateau jouable à deux avec règles de capture et conditions de victoire.', 'Plateau 19x19 et états de jeu manipulés en C.', 'Programmation procédurale, validation des coups, captures, alignements et gestion de fin de partie.', 'Code source disponible sur GitHub.', 'Projet C utile pour montrer rigueur algorithmique et structuration logicielle.'],
    quesaco: ['QUESACO', 'Projet web public disponible sur GitHub et en démonstration.', 'Informations détaillées à compléter depuis le contenu du projet.', 'HTML, CSS et JavaScript selon le dépôt public.', 'Démo GitHub Pages disponible.', 'Projet web conservé dans le portfolio élargi, avec description volontairement neutre.'],
    optimization: ['Optimisation de la production', 'Maximiser un profit sous contraintes de ressources.', 'Cas de programmation linéaire issu du projet.', 'Modélisation en programmation linéaire et résolution avec Lindo.', 'Analyse de robustesse de la solution optimale.', 'Projet de recherche opérationnelle pertinent pour modélisation et décision.']
  },
  en: {
    churn: ['Customer Churn Prediction', 'Predict customer attrition and make the score usable through a dashboard and API.', 'Imbalanced customer data handled with feature engineering.', 'Random Forest and XGBoost comparison, experiment tracking and application layer.', 'AUC 0.91 stated in the existing project.', 'End-to-end ML pipeline with Streamlit dashboard, Dockerized Flask API and MLflow tracking.'],
    credit: ['Credit Scoring - ROC & SMOTE', 'Assess customer risk before granting credit.', 'Financial data with strong class imbalance stated in the report.', 'Logistic regression, decision tree, random forest, SMOTE, ROC and Youden threshold.', 'Results presented in an interactive RMarkdown report, without adding new metrics.', 'Statistical project relevant to risk, actuarial work and modelling.'],
    dashboard: ['Interactive Dashboard - US Indicators', 'Make long-term statistical trends readable by state, gender and age.', 'US data from 2000-2018 according to the existing project.', 'Interactive HTML, CSS and JavaScript dashboard.', 'Web visualisation available as a demo.', 'Data visualisation and interactive exploration project.'],
    fifa: ['EA Sports FC - FIFA Analysis', 'Explore factors associated with player performance and value.', 'FIFA 2016-2024 player profiles mentioned in the project.', 'Exploratory analysis, correlations, outlier detection and supervised classification.', 'Analysis notebook; detailed metrics should be documented in a future case study.', 'Data analysis project around descriptive statistics and machine learning.'],
    markov: ['Random Knight Walk', 'Study whether a random knight can return to its starting square on an infinite board.', 'Simulations and mathematical framework.', 'Markov chains, Python simulation and LaTeX report.', 'Full mathematical report available.', 'Statistics and mathematics project showing the quantitative base.'],
    pagerank: ['PageRank - Wikispeedia', 'Rank page importance in a link graph.', 'Wikispeedia dataset.', 'Standard and personalised PageRank implementation.', 'Graph analysis available on GitHub and demo.', 'Big data, graphs and algorithms project.'],
    dinic: ['Dinic Algorithm - Maximum Flow', 'Compute maximum flow in a directed network.', 'Graphs in DIMACS format.', 'C implementation of Dinic algorithm.', 'Source code and project page available.', 'Advanced algorithms and network optimisation project.'],
    ckoala: ['CKOALA - Search Engine', 'Explore and search typology trees.', 'Hierarchical structures.', 'Java development.', 'Source code and project page available.', 'Software project around data structures.'],
    flood: ['Flood It - Puzzle Game', 'Build an interactive web experience around a colour puzzle.', 'Browser-generated grids.', 'HTML, CSS and JavaScript.', 'Playable online game.', 'Interactive web project kept as front-end development evidence.'],
    pente: ['Pente - 19x19 Board Game', 'Implement a two-player board game with captures and winning alignments.', '19x19 board and game states handled in C.', 'Procedural programming, move validation, captures, alignments and end-game handling.', 'Source code available on GitHub.', 'C project showing algorithmic rigour and software structure.'],
    quesaco: ['QUESACO', 'Public web project available on GitHub and as a demo.', 'Detailed information to complete from the project content.', 'HTML, CSS and JavaScript according to the public repository.', 'GitHub Pages demo available.', 'Web project kept in the broader portfolio with a neutral description.'],
    optimization: ['Production Optimisation', 'Maximise profit under resource constraints.', 'Linear programming case from the project.', 'Linear programming modelling and Lindo solving.', 'Robustness analysis of the optimal solution.', 'Operations research project relevant to modelling and decision-making.']
  },
  ar: {
    churn: ['التنبؤ بإلغاء اشتراك العملاء', 'توقع مغادرة العملاء وجعل النتيجة قابلة للاستعمال عبر لوحة وواجهة API.', 'بيانات عملاء غير متوازنة مع هندسة خصائص.', 'مقارنة Random Forest وXGBoost مع تتبع التجارب وطبقة تطبيقية.', 'AUC 0.91 كما هو مذكور في المشروع.', 'خط تعلم آلة متكامل مع Streamlit وFlask وDocker وMLflow.'],
    credit: ['تقييم الائتمان - ROC وSMOTE', 'تقييم مخاطر العميل قبل منح الائتمان.', 'بيانات مالية مع عدم توازن واضح في الفئات حسب التقرير.', 'انحدار لوجستي، شجرة قرار، غابة عشوائية، SMOTE، ROC وعتبة Youden.', 'نتائج في تقرير RMarkdown تفاعلي دون إضافة مقاييس جديدة.', 'مشروع إحصائي مناسب للمخاطر والاكتواريا والنمذجة.'],
    dashboard: ['لوحة تفاعلية - مؤشرات USA', 'تسهيل قراءة اتجاهات إحصائية طويلة حسب الولاية والجنس والعمر.', 'بيانات الولايات المتحدة 2000-2018 حسب المشروع.', 'لوحة تفاعلية HTML وCSS وJavaScript.', 'تصور ويب متاح كتجربة.', 'مشروع تصور بيانات واستكشاف تفاعلي.'],
    fifa: ['تحليل FIFA / EA Sports FC', 'استكشاف العوامل المرتبطة بأداء وقيمة اللاعبين.', 'ملفات لاعبي FIFA 2016-2024 كما يذكر المشروع.', 'تحليل استكشافي، ارتباطات، قيم شاذة وتصنيف موجه.', 'دفتر تحليل؛ التفاصيل الرقمية تحتاج توثيقا لاحقا.', 'مشروع تحليل بيانات حول الإحصاء الوصفي وتعلم الآلة.'],
    markov: ['المشي العشوائي للفارس', 'دراسة إمكانية عودة فارس عشوائي إلى نقطة البداية على رقعة لا نهائية.', 'محاكاة وإطار رياضي.', 'سلاسل ماركوف، محاكاة Python وتقرير LaTeX.', 'تقرير رياضي كامل متاح.', 'مشروع رياضي وإحصائي يبرز الأساس الكمي.'],
    pagerank: ['PageRank - Wikispeedia', 'ترتيب أهمية الصفحات في رسم بياني للروابط.', 'مجموعة Wikispeedia.', 'تطبيق PageRank قياسي ومخصص.', 'تحليل رسوم بيانية متاح على GitHub وتجربة.', 'مشروع بيانات ضخمة ورسوم بيانية وخوارزميات.'],
    dinic: ['خوارزمية Dinic - الجريان الأقصى', 'حساب الجريان الأقصى في شبكة موجهة.', 'رسوم بيانية بصيغة DIMACS.', 'تطبيق C لخوارزمية Dinic.', 'الكود وصفحة المشروع متاحان.', 'مشروع خوارزميات متقدمة وتحسين شبكات.'],
    ckoala: ['CKOALA - محرك بحث', 'استكشاف والبحث داخل أشجار تصنيف.', 'بنى هرمية.', 'تطوير Java.', 'الكود وصفحة المشروع متاحان.', 'مشروع برمجي حول هياكل البيانات.'],
    flood: ['Flood It - لعبة ألغاز', 'بناء تجربة ويب تفاعلية حول لغز ألوان.', 'شبكات مولدة في المتصفح.', 'HTML وCSS وJavaScript.', 'لعبة قابلة للتجربة عبر الإنترنت.', 'مشروع ويب تفاعلي كدليل على تطوير الواجهات.'],
    pente: ['Pente - لعبة لوحة 19x19', 'تنفيذ لعبة لشخصين مع قواعد الالتقاط وشروط الفوز.', 'لوحة 19x19 وحالات لعب بلغة C.', 'برمجة إجرائية، التحقق من الحركات، الالتقاط، الاصطفاف ونهاية اللعبة.', 'الكود متاح على GitHub.', 'مشروع C يبرز الصرامة الخوارزمية وتنظيم الكود.'],
    quesaco: ['QUESACO', 'مشروع ويب عام متاح على GitHub وكتجربة.', 'تفاصيل المشروع تحتاج استكمالا من محتواه.', 'HTML وCSS وJavaScript حسب المستودع العام.', 'تجربة GitHub Pages متاحة.', 'مشروع ويب محفوظ ضمن المحفظة الموسعة بوصف محايد.'],
    optimization: ['تحسين الإنتاج', 'تعظيم الربح تحت قيود الموارد.', 'حالة برمجة خطية من المشروع.', 'نمذجة برمجة خطية وحل باستخدام Lindo.', 'تحليل متانة الحل الأمثل.', 'مشروع بحوث عمليات مناسب للنمذجة واتخاذ القرار.']
  }
};

const projects = [
  { id: 'churn', category: { fr: 'Machine Learning', en: 'Machine Learning', ar: 'تعلم الآلة' }, featured: true, tech: ['Python', 'XGBoost', 'Random Forest', 'Streamlit', 'Flask', 'Docker', 'MLflow'], links: { github: 'https://github.com/aminenakrou/Projet-de-prediction-du-churn-client', demo: 'https://aminenakrou.github.io/Projet-de-prediction-du-churn-client/', case: 'case-studies/churn.html' } },
  { id: 'credit', category: { fr: 'Risque & Statistiques', en: 'Risk & Statistics', ar: 'مخاطر وإحصاء' }, featured: true, tech: ['R', 'RMarkdown', 'Logistic Regression', 'Random Forest', 'SMOTE', 'ROC'], links: { github: 'https://github.com/aminenakrou/Projet-Statistiques', demo: 'https://aminenakrou.github.io/Projet-Statistiques/', case: 'case-studies/credit-scoring.html' } },
  { id: 'dashboard', category: { fr: 'Data Visualisation', en: 'Data Visualisation', ar: 'تصور البيانات' }, featured: true, tech: ['JavaScript', 'HTML', 'CSS', 'Data Visualisation'], links: { github: 'https://github.com/aminenakrou/Dashboard', demo: 'https://aminenakrou.github.io/Dashboard/' } },
  { id: 'fifa', category: { fr: 'Analyse exploratoire', en: 'Exploratory Analysis', ar: 'تحليل استكشافي' }, featured: true, tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'], links: { github: 'https://github.com/aminenakrou?tab=repositories' } },
  { id: 'markov', category: { fr: 'Statistiques', en: 'Statistics', ar: 'إحصاء' }, featured: false, tech: ['Python', 'Markov Chains', 'Simulation', 'LaTeX'], links: { github: 'https://github.com/aminenakrou/Etude_Markovienne_de_la_promenade_du_cavalier_sur_un_echiquier', demo: 'https://aminenakrou.github.io/Etude_Markovienne_de_la_promenade_du_cavalier_sur_un_echiquier/' } },
  { id: 'pagerank', category: { fr: 'Graphes & Big Data', en: 'Graphs & Big Data', ar: 'رسوم وبيانات ضخمة' }, featured: false, tech: ['Python', 'PageRank', 'Graphs', 'Wikispeedia'], links: { github: 'https://github.com/aminenakrou/Big_Data_Project-PageRank_Analysis_on_Wikispeedia_Dataset', demo: 'https://aminenakrou.github.io/Big_Data_Project-PageRank_Analysis_on_Wikispeedia_Dataset/' } },
  { id: 'dinic', category: { fr: 'Algorithmique', en: 'Algorithms', ar: 'خوارزميات' }, featured: false, tech: ['C', 'Algorithms', 'Graph Theory', 'DIMACS'], links: { github: 'https://github.com/aminenakrou/Dinic-Algorithme_de_flot_maximum', demo: 'https://aminenakrou.github.io/Dinic-Algorithme_de_flot_maximum/' } },
  { id: 'ckoala', category: { fr: 'Java & Structures', en: 'Java & Structures', ar: 'Java وهياكل' }, featured: false, tech: ['Java', 'Trees', 'Search Engine'], links: { github: 'https://github.com/aminenakrou/CKOALA-Moteur_de_recherche_dans_des_arbres_de_typologies', demo: 'https://aminenakrou.github.io/CKOALA-Moteur_de_recherche_dans_des_arbres_de_typologies/' } },
  { id: 'pente', category: { fr: 'C & Jeux', en: 'C & Games', ar: 'C وألعاب' }, featured: false, tech: ['C', 'Game Logic', 'Algorithms'], links: { github: 'https://github.com/aminenakrou/Pente-Jeu_de_plateau_19x19' } },
  { id: 'flood', category: { fr: 'Web interactif', en: 'Interactive Web', ar: 'ويب تفاعلي' }, featured: false, tech: ['JavaScript', 'HTML', 'CSS', 'Game Dev'], links: { github: 'https://github.com/aminenakrou/Flood_It_Game', demo: 'https://aminenakrou.github.io/Flood_It_Game/' } },
  { id: 'quesaco', category: { fr: 'Web', en: 'Web', ar: 'ويب' }, featured: false, tech: ['HTML', 'CSS', 'JavaScript'], links: { github: 'https://github.com/aminenakrou/QUESACO', demo: 'https://aminenakrou.github.io/QUESACO/' } },
  { id: 'optimization', category: { fr: 'Recherche opérationnelle', en: 'Operations Research', ar: 'بحوث عمليات' }, featured: false, tech: ['Linear Programming', 'Lindo', 'Operations Research'], links: { github: 'https://github.com/aminenakrou?tab=repositories' } }
];

const skills = [
  { title: 'Actuariat & Statistiques', items: ['Actuariat', 'Statistiques avancées', 'Modélisation', 'Chaînes de Markov', 'Recherche opérationnelle'] },
  { title: 'Data Science & ML', items: ['Scikit-learn', 'XGBoost', 'PyTorch', 'Pandas', 'NumPy', 'Feature engineering'] },
  { title: 'Data Engineering', items: ['Pipelines données', 'Apache Spark', 'Hadoop', 'Kafka', 'Architecture SI'] },
  { title: 'Programmation', items: ['Python', 'R', 'SQL', 'Java', 'C / C++', 'JavaScript', 'HTML / CSS', 'PHP'] },
  { title: 'Data Visualisation / BI', items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Streamlit', 'Dashboards'] },
  { title: 'Databases & Tools', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'NoSQL', 'Docker', 'Git / GitHub', 'MLflow', 'LaTeX', 'RMarkdown'] }
];

const timelineTexts = {
  fr: [
    { type: 'Expérience', date: '01/09/2026 - 31/08/2027 · Roubaix, France', title: 'Chargé d\'études actuarielles', org: 'Swiss Life', current: true, points: ['Études actuarielles en assurance non-vie, reporting et analyse de données.', 'Fiabilisation des données, automatisation des analyses et amélioration des processus de reporting.', 'Travaux de modélisation et de prédiction destinés au suivi et au pilotage de l\'activité.', 'Production d\'études actuarielles sur mesure, analyse d\'indicateurs de risque et de performance, développement d\'outils d\'aide à la décision.'], tags: ['Actuariat', 'Assurance non-vie', 'Reporting', 'Fiabilisation des données', 'Modélisation', 'Prédiction'] },
    { type: 'Expérience', date: 'Mai 2026 · Saint-Denis, France', title: 'Data Engineering & BI', org: 'GRDF', points: ['Expérience précédente en Data Engineering et Business Intelligence.', 'Pipelines de données, tableaux de bord Power BI et analyses pour le pilotage métier selon le contenu existant.'], tags: ['Data Engineering', 'Power BI', 'SQL', 'Python', 'BI'] },
    { type: 'Expérience', date: 'Été 2025 · Maroc', title: 'Développeur Data & Web', org: 'HAMATEL S.A.R.L', points: ['Base de données relationnelle, modélisation, normalisation et SQL.', 'Application interne Flask pour gestion et visualisation de données.'], tags: ['Flask', 'SQL', 'Python', 'Data Analysis'] },
    { type: 'Formation', date: '2024-2027 · Lille, France', title: 'Cycle Ingénieur ISIA', org: 'Polytech Lille', points: ['Informatique, Statistiques et Intelligence Artificielle: ML, data mining, SQL/NoSQL, modèles markoviens, statistiques, algorithmique, big data et architecture SI.'], tags: ['ISIA', 'ML', 'Statistiques', 'Big Data'] },
    { type: 'Formation', date: '2022-2024 · Fès, Maroc', title: 'Classes Préparatoires MPSI / MP', org: 'Lycée Moulay Idriss Fès', points: ['Algèbre linéaire, analyse, algorithmique, Python et statistiques.'], tags: ['Mathématiques', 'Python', 'Statistiques'] },
    { type: 'Formation', date: '2022 · Taounate, Maroc', title: 'Baccalauréat Sciences Mathématiques', org: 'Mention Très Bien', points: ['Élément conservé comme repère académique.'], tags: ['Mathématiques'] }
  ],
  en: [
    { type: 'Experience', date: 'Sept. 2026 - Aug. 2027 · Roubaix, France', title: 'Actuarial Studies Analyst', org: 'Swiss Life', current: true, points: ['Actuarial studies in non-life insurance, reporting and data analysis.', 'Data reliability work, analysis automation and improvement of reporting processes.', 'Modelling and prediction work to support activity monitoring and steering.', 'Tailored actuarial studies, analysis of risk and performance indicators, and development of decision-support tools.'], tags: ['Actuarial', 'Non-life insurance', 'Reporting', 'Data reliability', 'Modelling', 'Prediction'] },
    { type: 'Experience', date: 'May 2026 · Saint-Denis, France', title: 'Data Engineering & BI', org: 'GRDF', points: ['Previous experience in Data Engineering and Business Intelligence.', 'Data pipelines, Power BI dashboards and business reporting analyses according to existing content.'], tags: ['Data Engineering', 'Power BI', 'SQL', 'Python', 'BI'] },
    { type: 'Experience', date: 'Summer 2025 · Morocco', title: 'Data & Web Developer', org: 'HAMATEL S.A.R.L', points: ['Relational database design, modelling, normalization and SQL.', 'Internal Flask application for data management and visualisation.'], tags: ['Flask', 'SQL', 'Python', 'Data Analysis'] },
    { type: 'Education', date: '2024-2027 · Lille, France', title: 'Engineering Cycle ISIA', org: 'Polytech Lille', points: ['Computer Science, Statistics and Artificial Intelligence: ML, data mining, SQL/NoSQL, Markov models, statistics, algorithms, big data and IS architecture.'], tags: ['ISIA', 'ML', 'Statistics', 'Big Data'] },
    { type: 'Education', date: '2022-2024 · Fes, Morocco', title: 'Preparatory Classes MPSI / MP', org: 'Lycee Moulay Idriss Fes', points: ['Linear algebra, analysis, algorithms, Python and statistics.'], tags: ['Mathematics', 'Python', 'Statistics'] },
    { type: 'Education', date: '2022 · Taounate, Morocco', title: 'Mathematics Baccalaureate', org: 'Highest Honors', points: ['Kept as an academic milestone.'], tags: ['Mathematics'] }
  ],
  ar: [
    { type: 'خبرة', date: '01/09/2026 - 31/08/2027 · Roubaix, France', title: 'مكلف بدراسات اكتوارية', org: 'Swiss Life', current: true, points: ['دراسات اكتوارية في التأمين غير الحياة، التقارير وتحليل البيانات.', 'تحسين موثوقية البيانات، أتمتة التحليلات وتحسين عمليات التقارير.', 'أعمال نمذجة وتنبؤ لدعم تتبع وتوجيه النشاط.', 'إنتاج دراسات اكتوارية مخصصة، تحليل مؤشرات المخاطر والأداء، وتطوير أدوات مساعدة على القرار.'], tags: ['اكتواريا', 'تأمين غير الحياة', 'تقارير', 'موثوقية البيانات', 'نمذجة', 'تنبؤ'] },
    { type: 'خبرة', date: 'ماي 2026 · Saint-Denis, France', title: 'هندسة بيانات وذكاء أعمال', org: 'GRDF', points: ['تجربة سابقة في هندسة البيانات وذكاء الأعمال.', 'خطوط بيانات، لوحات Power BI وتحليلات للتوجيه المهني حسب المحتوى الموجود.'], tags: ['Data Engineering', 'Power BI', 'SQL', 'Python', 'BI'] },
    { type: 'خبرة', date: 'صيف 2025 · المغرب', title: 'مطوّر بيانات وويب', org: 'HAMATEL S.A.R.L', points: ['تصميم قاعدة بيانات علائقية، نمذجة، تطبيع وSQL.', 'تطبيق Flask داخلي لإدارة وتصور البيانات.'], tags: ['Flask', 'SQL', 'Python', 'Data Analysis'] },
    { type: 'تكوين', date: '2024-2027 · Lille, France', title: 'سلك الهندسة ISIA', org: 'Polytech Lille', points: ['معلوماتية، إحصاء وذكاء اصطناعي: تعلم آلة، تنقيب بيانات، SQL/NoSQL، نماذج ماركوف، إحصاء، خوارزميات، بيانات ضخمة وبنية نظم معلومات.'], tags: ['ISIA', 'ML', 'إحصاء', 'Big Data'] },
    { type: 'تكوين', date: '2022-2024 · Fes, Morocco', title: 'أقسام تحضيرية MPSI / MP', org: 'Lycee Moulay Idriss Fes', points: ['جبر خطي، تحليل، خوارزميات، Python وإحصاء.'], tags: ['رياضيات', 'Python', 'إحصاء'] },
    { type: 'تكوين', date: '2022 · Taounate, Morocco', title: 'بكالوريا علوم رياضية', org: 'ميزة حسن جدا', points: ['محفوظ كعلامة أكاديمية.'], tags: ['رياضيات'] }
  ]
};

let currentLang = localStorage.getItem('lang') || 'fr';

function translate(key) {
  return translations[currentLang][key] || translations.fr[key] || key;
}

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function getProjectText(projectId) {
  const data = projectTexts[currentLang][projectId] || projectTexts.fr[projectId];
  return {
    title: data[0],
    problem: data[1],
    projectData: data[2],
    method: data[3],
    result: data[4],
    summary: data[5]
  };
}

function renderActions(links) {
  const actions = createElement('div', 'card-actions');
  [['demo', 'action.demo'], ['github', 'action.github'], ['case', 'action.case']].forEach(([key, label]) => {
    if (!links[key]) return;
    const action = createElement('a', '', translate(label));
    action.href = links[key];
    if (key !== 'case') {
      action.target = '_blank';
      action.rel = 'noopener noreferrer';
    }
    actions.appendChild(action);
  });
  return actions.children.length ? actions : null;
}

function renderProjectCard(project, index, featured) {
  const text = getProjectText(project.id);
  const category = project.category[currentLang] || project.category.fr;
  const card = createElement('article', featured ? 'featured-card project-card anim-fade-up' : 'project-card anim-fade-up');
  card.dataset.area = category;

  const top = createElement('div', 'project-top');
  const titleWrap = createElement('div', 'project-title-wrap');
  const labelRow = createElement('div', 'project-label-row');
  labelRow.appendChild(createElement('span', 'project-label', featured ? translate('nav.featured') : translate('projects.kicker')));
  labelRow.appendChild(createElement('span', 'project-area', category));
  titleWrap.appendChild(labelRow);
  titleWrap.appendChild(createElement('h3', '', text.title));
  top.appendChild(titleWrap);
  top.appendChild(createElement('span', 'project-index', String(index).padStart(2, '0')));
  card.appendChild(top);

  card.appendChild(createElement('p', 'project-summary', text.summary));

  const facts = createElement('div', 'project-facts');
  const list = createElement('dl');
  [
    ['label.problem', text.problem],
    ['label.data', text.projectData],
    ['label.method', text.method],
    ['label.result', text.result]
  ].forEach(([label, value]) => {
    const item = createElement('div', 'fact-item');
    item.appendChild(createElement('dt', '', translate(label)));
    item.appendChild(createElement('dd', '', value));
    list.appendChild(item);
  });
  facts.appendChild(list);
  card.appendChild(facts);

  const footer = createElement('div', 'project-footer');
  const tags = createElement('div', 'project-tags');
  project.tech.forEach(item => tags.appendChild(createElement('span', '', item)));
  footer.appendChild(tags);
  const actions = renderActions(project.links);
  if (actions) footer.appendChild(actions);
  card.appendChild(footer);
  return card;
}

function renderProjects() {
  const featuredRoot = document.getElementById('featuredProjects');
  const otherRoot = document.getElementById('otherProjects');
  if (!featuredRoot || !otherRoot) return;
  featuredRoot.textContent = '';
  otherRoot.textContent = '';
  projects.filter(project => project.featured).forEach((project, index) => {
    featuredRoot.appendChild(renderProjectCard(project, index + 1, true));
  });
  projects.filter(project => !project.featured).forEach((project, index) => {
    otherRoot.appendChild(renderProjectCard(project, index + 1, false));
  });
  document.querySelectorAll('[data-project-title]').forEach(node => {
    node.textContent = getProjectText(node.dataset.projectTitle).title;
  });
}

function renderSkills() {
  const root = document.getElementById('skillsGrid');
  if (!root) return;
  root.textContent = '';
  skills.forEach(group => {
    const card = createElement('article', 'skill-card anim-fade-up');
    card.appendChild(createElement('h3', '', group.title));
    const tags = createElement('div', 'project-tags');
    group.items.forEach(item => tags.appendChild(createElement('span', '', item)));
    card.appendChild(tags);
    root.appendChild(card);
  });
}

function renderTimeline() {
  const root = document.getElementById('timeline');
  if (!root) return;
  root.textContent = '';
  timelineTexts[currentLang].forEach(item => {
    const card = createElement('article', item.current ? 'timeline-card current anim-fade-up' : 'timeline-card anim-fade-up');
    const meta = createElement('div');
    meta.appendChild(createElement('span', 'timeline-meta', item.type));
    meta.appendChild(createElement('p', '', item.date));
    const body = createElement('div');
    body.appendChild(createElement('h3', '', item.title));
    body.appendChild(createElement('p', '', item.org));
    const points = createElement('ul');
    item.points.forEach(point => points.appendChild(createElement('li', '', point)));
    body.appendChild(points);
    const tags = createElement('div', 'project-tags');
    item.tags.forEach(tag => tags.appendChild(createElement('span', '', tag)));
    body.appendChild(tags);
    card.appendChild(meta);
    card.appendChild(body);
    root.appendChild(card);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

function observeAnimated() {
  document.querySelectorAll('.anim-fade-up').forEach(node => observer.observe(node));
}

function syncStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.textContent = translate(node.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', currentLang === 'ar');
  document.title = SITE_TITLE;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  const cvHref = CV[currentLang] || CV.fr;
  ['cvLink', 'cvLinkHero', 'cvLinkContact', 'cvLinkList'].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.href = cvHref;
  });
}

function applyLang(lang) {
  currentLang = translations[lang] ? lang : 'fr';
  localStorage.setItem('lang', currentLang);
  syncStaticTranslations();
  renderProjects();
  renderTimeline();
  observeAnimated();
}

const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min((window.scrollY / total) * 100, 100);
  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
  let active = '';
  document.querySelectorAll('main section[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) active = section.id;
  });
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === `#${active}`);
  });
}, { passive: true });

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function syncThemeIcon() {
  const light = document.documentElement.getAttribute('data-theme') === 'light';
  if (themeIcon) themeIcon.textContent = light ? '☾' : '☀';
  if (themeToggle) themeToggle.setAttribute('aria-label', light ? 'Activer le theme sombre' : 'Activer le theme clair');
}

themeToggle?.addEventListener('click', () => {
  const light = document.documentElement.getAttribute('data-theme') === 'light';
  if (light) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
  syncThemeIcon();
});

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu() {
  if (!burger || !mobileMenu) return;
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
}

burger?.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  if (mobileMenu) mobileMenu.hidden = open;
});

document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

renderSkills();
applyLang(currentLang);
syncThemeIcon();
console.info('AN Portfolio professional overhaul loaded.');
