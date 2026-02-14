# EPITOME - Stranger Things Event Website

A stunning static event registration website themed around Netflix's Stranger Things series. Built with Next.js, GSAP animations, and smooth scrolling.

## 🎯 Features

- **Landing Section**: Animated title with GSAP letter-by-letter reveal and flickering effects
- **Events Section**: Missing poster style event cards with registration links
- **Rules Section**: Classified document themed rules presentation
- **Sponsors Section**: Vintage TV screen aesthetic sponsor showcase
- **Map Section**: Google Maps integration with dark styling
- **Smooth Scrolling**: Lenis integration for butter-smooth page transitions
- **Navigation**: Drawer-style menu with glowing effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Update Event Information

Edit `src/lib/data/events.ts`:
- Add/modify event details
- Update event dates and venues
- Change Google Form registration links
- Add more event logos to `public/svg/`

### 2. Customize Rules

Edit `src/lib/data/rules.ts`:
- Modify general and additional rules
- Change icons and text

### 3. Add Sponsors

Edit `src/lib/data/sponsors.ts`:
- Add sponsor information
- Update contact email
- Add sponsor logos to `public/images/sponsors/`

### 4. Update Map Location

Edit `src/components/map/map-section.tsx`:
- Replace Google Maps embed URL with your location
- Update venue address and contact information

### 5. Change Theme Colors

Edit `src/app/globals.css`:
- Modify CSS custom properties for colors
- Adjust glow effects and animations

### 6. Replace Background Image

- Add your video/image to `public/images/`
- Update the path in `src/components/landing/landing-video.tsx`
- For video: uncomment video tag and comment out Image component

## 📁 Project Structure

```
epitome/
├── public/
│   ├── fonts/              # Custom Benguiat fonts
│   ├── images/             # Background images
│   ├── svg/                # Event logos
│   └── video/              # Landing videos (optional)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with providers
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles & animations
│   ├── components/
│   │   ├── landing/        # Landing section
│   │   ├── events/         # Events section
│   │   ├── rules/          # Rules section
│   │   ├── sponsors/       # Sponsors section
│   │   ├── map/            # Map section
│   │   ├── navigation/     # Navigation drawer
│   │   └── ui/             # shadcn UI components
│   └── lib/
│       ├── data/           # Static data files
│       ├── lenis-provider.tsx
│       └── utils.ts
```

## 🎨 Design System

### Colors
- **st-black**: `#000000` - Primary background
- **st-red**: `#8B0000` - Primary accent
- **st-red-light**: `#FF0000` - Hover states
- **st-cream**: `#FFF8DC` - Text on paper
- **st-text**: `#E0E0E0` - Main text

### Typography
- **Benguiat**: Main headings (Stranger Things style)
- **Geist Mono**: Code and technical text
- **Geist Sans**: Body text

### Effects
- **Flickering**: `.flicker` class
- **Red Glow**: `.glow-red` class
- **Pulsing Glow**: `.glow-red-pulse` class
- **VHS Scan Lines**: `.vhs-effect` class

## 🔧 Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP
- **Smooth Scroll**: Lenis
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## 📋 TODO

- [ ] Add your actual Google Form registration URLs
- [ ] Update event dates and venue information
- [ ] Add sponsor logos and information
- [ ] Replace Google Maps embed with your location
- [ ] Add landing video (optional)
- [ ] Customize event descriptions
- [ ] Add more event categories if needed
- [ ] Update contact information
- [ ] Add social media links
- [ ] Test on mobile devices

## 🎬 Animation Features

### Landing Page
- Letter-by-letter title reveal
- Flickering light effects
- VHS scan line overlay
- Smooth scroll indicator

### Scroll Animations
All sections use GSAP's ScrollTrigger for:
- Fade-in effects
- Slide animations
- Parallax scrolling

### Interactive Elements
- Hover effects on event cards
- Glowing buttons
- Drawer navigation with smooth transitions

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly navigation
- Optimized animations for mobile devices

## 🚀 Performance Optimizations

- Dynamic imports for code splitting
- Next.js Image optimization
- Font display swap for faster loading
- Lazy loading for sections
- Memoized components

## 📄 License

This is a template project - feel free to use and customize for your events!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Made with 🔥 for strange events
