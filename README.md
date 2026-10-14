# Winta Digital Ltd – Official Website & Design System

A modern, high-performance website for **Winta Digital Ltd**, matching the dark, premium, minimal aesthetic of the [AATU Image Photography](https://thrivexdigital.wixstudio.com/aatuimagephotogphy) reference site and powered by **StoryBrand + NEPQ** (Neuro-Emotional Persuasion Questions) messaging.

---

## 🎨 1. Brand Palette & Design Foundations

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Almost Black** | `#0A0A0A` | Primary background (deep cinematic canvas) |
| **Soft Dark** | `#111111` / `#141414` | Service cards, feature boxes, and elevated surfaces |
| **Electric Blue** | `#0185F3` | Primary CTA buttons, link hovers, active state highlights |
| **Bright Cyan** | `#00D4FF` | Accent badges, hover glows, secondary typography highlights |
| **Deep Navy** | `#012869` | Monogram base, deep radial gradient anchors |
| **Medium Blue** | `#1A3A6E` | Atmospheric gradient mid-tones |
| **Pure White** | `#FFFFFF` | Headlines, button outlines, crisp legible text |

### Typography
- **Headings & Display**: `Plus Jakarta Sans`, 700 / 800 / 900 weight, tight letter-spacing (`-0.03em`)
- **Body & Controls**: `Inter`, clean modern sans-serif, high contrast and legibility

---

## 📐 2. Architecture & File Structure

```text
winta-digital/
├── index.html                   # Master semantic HTML5 document
├── README.md                    # Documentation & customization guide
└── assets/
    ├── css/
    │   └── style.css            # Dark mode design system, responsive grid & animations
    ├── js/
    │   └── main.js              # Sticky nav, lightbox modal, booking modal & WhatsApp sync
    └── images/
        ├── winta-digital-logo-original.jpg # Original uploaded high-res logo
        ├── winta-digital-logo-dark.png     # Processed transparent logo for dark backgrounds
        ├── winta-digital-mark.png          # Cropped WD monogram mark
        ├── winta-digital-logo.svg          # Crisp vector SVG monogram & typography
        ├── hero-bg.jpg                     # Dark cinematic production backdrop
        ├── service-video.jpg               # Cinema camera on film set
        ├── service-audio.jpg               # Studio condenser microphone
        ├── service-marketing.jpg           # Creative marketing analytics
        ├── service-training.jpg            # Hands-on media training workshop
        ├── yt-yoweri-thumb.jpg             # High-res thumbnail for "Yoweri" campaign video
        ├── about-team.jpg                  # East Africa creative team in action
        └── portfolio-still-1..6.jpg        # 6 production stills for lightbox gallery
```

---

## 🧠 3. StoryBrand + NEPQ Messaging Implementation

1. **The Hero (Customer)**: Business owners, political campaigns, brands, churches, NGOs, and creatives in Uganda & East Africa.
2. **The Problem (NEPQ Question Hook)**:
   > *"Have you ever felt your content is invisible… even after spending money and time?"*
   Identifies the 3 core pain points: average production quality, no clear strategy, and untrained teams.
3. **The Guide**: **Winta Digital** – Combining audio-visual firepower with digital training & marketing.
4. **The 3-Step Plan**:
   - `01. Discovery Call`: Understand goals and audience.
   - `02. Strategy + Creation`: Craft the audio, video, or training curriculum.
   - `03. Delivery & Growth`: Broadcast-ready assets + skills that keep working.
5. **The Transformation**:
   - Contrasting the cost of waiting (staying invisible) with the power of action (commanding attention, scaling revenue, confident leadership).

---

## 🚀 4. How to Preview & Deploy

### Quick Preview
- Simply double-click `index.html` in Windows Explorer to open it in Chrome, Edge, or Firefox.
- Or run a local HTTP server with PowerShell or Python:
  ```powershell
  # Using Python (if available)
  python -m http.server 8080
  
  # Or with any static web host: Netlify, Vercel, Firebase Hosting, GitHub Pages, etc.
  ```

### Customization Settings
- **WhatsApp Phone Number**: In `index.html` and `assets/js/main.js`, update `256700000000` to Winta Digital's actual WhatsApp business number.
- **Email & Phone**: Search for `info@wintadigital.com` and `+256 700 000 000` in `index.html` to update with live business details.
- **Embedded Videos**:
  - The flagship YouTube video is set to `8bcTZSSRWLg` ("Yoweri" campaign music video).
  - TikTok video links in the portfolio point to `@gen.mk4` videos (`7674762981313416468`, `7676090061032672533`, `7679905681775807765`).
