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
├── public/             # Static assets
└── src/
    ├── assets/         # Images, icons, and mock data
    ├── components/     # Reusable UI components
    │   ├── Banner.tsx            # Session-based announcement banner
    │   ├── Features.tsx          # Store features/advantages grid
    │   ├── Hero.tsx              # Dynamic hero header section
    │   ├── HomeCategory.tsx      # Category slider navigation
    │   ├── Navbar.tsx            # Main header with search and user menu
    │   ├── PopularProducts.tsx   # Popular products display grid
    │   ├── ProductsCard.tsx      # Reusable product card component
    │   └── ProtectedRoute.tsx    # Route guard wrapper for auth
    ├── context/        # React Context providers
    ├── pages/          # Application route pages
    │   ├── Addreses.tsx          # User addresses management page
    │   ├── AppLayout.tsx         # Shared page layout (Banner + Navbar + Main)
    │   ├── Checkout.tsx          # Shopping checkout page
    │   ├── FlashDeals.tsx        # Flash sales and promotions page
    │   ├── Home.tsx              # Landing page integrating sections
    │   ├── Login.tsx             # Login / Sign up authentication form
    │   ├── MyOrders.tsx          # Order history and listing page
    │   ├── OrderTracking.tsx     # Order tracking and map visualizer
    │   ├── ProductPage.tsx       # Detail view of a single product
    │   ├── Products.tsx          # Product listing and filtering page
    │   └── SearchResults.tsx     # Results for searched keywords page
    ├── types/          # TypeScript definitions
    │   └── index.ts              # Data type interfaces (Product, etc.)
    ├── App.tsx         # Main application routes wrapper
    └── main.tsx        # Application entry point
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
