# BRIEF.md - Amazon Clone Test

## Informations projet
- **Nom** : Amazon Clone Test
- **Type** : Application web (POC rapide)
- **Date** : 2026-03-22
- **Client** : Crypto Quant

## Objectif
Créer un POC rapide d'application web CRUD pour un catalogue de produits avec interface inspirée d'Amazon.fr, déployée sur Vercel avec GitHub.

## Réponses questionnaire

### QC1 - Type de projet
Application web (frontend + backend)

### QC2 - Utilisateurs
Utilisateur personnel (Crypto Quant)

### QC3 - Environnement
- Hébergement : Vercel
- Base de données : SQLite
- Remarque : SQLite sur Vercel avec limitations lecture/écriture sur fonctions serverless

### QC4 - Contraintes
- Budget : Gratuit
- Délai : POC rapide
- Stack : Flexible

### QC5 - MVP
CRUD complet pour produits avec interface web

### QC6 - Ambition
POC/test technique (niveau 1)

### QC7 - Git
GitHub (compte existant)

### QC8 - Chemin local
`/home/egx/Bureau/APPS/amazon-clone-test`

### QC9 - Email
Non, mises à jour dans le chat uniquement

### QC10 - Implication
Guidage (client donne directives, équipe prend décisions techniques)

### QC11 - Assets visuels
Référence : Amazon.fr (interface comme inspiration)

## Questions dynamiques

### Q1 - Stack technique
- Frontend : Next.js 15 avec TypeScript
- Backend : API Routes de Next.js (full-stack)
- Base de données : SQLite avec Prisma ORM
- Styling : Tailwind CSS
- Authentification : Non requis pour POC

### Q2 - Fonctionnalités CRUD
Catalogue de produits avec champs :
- Nom
- Description
- Prix
- URL image
- Catégorie

### Q3 - Nom du projet
`amazon-clone-test`

## Spécifications techniques

### Fonctionnalités
1. **Create** : Formulaire d'ajout de produit
2. **Read** : Liste des produits avec cards type Amazon
3. **Update** : Modification d'un produit existant
4. **Delete** : Suppression d'un produit
5. **Interface** : Responsive, design inspiré d'Amazon.fr

### Modèle de données
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

### Architecture
- `/pages` ou `/app` (Next.js 15 App Router)
- `/lib` pour utilitaires et configuration Prisma
- `/components` pour composants React réutilisables
- `/public` pour assets statiques

### Déploiement
1. Repository GitHub
2. Déploiement automatique sur Vercel
3. Configuration de la base de données SQLite (note: limitations Vercel)

## Contraintes et notes
- POC donc priorité à la simplicité et rapidité
- SQLite sur Vercel : attention aux limitations d'écriture
- Design : s'inspirer d'Amazon.fr mais simplifié
- Pas d'authentification nécessaire
- Tests unitaires recommandés mais optionnels pour POC

## Livrables attendus
1. Code source complet dans `/home/egx/Bureau/APPS/amazon-clone-test`
2. Repository GitHub public/privé
3. Application déployée sur Vercel (URL fournie)
4. Documentation README.md
5. Tests de base (si temps)

## Validation
Client valide le brief avant lancement du développement.