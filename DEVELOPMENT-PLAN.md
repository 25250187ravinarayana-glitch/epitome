# Epitome - Stranger Things Event Website Development Plan

## Project Overview
Static event registration website themed around Netflix's Stranger Things series.

---

## Required Dependencies

### Core Libraries
```bash
npm install gsap lenis @studio-freight/lenis
npm install lucide-react
npm install clsx tailwind-merge class-variance-authority
npm install @radix-ui/react-dialog @radix-ui/react-drawer @radix-ui/react-slot
```

### Fonts
- **ITC Benguiat** (Stranger Things logo) - Download and add to `/public/fonts/`
- **Benguiat Bold** - For headings
- **VCR OSD Mono** - For retro/tech text
- Alternative: Use Google Fonts like "Special Elite", "Monoton", "Creepster"

### shadcn/ui Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add drawer
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add card
```

---

## Project Structure

```
epitome/
├── public/
│   ├── fonts/              # Custom Stranger Things fonts
│   ├── images/             # Background images, textures
│   ├── videos/             # Landing video
│   └── sounds/             # Optional: hover/click sounds
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/             # shadcn components
│   │   ├── landing/
│   │   │   └── landing-video.tsx
│   │   ├── events/
│   │   │   ├── events-section.tsx
│   │   │   └── event-card.tsx
│   │   ├── rules/
│   │   │   └── rules-section.tsx
│   │   ├── sponsors/
│   │   │   └── sponsors-section.tsx
│   │   ├── map/
│   │   │   └── map-section.tsx
│   │   └── navigation/
│   │       └── navbar.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── lenis-provider.tsx
│   │   └── data/
│   │       ├── events.ts
│   │       ├── rules.ts
│   │       └── sponsors.ts
│   └── styles/
│       └── animations.css  # Custom Stranger Things effects
```

---

## Design System

### Color Palette

```typescript
// Stranger Things Theme Colors
colors: {
  // Dark backgrounds
  'st-black': '#000000',
  'st-dark': '#0a0a0a',
  'st-darker': '#1a0505',
  
  // Red accents (Upside Down theme)
  'st-red': '#8B0000',
  'st-red-light': '#FF0000',
  'st-red-glow': '#ff000080',
  
  // Vintage/retro colors
  'st-cream': '#FFF8DC',
  'st-beige': '#F5DEB3',
  'st-yellow': '#FFD700',
  
  // Neon/glow effects
  'st-neon-red': '#FF073A',
  'st-neon-blue': '#00D4FF',
  
  // Text colors
  'st-text': '#E0E0E0',
  'st-text-dim': '#808080',
}
```

### Typography

```typescript
fontFamily: {
  'benguiat': ['Benguiat', 'serif'],        // Main headings
  'vcr': ['VCR OSD Mono', 'monospace'],     // Retro tech text
  'special': ['Special Elite', 'cursive'],   // Typewriter effect
  'mono': ['Courier New', 'monospace'],      // Morse code
}
```

### Custom Effects

**Flickering Text:**
```css
@keyframes flicker {
  0%, 100% { opacity: 1; }
  41.99% { opacity: 1; }
  42% { opacity: 0.4; }
  43% { opacity: 1; }
  45.99% { opacity: 1; }
  46% { opacity: 0.4; }
  46.5% { opacity: 1; }
}

