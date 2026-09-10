# Amine Nakrou - Portfolio

Professional static portfolio for Amine Nakrou, focused on actuarial studies, statistics, data science, machine learning, Python, SQL, data engineering and business intelligence.

## Live Website

https://aminenakrou.github.io/portfolio/

## About

The portfolio presents Amine Nakrou as a quantitative engineering profile currently working as a Chargé d'études actuarielles at Swiss Life in Roubaix from 01/09/2026 to 31/08/2027, in non-life insurance, actuarial reporting, data reliability, modelling, prediction and decision-support tooling. It also keeps previous experience in Data Engineering & BI at GRDF and Data & Web at HAMATEL.

## Features

- Professional dark visual identity with lime accent and AN branding
- Recruiter-oriented hero, CTA and contact flow
- FR / EN / AR language switcher with RTL support for Arabic
- Featured projects with problem, data, method, technologies, result and links
- Case study structure for the most documented projects
- SEO metadata, Open Graph preview, canonical URL, sitemap and robots file
- Accessible navigation, keyboard focus styles and reduced-motion support
- GitHub Pages compatible static deployment

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── case-studies/
│   ├── churn.html
│   └── credit-scoring.html
├── assets/
│   ├── cv/
│   │   ├── cv_amine_nakrou_fr.pdf
│   │   └── cv_amine_nakrou_en.pdf
│   └── img/
│       ├── favicon.svg
│       ├── og-preview.png
│       └── profile.jpg
└── .github/workflows/static.yml
```

## Local Development

Because this is a static website, it can be served with any local static server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Deployment

The repository is deployed through GitHub Pages using `.github/workflows/static.yml`. The workflow uploads the repository root as a static artifact on pushes to `main`.

## Contact

- Email: aminenakrou635@gmail.com
- LinkedIn: https://linkedin.com/in/amine-nakrou
- GitHub: https://github.com/aminenakrou
