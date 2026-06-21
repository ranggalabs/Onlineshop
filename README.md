# 🛒 Online Shop Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A modern, responsive online shop frontend built with React, Vite, TailwindCSS, and TypeScript. 

## ✨ Features
- **Modern UI/UX**: Built with TailwindCSS v4 for a sleek, responsive design.
- **Interactive Maps**: Real-time delivery and location tracking using Leaflet and React Leaflet.
- **Dynamic Routing**: Seamless navigation with React Router DOM.
- **Iconography**: Beautiful icons powered by Lucide React and Simple Icons.
- **Notifications**: User-friendly toast notifications via React Hot Toast.
- **Type-Safe**: Developed entirely in TypeScript for robust and maintainable code.

## 📂 Project Structure
```
client/
├── public/         # Static assets
└── src/
    ├── assets/     # Images, icons, and mock data
    ├── components/ # Reusable UI components
    ├── context/    # React Context providers
    ├── pages/      # Route pages (Home, Products, Checkout, etc.)
    ├── types/      # TypeScript type definitions
    ├── App.tsx     # Main application component
    └── main.tsx    # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ranggalabs/Onlineshop.git
   cd Onlineshop/client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📜 Scripts
- `npm run dev`: Start the Vite development server.
- `npm run build`: Compile TypeScript and build for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to analyze code quality.

## 📄 License
This project is licensed under the MIT License.
