# Ahammed Moin Nawaz - Data Analyst Portfolio

A modern, responsive portfolio website showcasing data analytics skills, projects, and professional experience.

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL]

## 📋 Features

- **Responsive Design**: Optimized for all devices
- **Interactive Navigation**: Smooth scrolling and functional buttons
- **Project Showcase**: Live demos and detailed project descriptions  
- **Skills Display**: Progress bars and technical proficiencies
- **Blog Section**: Data analytics insights and tutorials
- **Contact Integration**: Direct email and LinkedIn connections
- **Download CV**: Resume download functionality
- **Certificates**: Viewable certifications and recommendations

## Project info

**Lovable URL**: https://lovable.dev/projects/cccb32ef-4635-446a-a78c-817c109b6cfe

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cccb32ef-4635-446a-a78c-817c109b6cfe) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Lovable Hosting (Easiest)
Simply open [Lovable](https://lovable.dev/projects/cccb32ef-4635-446a-a78c-817c109b6cfe) and click on Share -> Publish.

### Option 2: GitHub Pages (Free)

**Step-by-Step GitHub Hosting Guide:**

1. **Connect to GitHub** (if not already done):
   - Click the green "GitHub" button in the top-right of your Lovable project
   - Follow the prompts to connect your GitHub account
   - Create a new repository for your portfolio

2. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Add Deployment Workflow** (for automatic builds):
   - Create `.github/workflows/deploy.yml` in your repository:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Your site will be available at**: `https://[your-username].github.io/[repository-name]`

### Option 3: Other Platforms
- **Netlify**: Connect GitHub repo, set build command to `npm run build`, publish directory to `dist`
- **Vercel**: Connect GitHub repo, Vercel auto-detects Vite configuration

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
