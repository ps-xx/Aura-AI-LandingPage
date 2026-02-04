# 🚀 Nexus AI - Premium Landing Page

<div align="center">

![Nexus AI](https://img.shields.io/badge/Nexus-AI-4F46E5?style=for-the-badge&logo=brain&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Transform Your Business with AI-Powered Solutions**

[Live Demo](#) • [Documentation](#features) • [Report Bug](https://github.com/ps-xx/nexus-ai/issues) • [Request Feature](https://github.com/ps-xx/nexus-ai/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Screenshots](#-screenshots)
- [Setup Guide](#-setup-guide)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Credits](#-credits)

## 🎯 About

**Nexus AI** is a modern, high-converting landing page designed for a fictional tech startup. Built with a focus on premium design, user experience, and performance, this landing page showcases AI-powered business solutions through an elegant glassmorphism interface.

### Mission Statement

> "Democratizing artificial intelligence for businesses of all sizes. We believe every company should have access to cutting-edge AI technology that transforms workflows and drives innovation."

**Live Demo:** [Live Demo Link Coming Soon](#)

---

## 🛠️ Tech Stack

This project is built using modern web technologies:

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox/Grid, custom properties, and animations
- **Vanilla JavaScript (ES6+)** - Interactive features and scroll animations
- **Google Fonts** - Inter font family for premium typography
- **Font Awesome 6.4.0** - Icon library for UI elements
- **Unsplash API** - High-quality placeholder images

### Key Libraries & Tools

- No external JavaScript frameworks (pure vanilla JS)
- CSS Custom Properties (CSS Variables) for theming
- Intersection Observer API for scroll animations
- Responsive design with mobile-first approach

---

## ✨ Key Features

### 🎨 Design Features

- **Glassmorphism UI** - Modern frosted glass effects on cards and navigation
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Smooth Animations** - Scroll-triggered fade-in animations using Intersection Observer
- **Modern Color Palette** - Deep blue/indigo with vibrant pink accents
- **Premium Typography** - Inter font family for a professional look

### 🚀 Functionality

- **Sticky Navigation** - Glassmorphism navbar with smooth scroll effects
- **Mobile Menu** - Hamburger menu with smooth transitions
- **Hero Section** - Eye-catching hero with gradient orbs and background image
- **Features Grid** - 4 feature cards with images, icons, and hover effects
- **Testimonials** - Customer feedback section with star ratings
- **Pricing Table** - Three-tier pricing (Starter, Pro, Enterprise)
- **About Section** - Company information and statistics
- **Footer** - Comprehensive links and social media icons

### ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support for animations
- Alt text for all images

### ⚡ Performance

- Optimized images with lazy loading
- Efficient CSS with minimal repaints
- Intersection Observer for performance-friendly animations
- No external JavaScript dependencies

---

## 📸 Screenshots

### Desktop View
![Desktop Preview](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop)

### Mobile View
*Responsive design ensures perfect viewing on all screen sizes*

---

## 🚀 Setup Guide

Follow these simple steps to run the project locally:

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Git (optional, for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ps-xx/nexus-ai.git
   cd nexus-ai
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (with http-server):**
   ```bash
   npx http-server -p 8000
   ```

   **Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **View the page**
   - Navigate to `http://localhost:8000` in your browser
   - The page should load with all styles and functionality

### File Structure

```
nexus-ai/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
├── .gitignore          # Git ignore rules
└── LICENSE             # MIT License
```

---

## 📁 Project Structure

```
nexus-ai/
│
├── index.html
│   ├── <head>          # Meta tags, fonts, stylesheets
│   └── <body>
│       ├── Navigation  # Sticky navbar
│       ├── Hero        # Main hero section
│       ├── Features    # Feature cards grid
│       ├── Testimonials # Customer reviews
│       ├── Pricing     # Pricing table
│       ├── About       # About section
│       └── Footer      # Footer with links
│
├── styles.css
│   ├── CSS Variables   # Color scheme, spacing, etc.
│   ├── Base Styles     # Reset, typography
│   ├── Components      # Buttons, cards, etc.
│   ├── Sections        # Hero, features, etc.
│   ├── Animations      # Fade-in effects
│   └── Responsive      # Media queries
│
└── script.js
    ├── Mobile Menu     # Navigation toggle
    ├── Scroll Effects  # Navbar scroll behavior
    ├── Animations      # Intersection Observer
    ├── Smooth Scroll   # Anchor link scrolling
    └── Accessibility   # Keyboard navigation
```

---

## 🚀 Deployment

### Deploy to GitHub Pages

GitHub Pages is the easiest way to deploy this static site:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ps-xx/nexus-ai.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select `main` branch
   - Select `/ (root)` folder
   - Click **Save**

3. **Access your site**
   - Your site will be available at: `https://ps-xx.github.io/nexus-ai/`
   - It may take a few minutes for the site to be live

### Alternative Deployment Options

- **Netlify**: Drag and drop the folder or connect your GitHub repo
- **Vercel**: Import your GitHub repository
- **Cloudflare Pages**: Connect your Git repository
- **Any static hosting service**: Upload the files via FTP/SFTP

### Custom Domain (Optional)

1. Add a `CNAME` file in the root directory with your domain
2. Configure DNS settings as per GitHub Pages instructions
3. Update the domain in repository settings

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test on multiple browsers
- Ensure responsive design works
- Update README if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👏 Credits

**Design & Development:**
- **Pablo.ejs** ([@ps-xx](https://github.com/ps-xx))
- GitHub: [https://github.com/ps-xx](https://github.com/ps-xx)

**Resources Used:**
- [Unsplash](https://unsplash.com) - High-quality images
- [Google Fonts](https://fonts.google.com) - Inter font family
- [Font Awesome](https://fontawesome.com) - Icons

**Inspiration:**
- Modern glassmorphism design trends
- Premium SaaS landing pages
- Best practices in web design and UX

---

## 📞 Support

If you have any questions or need help:

- Open an [issue](https://github.com/ps-xx/nexus-ai/issues)
- Check the [documentation](#features)
- Review the code comments

---

<div align="center">

**Made with ❤️ by [Pablo.ejs](https://github.com/ps-xx)**

⭐ Star this repo if you find it helpful!

</div>
