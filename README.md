# Graden

A starter full-stack template with a minimal Express backend and a Vite + React frontend.

Repository structure

- backend/  — Node + Express API
- frontend/ — Vite + React frontend
- README.md — this file

Quick start

Clone the repo:

```bash
git clone https://github.com/Elowen102/Graden.git
cd Graden
```

Run the backend:

```bash
cd backend
npm install
npm start
# server will run on http://localhost:3000
```

Run the frontend:

```bash
cd frontend
npm install
npm run dev
# vite dev server will run (usually on http://localhost:5173)
```

How to push from your local machine

If you haven't already pushed local changes and want to connect a local repo to GitHub:

```bash
# from your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Elowen102/Graden.git
git push -u origin main
```

If you cloned the repo above, you can just create branches, commit, and push:

```bash
git checkout -b feature/my-feature
# make changes
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

Feel free to tell me if you want additional features (CI, Docker, tests, license, README badge, or a specific frontend framework).