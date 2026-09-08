# Maison Ondine

Plateforme de prise de rendez-vous en ligne pour le salon de coiffure **Maison Ondine** (Paris 3ᵉ).

## Structure du monorepo

| Dossier | Rôle | Statut |
|---|---|---|
| [`backend/`](backend/) | API Symfony + API Platform (PostgreSQL) | ✅ Symfony + FrankenPHP + PostgreSQL |
| [`frontend/`](frontend/) | Application Nuxt 4 | ✅ initialisé |

## Stack cible

- **Backend** : Symfony, API Platform, Doctrine, PostgreSQL — conteneurisé (Symfony Docker / FrankenPHP)
- **Frontend** : Nuxt 4
- **Déploiement** : Clever Cloud

## Configuration

Chaque dossier fournit un fichier `.env.example` documentant ses variables d'environnement :

- **`backend/.env.example`** — variables Symfony et Docker Compose (PostgreSQL, ports, serveur). Les défauts suffisent pour un dev local ; surcharger dans `backend/.env.local` (Symfony) ou via le shell (Docker).
- **`frontend/.env.example`** — configuration Nuxt (ex. `NUXT_PUBLIC_API_BASE`). Copier en `frontend/.env` pour surcharger : `cp frontend/.env.example frontend/.env`.

> 📄 Le README complet (installation locale, captures d'écran, lien de démo) sera rédigé dans l'issue #48.

---

*Projet réalisé dans le cadre d'une étude de cas portfolio.*
