# LynoraLink — Guide de déploiement

> Connectez en toute sécurité.

LynoraLink est une vitrine web statique responsive. Elle présente l’application, ses fonctionnalités, ses offres, sa page de téléchargement et ses informations légales.

Cette version ne nécessite ni serveur applicatif, ni base de données, ni backend Node.js. Elle peut être publiée directement sur un hébergement de fichiers comme LWS ou sur Vercel.

## 1. Ce qui est déployé

La version à publier se trouve dans `frontend/` :

```text
frontend/
├── index.html       # Point d’entrée du site
├── app.js           # Navigation et contenu des pages
├── styles.css       # Design responsive
└── assets/
    ├── logo.png     # Logo LynoraLink
    └── public/
        ├── README.md
        └── lynoralink.apk # APK Android à ajouter
```

Ne publiez pas le dossier parent `web/` comme racine du site. Le contenu de `frontend/` doit être la racine publique : le fichier `index.html` doit être accessible directement à l’adresse du domaine.

## 2. Pages disponibles

La navigation statique contient les pages suivantes :

- Accueil : `index.html#home`
- Fonctionnalités : `index.html#features`
- Offres & Plans : `index.html#pricing`
- À propos : `index.html#about`
- Téléchargement : `index.html#download`
- Informations légales : `index.html#legal`

Les pages utilisent une navigation par hash URL. Aucun routage serveur n’est nécessaire.

## 3. Prévisualisation locale

Aucune installation n’est requise pour ouvrir le fichier directement dans un navigateur. Pour reproduire un hébergement web au plus près, utilisez un serveur statique.

### Avec Python

Depuis le dossier `frontend/` :

```bash
python3 -m http.server 3000
```

Ouvrez ensuite :

```text
http://localhost:3000
```

Sous Windows, cette commande peut aussi être lancée avec :

```powershell
py -m http.server 3000
```

Arrêtez le serveur avec `Ctrl+C`.

## 4. Préparer et pousser le projet sur GitHub

Le dépôt ne doit contenir que la vitrine statique et sa documentation. Depuis la racine `web/` :

```bash
git init
git branch -M main
git add .
git status
```

Avant de créer le commit, vérifiez que la liste contient uniquement les fichiers attendus :

```text
.gitignore
README.md
frontend/index.html
frontend/app.js
frontend/styles.css
frontend/assets/logo.png
```

Le fichier `.gitignore` exclut les variables d’environnement, les dépendances, les builds, les logs et les fichiers locaux d’IDE. Ne poussez jamais de mot de passe, clé privée, token ou fichier `.env`.

Créez ensuite le premier commit :

```bash
git commit -m "Préparer la vitrine statique LynoraLink"
```

Sur GitHub, créez un nouveau dépôt vide. Ne cochez pas l’ajout automatique d’un README, d’un `.gitignore` ou d’une licence puisque ces fichiers existent déjà localement.

Associez ensuite le dépôt distant en remplaçant `VOTRE_COMPTE` et `VOTRE_DEPOT` :

```bash
git remote add origin https://github.com/VOTRE_COMPTE/VOTRE_DEPOT.git
git remote -v
git push -u origin main
```

Avec GitHub CLI, l’équivalent est :

```bash
gh repo create VOTRE_DEPOT --public --source=. --remote=origin --push
```

Après chaque modification :

```bash
git status
git add .
git commit -m "Décrire la modification"
git push
```

## 5. Déploiement sur LWS

### Méthode FTP

1. Connectez-vous à votre espace client LWS.
2. Ouvrez la gestion de l’hébergement puis récupérez les identifiants FTP.
3. Connectez-vous avec FileZilla ou le gestionnaire de fichiers LWS.
4. Ouvrez le dossier public du domaine, généralement `public_html/` ou le dossier associé au domaine.
5. Envoyez **le contenu** de `frontend/` dans ce dossier.
6. Vérifiez que `index.html` se trouve directement dans le dossier public.
7. Ouvrez votre domaine dans un navigateur.

La structure distante attendue est :

```text
public_html/
├── index.html
├── app.js
├── styles.css
└── assets/
    └── logo.png
```

Ne créez pas cette structure :

```text
public_html/frontend/index.html
```

Dans ce cas, le site serait accessible uniquement avec `/frontend/` dans l’URL.

### Méthode gestionnaire de fichiers LWS

1. Compressez le contenu de `frontend/` au format ZIP.
2. Importez l’archive dans le dossier public.
3. Décompressez-la sur le serveur.
4. Si un sous-dossier `frontend/` est créé, déplacez son contenu à la racine du dossier public.
5. Supprimez l’archive ZIP après vérification.

### Domaine et HTTPS sur LWS

1. Associez le domaine au dossier public qui contient `index.html`.
2. Activez le certificat SSL depuis l’espace LWS.
3. Activez la redirection automatique HTTP vers HTTPS si elle est proposée.
4. Testez les deux adresses :

```text
http://votre-domaine.tld
https://votre-domaine.tld
```

Le site doit finalement utiliser l’adresse HTTPS.

### DNS LWS

Si le domaine est géré ailleurs, utilisez les enregistrements communiqués par LWS dans votre espace client. Après modification DNS, la propagation peut prendre du temps. Ne modifiez pas les enregistrements mail existants sans vérifier leur usage.

## 6. Déploiement sur Vercel avec GitHub

### Préparer le dépôt

1. Placez le projet dans un dépôt Git.
2. Vérifiez que `frontend/index.html` existe.
3. Vérifiez que `frontend/app.js`, `frontend/styles.css` et `frontend/assets/logo.png` sont versionnés.
4. Poussez les modifications vers GitHub, GitLab ou Bitbucket.

