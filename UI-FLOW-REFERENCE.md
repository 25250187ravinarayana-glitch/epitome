# Ekashunyam Main-Site UI/UX Flow Analysis

## Overview
Reference documentation for building the Stranger Things themed "Epitome" event website, based on the Ekashunyam main-site architecture.

---

## Tech Stack

### Core
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger
- **Smooth Scrolling:** Lenis (React)
- **UI Components:** shadcn/ui
- **Fonts:** Custom fonts (Geist Sans, Geist Mono, Sayyeda, Always In My Heart, Playfair)

### Performance Optimizations
- Dynamic imports for heavy components
- React.memo for component memoization
- Loading states for lazy-loaded sections

---

## Layout Structure

### Root Layout (`layout.tsx`)
```
└─ HTML
   └─ Body
      └─ TRPCReactProvider (optional for static site)
         ├─ NavigationBar (fixed top-right)
         └─ ScrollProvider
            └─ LenisScrollProvider (smooth scroll)
               └─ Children (page content)
```

### Key Features:
- **Navigation:** Fixed drawer-style menu (top-right)
- **Smooth Scrolling:** Lenis for butter-smooth scroll experience
- **Global Providers:** Context for scroll management

---

## Page Structure & User Flow

### 1. Landing Section
**Component:** `LandingVideo`
- **Purpose:** Hero section with background video and animated title
- **Features:**
  - Fullscreen background video
  - Animated text using GSAP
  - Letter-by-letter animation with custom effects per character
  - Different animations for vowels, numbers, special chars
- **Animation Types:**
  - Rotation, bounce, elastic, shake effects
  - Staggered timing (0.05s delay per letter)

### 2. Events Section
**Component:** `EventsSection`
- **Sub-components:**
  - `EventDate` - Display event date prominently
  - `EventCardWantedSection` - Event cards in "wanted poster" style
  - `EventIntroCard` - Introduction to events
  - Individual event cards with modals
- **Features:**
  - ScrollTrigger animations
  - Modal popups for event details
  - Card-based layout
  - Interactive hover effects

### 3. Rules Section
**Component:** `RulesSection`
- **Structure:**
  - General Rules
  - Additional Rules
- **Data Format:**
  ```typescript
  {
    id: string
    text: string
    icon: string (emoji/icon)
  }
  ```
- **Styling:**
  - Font-mono for text
  - Icon-based bullet points
  - Color-coded sections
- **Animation:** GSAP for reveal animations

### 4. Sponsors Section
**Component:** `SponsersSection`
- **Sub-components:**
  - `SponsorsViewSection` - Display sponsor logos/cards
  - `JoinAsSponsor` - Call-to-action for new sponsors
- **Features:**
  - Grid/carousel of sponsor logos
  - Links to sponsor pages
  - "Join Us" CTA section

### 5. Map Section
**Component:** `MapSection`
- **Elements:**
  - Background map image
  - Decorative corner overlays (top-left, bottom-right)
  - Centered Google Maps iframe
  - Location title with custom fonts
- **Layout:**
  - Fullscreen section
  - Overlaid decorative images
  - Responsive iframe positioning
- **Styling:**
  - Custom background
  - Large typography with Sayyeda font
  - Border-radius on iframe

### 6. Brochure Section
**Component:** `BrochureSection`
- **Purpose:** Download/view event brochure
- **Features:**
  - Link to external brochure PDF
  - Visual preview or download button

---

## Navigation Bar

### Design:
- **Position:** Fixed top-right
- **Style:** Drawer-based menu
- **Trigger:** "Menu" button with hamburger icon
- **Content:**
  - Event title and tagline
  - Navigation links with icons:
    - Home
    - Login (optional for static)
    - Profile (optional for static)
    - Register (link to Google Form)
    - Brochure
    - Contribute
    - Developers
    - Support/Contact
    - Social media links
- **Icons:** Lucide-react icons
- **Component:** shadcn/ui Drawer

---

