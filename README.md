# Starlit Studioz - Static Website

This is a **pure static website** that works directly on GitHub Pages without any build process!

## 📁 Files Structure

```
docs/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript to load JSON data
├── favicon.png         # Website icon
├── .nojekyll          # Prevents Jekyll processing
├── data/              # Content in JSON format
│   ├── books.json
│   ├── testimonials.json
│   └── social-links.json
└── assets/            # Images and media
    ├── Dr_Sanjeev_Agrawal_portrait_*.png
    ├── Author_with_grandchildren_reading_*.png
    └── books/         # Book cover images
```

## 🚀 Deploy to GitHub Pages

### Option 1: From the `docs` folder (Recommended)

1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **main** and folder: **/docs**
5. Click **Save**

Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: From root directory

If you want to use root instead of docs folder:
1. Move all files from `docs/` to the root of your repository
2. In Settings → Pages, select branch **main** and folder **/ (root)**

## 📝 Updating Content

### Add or Edit Books

Edit `data/books.json`:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "subtitle": "Optional Subtitle",
  "coverImage": "assets/books/cover.png",
  "description": "Book description...",
  "values": ["Value1", "Value2", "Value3"],
  "purchaseLinks": {
    "amazon": "https://amazon.com/...",
    "barnesNoble": "https://bn.com/..."
  },
  "status": "published",
  "releaseDate": "Spring 2025"
}
```

- Set `"status": "published"` for published books
- Set `"status": "upcoming"` for upcoming releases
- Add `"releaseDate"` for upcoming books

### Add or Edit Testimonials

Edit `data/testimonials.json`:

```json
{
  "id": "unique-id",
  "quote": "The testimonial text...",
  "author": "Author Name",
  "role": "Their role or title"
}
```

### Update Social Media Links

Edit `data/social-links.json`:

```json
{
  "instagram": "https://instagram.com/username",
  "facebook": "https://facebook.com/page",
  "tiktok": "https://tiktok.com/@username",
  "youtube": "https://youtube.com/@channel",
  "twitter": "https://twitter.com/username"
}
```

Remove any platforms you don't use.

### Add Book Cover Images

1. Add your image to `assets/books/`
2. Use the path in `books.json` like: `"assets/books/your-cover.png"`

## 🧪 Testing Locally

### Simple Python Server

```bash
cd docs
python3 -m http.server 8000
```

Visit: `http://localhost:8000`

### Simple PHP Server

```bash
cd docs
php -S localhost:8000
```

### VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## ✅ No Build Required!

This website uses:
- ✅ Plain HTML
- ✅ Pure CSS
- ✅ Vanilla JavaScript
- ✅ JSON data files
- ✅ No npm, no build tools, no GitHub Actions

Just commit and push - changes appear immediately!

## 🎨 Customization

### Change Colors

Edit `styles.css` at the top:

```css
:root {
  --primary: #00A8E8;    /* Bright blue */
  --secondary: #9D4EDD;  /* Purple */
  --accent: #FF8C42;     /* Orange */
  --background: #F9F6F0; /* Cream */
  /* ... */
}
```

### Change Fonts

The site uses Google Fonts (Quicksand, Open Sans, Caveat).
To change, edit the `@import` line in `styles.css`.

## 📱 Responsive Design

The website automatically adapts to:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers

## 🆘 Troubleshooting

### Images not loading?
- Check paths start with `assets/` (not `/assets/`)
- Verify images exist in the `assets/` folder

### JSON not loading?
- Make sure files are in the `data/` folder
- Check for valid JSON syntax (use JSONLint.com)

### Site not updating?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub Pages to rebuild

## 📄 License

© 2024 Starlit Studioz. All rights reserved.
