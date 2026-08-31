# Potemkine — SYSADMIN

Démonstrateur web fictif et satirique représentant une console d’administration volontairement tentaculaire.

Il met en scène Kubernetes, les chaînes CI/CD, un giga-calculateur, un superviseur quantique, l’énergie, la conformité, la supervision des superviseurs et le monitoring cardiaque du chef de projet.

L’application utilise React, TypeScript, Vite et Chart.js. Toutes les données, alertes et opérations sont simulées.

## Prérequis

Installer sur le poste :

- [Git](https://git-scm.com/) ;
- [Node.js](https://nodejs.org/) version 20 ou supérieure ;
- npm, installé avec Node.js.

Vérification :

```bash
git --version
node --version
npm --version
```

## Installation

Depuis un terminal Linux, macOS, PowerShell ou l’invite de commandes Windows :

```bash
git clone https://github.com/oliviervanre/potemkine.git
cd potemkine
npm install
```

## Lancement local

```bash
npm run dev
```

Vite affiche l’adresse locale, généralement :

```text
http://localhost:5173
```

Ouvrir cette adresse dans le navigateur. Le serveur reste actif tant que le terminal est ouvert.

Pour l’arrêter :

```text
Ctrl + C
```

## Mise à jour

Depuis le répertoire du projet :

```bash
git pull --ff-only
npm install
npm run dev
```

Un rechargement forcé du navigateur peut être nécessaire après une mise à jour :

- Windows et Linux : `Ctrl + F5` ;
- macOS : `Cmd + Shift + R`.

## Construction de la version de production

```bash
npm run build
npm run preview
```

Les fichiers générés sont placés dans le répertoire `dist/`.

## Utilisation

- Le menu latéral permet de parcourir les différents modules.
- Les graphiques et indicateurs évoluent automatiquement.
- Les boutons de terminal ouvrent une fausse console Linux.
- Une commande quelconque déclenche un flux simulé de journaux techniques.
- Le bouton « À propos » conduit à la page 404.
- Un rafraîchissement de la page réinitialise les simulations.

Aucun serveur, cluster Kubernetes ou système réel n’est contacté.

## Dépannage

### Conflit de dépendances pendant `npm install`

Commencer par récupérer la version actuelle du dépôt :

```bash
git pull --ff-only
npm install
```

Les versions de Vite et du plugin React sont fixées dans `package.json`. Il ne devrait pas être nécessaire d’utiliser `--force` ou `--legacy-peer-deps`.

### Le port 5173 est déjà utilisé

Vite choisit normalement un autre port et l’indique dans le terminal. Il est également possible d’en imposer un :

```bash
npm run dev -- --port 5174
```

### La page conserve une ancienne apparence

Effectuer un rechargement forcé avec `Ctrl + F5` ou vider le cache du navigateur pour `localhost`.
