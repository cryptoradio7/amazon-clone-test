#!/bin/bash

# Script de déploiement Amazon Clone Test - POC rapide
# AgileVizion DevOps Team

set -e

echo "🚀 Déploiement Amazon Clone Test - POC rapide"
echo "=============================================="

# Vérifications pré-déploiement
echo ""
echo "🔍 Vérifications pré-déploiement..."
echo "-----------------------------------"

# Vérifier que l'application fonctionne localement
if curl -s http://localhost:3000/api/products > /dev/null 2>&1; then
    echo "✅ API locale fonctionnelle (port 3000)"
else
    echo "⚠️  API locale non accessible. Lancez: npm run dev"
    read -p "Voulez-vous continuer? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Vérifier Git
if [ -d ".git" ]; then
    echo "✅ Repository Git initialisé"
    git status --short
else
    echo "❌ Repository Git non initialisé"
    exit 1
fi

echo ""
echo "📦 Options de déploiement"
echo "-------------------------"
echo "1. GitHub + Vercel (recommandé)"
echo "2. Railway"
echo "3. Manuel (instructions seulement)"
echo ""

read -p "Choisissez une option (1-3): " option

case $option in
    1)
        echo ""
        echo "🚀 Option 1: GitHub + Vercel"
        echo "---------------------------"
        
        # Vérifier gh CLI
        if command -v gh &> /dev/null; then
            echo "✅ GitHub CLI installé"
            
            # Demander le nom du repository
            read -p "Nom du repository GitHub (default: amazon-clone-test): " repo_name
            repo_name=${repo_name:-amazon-clone-test}
            
            read -p "Description (default: POC rapide Amazon Clone avec Next.js 16): " description
            description=${description:-"POC rapide Amazon Clone avec Next.js 16"}
            
            read -p "Visibilité (public/private, default: public): " visibility
            visibility=${visibility:-public}
            
            echo ""
            echo "📝 Création du repository GitHub..."
            echo "Commande à exécuter:"
            echo "gh repo create $repo_name --$visibility --description \"$description\""
            echo ""
            echo "Puis:"
            echo "git remote add origin https://github.com/$(gh api user | jq -r '.login')/$repo_name.git"
            echo "git push -u origin main"
            echo ""
            echo "🌐 Ensuite, connectez-vous à https://vercel.com et importez le repository."
            
        else
            echo "❌ GitHub CLI non installé"
            echo "Installez-le: https://cli.github.com/"
            echo ""
            echo "📝 Étapes manuelles:"
            echo "1. Créez un repository sur GitHub: https://github.com/new"
            echo "2. Nom: amazon-clone-test"
            echo "3. Description: POC rapide Amazon Clone avec Next.js 16"
            echo "4. Public/Private selon besoin"
            echo "5. Ne pas initialiser avec README"
            echo "6. Pousser le code:"
            echo "   git remote add origin https://github.com/votre-username/amazon-clone-test.git"
            echo "   git push -u origin main"
        fi
        ;;
        
    2)
        echo ""
        echo "🚂 Option 2: Railway"
        echo "-------------------"
        
        if command -v railway &> /dev/null; then
            echo "✅ Railway CLI installé"
            echo ""
            echo "📝 Commandes à exécuter:"
            echo "railway login"
            echo "railway init"
            echo "railway up"
        else
            echo "❌ Railway CLI non installé"
            echo "Installez-le: npm i -g @railway/cli"
        fi
        ;;
        
    3)
        echo ""
        echo "📋 Option 3: Instructions manuelles"
        echo "-----------------------------------"
        echo ""
        echo "📚 Documentation complète dans:"
        echo "- README.md (section Déploiement)"
        echo "- DEPLOYMENT_REPORT.md (rapport technique)"
        echo ""
        echo "🚀 Étapes rapides:"
        echo "1. Créer repository sur GitHub/GitLab"
        echo "2. Pousser le code: git push -u origin main"
        echo "3. Déployer sur Vercel/Railway/Netlify"
        echo "4. Tester l'URL générée"
        echo "5. Mettre à jour README.md avec l'URL réelle"
        ;;
        
    *)
        echo "❌ Option invalide"
        exit 1
        ;;
esac

echo ""
echo "✅ Script terminé!"
echo ""
echo "📄 Documentation:"
echo "- README.md: Guide complet"
echo "- DEPLOYMENT_REPORT.md: Rapport technique détaillé"
echo ""
echo "🔗 Pour tester localement: npm run dev"
echo "🌐 Application disponible sur: http://localhost:3000"
echo ""
echo "🎯 POC Amazon Clone Test - Prêt pour déploiement!"