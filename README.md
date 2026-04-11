# Portfolio 2.0 | Adnan Ashraf

A high-fidelity, editorial-grade personal portfolio built with **React**, **Vite**, and **Vanilla CSS**. This project focuses on modern aesthetics, interactive micro-animations, and liquid visual effects.

## ✨ Core Features

### 🌌 Cinematic Hero Experience
- **Liquid Morphing Branding**: A refined, symmetrical "gooey" text animation using custom SVG threshold filters and a 12s calm cycle.
- **Bubble Typography**: Integrated 'Fredoka' bubble font for a playful yet sleek liquid visual effect.
- **Interactive Parallax Visuals**: A mouse-tracking portrait system with 3D-depth effects and floating high-tech badges.

### 🎭 Atmospheric Design System
- **Scroll Reveal System**: Independent intersection-observer based animations for every UI element (titles, cards, terminal).
- **Premium CTAs**: Animated "Download Resume" with continuous floating and glowing effects.
- **Dark Glassmorphism**: Premium frosted-glass components with subtle border lighting.
- **Atmospheric Glow**: Wide-spread radial glow effects that react to user hovering in the About section.

### 📱 Responsive & Optimized
- **Performance First**: Optimized CLS (Cumulative Layout Shift) using layout isolation (`contain: content`) and reserved space containers.
- **SEO & Accessibility**: Complete meta-tag integration and ARIA labels for a 90+ Lighthouse score.
- **Enhanced Mobile Experience**: Polished spacing and font scaling for perfect tablet and mobile viewing.

## 🛠️ Technology Stack
- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Pure CSS (No external UI libraries for maximum control)
- **Icons**: Lucide-React
- **Animations**: CSS Keyframes + SVG Filters

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adnanashraf-code/Portfolio-2.0.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure
```text
src/
├── components/     # High-fidelity React components
│   ├── Hero.jsx    # Parallax, Morphing Text, Status Badges
│   ├── About.jsx   # Profile & Bio with Glow interactions
│   ├── Navbar.jsx  # Glassmorphism Navigation
│   └── ...         # Projects, Skills, Contact
├── App.jsx         # Main application hub & reveal logic
└── index.css       # Core design system & global animations
```

---
Crafted with code and intent by **Adnan Ashraf**.
