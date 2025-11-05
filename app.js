// Sample projects data
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
        tags: ["React", "Node.js", "MongoDB"],
        icon: "🛒",
        link: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        tags: ["Vue.js", "Firebase", "TypeScript"],
        icon: "✅",
        link: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "An interactive weather dashboard with forecasts, maps, and weather alerts using API integration.",
        tags: ["JavaScript", "API", "CSS"],
        icon: "🌤️",
        link: "#"
    },
    {
        id: 4,
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media metrics with data visualization and reporting tools.",
        tags: ["Python", "Django", "Chart.js"],
        icon: "📊",
        link: "#"
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A responsive portfolio website with modern design and smooth animations.",
        tags: ["HTML", "CSS", "JavaScript"],
        icon: "💼",
        link: "#"
    },
    {
        id: 6,
        title: "Recipe Finder App",
        description: "Find recipes based on ingredients with step-by-step instructions and nutritional information.",
        tags: ["React Native", "API", "Redux"],
        icon: "🍳",
        link: "#"
    }
];

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        excerpt: "Learn how to use React Hooks to manage state and side effects in functional components.",
        date: "March 15, 2024",
        icon: "⚛️",
        link: "#"
    },
    {
        id: 2,
        title: "CSS Grid vs Flexbox: When to Use Which",
        excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
        date: "March 10, 2024",
        icon: "🎨",
        link: "#"
    },
    {
        id: 3,
        title: "Building RESTful APIs with Flask",
        excerpt: "Step-by-step tutorial on creating RESTful APIs using Python and Flask framework.",
        date: "March 5, 2024",
        icon: "🐍",
        link: "#"
    },
    {
        id: 4,
        title: "JavaScript Async/Await Explained",
        excerpt: "Understanding asynchronous JavaScript with async/await for cleaner and more readable code.",
        date: "February 28, 2024",
        icon: "⚡",
        link: "#"
    },
    {
        id: 5,
        title: "Modern Web Design Principles",
        excerpt: "Key principles and best practices for creating modern, user-friendly web interfaces.",
        date: "February 20, 2024",
        icon: "✨",
        link: "#"
    },
    {
        id: 6,
        title: "Git Workflow Best Practices",
        excerpt: "Essential Git workflows and branching strategies for efficient team collaboration.",
        date: "February 15, 2024",
        icon: "🔀",
        link: "#"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadProjects();
    loadBlogPosts();
    initializeContactForm();
    initializeSmoothScroll();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
}

// Load projects into the grid
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="window.open('${project.link}', '_blank')">
            <div class="project-image">${project.icon}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" onclick="event.stopPropagation()">
                    View Project →
                </a>
            </div>
        </div>
    `).join('');
}

// Load blog posts into the grid
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    // Try to load from JSON file, fallback to local data
    fetch('./blog_posts.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('JSON file not found');
        })
        .then(posts => {
            // Format dates for display
            const formattedPosts = posts.map(post => ({
                ...post,
                date: formatDate(post.date),
                link: post.link || '#'
            }));
            renderBlogPosts(formattedPosts);
        })
        .catch(error => {
            console.log('Using local blog data:', error);
            renderBlogPosts(blogPosts);
        });
}

// Format date from YYYY-MM-DD to readable format
function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
        return dateStr;
    }
}

// Render blog posts
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = posts.map(post => `
        <div class="blog-card" onclick="window.open('${post.link || '#'}', '_blank')">
            <div class="blog-image">${post.icon || '📝'}</div>
            <div class="blog-content">
                <div class="blog-date">${post.date}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link || '#'}" class="blog-link" onclick="event.stopPropagation()">
                    Read More →
                </a>
            </div>
        </div>
    `).join('');
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Check if form uses Formspree (has action attribute with formspree.io)
    const formAction = contactForm.getAttribute('action');
    const usesFormspree = formAction && formAction.includes('formspree.io');

    if (!usesFormspree) {
        // If not using Formspree, use mailto fallback
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Create mailto link
            const subject = encodeURIComponent(`Contact from ${name}`);
            const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:ashmita@example.com?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(() => {
                alert('Thank you for your message! Your email client should open shortly.');
                contactForm.reset();
            }, 100);
        });
    } else {
        // Formspree will handle submission, just show success message
        contactForm.addEventListener('submit', function(e) {
            // Let Formspree handle the submission
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
            }, 500);
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
