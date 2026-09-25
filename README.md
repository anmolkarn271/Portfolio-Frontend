\# Anmol Portfolio



A modern, responsive developer portfolio built with \*\*React + Vite\*\* and deployed on \*\*Vercel\*\*.



The project also demonstrates a simple DevOps workflow using \*\*Git, GitHub, GitHub Actions, and Vercel\*\*.



\## 🌐 Live Portfolio



\*\*Live Demo:\*\* Add your Vercel URL here



\## 📌 About



This portfolio presents my:



\* Projects

\* Technical skills

\* Learning journey

\* DevOps interests

\* About section

\* Contact information



The portfolio is currently a \*\*frontend-only application\*\* and does not require a backend server.



\## 🛠️ Tech Stack



\### Frontend



\* React

\* Vite

\* JavaScript

\* HTML5

\* CSS3



\### DevOps / Deployment



\* Git

\* GitHub

\* GitHub Actions

\* Vercel



\## 📂 Project Structure



```text

Anmol-Portfolio/

│

├── public/

│

├── src/

│   ├── components/

│   ├── App.jsx

│   ├── content.js

│   ├── data.mjs

│   ├── hooks.js

│   ├── index.css

│   ├── lib.js

│   └── main.jsx

│

├── .github/

│   └── workflows/

│       └── ci.yml

│

├── .gitignore

├── index.html

├── package.json

├── package-lock.json

├── vite.config.js

└── README.md

```



\## ⚙️ Run Locally



\### 1. Clone the repository



```bash

git clone https://github.com/anmolkarn271/AnmolPortfolio-Frontend.git

```



\### 2. Open the project



```bash

cd AnmolPortfolio-Frontend

```



\### 3. Install dependencies



```bash

npm install

```



\### 4. Start development server



```bash

npm run dev

```



The application will be available at the local Vite development URL shown in the terminal.



\## 🏗️ Production Build



To create a production build:



```bash

npm run build

```



The production files are generated inside:



```text

dist/

```



To preview the production build:



```bash

npm run preview

```



\## 🔄 DevOps Workflow



This project follows a basic Git-based CI/CD workflow:



```text

Developer

&#x20;   ↓

Feature Branch

&#x20;   ↓

Code Changes

&#x20;   ↓

Git Diff

&#x20;   ↓

Commit

&#x20;   ↓

Push to GitHub

&#x20;   ↓

Pull Request

&#x20;   ↓

GitHub Actions

&#x20;   ↓

Build \& Validation

&#x20;   ↓

Merge into main

&#x20;   ↓

Vercel

&#x20;   ↓

Production Deployment

```



\## 🤖 GitHub Actions



GitHub Actions automatically checks the project when changes are pushed or a Pull Request is created.



The CI pipeline performs:



```text

Checkout Code

&#x20;     ↓

Setup Node.js

&#x20;     ↓

npm ci

&#x20;     ↓

npm run build

```



Workflow file:



```text

.github/workflows/ci.yml

```



\## 🚀 Deployment



The application is deployed using \*\*Vercel\*\*.



Production deployment flow:



```text

GitHub main

&#x20;    ↓

Vercel detects changes

&#x20;    ↓

npm install

&#x20;    ↓

npm run build

&#x20;    ↓

Deploy dist/

&#x20;    ↓

Live Website

```



\## ✨ Features



\* Responsive portfolio design

\* Dark / light theme

\* Project showcase

\* Skills section

\* Developer journey

\* Contact section

\* Smooth navigation

\* Scroll progress

\* Back-to-top button

\* Responsive layout

\* Frontend-only architecture



\## 🎯 Purpose



This project is not only a personal portfolio but also a practical demonstration of my learning in:



\* Git and GitHub

\* Branching and Pull Requests

\* CI with GitHub Actions

\* Frontend build automation

\* Vercel deployment

\* Basic DevOps workflow



\## 👨‍💻 Author



\*\*Anmol Karn\*\*



B.Tech Computer Science \& Engineering

IPS College of Technology \& Management, Gwalior

RGPV — 2023–2027



\### Focus



\*\*Aspiring DevOps Engineer\*\*



Linux • Git • Docker • CI/CD • AWS



\## 📄 License



This project is created for personal portfolio and learning purposes.