## Animation Strategy

### Landing Page:
- **GSAP Timeline:** Letter-by-letter reveal
- **Character Effects:**
  - 'O' - 360° rotation
  - '.' - Bounce effect
  - '2' - Elastic scale
  - Vowels - Shake effect
  - Others - Standard slide-up

### Scroll Animations:
- **ScrollTrigger:** Trigger animations on scroll
- **Section Reveals:** Fade-in, slide-up on viewport entry
- **Parallax:** Subtle parallax effects on sections

### Smooth Scrolling:
- **Lenis:** Physics-based smooth scroll
- **Config:** Root-level, wraps entire app

---

## Styling Approach

### Tailwind Configuration:
- **Custom Colors:**
  - Brand colors (c-50, c-100, c-150, c-200, c-250)
- **Custom Fonts:**
  - Heading fonts (Sayyeda, Always In My Heart)
  - Body fonts (Geist Sans)
  - Code fonts (Geist Mono)
- **Utility Classes:**
  - `flex-center` - center flex items
  - Custom keyframe animations

### Component Styling:
- **shadcn/ui:** Pre-styled, customizable components
- **Tailwind Classes:** Composition-based styling
- **Responsive Design:** Mobile-first approach

---

## Data Management

### Static Data Files:
Located in `src/lib/data/`:
- `brochure.ts` - Brochure links
- `events.ts` - Event details
- `heads.ts` - Team/organizer info
- `sponsers.ts` - Sponsor data

### Type Definitions:
Located in `src/lib/type.ts`:
- Event types
- Sponsor types
- User types (if needed)

---

## Performance Considerations

### Code Splitting:
```typescript
const ComponentName = dynamic(
  () => import('./component').then(mod => mod.ComponentName),
  { loading: () => <Loading /> }
);
```

### Memoization:
```typescript
export const Component = memo(() => { ... });
```

### Image Optimization:
- Next.js `Image` component
- Proper sizing and formats
- WebP/AVIF support

---

## Stranger Things Theme Adaptation

### Color Palette:
- Dark backgrounds (#000, #1a0505)
- Red accents (#8B0000, #FF0000)
- Vintage yellows/creams (#FFF8DC, #F5DEB3)
- Neon effects (glowing text)

### Typography:
- Retro 80s fonts
- ITC Benguiat (Stranger Things logo font)
- VCR OSD Mono for tech/horror feel
- Glowing text effects

### Visual Elements:
- Flickering lights/text effects
- Upside Down particle effects
- Christmas lights border
- VHS scan lines
- Static/glitch effects
- Portal/gate animations

### Sound Effects (Optional):
- Hover sounds
- Click sounds
- Background ambiance

### Sections:
1. **Landing:** Stranger Things title animation with flickering
2. **Events:** "Missing person" poster style event cards
3. **Rules:** Morse code or typewriter effect
4. **Sponsors:** Vintage commercial aesthetic
5. **Map:** Dark, eerie styling with red pins

---

## Implementation Checklist for Epitome

- [ ] Set up Next.js project structure
- [ ] Install dependencies (GSAP, Lenis, shadcn/ui)
- [ ] Configure Tailwind with Stranger Things theme
- [ ] Add custom fonts (80s retro style)
- [ ] Create layout with navigation
- [ ] Build landing section with title animation
- [ ] Create event cards (missing poster style)
- [ ] Implement rules section
- [ ] Add sponsors section
- [ ] Integrate Google Maps
- [ ] Link Google Form for registration
- [ ] Add Stranger Things visual effects
- [ ] Optimize performance
- [ ] Test responsiveness

---

## Key Differences for Static Site

### Remove:
- Authentication (login/profile)
- Database/Prisma
- tRPC API calls
- Server actions
- Dynamic user data

### Keep:
- All visual components
- Animations
- Navigation structure
- Static content sections
- Google Form integration

### Modify:
- Register button → Link to Google Form
- Remove backend-dependent features
- Use static data files only
