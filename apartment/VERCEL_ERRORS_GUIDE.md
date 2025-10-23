# 🚨 Vercel Error Troubleshooting Guide

This guide helps you identify, understand, and fix common Vercel deployment errors for your apartment CRM application.

---

## 🔍 Quick Error Diagnosis

### Step 1: Check Deployment Logs
1. Go to your Vercel dashboard
2. Click on your project
3. Click on the failing deployment
4. Review the build logs and runtime logs

### Step 2: Identify Error Category
- **Build Errors**: Happen during `npm install` or `npm run build`
- **Runtime Errors**: Happen after deployment when users access the site
- **Configuration Errors**: Related to Vercel settings

---

## 🛠️ Common Build Errors & Fixes

### ❌ `FUNCTION_INVOCATION_FAILED` (500)
**Cause**: Missing dependencies or build failures

**Fix**:
```bash
# Test build locally first
cd apartment
npm install
npm run build

# If successful, commit and push
git add .
git commit -m "Fix build configuration"
git push
```

**Check**: Ensure all imported packages are in `package.json`

---

### ❌ `MODULE_NOT_FOUND` Error
**Cause**: Missing npm packages

**Fix**: Add missing packages to `package.json`
```bash
npm install @emailjs/browser --save
npm install <missing-package> --save
git add package.json package-lock.json
git commit -m "Add missing dependencies"
git push
```

**Prevention**: Always use `npm install --save` when adding packages

---

### ❌ TypeScript Compilation Errors
**Cause**: Type errors in your code

**Fix**:
```bash
# Check TypeScript errors locally
npx tsc --noEmit

# Fix the errors shown, then:
git add .
git commit -m "Fix TypeScript errors"
git push
```

---

### ❌ `DEPLOYMENT_NOT_READY_REDIRECTING` (303)
**Cause**: Deployment is still building

**Fix**: Wait for the build to complete (usually 1-3 minutes)

---

## 🌐 Runtime Errors & Fixes

### ❌ `NOT_FOUND` (404)
**Cause**: Route not found or SPA routing not configured

**Fix**: Ensure `vercel.json` has proper rewrites:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### ❌ `RESOURCE_NOT_FOUND` (404)
**Cause**: Static files not found (images, fonts, etc.)

**Fix**:
1. Check file paths in your code
2. Ensure files are in the `public` folder or `src/assets`
3. Verify file names match exactly (case-sensitive)
4. Check build output: `ls dist/` after `npm run build`

---

### ❌ Forms Not Working / EmailJS Errors
**Cause**: Missing environment variables

**Fix**:
1. Go to Vercel Project Settings → Environment Variables
2. Add required variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template
   VITE_EMAILJS_TEMPLATE_ID_SCHEDULE=your_schedule_template
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Redeploy (Environment changes require redeployment)

---

### ❌ `EDGE_FUNCTION_INVOCATION_TIMEOUT` (504)
**Cause**: Function takes too long to respond

**Fix**: Not applicable to static sites (this is a serverless function error)

---

## 🔐 Configuration Errors & Fixes

### ❌ `DEPLOYMENT_BLOCKED` (403)
**Cause**: Domain configuration or billing issues

**Fix**:
1. Check your Vercel account status
2. Verify domain ownership
3. Check payment method if on paid plan

---

### ❌ `INVALID_REQUEST_METHOD` (405)
**Cause**: Vercel configuration restricting HTTP methods

**Fix**: Check your `vercel.json` - don't restrict methods unless needed

---

### ❌ Environment Variables Not Loading
**Cause**: Variables not prefixed with `VITE_` or not deployed

**Fix**:
1. All frontend variables MUST start with `VITE_`
   - ✅ `VITE_EMAILJS_SERVICE_ID`
   - ❌ `EMAILJS_SERVICE_ID`
2. Redeploy after adding variables
3. Clear cache: Vercel Dashboard → Deployments → Redeploy

---

## 🖼️ Image & Asset Errors

### ❌ `OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED` (502)
**Cause**: External image URL is broken or blocked

**Fix**:
1. Use local images in `public/` or `src/assets/`
2. If using external images, verify URLs are accessible
3. Add image domains to Vercel config if using Next.js Image Optimization

---

### ❌ Images Not Loading (404)
**Cause**: Incorrect paths after build

**Fix**:
```typescript
// ❌ Wrong
import image from '../images/photo.jpg'

// ✅ Correct
import image from '@/assets/photo.jpg'

// For public folder assets
<img src="/placeholder.svg" alt="..." />
```

