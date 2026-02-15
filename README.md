# EPITOME 2026 - Website

A modern, interactive website for EPITOME 2026 - an intercollegiate festival hosted by St Aloysius Institute of Management and Information Technology (AIMIT).

## 🎯 About

EPITOME 2026 is a comprehensive event management platform featuring:
- Interactive event listings with detailed information
- Registration system for participants
- Coordinator information and contact details
- Venue and location mapping
- Responsive design with Stranger Things-inspired theme

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **pnpm** package manager
- Git (for version control)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd epitome
   ```

2. **Install dependencies:**
   ```bash
   npm install
   
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   AIMIT=https://drive.google.com/file/d/1F9nqUA9ZRwgPo5ZsZwWaXTZv61b7h6m8/view?usp=sharing
   EMAIL=epitome@staloysius.ac.in
   NEXT_PUBLIC_REGISTRATION_LINK=<your-google-form-registration-link>
   NEXT_PUBLIC_BROCHURE_LINK=<your-brochure-google-drive-link>
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
epitome/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── page.tsx                   # Home page
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css                # Global styles
│   │   ├── event/[id]/                # Dynamic event detail pages
│   │   │   └── page.tsx
│   │   └── aimit/                     # AIMIT information page
│   │       └── page.tsx
│   ├── components/                    # React components
│   │   ├── events/
│   │   │   └── events-section.tsx     # Event listings
│   │   ├── landing/
│   │   │   └── landing-video.tsx      # Hero section
│   │   ├── map/
│   │   │   └── map-section.tsx        # Location map
│   │   ├── navigation/
│   │   │   └── navbar.tsx             # Navigation bar
│   │   ├── registration/
│   │   │   └── registration-section.tsx   # Registration CTA
│   │   ├── rules/
│   │   │   └── rules-section.tsx      # Rules section
│   │   ├── sponsors/
│   │   │   └── sponsors-section.tsx   # Sponsors section
│   │   └── ui/                        # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── drawer.tsx
│   ├── lib/
│   │   ├── data/                      # Static data files
│   │   │   ├── events.ts              # Event information
│   │   │   ├── rules.ts               # Rules data
│   │   │   └── sponsors.ts            # Sponsors data
│   │   ├── lenis-provider.tsx         # Smooth scroll provider
│   │   └── utils.ts                   # Utility functions
│   └── styles/                        # Additional styles
├── public/                            # Static assets
│   ├── clg/                           # College images
│   ├── fonts/                         # Custom fonts
│   ├── images/                        # General images
│   ├── pfp/                           # Profile pictures
│   ├── svg/                           # SVG icons
│   ├── titles/                        # Title images
│   └── video/                         # Video files
├── components/                        # shadcn/ui components
├── .env                               # Environment variables (not in git)
├── components.json                    # shadcn/ui config
├── next.config.ts                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS config
├── tsconfig.json                      # TypeScript config
└── package.json                       # Dependencies
```

## 🛠️ Technologies Used

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[GSAP](https://greensock.com/gsap/)** - Animation library
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scrolling
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AIMIT` | Google Drive link to AIMIT brochure | Yes |
| `EMAIL` | Contact email for EPITOME event | Yes |
| `NEXT_PUBLIC_REGISTRATION_LINK` | Registration form URL (Google Forms) | Yes |
| `NEXT_PUBLIC_BROCHURE_LINK` | Brochure download link (Google Drive) | Yes |

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are accessible in the client-side code.

## 📋 Features

### Event Management
- 6 themed events with complete details
- Dynamic event detail pages
- Rules, team sizes, and coordinator information
- Staff and student coordinator separation

### User Interface
- Responsive design (mobile, tablet, desktop)
- Stranger Things themed styling with custom fonts
- Smooth scroll animations with Lenis
- GSAP-powered animations
- Interactive event cards

### Registration System
- Google Forms integration
- Direct brochure download
- Environment-based configuration

### Navigation
- Sticky navigation bar
- Smooth section scrolling
- Back navigation from event pages

## 🎨 Events

1. **Stranger Screens** - Short Film Making
2. **ARCADE LAB 1986** - Gaming Competition
3. **Eleven Bytes** - IT Quiz
4. **Upside Down Rhythms** - Dance Competition
5. **CIPHER VOID** - Treasure Hunt
6. **The Final Gate** - Turncoat & Mad Ads

## 📞 Contact

- **Email:** epitome@staloysius.ac.in
- **Institution:** St Aloysius Institute of Management and Information Technology (AIMIT)

## 📄 License

© 2026 EPITOME. All rights reserved.

---

**Made with ❤️ for EPITOME 2026**