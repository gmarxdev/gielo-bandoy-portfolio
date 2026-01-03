# Gielo Mar Bandoy - Portfolio Website

Professional portfolio website for Gielo Mar Bandoy, showcasing web development, mobile app development, and IoT integration projects.

## Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite 5.4** - Lightning-fast build tool
- **TailwindCSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icon library

## Features

- Modern, responsive design
- Smooth animations and transitions
- Interactive UI components
- Scroll-triggered animations
- Mobile-friendly navigation
- Contact form
- Project showcase
- Skills and services sections
- SEO optimized

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gielo-portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Vite and deploy automatically

### Custom Domain

To set up a custom domain, configure it in your hosting provider's settings.

## Project Structure

```
gielo-portfolio-main/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Navigation.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── index.css        # Global styles and animations
│   └── main.tsx         # Application entry point
├── public/              # Public assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies and scripts
```

## Customization

### Updating Content

Edit the respective component files in `src/components/` to update:
- Hero section content
- About section information
- Portfolio projects
- Services offered
- Contact information

### Styling

The project uses TailwindCSS. Modify:
- `tailwind.config.ts` - Theme configuration
- `src/index.css` - Global styles and custom animations

### Images

Place your images in:
- `src/assets/` - For imported images (recommended)
- `public/` - For static assets accessed via URL

## License

All rights reserved - Gielo Mar Bandoy

## Contact

- Email: [Contact via website form]
- GitHub: [@gmarxdev](https://github.com/gmarxdev)
- LinkedIn: [Gielo Mar Bandoy](https://www.linkedin.com/in/gielo-mar-bandoy-b19460339)
