# Portfolio Website

A modern, responsive portfolio website showcasing front-end design and Shopify store design work.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Portfolio Showcase**: Filterable portfolio section for different project types
- **Contact Form**: Functional contact form for inquiries
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Mobile Menu**: Hamburger menu for mobile devices
- **Interactive Elements**: Hover effects, animations, and transitions

## Project Structure

```
cod-sprint/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── main.js         # JavaScript for interactivity
├── img/                # Images and assets
├── fonts/              # Custom fonts (if any)
└── README.md           # This file
```

## Getting Started

### Prerequisites

No special prerequisites needed! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Local Development

For a better development experience, you can use a local server:

**Using Python:**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server
```

Then open `http://localhost:8000` in your browser.

**Using VS Code:**

- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

## Customization

### Update Your Information

1. **Personal Information**: Edit the hero section in `index.html` to update your name and description
2. **About Section**: Modify the about section with your own story and skills
3. **Portfolio Items**: Add your actual projects to the portfolio section
4. **Contact Information**: Update email and phone number in the contact section
5. **Social Links**: Add your social media profiles

### Adding Portfolio Projects

To add a new portfolio item, copy this structure in the portfolio grid:

```html
<div class="portfolio-item" data-category="frontend">
  <div class="portfolio-image">
    <div class="portfolio-placeholder">
      <span>Your Project Name</span>
    </div>
    <div class="portfolio-overlay">
      <h3>Project Title</h3>
      <p>Project description</p>
      <a href="project-url" class="portfolio-link">View Project</a>
    </div>
  </div>
</div>
```

Replace `data-category` with either `"frontend"` or `"shopify"` to match the filter buttons.

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #6366f1; /* Main brand color */
  --primary-dark: #4f46e5; /* Darker shade */
  --secondary-color: #8b5cf6; /* Secondary color */
  /* ... other variables */
}
```

### Adding Images

1. Place your images in the `img/` folder
2. Update the portfolio items to use actual images instead of placeholders:

```html
<div class="portfolio-image">
  <img src="img/your-image.jpg" alt="Project description" />
  <div class="portfolio-overlay">
    <!-- overlay content -->
  </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Features Breakdown

### Navigation

- Fixed navbar with scroll effect
- Smooth scrolling to sections
- Mobile hamburger menu
- Active link highlighting

### Hero Section

- Eye-catching gradient background
- Animated elements
- Call-to-action buttons
- Scroll indicator

### Portfolio

- Filterable project grid
- Hover effects with overlays
- Responsive grid layout
- Category filtering (All, Front-End, Shopify)

### Contact Form

- Form validation
- Responsive layout
- Social media links
- Contact information display

## Future Enhancements

Consider adding:

- Backend integration for contact form
- Blog section
- Testimonials section
- Case studies for portfolio items
- Dark mode toggle
- More animations and micro-interactions
- Image lazy loading
- SEO optimization

## License

This project is open source and available for personal and commercial use.

## Contact

Feel free to customize this portfolio to match your personal brand and style!

---

**Note**: Remember to update the contact form handler in `js/main.js` to connect it to your backend service or email service provider when deploying.
