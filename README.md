# React Portfolio

A personal portfolio website built with **React** to showcase profile details, education, work, projects, technologies, and contact information.

## ✨ Features

- Single-page portfolio with multiple sections/pages
- Smooth page navigation using **React Router**
- Simple animations with **GSAP**
- Styled with **Tailwind CSS**
- Ready for deployment to **GitHub Pages**

## 🛠️ Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- GSAP
- Create React App

## 🚀 Run Locally

### 1) Install dependencies
```bash
npm install
```

### 2) Start the development server
```bash
npm start
```

### 3) Open in browser
Visit:
```bash
http://localhost:3000
```

## 📦 Available Scripts

- `npm start` — runs the app in development mode
- `npm run build` — creates a production build in the `build/` folder
- `npm test` — runs the test suite
- `npm run deploy` — deploys the app to GitHub Pages

## 📁 Project Structure

```text
src/
├── Components/    # Reusable UI sections
├── Pages/         # Route-based pages
├── assets/        # Images and project assets
├── App.js         # Main app routes
└── Details.js     # Portfolio content/details
```

## 🌐 Deployment Note

This project is configured with a GitHub Pages homepage and uses:

```js
<BrowserRouter basename="/react-portfolio" />
```

So the deployed app works correctly under the repository subpath.
