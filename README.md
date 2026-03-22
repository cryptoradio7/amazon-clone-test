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

1. Pousser le code sur GitHub
2. Connecter le repository à Vercel
3. Configurer les variables d'environnement
4. Déployer automatiquement

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

## 📄 License

MIT