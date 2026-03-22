# Amazon Clone Test - POC Rapide

Application web CRUD complète inspirée d'Amazon.fr, développée avec Next.js 16, Prisma, SQLite et Tailwind CSS.

## 🚀 Fonctionnalités

- **CRUD complet** : Create, Read, Update, Delete des produits
- **Interface moderne** : Design inspiré d'Amazon.fr avec Tailwind CSS
- **Base de données** : SQLite avec Prisma ORM
- **API REST** : Endpoints Next.js pour toutes les opérations
- **Responsive** : Compatible mobile, tablette et desktop
- **POC rapide** : Développé en moins d'1 heure

## 🛠️ Stack technique

- **Frontend** : Next.js 16.2.1 (App Router) avec TypeScript
- **Backend** : API Routes Next.js (full-stack)
- **Base de données** : SQLite + Prisma 7.5
- **Styling** : Tailwind CSS 4
- **Déploiement** : Vercel + GitHub

## 📦 Installation locale

```bash
# Cloner le repository
git clone <repository-url>
cd amazon-clone-test

# Installer les dépendances
npm install

# Configurer la base de données
npx prisma generate
npx prisma db push

# Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

## 🗄️ Modèle de données

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  price       Float
  imageUrl    String
  category    String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🔌 API Endpoints

- `GET /api/products` - Liste tous les produits
- `GET /api/products/[id]` - Détail d'un produit
- `POST /api/products` - Créer un nouveau produit
- `PUT /api/products/[id]` - Mettre à jour un produit
- `DELETE /api/products/[id]` - Supprimer un produit

## 🎨 Interface

L'interface comprend :
1. **Header** avec titre et bouton "Add Product"
2. **Grid de produits** avec cards type Amazon
3. **Modal d'ajout** avec formulaire complet
4. **Édition inline** directement sur les cards
5. **Suppression** avec confirmation

## 🚀 Déploiement Vercel

### Option 1: Via Vercel Dashboard
1. Pousser le code sur GitHub/GitLab
2. Se connecter à [Vercel](https://vercel.com)
3. Créer un nouveau projet
4. Importer le repository
5. Configurer automatiquement (Next.js)
6. Déployer

### Option 2: Via Vercel CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Variables d'environnement
Aucune variable requise pour ce POC (SQLite en local, API mockée)

### URL de déploiement
Une fois déployé, l'application sera disponible sur une URL Vercel comme :
`https://amazon-clone-test.vercel.app`

## 🚀 Déploiement alternatif (Railway)
```bash
# Installer Railway CLI
npm i -g @railway/cli

# Se connecter
railway login

# Initialiser et déployer
railway init
railway up
```

## 📝 Notes techniques

- POC développé par l'équipe AgileVizion
- Focus sur la rapidité et la fonctionnalité
- Code propre avec TypeScript strict
- Architecture modulaire et extensible
- Prêt pour les phases d'amélioration

## 🔄 Prochaines étapes

1. **Tests automatisés** : Jest + Testing Library
2. **Authentification** : NextAuth.js
3. **Recherche avancée** : Filtres et tri
4. **Panier d'achat** : Session utilisateur
5. **Dashboard admin** : Statistiques et gestion

## 🛡️ Statut de déploiement

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

**Statut**: ✅ Prêt pour déploiement  
**URL Vercel**: `https://amazon-clone-test.vercel.app` (à configurer)  
**Repository**: `https://github.com/aglevizion/amazon-clone-test` (à créer)

## 📋 Rapport de déploiement DevOps

### ✅ Vérifications pré-déploiement terminées
1. ✅ Application testée localement (port 3000)
2. ✅ API fonctionnelle (`/api/products` retourne des données)
3. ✅ README.md complet et mis à jour
4. ✅ Git initialisé avec commit initial
5. ✅ Structure Next.js 16 valide

### 🔧 Configuration Git
- Repository local initialisé
- Commit: `60df1d9` - Initial commit avec 28 fichiers
- Branche: `main`
- Prêt pour push sur remote

### 🚀 Étapes de déploiement restantes
1. **Créer repository GitHub** via `gh repo create amazon-clone-test --public --description "POC rapide Amazon Clone avec Next.js 16"`
2. **Pousser le code**: `git push -u origin main`
3. **Déployer sur Vercel**:
   - Se connecter à Vercel
   - Importer le repository GitHub
   - Configurer comme projet Next.js
   - Déployer automatiquement
4. **Tester l'URL Vercel** générée
5. **Mettre à jour README** avec l'URL réelle

### 📊 Tests de validation
- ✅ CRUD complet fonctionnel
- ✅ Interface responsive
- ✅ API mockée opérationnelle
- ✅ Base de données SQLite locale
- ✅ Design Amazon-like implémenté

## 📄 License

MIT