---

## 🚀 Performance & Throttling Errors

### ❌ `FUNCTION_THROTTLED` (503)
**Cause**: Too many requests in short time (rate limiting)

**Fix**:
- This is a Vercel platform protection
- Wait a few minutes and try again
- If persistent, contact Vercel support

---

### ❌ `URL_TOO_LONG` (414)
**Cause**: URL exceeds maximum length

**Fix**: Use POST requests instead of GET with long query strings

---

## 📝 Deployment Best Practices

### Pre-Deployment Checklist
```bash
# 1. Test build locally
npm run build

# 2. Test production build locally
npm run preview

# 3. Check for TypeScript errors
npx tsc --noEmit

# 4. Run linter
npm run lint

# 5. Check all routes work
# Visit: /, /floor-plans, /contact, /schedule

# 6. Test forms (with console open to see errors)

# 7. If all good, deploy
git add .
git commit -m "Ready for deployment"
git push
```

---

## 🔧 Emergency Fixes

### Quick Rollback
If your deployment is broken:
1. Go to Vercel Dashboard → Deployments
2. Find the last working deployment
3. Click "..." → "Promote to Production"

### Force Fresh Build
```bash
# In Vercel Dashboard:
# Settings → Builds → Clear Cache → Redeploy
```

---

## 🐛 Debugging Tools

### 1. Local Development
```bash
cd apartment
npm run dev
# Check browser console for errors
```

### 2. Production Build Test
```bash
npm run build
npm run preview
# Test at http://localhost:4173
```

### 3. Network Tab
- Open Chrome DevTools → Network
- Look for failed requests (red)
- Check response codes

### 4. Console Errors
- Open Chrome DevTools → Console
- Look for error messages
- Check for missing files or 404s

---

## 📊 Vercel Dashboard Insights

### Build Logs
- Shows npm install output
- Shows build command output
- Shows any compilation errors

### Runtime Logs
- Shows errors from user visits
- Real-time monitoring
- Available for last 7 days (free tier)

### Analytics
- Track error rates
- Monitor performance
- Identify problematic pages

---

## 🆘 Getting Help

### Before Asking for Help
1. ✅ Check build logs in Vercel
2. ✅ Test build locally: `npm run build`
3. ✅ Check browser console for errors
4. ✅ Verify environment variables are set
5. ✅ Try clearing Vercel build cache

### Where to Get Help
- **Vercel Support**: https://vercel.com/support
- **Vercel Community**: https://github.com/vercel/vercel/discussions
- **Stack Overflow**: Tag with `vercel` and `vite`

### Information to Provide
```
1. Error message or code (e.g., DEPLOYMENT_NOT_FOUND)
2. Full build logs from Vercel
3. Your vercel.json configuration
4. Steps to reproduce
5. What you've already tried
```

---

## 🎯 Specific Error Quick Links

### Most Common for This Project

1. **Missing @emailjs/browser**
   - Fixed by adding to package.json
   - Run: `npm install @emailjs/browser`

2. **404 on Routes**
   - Fixed by vercel.json rewrites (already configured)

3. **Environment Variables**
   - Must use `VITE_` prefix
   - Must redeploy after changes

4. **Build Failures**
   - Test locally first: `npm run build`
   - Check TypeScript errors: `npx tsc --noEmit`

---

## 📈 Monitoring & Prevention

### Set Up Monitoring
1. Enable Vercel Analytics (free)
2. Set up error tracking (optional: Sentry)
3. Monitor build times and success rates

### Prevent Future Errors
1. Always test builds locally before pushing
2. Use TypeScript to catch errors early
3. Keep dependencies updated (but test first)
4. Document environment variables needed
5. Use staging deployments for testing

---

## 🔄 Continuous Deployment Tips

### Branch Protection
- Use preview deployments for testing
- Only deploy to production from `main` branch
- Review preview URLs before merging PRs

### Automation
```yaml
# GitHub Actions example (optional)
# .github/workflows/test.yml
name: Test Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
```

---

## ✅ Deployment Success Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Floor plans page displays
- [ ] Contact form renders
- [ ] Schedule form renders
- [ ] All images load
- [ ] Mobile view works
- [ ] No console errors
- [ ] Routes work (try /floor-plans directly)
- [ ] 404 page shows for invalid routes

---

**Remember**: Most errors are preventable by testing locally first! 🎯

```bash
# Golden Rule: If it works locally, it works on Vercel
npm install
npm run build
npm run preview
```

