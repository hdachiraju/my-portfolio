# GitHub Pages Deployment Guide

## 🎯 Your Portfolio Will Be Live At:
**URL**: https://hdachiraju.github.io/Portfolio/

---

## ✅ Configuration Complete!

I've already configured your portfolio for GitHub Pages deployment:

### Changes Made:
1. ✅ Added `homepage` field to package.json
2. ✅ Installed `gh-pages` package
3. ✅ Added deployment scripts (`predeploy` and `deploy`)
4. ✅ Updated React Router to use `basename` for subdirectory support

---

## 📦 Files to Push to GitHub

Make sure these updated files are pushed to your GitHub repository:

### Updated Files:
- `/app/frontend/package.json` - Added homepage and deploy scripts
- `/app/frontend/src/App.js` - Updated BrowserRouter with basename
- `/app/frontend/yarn.lock` - Updated with gh-pages dependency

---

## 🚀 Deployment Steps

### Step 1: Push Updated Code to GitHub

From your local machine (where you have the code):

```bash
# Navigate to your project directory
cd /path/to/your/portfolio

# Add all changes
git add .

# Commit the changes
git commit -m "Configure for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

**Note**: Replace `main` with `master` if that's your default branch name.

---

### Step 2: Deploy to GitHub Pages

From the frontend directory:

```bash
cd frontend

# Run the deployment command
npm run deploy
# or
yarn deploy
```

**What happens:**
1. The `predeploy` script builds your React app (`npm run build`)
2. The `deploy` script pushes the build folder to the `gh-pages` branch
3. GitHub Pages automatically serves from the `gh-pages` branch

---

### Step 3: Enable GitHub Pages (First Time Only)

1. Go to your repository: https://github.com/hdachiraju/Portfolio
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

---

## 📋 Complete Command Reference

### From Your Local Machine:

```bash
# 1. Copy the updated frontend folder from Emergent to your local project
# (You need to get the updated files with homepage and basename changes)

# 2. Navigate to your project's frontend directory
cd /path/to/Portfolio/frontend

# 3. Install dependencies (if not already installed)
yarn install

# 4. Build the project (test if it builds successfully)
yarn build

# 5. Deploy to GitHub Pages
yarn deploy

# 6. Push source code changes to GitHub
cd ..
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

---

## 🔄 How to Update Your Live Site

Whenever you make changes and want to update the live site:

```bash
# 1. Make your changes to the code

# 2. Test locally
cd frontend
yarn start

# 3. Deploy to GitHub Pages
yarn deploy

# 4. Push source code to GitHub
cd ..
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 📁 Project Structure for GitHub Pages

Your GitHub repository should have this structure:

```
Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json          # Contains homepage and deploy scripts
│   ├── .env
│   └── ...
├── backend/
│   └── ...
├── README.md
└── .gitignore
```

**Important**: 
- The `build/` folder is NOT pushed to the main branch
- The `gh-pages` branch is created automatically by the deploy script
- GitHub Pages serves directly from the `gh-pages` branch

---

## 🛠️ Troubleshooting

### Issue 1: "Failed to get remote.origin.url"
**Solution**: Make sure you're in a git repository and have set the remote origin:
```bash
git remote -v  # Check if origin is set
git remote add origin https://github.com/hdachiraju/Portfolio.git
```

### Issue 2: Blank page after deployment
**Solution**: 
- Check if the `homepage` field in package.json is correct
- Ensure it matches your repository name (case-sensitive): `Portfolio` not `portfolio`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue 3: 404 errors for CSS/JS files
**Solution**: 
- Verify `basename` is set in BrowserRouter
- Check that `PUBLIC_URL` environment variable is being used
- Rebuild and redeploy: `yarn deploy`

### Issue 4: Images not loading
**Solution**: Use relative paths or `process.env.PUBLIC_URL`:
```javascript
// Instead of: src="/images/photo.jpg"
// Use: src={`${process.env.PUBLIC_URL}/images/photo.jpg`}
```

### Issue 5: Deploy command not working
**Solution**:
```bash
# Make sure gh-pages is installed
yarn add -D gh-pages

# Try manual deployment
yarn build
npx gh-pages -d build
```

---

## 🔍 Verification Checklist

After deployment, verify:

- [ ] Site loads at https://hdachiraju.github.io/Portfolio/
- [ ] All sections are visible (Hero, About, Experience, Projects, etc.)
- [ ] Navigation links work correctly
- [ ] External links (GitHub, LinkedIn) open in new tabs
- [ ] Contact form email link works
- [ ] Responsive design works on mobile
- [ ] No console errors in browser DevTools
- [ ] All images and icons load properly

---

## 📊 GitHub Pages Settings

Your GitHub Pages configuration:

| Setting | Value |
|---------|-------|
| **Source Branch** | `gh-pages` |
| **Folder** | `/ (root)` |
| **Custom Domain** | (Optional) You can add later |
| **Enforce HTTPS** | ✅ Enabled (automatic) |
| **Build Status** | Check in repository Actions tab |

---

## 🎨 Custom Domain (Optional)

If you want to use a custom domain (e.g., `hemanthkumar.dev`):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file in `/frontend/public/` with your domain:
   ```
   hemanthkumar.dev
   ```
3. Configure DNS settings at your domain registrar:
   ```
   Type: CNAME
   Host: www (or @)
   Value: hdachiraju.github.io
   ```
4. In GitHub Settings → Pages, add your custom domain
5. Wait for DNS propagation (can take 24-48 hours)

---

## 📝 Important Notes

1. **Backend Not Included**: GitHub Pages only hosts static files (HTML, CSS, JS). Your FastAPI backend won't run on GitHub Pages. For full-stack deployment with backend, consider:
   - Vercel (frontend) + Railway/Render (backend)
   - Netlify (frontend) + Heroku (backend)
   - AWS/Azure/GCP (full stack)

2. **Environment Variables**: The `.env` file won't be read on GitHub Pages. Any environment variables needed at build time should be set during the build process.

3. **HTTPS**: GitHub Pages automatically serves your site over HTTPS.

4. **Build Time**: First deployment might take 1-2 minutes. Subsequent deployments are faster.

5. **Branch Management**: 
   - `main` branch: Your source code
   - `gh-pages` branch: Auto-generated build files (don't edit manually)

---

## 🎯 Quick Start Summary

**For the first deployment:**

```bash
# On your local machine in the project directory
cd frontend
yarn install
yarn deploy

# Then enable GitHub Pages in repository settings
# Source: gh-pages branch, folder: / (root)
```

**For future updates:**

```bash
cd frontend
yarn deploy
```

**Your site will be live at**: https://hdachiraju.github.io/Portfolio/

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the GitHub Actions tab in your repository for build errors
2. Review browser console for JavaScript errors (F12)
3. Verify all files are properly committed and pushed
4. Check that the `gh-pages` branch exists in your repository
5. Wait a few minutes after deployment for changes to appear

---

## 🎉 Success!

Once deployed, share your portfolio:
- Add the link to your resume
- Share on LinkedIn
- Add to your GitHub profile README
- Include in job applications

**Your Portfolio URL**: https://hdachiraju.github.io/Portfolio/

---

**Last Updated**: December 2024
**Configured for**: React 19 + GitHub Pages
