# Vercel Deployment Guide

Your portfolio is now ready to deploy to Vercel! Here are two methods:

## Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**:
   ```bash
   cd /home/sana/portfolio
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm project settings
   - Deploy!

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

## Method 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Fix build errors and prepare for deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit [https://vercel.com](https://vercel.com)
   - Sign up or log in with GitHub

3. **Import your project**:
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure Environment Variables** (Optional):
   If you want to use Google Tag Manager, Telegram, or Email features:
   - Go to Project Settings → Environment Variables
   - Add these variables:
     - `NEXT_PUBLIC_GTM` (your Google Tag Manager ID)
     - `TELEGRAM_BOT_TOKEN` (if using Telegram notifications)
     - `TELEGRAM_CHAT_ID` (if using Telegram notifications)
     - `GMAIL_PASSKEY` (if using Gmail)
     - `EMAIL_ADDRESS` (if using email)

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

## Build Status

✅ **Build is working!** The project builds successfully with:
- Fixed SSR issues
- Dynamic page rendering
- Error handling for blog fetching

## Notes

- The portfolio will work without environment variables
- GTM (Google Tag Manager) is optional and will only load if `NEXT_PUBLIC_GTM` is set
- Your site will be available at `https://your-project-name.vercel.app`

## After Deployment

1. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain

2. **Automatic Deployments**:
   - Every push to `main` branch will trigger a new deployment
   - Preview deployments are created for pull requests



