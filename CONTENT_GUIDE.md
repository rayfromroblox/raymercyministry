# Content Editing Guide

Quick reference for editing website content without technical knowledge.

## 📝 Where to Find Content to Edit

All content is in the `components/` folder. Each section has its own file:

### 1. Hero Section (`components/Hero.tsx`)

**What it shows:** The first thing visitors see - main welcome message

**What to edit:**
- **Line 35:** Main heading "Ray Mercy Ministry"
- **Line 37:** Tagline "Spreading Love and Hope to the Vulnerable"  
- **Line 40:** Description paragraph
- **Line 48:** Button text "Learn More"

**Example:**
```tsx
<h1 className="heading-primary mb-6">
  Ray Mercy Ministry  ← Change this
</h1>
```

---

### 2. About Section (`components/About.tsx`)

**What it shows:** Ministry story, mission, vision, and values

**What to edit:**

**Section Title (Line 45):**
```tsx
About <span className="text-gradient">Our Ministry</span>
```

**Mission Text (Lines 52-60):**
```tsx
<p className="text-gray-600 text-lg leading-relaxed mb-4">
  Ray Mercy Ministry is a divine calling...  ← Edit this paragraph
</p>
```

**Vision Text (Lines 88-96):**
```tsx
<p className="text-gray-600 text-lg leading-relaxed mb-4">
  Our founder, Rachel Macharia...  ← Edit this paragraph
</p>
```

**Core Values (Lines 102-117):**
Three boxes showing Compassion, Service, and Hope. Edit titles and descriptions:
```tsx
{
  title: "Compassion",  ← Change title
  description: "We serve with genuine love..."  ← Change description
}
```

---

### 3. Activities Section (`components/Activities.tsx`)

**What it shows:** Ministry programs and events

**What to edit (Lines 22-45):**

Each activity has:
- **title:** Activity name
- **description:** What you do

```tsx
{
  title: "Feeding Programs",  ← Change this
  description: "We organize feeding programs..."  ← Change this
}
```

**Add more activities:** Copy the entire block and paste, then edit.

---

### 4. Gallery Section (`components/Gallery.tsx`)

**What it shows:** Photo gallery

**What to edit (Lines 24-33):**

```tsx
const galleryImages = [
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Feeding program event' },
  ← Add more images here
]
```

**To add more photos:**
1. Add image to `public/images/gallery/` folder
2. Add a line like: `{ id: 9, src: '/images/gallery/9.jpg', alt: 'Description' },`

---

### 5. Contact Section (`components/Contact.tsx`)

**What it shows:** Contact information

**Already Set:**
- Phone: +254 721 826905
- Email: rachelmacharia80@gmail.com

**To change location (Line 29):**
```tsx
{
  title: "Location",
  value: "Kenya",  ← Change to specific city/region
}
```

**To add social media (Line 116):**
```tsx
{ icon: FaFacebookF, link: "https://facebook.com/yourpage", label: "Facebook" },
```

---

### 6. Footer (`components/Footer.tsx`)

**What it shows:** Bottom of page

**Bible Verse (Line 40):**
```tsx
<p className="text-gray-400 text-sm text-center">
  "For I was hungry and you gave me something to eat..."  ← Change verse
</p>
```

Copyright year updates automatically!

---

## 🎨 Changing Colors

**File:** `tailwind.config.js`

**Main blue colors (Line 13-21):**
```js
primary: {
  500: '#0ea5e9',  ← Main blue - change hex code
  600: '#0284c7',  ← Darker blue
}
```

**Hover colors (Line 23-27):**
```js
accent: {
  gold: '#FFD700',    ← Gold hover color
  yellow: '#FDB813',   ← Yellow hover color
}
```

**Color picker tool:** https://htmlcolorcodes.com/

---

## 📸 Adding Images

### Step 1: Prepare Images
- Save as JPG or PNG
- Optimize images (use https://tinypng.com/)
- Name clearly: `feeding-program.jpg`, `children-playing.jpg`

### Step 2: Upload Images

Create this folder structure:
```
public/
  images/
    mission.jpg
    vision.jpg
    hero-bg.jpg (optional)
    gallery/
      1.jpg
      2.jpg
      3.jpg
      ... (add more)
```

### Step 3: Update Code

**For About Section Images:**

In `components/About.tsx`, find the commented sections:

**Mission Image (Around Line 62):**
Uncomment this:
```tsx
<Image 
  src="/images/mission.jpg" 
  alt="Mission" 
  fill 
  className="object-cover"
/>
```

And delete this:
```tsx
<div className="w-full h-80 bg-gradient-to-br from-primary-200 to-primary-300">
  <FaHeart className="text-white text-6xl" />
</div>
```

Do the same for Vision image around Line 78.

**For Gallery Images:**

1. Add images to `public/images/gallery/` (name them 1.jpg, 2.jpg, etc.)
2. In `components/Gallery.tsx`, uncomment the Image component
3. Remove the placeholder div

---

## 🔧 Common Tasks

### Change Phone Number
**File:** `components/Contact.tsx`  
**Line:** 24-28
```tsx
{
  title: "Phone",
  value: "+254 721 826905",  ← Change here
  link: "tel:+254721826905",  ← And here (remove spaces)
}
```

### Change Email
**File:** `components/Contact.tsx`  
**Line:** 29-34
```tsx
{
  title: "Email",
  value: "rachelmacharia80@gmail.com",  ← Change here
  link: "mailto:rachelmacharia80@gmail.com",  ← And here
}
```

### Add Social Media Links
**File:** `components/Contact.tsx`  
**Line:** 116-120

Change `"#"` to your actual links:
```tsx
{ icon: FaFacebookF, link: "https://facebook.com/raymercy", label: "Facebook" },
```

---

## 💡 Tips

1. **Always save files** after editing
2. **Test changes** by running `npm run dev` 
3. **Make one change at a time** to catch errors easily
4. **Keep backups** of original files
5. **Ask for help** if you see error messages

---

## ⚠️ Things NOT to Change

- Don't modify file extensions (.tsx, .js, .css)
- Don't change `className=` values (these are styles)
- Don't remove quotation marks or semicolons
- Don't change import statements at top of files
- Don't modify folder structure

---

## 🆘 Need Help?

If you see errors after editing:
1. Undo your last change (Ctrl+Z)
2. Check you didn't accidentally delete quotation marks or brackets
3. Make sure you saved the file
4. Restart development server: Stop (Ctrl+C) then run `npm run dev` again

---

**Remember:** You can always restore from backup if something breaks!

✅ **You've got this! The website is designed to be easy to update.**

