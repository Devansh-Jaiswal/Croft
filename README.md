# CROFT - Web Development & Social Media Marketing Studio

A modern, production-ready website for CROFT, a digital marketing and web development studio. Built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

### Core Pages
- **Home** - Compelling hero section, services overview, portfolio showcase, and client testimonials
- **About** - Company story, mission statement, core values, and team information
- **Portfolio** - Filterable project gallery with detailed project modals and case studies
- **Blog** - Full-featured blog system with categorized articles and individual post pages
- **Contact** - Comprehensive contact form with Supabase integration and validation
- **404** - Friendly error page for missing routes

### Key Components
- **Responsive Header** - Sticky navigation with mobile menu support
- **Hero Section** - Eye-catching hero with CTA buttons and statistics
- **Service Cards** - Showcase your services with icons and feature lists
- **Portfolio Grid** - Filter projects by category with modal details
- **Testimonials** - Client reviews with ratings and photos
- **Contact Form** - Form validation, Supabase submission, and success feedback
- **Footer** - Comprehensive footer with links and social media

### Technical Features
- **Fully Responsive** - Mobile-first design, optimized for all devices
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Accessible** - ARIA labels, semantic HTML, keyboard navigation, focus management
- **Performance** - Lazy-loaded images, optimized assets, minimal bundle size
- **Form Validation** - Client-side validation with comprehensive error handling
- **Database Integration** - Supabase for contact form submissions and data persistence
- **Type Safe** - Full TypeScript support for better development experience
- **Modern Design** - Clean, professional aesthetic with smooth animations

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3
- **Routing**: React Router v6
- **Database**: Supabase PostgreSQL
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Modal.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── NotFound.tsx
├── data/
│   ├── services.ts
│   ├── portfolio.ts
│   ├── testimonials.ts
│   └── blog.ts
├── types/
│   └── index.ts
├── utils/
│   ├── validation.ts
│   ├── animations.ts
│   └── supabase.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Supabase account (free tier available)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd croft-studio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the project root:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project:
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings > API
4. Copy the Project URL and Anon Key

4. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Build Locally
```bash
npm run preview
```

## Customization

### Update Company Information

**Header/Footer Logo and Links** - Edit `src/components/layout/Header.tsx` and `Footer.tsx`

**Hero Section** - Customize content in `src/components/sections/Hero.tsx`

**Contact Information** - Update email and phone in:
- `src/components/layout/Footer.tsx`
- `src/pages/Contact.tsx`

### Add Your Content

**Services** - Edit `src/data/services.ts`
- Add/remove service objects
- Icons use Lucide React (see available icons at lucide.dev)

**Portfolio** - Edit `src/data/portfolio.ts`
- Add project objects with images and details
- Update categories as needed

**Testimonials** - Edit `src/data/testimonials.ts`
- Add client testimonial objects
- Include client photos and ratings

**Blog Posts** - Edit `src/data/blog.ts`
- Add blog post objects with full content
- Organize by category

### Customize Colors

Edit `tailwind.config.js` to change the color scheme. Current colors use blue (`#2563eb`). To change:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

Then replace `bg-blue-600`, `text-blue-600`, etc. with your color throughout the codebase.

### Update Brand Assets

- **Favicon** - Update the SVG in `index.html`
- **OG Image** - Replace image URLs in meta tags in `index.html`
- **Logo** - Edit the Zap icon in `Header.tsx` to your logo

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
5. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to https://app.netlify.com/new
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Add environment variables in Build & Deploy settings
7. Deploy

### Deploy to Other Platforms

The site can be deployed to any static hosting service (AWS Amplify, GitHub Pages, etc.) since it's a pre-built static site.

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Contact Form Integration

The contact form submits to Supabase automatically. To receive notifications:

1. Set up email notifications in Supabase
2. Or create an edge function to send emails via a service like SendGrid
3. View submissions in the Supabase dashboard under `contact_submissions` table

## Performance Optimization

- Images use lazy loading with native `loading="lazy"` attribute
- Tailwind CSS is purged of unused styles in production
- Code splitting happens automatically with React Router
- Supabase reduces database query overhead

## SEO Best Practices

The site includes:
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD schema for rich snippets
- Semantic HTML structure
- Fast performance (Core Web Vitals)
- Mobile responsiveness

To further improve SEO:
1. Add XML sitemap
2. Set up Google Search Console
3. Submit to Google Analytics
4. Create robots.txt file

## Accessibility

The site meets WCAG 2.1 AA standards:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators visible
- Screen reader compatible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Contact form not working
- Check Supabase credentials in .env file
- Verify database table exists: `contact_submissions`
- Check browser console for errors
- Ensure network requests are allowed

### Styling issues
- Clear cache: `npm run build` and restart dev server
- Check Tailwind content paths in `tailwind.config.js`
- Verify CSS is loaded in `src/index.css`

### Routing issues
- Ensure React Router is properly set up in `App.tsx`
- Check route paths match component imports
- Verify `BrowserRouter` wraps your routes

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript types
```

## License

This project is proprietary to CROFT Studio.

## Support

For issues or questions, contact hello@croft.studio

---

Built with ❤️ by CROFT Studio
