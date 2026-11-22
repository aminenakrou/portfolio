# Amine Nakrou — Portfolio

Portfolio personnel publié avec GitHub Pages : **https://aminenakrou.github.io/portfolio/**

Ingénieur data science & actuariat (Polytech Lille, ISIA), en alternance à l'actuariat santé collective de Swiss Life.
Disponible en CDI dès septembre 2027, en France ou au Luxembourg.

## Ce que contient le site

- profil, expériences (Swiss Life, GRDF, HAMATEL) et formation ;
- projets phares avec, pour chacun, le problème, les données, la méthode et le résultat ;
- laboratoire actuariel en cours (tarification GLM, Chain-Ladder vs ML, tableau de bord Tableau) ;
- compétences avec recherche instantanée ;
- version française et anglaise, thème clair et sombre, recherche rapide (`Ctrl K` / `⌘K`).

## Choix techniques

- HTML, CSS et JavaScript natifs, **sans framework ni dépendance** : le site se charge vite et reste simple à maintenir ;
- tout le contenu (textes FR / EN, projets, compétences) est centralisé dans `script.js` ;
- accessibilité : navigation au clavier, contrastes vérifiés dans les deux thèmes, respect de `prefers-reduced-motion` ;
- animation du hero en `<canvas>`, mise en pause quand elle n'est pas visible.

## Lancer en local

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Organisation

```text
index.html        structure de la page
style.css         design system (thèmes, composants, responsive)
script.js         contenu FR / EN et interactions
assets/           CV, photo, favicon, image de partage
case-studies/     anciennes URL, redirigées vers la page principale
.github/workflows/static.yml   déploiement GitHub Pages depuis main
```

## Contact

- LinkedIn : https://linkedin.com/in/amine-nakrou
- GitHub : https://github.com/aminenakrou
- Email : voir la section Contact du site
