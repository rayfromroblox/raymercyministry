# Deployment Guide

Complete guide for deploying Ray Mercy Ministry website to various hosting platforms.

## 📦 Build the Static Site

First, create the production build:

```bash
npm run build
```

This generates the `out` folder containing all static files.

## 🌐 Deployment Options

### 1. Netlify (Easiest - Recommended)

**Method A: Drag & Drop**
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the `out` folder onto the page
3. Your site is live! You'll get a URL like `https://random-name-12345.netlify.app`
4. Optional: Change site name in Site Settings

**Method B: Git Integration**
1. Push your code to GitHub
2. Sign in to [Netlify](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy"

**Custom Domain on Netlify:**
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

### 2. Vercel

**Method A: CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts and your site will be deployed!

**Method B: Git Integration**
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

**Custom Domain on Vercel:**
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records as instructed

---

### 3. GitHub Pages

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Create a new repository on GitHub** (e.g., `ray-mercy-ministry`)

3. **Initialize git in the `out` folder:**
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ray-mercy-ministry.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from branch `main` / root
   - Save

5. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/ray-mercy-ministry/`

**Custom Domain on GitHub Pages:**
1. Add a `CNAME` file in `out` folder with your domain
2. Configure DNS:
   - Add A records pointing to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or CNAME record: `YOUR_USERNAME.github.io`

---

### 4. Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `out`
   - Configure as single-page app: No
   - Set up automatic builds: No

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

Your site is live at: `https://YOUR_PROJECT.web.app`

---

### 5. Traditional Web Hosting (cPanel, etc.)

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Upload the `out` folder contents:**
   - Via FTP/SFTP (FileZilla, etc.)
   - Or through cPanel File Manager
   - Upload to `public_html` or `www` directory

3. **Ensure proper permissions:**
   - Files: 644
   - Folders: 755

4. **Configure domain:**
   - Point your domain to the hosting
   - Update DNS A record to server IP
   - Wait for DNS propagation (up to 48 hours)

---

### 6. AWS S3 + CloudFront (Advanced)

**S3 Setup:**
```bash
# Install AWS CLI
aws configure

# Create S3 bucket
aws s3 mb s3://raymercy-ministry

# Upload files
npm run build
aws s3 sync out/ s3://raymercy-ministry

# Enable static website hosting
aws s3 website s3://raymercy-ministry --index-document index.html
```

**CloudFront Setup:**
1. Create CloudFront distribution
2. Origin: Your S3 bucket
3. Enable HTTPS
4. Configure custom domain

---

## 🔒 HTTPS & Custom Domain

### SSL Certificate (Free)
Most hosting platforms (Netlify, Vercel, Firebase) provide free SSL automatically.

For traditional hosting:
- Use Let's Encrypt (free)
- cPanel has AutoSSL
- Or use Cloudflare (free SSL + CDN)

### Custom Domain Configuration

**DNS Records:**

For Netlify/Vercel:
```
Type: A
Name: @
Value: [Provided by host]

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

For GitHub Pages:
```
Type: A
Name: @
Values: 
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

---

## 🚀 Continuous Deployment

### Automated Deployments (Git Push)

**Netlify/Vercel:**
- Any push to `main` branch auto-deploys
- Preview deployments for pull requests
- Rollback to previous versions easily

**GitHub Actions (for GitHub Pages):**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## 📊 Post-Deployment

### Analytics (Optional)

**Google Analytics:**
Add to `app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Performance Testing
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### SEO
- Submit sitemap to Google Search Console
- Add `robots.txt` if needed
- Verify structured data

---

## 🔄 Updates & Maintenance

To update the website:

1. Make changes to code
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy using your chosen method

**For Git-based deployments:**
```bash
git add .
git commit -m "Update content"
git push
```
Site auto-deploys!

---

## ✅ Deployment Checklist

- [ ] Build completes without errors
- [ ] All images load correctly
- [ ] All links work (internal and external)
- [ ] Mobile responsive on real devices
- [ ] Contact info is correct
- [ ] Social media links work
- [ ] Site loads fast (< 3 seconds)
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Google Analytics added (optional)
- [ ] Tested in multiple browsers
- [ ] SEO tags in place

---

**Need help? Contact your web developer or refer to hosting platform documentation.**

🙏 **May this website help spread God's love through Ray Mercy Ministry!**