### Créer le projet Vercel

1. Connectez-vous à Vercel.
2. Cliquez sur **Add New Project**.
3. Importez le dépôt contenant LynoraLink.
4. Dans **Root Directory**, sélectionnez `frontend`.
5. Choisissez **Other** ou **No Framework** si Vercel le propose.
6. Laissez les champs de build vides :

```text
Build Command: aucune
Output Directory: .
Install Command: aucune
```

7. Cliquez sur **Deploy**.

Vercel servira directement `frontend/index.html` comme page d’accueil.

### Déploiement Vercel avec la CLI

La CLI Vercel est optionnelle. Depuis le dossier `frontend/` :

```bash
npx vercel
```

Pour un déploiement de production :

```bash
npx vercel --prod
```

La CLI peut demander une connexion et le choix d’un projet. Sélectionnez le dossier `frontend/` comme racine lorsque la question est posée.

### Domaine personnalisé sur Vercel

1. Ouvrez le projet Vercel.
2. Allez dans **Settings > Domains**.
3. Ajoutez votre domaine.
4. Configurez les enregistrements DNS demandés par Vercel auprès de votre registrar.
5. Attendez la validation DNS et SSL.
6. Activez l’URL principale souhaitée, avec HTTPS.

Vercel fournit automatiquement un certificat SSL pour les domaines correctement configurés.

## 7. Fichier APK Android

Le bouton Android pointe vers le chemin relatif suivant :

```text
public/lynoralink.apk
```

Pour rendre le téléchargement disponible :

1. Ajoutez le fichier APK réel dans `frontend/public/lynoralink.apk`.
2. Conservez exactement ce nom ou modifiez le lien dans `frontend/app.js`.
3. Republiez le dossier `frontend/` sur LWS ou redéployez le projet Vercel.
4. Testez le bouton depuis un téléphone Android.

Le fichier APK n’est pas généré par cette vitrine statique. Il doit être produit et signé séparément avec votre chaîne Android.

## 8. Ressources externes

Le fichier `index.html` utilise actuellement :

- Tailwind CSS via CDN pour les classes utilitaires existantes.
- La police Inter via Google Fonts.

Une connexion internet est donc nécessaire pour récupérer ces ressources depuis un navigateur neuf. Pour un fonctionnement totalement autonome, remplacez ces ressources par une feuille CSS générée localement et une police hébergée dans `frontend/assets/`.

## 9. Modifier le site

### Modifier le contenu

Les pages et textes sont dans :

```text
frontend/app.js
```

Les routes principales sont déclarées dans l’objet `pages` à la fin du fichier.

### Modifier le design

Les variables de couleurs, la topnav, les cartes, les boutons et les règles responsive sont dans :

```text
frontend/styles.css
```

### Remplacer le logo

Remplacez le fichier suivant en conservant son chemin :

```text
frontend/assets/logo.png
```

### Tester après une modification

1. Lancez le serveur Python local.
2. Ouvrez la page dans un navigateur privé ou rechargez avec `Ctrl+F5`.
3. Testez chaque entrée du topnav.
4. Testez les liens du footer et le sommaire de la page légale.
5. Vérifiez la version mobile avec les outils développeur du navigateur.

## 10. Dépannage

### La page affiche une erreur 404

Vérifiez que `index.html` se trouve à la racine publique du domaine et non dans `frontend/frontend/` ou `public_html/frontend/`.

### Le site s’affiche sans styles

Vérifiez que `styles.css` se trouve au même niveau que `index.html` et que le lien suivant est intact :

```html
<link rel="stylesheet" href="styles.css">
```

### Le logo ne s’affiche pas

Vérifiez que ce fichier existe sur l’hébergement :

```text
assets/logo.png
```

Respectez les majuscules et minuscules du nom du fichier.

### Les anciennes modifications ne sont pas visibles

Videz le cache du navigateur avec `Ctrl+F5`. Sur Vercel, vérifiez le dernier déploiement et le commit utilisé. Sur LWS, vérifiez la date de modification du fichier FTP.

### Le bouton APK ne télécharge rien

Vérifiez que `frontend/public/lynoralink.apk` existe réellement avant l’envoi. Un lien HTML ne peut pas créer l’APK.

### Le domaine ne répond pas après modification DNS

Vérifiez les enregistrements demandés par LWS ou Vercel, le dossier racine configuré et la propagation DNS. Utilisez temporairement l’URL fournie par l’hébergeur pour distinguer un problème DNS d’un problème de fichiers.

## 11. Limites de la version statique

Cette vitrine :

- ne crée pas de compte ;
- ne stocke pas de profils, publications ou messages ;
- n’utilise pas de base de données ;
- n’envoie pas de formulaire vers un backend ;
- ne gère pas les paiements Premium ;
- ne génère pas l’APK Android.

Ces fonctionnalités nécessiteraient une application serveur, une API et un stockage persistant séparés.

## 12. Checklist avant mise en ligne

- [ ] `frontend/index.html` est présent.
- [ ] `frontend/app.js` est présent.
- [ ] `frontend/styles.css` est présent.
- [ ] `frontend/assets/logo.png` est présent.
- [ ] Le fichier APK a été ajouté si le bouton Android doit fonctionner.
- [ ] Les prix et textes légaux ont été vérifiés.
- [ ] Les informations officielles de l’éditeur ont été complétées dans la page légale.
- [ ] Le site a été testé sur ordinateur et mobile.
- [ ] Le domaine utilise HTTPS.
- [ ] Les liens du topnav, du footer et de la page légale ont été testés.

## Licence

Ajoutez ici les conditions de licence et les mentions officielles de LynoraLink avant publication commerciale.
