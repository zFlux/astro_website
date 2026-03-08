# Daniel Christo's Personal Website

A modern, performant personal website built with Astro, featuring a blog, running race tracker, and an interactive prioritization grid tool.

**Live Site:** [danielchristo.com](https://www.danielchristo.com)

## 🌟 Features

- **Personal Portfolio** - About page showcasing professional experience and skills
- **Blog** - Content management system with Markdown/MDX support
- **Running Tracker** - Interactive table displaying race history and statistics
- **Prioritization Grid** - Interactive React component for ranking and prioritizing items
- **SEO Optimized** - Canonical URLs, OpenGraph metadata, and sitemap generation
- **RSS Feed** - Automatic RSS feed generation for blog posts
- **Performance** - 100/100 Lighthouse scores with optimized builds
- **Responsive Design** - Mobile-friendly layouts with modern CSS

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) v4.9.2
- **UI Components:** React 18.3.1
- **Styling:** SCSS/SASS, CSS Variables
- **Content:** Markdown & MDX
- **Type Safety:** TypeScript 5.4.5
- **Deployment:** Cloudflare Pages
- **Package Manager:** npm

### Key Integrations

- `@astrojs/react` - React component support
- `@astrojs/mdx` - MDX content support
- `@astrojs/rss` - RSS feed generation
- `@astrojs/sitemap` - Automatic sitemap generation
- `prioritization-grid` - Custom React component from GitHub ([zFlux/prioritization-grid](https://github.com/zFlux/prioritization-grid))

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd astro_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs all dependencies                        |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds production site to `./dist/`              |
| `npm run preview`         | Preview production build locally                 |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📁 Project Structure

```
├── public/                 # Static assets (images, fonts, etc.)
│   ├── fonts/            # Custom fonts (Atkinson)
│   └── me.webp           # Profile image
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── BaseHead.astro      # SEO and metadata component
│   │   ├── Header.astro        # Site navigation header
│   │   ├── Footer.astro        # Site footer
│   │   ├── HeaderLink.astro    # Navigation link component
│   │   └── FormattedDate.astro # Date formatting component
│   ├── content/          # Content collections
│   │   └── blog/        # Blog posts (MDX files)
│   ├── layouts/          # Page layouts
│   │   └── BlogPost.astro # Blog post layout template
│   ├── models/           # TypeScript type definitions
│   │   └── daniel.model.ts # Personal data model
│   ├── pages/            # Route pages
│   │   ├── index.astro          # Home/About page
│   │   ├── blog/               # Blog pages
│   │   │   ├── index.astro     # Blog listing
│   │   │   └── [...slug].astro # Dynamic blog post pages
│   │   ├── running.astro        # Running races page
│   │   ├── prioritize.astro     # Prioritization grid page
│   │   └── rss.xml.js          # RSS feed generator
│   ├── styles/           # Global styles
│   │   └── global.css    # Global CSS variables and base styles
│   └── consts.ts         # Site constants and personal data
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 📄 Pages

### Home (`/`)
Personal portfolio page featuring:
- Professional background and experience
- Skills and expertise
- Contact information
- Links to social profiles

### Blog (`/blog`)
- Blog post listing page
- Individual blog posts with MDX support
- RSS feed available at `/rss.xml`

### Running (`/running`)
Interactive table displaying:
- Race history with dates, distances, and times
- Running statistics and totals
- Sticky table headers for easy navigation

### Prioritization Grid (`/prioritize`)
Interactive React component for ranking items:
- Enter up to 10 items to prioritize
- Compare items using an interactive grid
- Automatically generates ranked results
- Uses my `prioritization-grid` project

## 🎨 Styling

The site uses a custom design system based on Bear Blog:

- **CSS Variables** - Defined in `src/styles/global.css`
- **Typography** - Custom Atkinson font family
- **Color Scheme** - Defined via CSS variables (`--accent`, `--black`, `--gray`, etc.)
- **Responsive** - Mobile-first approach with media queries

### Component Styles

- Global styles are imported via `BaseHead.astro`
- Page-specific styles are scoped within `<style>` tags
- React components use SCSS files imported from `node_modules/prioritization-grid`

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

```javascript
export default defineConfig({
  site: 'https://example.com', // Update with your domain
  integrations: [mdx(), sitemap(), react()]
});
```

### Site Constants (`src/consts.ts`)

Contains:
- Site title and description
- Personal information (DANIEL object)
- Race history data
- Skills and experience
- Social media links

## 🚀 Deployment

### Cloudflare Pages

The site is configured for deployment on Cloudflare Pages:

1. **Build Command:** `npm run build`
2. **Output Directory:** `dist`
3. **Node Version:** 20.5.1 (specified in `.nvmrc`)

#### Cloudflare Pages Configuration

In your Cloudflare Pages project settings, configure:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (root of repository)
- **Node version:** 20.5.1 (or use `.nvmrc` file)

### Build Process

```bash
npm run build
```

This will:
1. Run TypeScript type checking (`astro check`)
2. Build the production site to `./dist/`
3. Optimize assets and generate static files

### Environment Variables

No environment variables are currently required. The site uses:
- Git dependencies (prioritization-grid from GitHub)
- Static content collections
- Public assets

## 📦 Dependencies

### Core Dependencies

- `astro` - Static site generator
- `react` & `react-dom` - React component support
- `typescript` - Type safety
- `sass` - SCSS compilation

### Astro Integrations

- `@astrojs/react` - React component integration
- `@astrojs/mdx` - MDX content support
- `@astrojs/rss` - RSS feed generation
- `@astrojs/sitemap` - Sitemap generation
- `@astrojs/check` - Type checking

### External Packages

- `prioritization-grid` - Custom React component from GitHub ([zFlux/prioritization-grid](https://github.com/zFlux/prioritization-grid))

## 🧩 Key Components

### PrioritizationGrid

The prioritization grid is imported from the GitHub package:

```astro
import PrioritizationGrid from 'prioritization-grid/src/components/PrioritizationGrid';
```

**Features:**
- Interactive comparison grid
- Automatic ranking algorithm
- Export/import functionality
- Responsive design

**Styling:** Custom CSS overrides ensure compatibility with the site's global styles.

## 📝 Content Management

### Blog Posts

Blog posts are stored in `src/content/blog/` as MDX files:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-01
heroImage: "/path/to/image.jpg"
---

Post content here...
```

### Running Data

Race data is stored in `src/consts.ts` in the `DANIEL.races` array:

```typescript
{
  date: '2024-10-20',
  race: 'Toronto Waterfront Marathon',
  km: '42.2',
  time: '5:20:33'
}
```

## 🐛 Troubleshooting

### Common Issues

**Issue:** `prioritization-grid` package not found
- **Solution:** Run `npm install` to fetch the GitHub dependency

**Issue:** Styles not matching production
- **Solution:** Ensure SCSS files are imported and `is:global` is set on style tags

**Issue:** Build fails on Cloudflare Pages
- **Solution:** Verify `package-lock.json` uses HTTPS URLs for git dependencies

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Prioritization Grid Repository](https://github.com/zFlux/prioritization-grid)

## 👤 Author

**Daniel Christo**
- Email: findme@danielchristo.com
- LinkedIn: [daniel-christo](https://ca.linkedin.com/pub/daniel-christo/27/ab0/a54/)
- GitHub: [zFlux](https://github.com/zFlux)


## 🙏 Credits

- Theme based on [Bear Blog](https://github.com/HermanMartinus/bearblog/)
- Prioritization Grid component: [zFlux/prioritization-grid](https://github.com/zFlux/prioritization-grid)
