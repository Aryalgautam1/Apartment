# ⚡ Quick Vercel Error Fixes

**1-Minute Reference Guide for Common Errors**

---

## 🚨 Build Failing?

```bash
# Test locally first
cd apartment
npm install
npm run build

# If successful locally → commit & push
git add .
git commit -m "Fix build"
git push
```

---

## ❌ Common Error: MODULE_NOT_FOUND

**Quick Fix**:
```bash
# Install missing package
npm install missing-package-name --save

# Commit and push
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

---

## ❌ Error: Routes Not Working (404)

**Cause**: SPA routing not configured  
**Fix**: Already fixed in `vercel.json` ✅

If still broken:
```json
// Ensure vercel.json has:
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## ❌ Error: Forms Not Working

**Cause**: Missing environment variables  
**Fix**:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add all `VITE_*` variables from `ENV_TEMPLATE.txt`
3. Click "Redeploy"

---

## ❌ Error: Images Not Loading

**Check**:
- Files in `public/` or `src/assets/`?
- Correct import path?
- Case-sensitive filenames?

```typescript
// ✅ Correct
import img from '@/assets/image.jpg'
// or
<img src="/public-file.jpg" />
```

---

## ❌ Error: TypeScript Compilation Failed

```bash
# Find errors
npx tsc --noEmit

# Fix the errors shown, then:
git add .
git commit -m "Fix TypeScript errors"
git push
```

---

## 🔧 Emergency: Rollback Deployment

1. Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"

---

## 🔄 Force Fresh Build

1. Vercel Dashboard → Settings → Builds
2. "Clear Build Cache"
3. Deployments → Latest → "Redeploy"

---

## ✅ Pre-Deploy Checklist

```bash
# Run these 3 commands before pushing:
npm install      # Install deps
npm run build    # Test build
npm run preview  # Test locally
```

If all 3 succeed → Safe to deploy!

---

## 📊 Environment Variables Required

```env
# Forms (EmailJS)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID_CONTACT=
VITE_EMAILJS_TEMPLATE_ID_SCHEDULE=
VITE_EMAILJS_PUBLIC_KEY=

# Site Info
VITE_SITE_URL=
VITE_CONTACT_EMAIL=
VITE_CONTACT_PHONE=
VITE_CONTACT_ADDRESS=
```

**Note**: Must start with `VITE_` prefix!

---

## 🎯 What Was Fixed

✅ Added `@emailjs/browser` dependency  
✅ Added `react-helmet-async` dependency  
✅ Enhanced `vercel.json` configuration  
✅ Added comprehensive error guides

---

## 📚 Full Documentation

- **FIXES_APPLIED.md** - Detailed fix summary
- **VERCEL_ERRORS_GUIDE.md** - Complete error reference
- **DEPLOYMENT.md** - Full deployment guide
- **ENV_TEMPLATE.txt** - Environment variables

---

## 🆘 Still Stuck?

1. Check **build logs** in Vercel Dashboard
2. Search error code in **VERCEL_ERRORS_GUIDE.md**
3. Test build locally: `npm run build`
4. Check browser console for errors
5. Contact Vercel Support

---

**Golden Rule**: If it builds locally, it builds on Vercel! ✨

