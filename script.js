async function loadBooks() {
    try {
        const response = await fetch('data/books.json');
        const books = await response.json();
        
        const publishedBooks = books.filter(book => book.status === 'published');
        const upcomingBooks = books.filter(book => book.status === 'upcoming');
        
        renderBooks(publishedBooks, 'published-books');
        renderBooks(upcomingBooks, 'upcoming-books');
    } catch (error) {
        console.error('Error loading books:', error);
        document.getElementById('published-books').innerHTML = '<p class="loading">Failed to load books</p>';
        document.getElementById('upcoming-books').innerHTML = '<p class="loading">Failed to load upcoming books</p>';
    }
}

function renderBooks(books, containerId) {
    const container = document.getElementById(containerId);
    
    if (books.length === 0) {
        container.innerHTML = '<p class="loading">No books available yet</p>';
        return;
    }
    
    container.innerHTML = books.map(book => `
        <div class="book-card">
            <img src="${book.coverImage}" alt="${book.title}" class="book-cover">
            <div class="book-content">
                <h3>${book.title}</h3>
                ${book.subtitle ? `<p class="book-subtitle">${book.subtitle}</p>` : ''}
                <p class="book-description">${book.description}</p>
                <div class="values-tags">
                    ${book.values.map(value => `<span class="tag">${value}</span>`).join('')}
                </div>
                ${book.releaseDate ? `<p class="release-date">Coming ${book.releaseDate}</p>` : ''}
                ${book.status === 'published' ? renderPurchaseLinks(book.purchaseLinks) : ''}
            </div>
        </div>
    `).join('');
}

function renderPurchaseLinks(links) {
    const availableLinks = [];
    
    if (links.amazon) availableLinks.push({ name: 'Amazon', url: links.amazon });
    if (links.barnesNoble) availableLinks.push({ name: 'Barnes & Noble', url: links.barnesNoble });
    if (links.bookshop) availableLinks.push({ name: 'Bookshop', url: links.bookshop });
    if (links.other) availableLinks.push({ name: 'Buy Now', url: links.other });
    
    if (availableLinks.length === 0) return '';
    
    return `
        <div class="purchase-links">
            ${availableLinks.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    ${link.name}
                </a>
            `).join('')}
        </div>
    `;
}

async function loadTestimonials() {
    try {
        const response = await fetch('data/testimonials.json');
        const testimonials = await response.json();
        
        const container = document.getElementById('testimonials-grid');
        container.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <p class="testimonial-quote">"${testimonial.quote}"</p>
                <p class="testimonial-author">${testimonial.author}</p>
                <p class="testimonial-role">${testimonial.role}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading testimonials:', error);
        document.getElementById('testimonials-grid').innerHTML = '<p class="loading">Failed to load testimonials</p>';
    }
}

async function loadSocialLinks() {
    try {
        const response = await fetch('data/social-links.json');
        const social = await response.json();
        
        const icons = {
            instagram: 'fa-instagram',
            facebook: 'fa-facebook',
            tiktok: 'fa-tiktok',
            youtube: 'fa-youtube',
            twitter: 'fa-twitter'
        };
        
        const container = document.getElementById('social-links');
        const links = [];
        
        for (const [platform, url] of Object.entries(social)) {
            if (url && icons[platform]) {
                links.push(`
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${platform}">
                        <i class="fa-brands ${icons[platform]}"></i>
                    </a>
                `);
            }
        }
        
        container.innerHTML = links.length > 0 ? links.join('') : '<p class="loading">No social links available</p>';
    } catch (error) {
        console.error('Error loading social links:', error);
        document.getElementById('social-links').innerHTML = '<p class="loading">Failed to load social links</p>';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    loadBooks();
    loadTestimonials();
    loadSocialLinks();
});
