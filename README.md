# Priya Mangla - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases Priya Mangla's professional background as a System Engineer with expertise in customer service, team management, and operational excellence.

## 🌟 Features

### Design & User Experience
- **Modern & Clean Design**: Professional portfolio design with a clean, modern aesthetic
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Smooth Animations**: Subtle animations and transitions for better user experience
- **Accessibility**: Built with accessibility in mind, including keyboard navigation

### Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Personal introduction and professional background
- **Blog**: Showcase of technical articles and insights
- **Projects**: Portfolio of system engineering and leadership projects
- **Resume**: Professional experience, education, and skills (with PDF download)
- **Footer**: Social links and contact information

### Technical Features
- **Vanilla JavaScript**: No frameworks, pure JavaScript for better performance
- **CSS Custom Properties**: Easy theme customization with CSS variables
- **Intersection Observer**: Smooth scroll animations and lazy loading
- **Local Storage**: Theme preference persistence
- **Mobile-First**: Responsive design with mobile menu
- **Performance Optimized**: Fast loading with optimized assets
- **PDF Integration**: Direct link to downloadable resume

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. The website should load immediately with all features working

### File Structure
```
priyamangla14.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and theming
├── script.js           # JavaScript functionality
├── PriyaResume.pdf     # Downloadable resume
└── README.md           # This documentation
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- **Name**: Replace "Priya Mangla" with your name
- **Email**: Update the email address in the About section and footer
- **Social Links**: Update the social media links in the footer
- **Content**: Customize the About, Blog, Projects, and Resume sections

### Styling
The website uses CSS custom properties for easy theming. Modify the colors in `styles.css`:

```css
:root {
    --bg-primary: #ffffff;        /* Main background */
    --bg-secondary: #f8f9fa;      /* Secondary background */
    --text-primary: #1a1a1a;      /* Main text color */
    --text-secondary: #6c757d;    /* Secondary text color */
    --accent-color: #007bff;      /* Accent color for links/buttons */
    --border-color: #e9ecef;      /* Border color */
}
```

### Dark Theme Colors
```css
[data-theme="dark"] {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --text-primary: #f0f6fc;
    --text-secondary: #8b949e;
    --accent-color: #58a6ff;
    --border-color: #30363d;
}
```

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any JavaScript functionality in `script.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- Hamburger menu for navigation
- Optimized typography and spacing
- Touch-friendly buttons and links

## 🔧 JavaScript Features

### Theme Management
- Automatic theme detection
- Persistent theme preference
- Smooth theme transitions

### Smooth Scrolling
- Navigation links scroll smoothly to sections
- Accounts for fixed header height
- PDF links open in new tabs

### Animations
- Intersection Observer for scroll-triggered animations
- Typing effect for hero title
- Hover effects on cards and buttons

### Mobile Menu
- Responsive hamburger menu
- Touch-friendly navigation

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Services
- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Web Hosting**: Upload files via FTP

## 📝 Content Management

### Blog Posts
Add new blog posts by duplicating the blog card structure:

```html
<article class="blog-card">
    <div class="blog-card-content">
        <h3 class="blog-title">Your Blog Title</h3>
        <p class="blog-excerpt">Your blog excerpt...</p>
        <div class="blog-meta">
            <span class="blog-date">Date</span>
            <span class="blog-category">Category</span>
        </div>
    </div>
</article>
```

### Projects
Add new projects by duplicating the project card structure:

```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">View Details</a>
            <a href="#" class="project-link">Documentation</a>
        </div>
    </div>
</div>
```

## 🎯 Performance Optimization

- **Lazy Loading**: Images load only when needed
- **Minified Assets**: Optimized CSS and JavaScript
- **Efficient Animations**: Hardware-accelerated CSS transitions
- **Preloaded Resources**: Critical fonts and styles preloaded

## 🔒 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

For questions or support, please reach out to:
- Email: manglapriya14@gmail.com
- LinkedIn: [Priya Mangla](https://linkedin.com/in/priyamangla14)
- Phone: +1 (206) 218-4713

---

**About Priya Mangla**: A dynamic System Engineer with over 2.5 years of experience at Tata Consultancy Services, specializing in customer service, team management, and operational excellence. Currently based in the United States, Priya has successfully resolved over 300 customer issues in Lenel badging systems and visitor management systems, while leading agile teams and establishing effective communication channels between development teams and leadership.
