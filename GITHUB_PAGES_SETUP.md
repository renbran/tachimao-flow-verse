# GitHub Pages Deployment Instructions

Your onboarding flowchart webapp is ready to deploy! Follow these simple steps to get it live on GitHub Pages.

## Quick Setup (5 minutes)

### Step 1: Merge the Feature Branch

1. Go to your repository on GitHub: `https://github.com/renbran/tachimao-flow-verse`

2. You should see a banner suggesting to create a pull request for branch `claude/onboarding-flowchart-webapp-01Mrk6bRL7GznQwD4fn1aya4`

   **OR** click this link:
   ```
   https://github.com/renbran/tachimao-flow-verse/pull/new/claude/onboarding-flowchart-webapp-01Mrk6bRL7GznQwD4fn1aya4
   ```

3. Click "Create Pull Request"

4. Review the changes and click "Merge Pull Request"

5. Click "Confirm Merge"

### Step 2: Enable GitHub Pages

1. Go to your repository **Settings** (tab at the top)

2. Scroll down and click **Pages** in the left sidebar (under "Code and automation")

3. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** from the dropdown

4. Click **Save** (if a save button appears)

That's it! The deployment will start automatically.

### Step 3: Wait for Deployment (2-3 minutes)

1. Go to the **Actions** tab in your repository

2. You should see a workflow called "Deploy to GitHub Pages" running

3. Wait for it to complete (green checkmark)

### Step 4: Access Your Site

Once the workflow completes, your site will be available at:

```
https://renbran.github.io/tachimao-flow-verse/
```

You can also find the exact URL in:
- Repository Settings → Pages → Your site URL will be shown at the top
- Or in the Actions workflow logs

## Alternative: Manual Build and Deploy

If you prefer to build and deploy manually:

```bash
# Build the project
npm run build

# The build output is in the 'dist' folder
# You can deploy this folder to any static hosting service
```

Then use GitHub Pages manual deployment or any other static hosting service like:
- Cloudflare Pages
- Netlify
- Vercel

## Troubleshooting

### Workflow not appearing?
- Make sure you've merged the pull request to main
- Check the Actions tab for any errors
- Ensure GitHub Actions are enabled in Settings → Actions

### 404 errors on page refresh?
- This is normal with GitHub Pages and client-side routing
- The GitHub Actions workflow includes a 404.html redirect that handles this

### Site not updating?
- Clear your browser cache
- Wait a few minutes for GitHub's CDN to update
- Check the Actions tab to ensure the latest workflow succeeded

## What's Deployed?

Your webapp includes:
- ✅ Interactive onboarding flowchart with 8 stages
- ✅ 24 detailed requirements with checklists
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Summary statistics dashboard
- ✅ Professional UI with color-coded categories

## Next Steps

After deployment, you can:
1. Share the URL with your team
2. Customize the content in `src/types/onboarding.ts`
3. Modify colors and styling to match your brand
4. Add more stages or requirements as needed

Every time you push to main branch, GitHub Actions will automatically rebuild and redeploy your site!

---

Need help? Check the full deployment guide in `DEPLOYMENT.md`
