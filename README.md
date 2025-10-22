# Ray Mercy Ministry Website

A modern, fully static marketing website for Ray Mercy Ministry - a charity organization dedicated to spreading love and hope to the vulnerable.

## 🌟 Features

- **Fully Static**: Built with Next.js static export for easy hosting
- **Modern Design**: Clean, aesthetic UI with blue-white color palette
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility
- **Performance**: Optimized for fast loading and smooth scrolling

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build & Deploy

To create a production-ready static build:

```bash
npm run build
```

This will generate a static export in the `out` folder that can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📝 Content Customization

### Update Text Content

All components are located in the `components/` folder. Each component has detailed comments explaining where to edit content:

- **Hero Section** (`components/Hero.tsx`): Mission statement and CTA
- **About Section** (`components/About.tsx`): Ministry story and vision
- **Activities Section** (`components/Activities.tsx`): Outreach programs
- **Gallery Section** (`components/Gallery.tsx`): Photo gallery
- **Contact Section** (`components/Contact.tsx`): Contact information
- **Footer** (`components/Footer.tsx`): Copyright and links

### Add Images

1. Create these folders in your `public` directory:
   - `public/images/gallery/` - for gallery photos
   - `public/images/` - for other images

2. Replace placeholder images:
   - Hero background: Add image path in `components/Hero.tsx`
   - About section: `mission.jpg` and `vision.jpg`
   - Gallery: Add numbered images (1.jpg, 2.jpg, etc.) in `public/images/gallery/`

3. Uncomment the Image components in the code and update the paths

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: { ... }, // Blue shades
  accent: { ... },  // Gold/yellow hover colors
}
```

### Update Contact Information

Edit `components/Contact.tsx`:

```tsx
const contactInfo = [
  {
    // Update phone, email, location here
  }
]
```

## 📱 Sections

1. **Hero** - Full-screen welcome with mission statement
2. **About** - Ministry story and vision
3. **Activities** - Outreach programs and events
4. **Gallery** - Photo gallery with lightbox
5. **Contact** - Contact information and CTA
6. **Footer** - Copyright and quick links

## 🎨 Design Philosophy

- **Colors**: Blue blend (white-blue, sky-blue) with yellow-gold accents on hover
- **Typography**: Poppins font for clean, modern look
- **Spacing**: Generous whitespace for readability
- **Animations**: Subtle, meaningful transitions
- **Shadows**: Soft shadows for depth

## 🔧 Configuration

- **Static Export**: Configured in `next.config.js`
- **Tailwind**: Custom theme in `tailwind.config.js`
- **TypeScript**: Strict mode enabled in `tsconfig.json`

## 📄 License

© 2024 Ray Mercy Ministry. All rights reserved.

## 💝 Mission

Ray Mercy Ministry focuses on visiting the needy and vulnerable—especially children and the sick. The founder provides meals twice a year during different occasions and hopes to one day build a children's home. This is a calling from God to spread love and hope.

## 📞 Contact

- **Phone**: +254 721 826905
- **Email**: rachelmacharia80@gmail.com
- **Location**: Kenya

---

*Made with ❤️ for God's work*

