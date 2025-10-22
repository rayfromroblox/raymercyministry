# Image Optimization Guide

## 🚀 Performance Optimization for Ray Mercy Ministry

Based on your performance audit, here's how to optimize your images for maximum performance:

## 📸 **Logo Optimization Required**

Your current logo is **593KB** and needs to be optimized to **~10KB** for better performance.

### **Required Image Sizes:**

1. **Hero Section (Large):**
   - `logo-256.png` - 256x256px (for mobile)
   - `logo-320.png` - 320x320px (for tablet)
   - `logo-384.png` - 384x384px (for desktop)
   - `logo-256.webp` - WebP version
   - `logo-320.webp` - WebP version
   - `logo-384.webp` - WebP version

2. **Navbar (Small):**
   - `logo-48.png` - 48x48px
   - `logo-64.png` - 64x64px
   - `logo-48.webp` - WebP version
   - `logo-64.webp` - WebP version

3. **Footer (Medium):**
   - `logo-96.png` - 96x96px
   - `logo-96.webp` - WebP version

## 🛠️ **How to Optimize:**

### **Option 1: Online Tools (Recommended)**
1. Go to [Squoosh.app](https://squoosh.app)
2. Upload your current `logo.png`
3. Resize to each required size
4. Export as both PNG and WebP
5. Save with the naming convention above

### **Option 2: Command Line (Advanced)**
```bash
# Install ImageMagick
# Then run these commands:

# Resize and optimize PNG versions
magick logo.png -resize 48x48 -quality 85 logo-48.png
magick logo.png -resize 64x64 -quality 85 logo-64.png
magick logo.png -resize 96x96 -quality 85 logo-96.png
magick logo.png -resize 256x256 -quality 85 logo-256.png
magick logo.png -resize 320x320 -quality 85 logo-320.png
magick logo.png -resize 384x384 -quality 85 logo-384.png

# Convert to WebP
magick logo-48.png -quality 80 logo-48.webp
magick logo-64.png -quality 80 logo-64.webp
magick logo-96.png -quality 80 logo-96.webp
magick logo-256.png -quality 80 logo-256.webp
magick logo-320.png -quality 80 logo-320.webp
magick logo-384.png -quality 80 logo-384.webp
```

## 📁 **File Structure After Optimization:**
```
public/images/
├── logo.png (original - can be removed after optimization)
├── logo-48.png
├── logo-48.webp
├── logo-64.png
├── logo-64.webp
├── logo-96.png
├── logo-96.webp
├── logo-256.png
├── logo-256.webp
├── logo-320.png
├── logo-320.webp
├── logo-384.png
└── logo-384.webp
```

## 🎯 **Expected Performance Improvements:**

- **Image size reduction:** 593KB → ~60KB total (90% reduction)
- **Faster LCP:** Reduced from 5.1s to ~2.5s
- **Better mobile score:** 75 → 85+
- **Improved Core Web Vitals**

## ✅ **After Optimization:**

1. Replace the images in your `public/images/` folder
2. Test the site to ensure all logos display correctly
3. Run another performance audit to verify improvements

The code has already been updated to use these optimized images with responsive loading!
