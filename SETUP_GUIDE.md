# Setup Guide - Ray Mercy Ministry Website

This guide will help you get the website up and running.

## 🚀 Quick Start

### 1. Install Node.js
Make sure you have Node.js installed (version 18 or higher recommended).
Download from: https://nodejs.org/

### 2. Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Framer Motion, etc.)

### 3. Run Development Server

```bash
npm run dev
```

Open your browser and go to: http://localhost:3000

You should see the website running!

## 📝 Customization Steps

### Step 1: Update Content

1. **Hero Section** - `components/Hero.tsx`
   - Line 19-21: Update mission statement
   - Line 38-40: Update tagline
   - To add background image: uncomment lines 27-29 and add image to `public/hero-bg.jpg`

2. **About Section** - `components/About.tsx`
   - Lines 50-58: Update mission text
   - Lines 73-81: Update vision text
   - Lines 88-106: Update core values

3. **Activities Section** - `components/Activities.tsx`
   - Lines 22-45: Update activity titles and descriptions

4. **Contact Section** - `components/Contact.tsx`
   - Lines 22-36: Contact information is already set (phone, email)
   - Update social media links on line 116

5. **Footer** - `components/Footer.tsx`
   - Auto-updates copyright year
   - Update Bible verse on lines 40-42 if needed

### Step 2: Add Images

Create folders and add your images:

```
public/
├── images/
│   ├── mission.jpg        (About section - mission)
│   ├── vision.jpg         (About section - vision)
│   ├── hero-bg.jpg        (Hero background - optional)
│   └── gallery/
│       ├── 1.jpg
│       ├── 2.jpg
│       ├── 3.jpg
│       ├── 4.jpg
│       ├── 5.jpg
│       ├── 6.jpg
│       ├── 7.jpg
│       └── 8.jpg
```

**Where to find images:**
- Use your own ministry photos (best option!)
- Free stock photos: Unsplash.com, Pexels.com, Pixabay.com
- Search: "charity", "children Africa", "community service", "feeding program"

**After adding images, uncomment the Image components:**

In `components/About.tsx`:
- Uncomment lines with `<Image>` tags
- Remove the placeholder `<div>` with icons

In `components/Gallery.tsx`:
- Uncomment the `<Image>` component
- Remove the placeholder gradient divs

### Step 3: Customize Colors (Optional)

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    // Adjust blue shades here
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',  // Darker blue
  },
  accent: {
    gold: '#FFD700',    // Hover color
    yellow: '#FDB813',  // Hover gradient
  }
}
```

### Step 4: Add Social Media Links

Edit `components/Contact.tsx` (line 116):

```tsx
{ icon: FaFacebookF, link: "https://facebook.com/yourpage", label: "Facebook" },
{ icon: FaInstagram, link: "https://instagram.com/yourpage", label: "Instagram" },
{ icon: FaTwitter, link: "https://twitter.com/yourpage", label: "Twitter" }
```

## 🏗️ Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an `out` folder with static files ready to deploy.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Free)
1. Sign up at netlify.com
2. Drag and drop the `out` folder
3. Your site is live!

### Option 2: Vercel (Free)
1. Sign up at vercel.com
2. Import your project
3. Deploy automatically

### Option 3: GitHub Pages (Free)
1. Push code to GitHub
2. Enable GitHub Pages in settings
3. Upload `out` folder contents

### Option 4: Traditional Hosting
- Upload contents of `out` folder to any web hosting service
- Point your domain to the hosting

## 📱 Testing

### Test Responsive Design:
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test on different screen sizes

### Test on Real Devices:
1. Get your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. On development server, visit: `http://YOUR_IP:3000` on mobile

## 🐛 Troubleshooting

### "Module not found" errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use:
```bash
npm run dev -- -p 3001
```

### Build errors:
- Make sure all imports are correct
- Check that all image paths exist
- Verify TypeScript errors are resolved

## 📞 Need Help?

Contact the developer or check:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## ✅ Pre-Launch Checklist

- [ ] All content updated with ministry information
- [ ] Images added and optimized
- [ ] Contact information verified
- [ ] Social media links added
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] All links working
- [ ] Build command successful
- [ ] Domain/hosting ready

---

**God bless your ministry! 🙏**

