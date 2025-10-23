# 🚀 Deployment Guide for Vercel

This guide will help you deploy your Rgaon Apartment website to Vercel in minutes.

---

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ A GitHub account
- ✅ Your code pushed to a GitHub repository
- ✅ A Vercel account (sign up at [vercel.com](https://vercel.com))

---

## 🎯 Quick Deployment (Method 1: Vercel Dashboard)

### Step 1: Push to GitHub

```bash
# If you haven't already, initialize git and push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Step 3: Configure Environment Variables (Optional)

If you want working email forms, add these environment variables in Vercel:

1. Go to your project settings → "Environment Variables"
2. Add the following (sign up at [EmailJS](https://www.emailjs.com/) first):
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
   VITE_EMAILJS_TEMPLATE_ID_SCHEDULE=your_schedule_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Add your site details:
   ```
   VITE_SITE_URL=https://your-site.vercel.app
   VITE_CONTACT_EMAIL=your@email.com
   VITE_CONTACT_PHONE=(555) 123-4567
   VITE_CONTACT_ADDRESS=Your Address Here
   ```

### Step 4: Deploy!

Click "Deploy" and wait 1-2 minutes. Your site will be live! 🎉

---

## 🖥️ CLI Deployment (Method 2: Vercel CLI)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# Navigate to your project directory
cd apartment

# Deploy to production
vercel --prod
```

That's it! Follow the prompts and your site will be deployed.

---

## 📧 Setting Up EmailJS (For Working Forms)

Your contact and schedule forms need EmailJS to actually send emails:

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for a free account (300 emails/month)

### 2. Add Email Service
- Go to "Email Services" → "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the connection steps

### 3. Create Email Templates

**Contact Form Template:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

**Schedule Tour Template:**
```
New Tour Appointment

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Tour Details:
Date: {{tour_date}}
Time: {{tour_time}}
Unit Preference: {{unit_type}}
```

### 4. Get Your Credentials
- Service ID: Found in Email Services
- Template IDs: Found in Email Templates
- Public Key: Found in Account → API Keys

### 5. Add to Vercel
- Go to your Vercel project → Settings → Environment Variables
- Add all the credentials from step 4
- Redeploy your site

---

## 🎨 Custom Domain Setup

### Add Your Domain

1. Go to your Vercel project → "Settings" → "Domains"
2. Click "Add" and enter your domain name
3. Follow the DNS configuration instructions:
   - **For root domain (example.com):**
     - Add A record pointing to `76.76.19.19`
   - **For subdomain (www.example.com):**
     - Add CNAME record pointing to `cname.vercel-dns.com`

4. Wait for DNS propagation (usually 5-60 minutes)
5. Vercel will automatically provision SSL certificate

---

## 🔄 Automatic Deployments

Once connected to GitHub, every push to your main branch will:
- ✅ Automatically trigger a new deployment
- ✅ Run build checks
- ✅ Update your live site
- ✅ Create preview deployments for pull requests

---

## 📊 Analytics & Monitoring

### Enable Vercel Analytics (Free)

1. Go to your project dashboard
2. Click "Analytics" tab
3. Enable Vercel Analytics (free tier: 10k events/month)

This gives you:
- Page views
- Top pages
- Unique visitors
- Performance metrics

### Add Google Analytics (Optional)

1. Get your GA4 Measurement ID from Google Analytics
2. Add to Vercel environment variables:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Redeploy

---

## 🐛 Troubleshooting

### Quick Reference
📌 **See [QUICK_VERCEL_FIX.md](./QUICK_VERCEL_FIX.md)** for 1-minute fixes to common errors!

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json` (✅ Fixed: added missing deps)
- Test build locally: `npm run build`
- See detailed error codes in [VERCEL_ERRORS_GUIDE.md](./VERCEL_ERRORS_GUIDE.md)

### 404 Errors on Routes
- ✅ Already fixed in `vercel.json` with proper rewrites
- Make sure `vercel.json` is committed (it handles routing)
- Check that rewrites are configured correctly

### Environment Variables Not Working
- Prefix must be `VITE_` for Vite to expose them
- Redeploy after adding/changing variables
- Clear build cache if issues persist
- Use [ENV_TEMPLATE.txt](./ENV_TEMPLATE.txt) as reference

### Forms Not Sending Emails
- Check EmailJS credentials are correct
- Verify service is active in EmailJS dashboard
- Check browser console for errors
- Test with valid email addresses

### Recently Fixed Issues
✅ Missing `@emailjs/browser` dependency  
✅ Missing `react-helmet-async` dependency  
✅ Enhanced Vercel configuration  
📄 See [FIXES_APPLIED.md](./FIXES_APPLIED.md) for details

---

## 🎯 Performance Optimization

Your site is already optimized, but here are some tips:

1. **Images:** Already using WebP and lazy loading
2. **Code Splitting:** Configured by Vite automatically
3. **Caching:** Set up in `vercel.json`
4. **CDN:** Vercel's global CDN is automatic

### Check Performance
- Run Lighthouse in Chrome DevTools
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Target score: 90+ on all metrics

---

## 📱 Preview Deployments

Every pull request gets a unique preview URL:
- Test changes before merging
- Share with team/clients for feedback
- Automatic HTTPS and custom domain support

---

## 💰 Costs

**Vercel Free Tier Includes:**
- ✅ Unlimited personal projects
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Analytics (10k events)

This is perfect for personal projects and portfolios!

---

## 🎉 Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit (check console for EmailJS setup)
- [ ] Images display properly
- [ ] Mobile responsive
- [ ] Contact information is correct
- [ ] Custom domain works (if configured)
- [ ] SSL certificate is active (🔒 in browser)

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)

---

## 🆘 Need Help?

- Check Vercel's [community forum](https://github.com/vercel/vercel/discussions)
- EmailJS [support center](https://www.emailjs.com/docs/)
- Review project logs in Vercel dashboard

---

**Ready to deploy? Let's make it live! 🚀**

