# Rgaon Apartment - Modern Apartment Rental Website

Welcome to the Rgaon Apartment website! This is a sleek, modern web application designed to showcase our luxury apartment complex and help potential tenants find their perfect home.

## What is this project?

This is a **Customer Relationship Management (CRM) system** for apartment leasing that includes:
- Beautiful property showcase with floor plans
- Interactive tour scheduling system
- Contact forms for lead generation
- Modern, responsive design that works on all devices

Perfect for property management companies looking to attract and convert potential tenants!

## Getting Started

Ready to dive in? Here's how to get this project running on your machine:

### Prerequisites
You'll need Node.js installed on your system. If you don't have it, grab it from [nodejs.org](https://nodejs.org/) or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for easier version management.

### Installation & Setup

```sh
# Step 1: Clone this repository to your local machine
git clone <YOUR_GIT_URL>

# Step 2: Navigate into the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install all the necessary dependencies
npm i

# Step 4: Fire up the development server with hot reloading
npm run dev
```

That's it! The app should now be running at `http://localhost:5173` (or whatever port Vite assigns). You'll see live updates as you make changes to the code.

### Alternative Development Methods

**GitHub Web Editor**
- Just click the "Edit" button (pencil icon) on any file in GitHub
- Make your changes and commit directly from the browser
- Super convenient for quick fixes!

**GitHub Codespaces**
- Click the green "Code" button on the main repo page
- Select "Codespaces" tab
- Launch a new codespace for a full VS Code experience in your browser
- No local setup required!

## Tech Stack

This project is built with some fantastic modern technologies:

- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type safety and better developer experience
- **React 18** - The latest React with all the new features
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for smooth navigation
- **React Hook Form** - Performant forms with great UX
- **Zod** - TypeScript-first schema validation

## Deployment

Ready to go live? You have several options:

**Static Hosting (Recommended)**
- Build the project: `npm run build`
- Deploy the `dist` folder to any static hosting service like:
  - Vercel
  - Netlify
  - GitHub Pages
  - AWS S3 + CloudFront

**Traditional Hosting**
- Upload the built files to your web server
- Configure your server to serve the `index.html` for all routes (SPA routing)

## Custom Domain

Want to use your own domain? Most hosting providers make this super easy:
- Point your domain's DNS to your hosting provider
- Configure SSL certificates (usually automatic)
- Update any CORS settings if needed

## Contributing

Found a bug or want to add a feature? Awesome! Here's how:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## Need Help?

Stuck on something? Don't worry, it happens to the best of us! Here are some resources:
- Check the [React documentation](https://react.dev/)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
- [shadcn/ui documentation](https://ui.shadcn.com/)
- Open an issue in this repository

Happy coding! 🚀
