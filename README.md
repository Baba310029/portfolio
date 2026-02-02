# 🚀 Personal Portfolio Website

A modern, interactive, and fully responsive **personal portfolio website** built to showcase my **skills, projects, experience, and journey** as a developer.  
This portfolio is not a template — it is a **carefully engineered product** with real functionality, smooth interactions, and a strong design system.

---

## ✨ Highlights

- 🎨 Custom-designed UI (no templates)
- 🧭 Scroll-aware navigation with active section indicators
- 🧠 Interactive Skills & Experience section with timeline
- 🧩 Modular and reusable React components
- 📬 **Fully functional contact form** (EmailJS integration)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built using modern frontend tools

---

## 🛠 Tech Stack

### Frontend
- **React** (Vite)
- **Tailwind CSS**
- **JavaScript (ES6+)**

### Libraries & Tools
- EmailJS (contact form)
- React Icons
- Intersection Observer API (scroll-based animations)

### Deployment
- Netlify / Vercel (recommended)

---

## 🧩 Features Overview

### 🔹 Navbar
- Sticky navbar with scroll hide/show behavior
- Animated underline on hover (left → right)
- Active section highlighting
- Smooth transitions

### 🔹 Page Navigation Dots
- Fixed vertical dots on the right
- Active section glow effect
- Syncs correctly on scroll up & down
- Works reliably with animated sections

### 🔹 About Section
- Clean, equal-height cards
- Hover lift & shadow effects
- Clear presentation of strengths and mindset

### 🔹 Skills & Experience
- Skills grouped by domain (Frontend, Backend, DSA, Machine Learning)
- Skill **icons instead of text**
- Individual skill name tooltips on hover
- Expandable skill-group descriptions
- Vertical timeline with:
  - Years aligned on the left
  - Descriptions on the right
- Clean visual hierarchy (skills → timeline → certifications)

### 🔹 Work / Projects
- Filterable projects by domain
- Interactive project cards
- Hover actions:
  - 👁 View demo
  - 🔗 Open GitHub repository
- Smooth hover and scroll animations

### 🔹 Contact Section
- Clickable email (`mailto:`) and phone (`tel:`)
- Animated hover effects
- Decorative background bubbles
- **Working contact form**
  - Sends messages directly to email
  - Success / error feedback
  - No backend required

### 🔹 Footer
- Social icons on the left
- Icons animate (fall-in effect) on scroll
- Animation repeats when re-entering viewport
- Two-line footer text with brand color palette

---

## 📬 Contact Form – How It Works

The contact form is powered by **EmailJS**, allowing visitors to send messages directly to my email inbox without any backend server.

### Contact Form Features
- Live “Sending…” state
- Success and error feedback messages
- Secure public-key based setup
- Clean UX with hover & focus states

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
