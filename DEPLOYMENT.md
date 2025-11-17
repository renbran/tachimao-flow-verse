# Deployment Guide

This webapp is configured for easy deployment to both **GitHub Pages** and **Cloudflare Pages**.

## GitHub Pages Deployment

### Automated Deployment (Recommended)

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" under "Code and automation"
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to Main Branch**:
   ```bash
   git push origin main
   ```

   The GitHub Action workflow will automatically build and deploy your app.

3. **Access Your Site**:
   - Your site will be available at: `https://<username>.github.io/<repository-name>/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages using your preferred method.

## Cloudflare Pages Deployment

### Option 1: Connect Repository (Recommended)

1. **Log in to Cloudflare Dashboard**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Workers & Pages"

2. **Create New Application**:
   - Click "Create application" → "Pages" → "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Node version**: `20`

3. **Deploy**:
   - Click "Save and Deploy"
   - Cloudflare will build and deploy your app
   - Your site will be available at: `https://<project-name>.pages.dev`

### Option 2: Direct Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. **Upload via Cloudflare Dashboard**:
   - Go to "Workers & Pages" → "Create application" → "Pages"
   - Select "Direct upload"
   - Upload the `dist` folder
   - Click "Deploy site"

## Build Configuration

The app is configured with:
- **Base path**: `./` (relative paths for compatibility)
- **SPA routing**: Handled via `_redirects` file for Cloudflare Pages
- **Build command**: `npm run build`
- **Output directory**: `dist`

## Environment Variables

No environment variables are required for basic deployment.

## Custom Domain

### GitHub Pages
1. Go to repository settings → Pages
2. Add your custom domain under "Custom domain"
3. Configure DNS records as per GitHub's instructions

### Cloudflare Pages
1. Go to your Pages project → Custom domains
2. Click "Set up a custom domain"
3. Follow the setup wizard

## Troubleshooting

### GitHub Pages 404 on Routes
- Ensure GitHub Actions workflow completed successfully
- Check that GitHub Pages is enabled in repository settings

### Cloudflare Pages Routing Issues
- Verify the `_redirects` file is in the `public` folder
- Check build logs for any errors

### Build Failures
- Ensure all dependencies are installed: `npm install`
- Check Node version compatibility (use Node 18+)
- Review build logs for specific errors

## Development

To run locally:
```bash
npm install
npm run dev
```

To preview production build:
```bash
npm run build
npm run preview
```

## Support

For issues specific to:
- **GitHub Pages**: Check [GitHub Pages docs](https://docs.github.com/pages)
- **Cloudflare Pages**: Check [Cloudflare Pages docs](https://developers.cloudflare.com/pages)