.flicker {
  animation: flicker 5s infinite;
}
```

**Glowing Text:**
```css
.glow-red {
  text-shadow: 
    0 0 10px #FF073A,
    0 0 20px #FF073A,
    0 0 30px #FF073A,
    0 0 40px #8B0000;
}
```

**VHS Scan Lines:**
```css
.vhs-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
```

**Christmas Lights Border:**
```css
@keyframes lights {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.christmas-lights {
  background: 
    radial-gradient(circle, #ff0000 2px, transparent 2.5px),
    radial-gradient(circle, #00ff00 2px, transparent 2.5px),
    radial-gradient(circle, #0000ff 2px, transparent 2.5px),
    radial-gradient(circle, #ffff00 2px, transparent 2.5px);
  background-size: 25px 25px;
  background-position: 0 0, 6.25px 0, 12.5px 0, 18.75px 0;
  animation: lights 2s infinite;
}
```

---

## Section-by-Section Implementation

### 1. Landing Section
**Theme:** Stranger Things title with flickering lights

**Features:**
- Background video (Upside Down/dark atmosphere)
- Animated title with character-by-character reveal
- Flickering effect on letters
- Floating particles (ash/spores)
- Scroll indicator

**Implementation:**
```typescript
// Title: "EPITOME" or "STRANGE EVENTS"
// Animation: Each letter fades in with flicker effect
// Background: Dark with red lightning flashes
```

### 2. Events Section
**Theme:** Missing person posters / Investigation board

**Features:**
- Event cards styled as missing posters
- Push pins on corners
- Typewriter font
- Red string connections (optional)
- Hover effects: light flicker, paper rustle

**Card Structure:**
```typescript
{
  id: string
  title: string
  description: string
  image: string  // Polaroid style
  date: string
  time: string
  venue: string
  registerLink: string  // Google Form URL
}
```

**Design:**
- Aged paper texture
- Coffee stain effects
- Crinkled edges
- Paper clip or tape at top
- "HAVE YOU SEEN?" header style

### 3. Rules Section
**Theme:** Government documents / Secret files

**Features:**
- Classified document style
- Redacted text effects (black bars)
- Stamp marks ("CONFIDENTIAL", "TOP SECRET")
- Typewriter font
- Paper texture background

**Animation:**
- Typewriter effect for text reveal
- Document "stamping" animation
- Morse code beeps (optional audio)

### 4. Sponsors Section
**Theme:** Vintage TV commercials / Hawkins businesses

**Features:**
- Retro commercial aesthetic
- TV screen frames
- VHS quality effects
- Scan lines
- Color aberration

**Sponsor Card:**
- TV frame border
- Static effect on hover
- Channel switching animation
- "Coming Soon" for empty slots

### 5. Map Section
**Theme:** Hawkins town map

**Features:**
- Dark, eerie styling
- Red location pins
- Handwritten notes style
- Flashlight reveal effect (optional)
- Google Maps with dark mode

**Styling:**
- Dark filter on map
- Red accent for location
- Grunge texture overlay
- Crime scene tape borders (optional)

---

## Animation Timeline

### Page Load:
1. Screen static (0.5s)
2. Letter-by-letter title reveal (2s)
3. Fade in scroll indicator (0.5s)

### Scroll Interactions:
- **Events:** Fade in from left/right alternating
- **Rules:** Typewriter effect
- **Sponsors:** TV screen pop-in
- **Map:** Zoom and focus

---

## Google Form Integration

### Register Button:
```typescript
<a 
  href="YOUR_GOOGLE_FORM_URL" 
  target="_blank"
  className="stranger-things-button"
>
  REGISTER NOW
</a>
```

### Button Styling:
- Glowing red border
- Flickering effect
- Hover: Intensified glow
- Crisis mode urgency feel

---

## Assets Needed

### Images:
- [ ] Landing background video or image
- [ ] Paper texture for event cards
- [ ] TV frame PNG
- [ ] Aged paper texture
- [ ] Stranger Things logo (reference)
- [ ] Christmas lights sprite

### Videos:
- [ ] Landing background video (Upside Down atmosphere)
  - Option 1: Dark clouds with lightning
  - Option 2: Particles floating
  - Option 3: Portal effect

### Fonts:
- [ ] Benguiat Bold (or similar)
- [ ] VCR OSD Mono
- [ ] Special Elite (Google Fonts)

---

## Development Phases

### Phase 1: Setup (You'll do this)
- [ ] Install all dependencies
- [ ] Set up Tailwind config with theme colors
- [ ] Add custom fonts
- [ ] Initialize shadcn/ui
- [ ] Create basic project structure

### Phase 2: Core Components (I'll build)
- [ ] Layout with smooth scroll
- [ ] Navigation drawer
- [ ] Lenis integration
- [ ] GSAP setup

### Phase 3: Landing Section
- [ ] Video background component
- [ ] Animated title with flickering
- [ ] Particle effects
- [ ] Scroll indicator

### Phase 4: Events Section
- [ ] Event data structure
- [ ] Event card component (missing poster style)
- [ ] Card animations
- [ ] Google Form links

### Phase 5: Rules Section
- [ ] Rules data structure
- [ ] Document style layout
- [ ] Typewriter animation
- [ ] Classified document effects

### Phase 6: Sponsors Section
- [ ] Sponsor data structure
- [ ] TV screen card component
- [ ] VHS effects
- [ ] Grid layout with animations

### Phase 7: Map Section
- [ ] Google Maps integration
- [ ] Dark theme styling
- [ ] Location pin
- [ ] Eerie atmosphere effects

### Phase 8: Polish
- [ ] Add sound effects (optional)
- [ ] Optimize animations
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] SEO metadata

---

## Mobile Considerations

### Responsive Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Optimizations:
- Disable heavy animations on mobile
- Use images instead of videos
- Simplify particle effects
- Touch-friendly button sizes
- Hamburger menu for navigation

---

## Performance Optimization

### Code Splitting:
```typescript
const LandingVideo = dynamic(() => import('@/components/landing/landing-video'))
const EventsSection = dynamic(() => import('@/components/events/events-section'))
// etc.
```

### Image Optimization:
- Use Next.js Image component
- WebP format
- Proper sizing
- Lazy loading

### Animation Performance:
- Use CSS transforms (not position changes)
- RequestAnimationFrame for JS animations
- Debounce scroll listeners
- Use `will-change` carefully

---

## Next Steps

1. **Install dependencies** (list provided above)
2. **Download fonts** and add to `/public/fonts/`
3. **Find/create assets** (video, images, textures)
4. **Set up Tailwind config** with Stranger Things theme
5. **Let me know when ready** - I'll start building components!

---

## Resources

### Inspiration:
- Stranger Things official website
- 80s retro design
- Vintage horror posters
- Government classified documents
- Old TV aesthetics

### Assets:
- Free textures: textures.com
- Free fonts: dafont.com, fontsquirrel.com
- Stock videos: pexels.com, pixabay.com
- Icons: lucide.dev

### Animation Libraries:
- GSAP docs: greensock.com/docs
- Lenis smooth scroll: github.com/studio-freight/lenis
