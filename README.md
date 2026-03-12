<div align="center">
  
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" width="30" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" width="30" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" width="30" />

  <h1>KyndexLab</h1>
  <p><b>Premium Digital Agency Landing Page</b></p>
  <p>A highly-animated, glassmorphism-inspired front-end template built entirely with vanilla web technologies.</p>

</div>

---

## ✨ Overview

**KyndexLab** is a zero-dependency, performance-focused landing page designed for modern digital agencies, SaaS companies, and high-end portfolios. 

Built with pure Vanilla HTML, CSS, and JavaScript, it utilizes the HTML5 Canvas API for dynamic background rendering and native browser APIs for smooth scroll reveals. Because it avoids heavy frameworks like React or Tailwind, it loads instantly and serves as a perfect, easily customizable foundation for any dark-mode web project.

## 🚀 Key Features

### 🎨 Advanced UI/UX Architecture
* **Glassmorphism Design:** Utilizes CSS `backdrop-filter` to create realistic, frosted-glass navigation bars and content cards.
* **Bento Grid Layouts:** Employs modern CSS Grid to create an asymmetric, highly visual "Bento box" structure for the Services section.
* **CSS Custom Properties:** Fully themeable via a centralized `:root` variable system. Change the primary, secondary, and accent glow colors in seconds.

### 🌊 Dynamic Canvas Rendering
* **Harmonic Data Waves:** An animated, real-time background effect drawn entirely via the HTML5 `<canvas>`.
* **Mathematical Sine Generation:** Generates multiple intersecting waveforms using `Math.sin()`, varying frequency, amplitude, and shadow-blur to create a glowing, organic data aesthetic.
* **Auto-Resizing:** The canvas automatically recalculates its dimensions and redrawn coordinates on window resize to ensure edge-to-edge fidelity.

### ⚡ Scroll-Reveal Engine
* **Intersection Observer API:** Drops clunky scroll-event listeners in favor of native, highly performant intersection observation.
* **Staggered Delays:** CSS utility classes (`delay-100`, `delay-200`) pair with the observer to create cascading, sequential fade-ups as elements enter the viewport.

### 📱 Premium Native Layout
* **Bulletproof Mobile Responsiveness:** Adapts flawlessly to mobile and tablet screens with strict flexbox alignment and collapsing grid architectures.
* **Custom Mobile Menu:** A fully animated, CSS-driven hamburger toggle and full-screen blur overlay for mobile navigation.

---

## 🛠️ Installation & Usage

KyndexLab requires **zero build tools, dependencies, or local servers** to run. 

1. Clone or download the repository.
2. Ensure all three core files are in the same directory:
   * `index.html` (The DOM Structure)
   * `style.css` (The Styling & Keyframe Animations)
   * `script.js` (The Canvas & Scroll Logic)
3. Double-click `index.html` to open it natively in any modern web browser (Chrome, Firefox, Safari, Edge).

---

## 🧠 Under the Hood (Architecture)

The architecture is strictly separated into core web technologies to maintain maximum readability:

* `index.html`: Written with semantic HTML5 tags (`<header>`, `<section>`, `<nav>`) to ensure high accessibility and SEO performance right out of the box.
* `style.css`: Structured with clear block comments. It heavily leverages CSS Variables for theming, CSS Grid for complex layouts (like the Portfolio and Bento grids), and hardware-accelerated transitions (`transform` and `opacity`) for 60FPS animations.
* `script.js`: Divided into modular, event-driven blocks. It handles the continuous `requestAnimationFrame` loop for the background canvas, initializes the `IntersectionObserver` for animations, and manages DOM state for the legal modals and mobile navigation.

---

## 📜 License

This project is open-source and available under the **MIT License**. Feel free to fork, modify, and integrate this template into your own client work or personal projects.