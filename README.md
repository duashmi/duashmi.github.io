# Portfolio Website

A modern, responsive portfolio website showcasing projects and blog posts. Optimized for GitHub Pages deployment.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly layout
- 🚀 Fast loading with optimized assets
- 📝 Blog section with JSON-based content
- 💼 Project showcase with tags
- 📧 Contact form with mailto/Formspree support
- ✨ Smooth animations and transitions

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and `/ (root)` folder
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

## Customization

### Personal Information

Edit `index.html` to update:
- Your name in the hero section
- Email address
- Social media links
- Bio/description

### Projects

Edit the `projects` array in `app.js`:
```javascript
const projects = [
    {
        id: 1,
        title: "Your Project",
        description: "Project description",
        tags: ["React", "Node.js"],
        icon: "🚀",
        link: "https://your-project-link.com"
    },
    // Add more projects...
];
```

### Blog Posts

Edit `blog_posts.json` to update your blog posts:
```json
[
    {
        "id": 1,
        "title": "Your Blog Post",
        "excerpt": "Brief description",
        "content": "Full blog content...",
        "date": "2024-03-15",
        "icon": "📝",
        "tags": ["Web Development", "Tutorial"]
    }
]
```

### Contact Form

**Option 1: Mailto (Simple)**
- Already configured in `index.html`
- Just update the email address in the form action

**Option 2: Formspree (Recommended)**
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `index.html` with your Formspree form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Styling

- Edit `style.css` to customize colors, fonts, and layout
- Color variables are defined in `:root` for easy customization

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── app.js              # JavaScript functionality
├── blog_posts.json     # Blog posts data
├── requirements.txt    # Python dependencies (for Flask, optional)
├── app.py             # Flask backend (optional, not needed for GitHub Pages)
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Icons: Emoji

---

Made with ❤️ for showcasing your work
