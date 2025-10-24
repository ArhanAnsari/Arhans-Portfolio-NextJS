# Arhan Ansari's Portfolio - Next.js Version

A stunning, immersive 3D portfolio website built with **Next.js**, **React Three Fiber**, and **Three.js**. This is a migrated version from the original Vite-based portfolio.

## 🚀 Features

- **Immersive 3D Experience** - Interactive 3D character and environments using Three.js
- **Modern UI/UX** - Beautiful glassmorphism design with Tailwind CSS
- **Responsive Design** - Perfectly optimized for all devices
- **Fast Performance** - Server-side rendering with Next.js
- **Animation-Rich** - Smooth transitions with Framer Motion
- **Contact Form** - Integrated EmailJS for contact submissions
- **Project Showcase** - 100+ projects displayed with filtering
- **Dark Theme** - Eye-friendly dark color scheme

## 📋 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Graphics
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-three/fiber** - React renderer
- **Three.js** - 3D graphics

### Form & Validation
- **EmailJS** - Email service integration
- **Formspree** - Form handling
- **React Google reCAPTCHA** - Bot prevention

### State Management
- **Jotai** - Primitive and flexible state management
- **Leva** - Control panel for tweaking values

### Icons & UI
- **React Icons** - Icon library
- **Lucide React** - Modern icon library

### Analytics
- **@vercel/analytics** - Performance analytics
- **@vercel/speed-insights** - Speed monitoring

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Install Dependencies**
```bash
npm install
# or
yarn install
```

2. **Configure Environment Variables**
```bash
# Copy the example env file
cp .env.example .env.local

# Update .env.local with your keys:
# - RECAPTCHA_SECRET_KEY
# - EmailJS credentials
```

3. **Run Development Server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for Production**
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
arhans-portfolio-nextjs/
├── app/
│   ├── api/
│   │   └── verify-recaptcha/
│   │       └── route.js           # reCAPTCHA verification API
│   ├── components/
│   │   ├── Avatar.jsx              # 3D Avatar component
│   │   ├── Background.jsx          # 3D Background scenes
│   │   ├── Cursor.jsx              # Custom cursor
│   │   ├── Experience.jsx          # Main 3D scene
│   │   ├── Interface.jsx           # All UI sections
│   │   ├── LoadingScreen.jsx       # Loading animation
│   │   ├── Menu.jsx                # Navigation menu
│   │   ├── Office.jsx              # 3D Office environment
│   │   ├── ParticleBackground.jsx  # Particle effects
│   │   ├── Projects.jsx            # Projects data & display
│   │   └── ScrollManager.jsx       # Scroll handling
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page
├── lib/
│   └── config.js                   # Configuration constants
├── public/
│   ├── animations/                 # FBX animations
│   ├── models/                     # 3D models (GLB, GLTF)
│   ├── projects/                   # Project screenshots
│   ├── testimonials/               # Client testimonials
│   ├── textures/                   # 3D textures
│   ├── favicon.png
│   └── logo.png
├── .env.local                      # Environment variables
├── .env.example                    # Example env file
├── next.config.js                  # Next.js configuration
├── package.json
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind configuration
└── tsconfig.json                   # TypeScript configuration
```

## 🔧 Configuration

### Next.js Configuration (`next.config.js`)
- Image optimization disabled for 3D assets
- Three.js external dependency handling

### Tailwind Configuration (`tailwind.config.js`)
- Custom color palette with primary and accent colors
- Space Grotesk and Inter font families
- Extended utilities for glassmorphism

## 📚 Key Sections

### 1. About Section (Hero)
- Personal introduction
- Call-to-action buttons
- Social proof statistics

### 2. Skills Section
- Technical expertise categorized by type
- Experience metrics
- Language proficiency

### 3. Projects Section
- 100+ projects showcase
- Category filtering
- Live demo and GitHub links
- Project type badges

### 4. Education Section
- Current academic achievements
- Certifications and badges

### 5. Achievements Section
- Milestone statistics
- Recognition and awards

### 6. Services Section
- Service offerings
- Technology stack per service
- Pricing information

### 7. Testimonials Section
- Client feedback
- Ratings and reviews

### 8. Contact Section
- Contact form with validation
- reCAPTCHA protection
- Email integration

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#0069ff',
  dark: '#111111',
  // Add more colors
}
```

### Fonts
Modify the font imports in `app/layout.tsx`:
```typescript
import { Inter, Space_Grotesk } from "next/font/google";
```

### 3D Assets
Replace models and animations in `public/models/` and `public/animations/`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect your Git repo
- **AWS Amplify**: Follow AWS guide
- **Docker**: Create a Dockerfile

## 📝 Environment Variables

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY      # Google reCAPTCHA site key
RECAPTCHA_SECRET_KEY                 # Google reCAPTCHA secret key
NEXT_PUBLIC_EMAILJS_SERVICE_ID       # EmailJS service ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID      # EmailJS template ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY       # EmailJS public key
NEXT_PUBLIC_API_URL                  # API URL
```

## 🐛 Troubleshooting

### 3D Assets Not Loading
- Check `public/models/` paths
- Verify CORS headers
- Check browser console for errors

### Performance Issues
- Reduce 3D geometry complexity
- Enable Next.js Image Optimization
- Use Vercel CDN

### Form Submission Not Working
- Verify EmailJS credentials
- Check reCAPTCHA site key
- Test in production mode

## 📞 Contact & Social

- **Email**: arhanansari2009@gmail.com
- **GitHub**: [@ArhanAnsari](https://github.com/ArhanAnsari)
- **LinkedIn**: [Arhan Ansari](https://linkedin.com/in/arhan-ansari-687597353)
- **Twitter**: [@codewitharhan](https://twitter.com/codewitharhan)

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## ✨ Acknowledgments

- React Three Fiber team for amazing 3D libraries
- Vercel for deployment platform
- All clients and supporters

---

**Built with ❤️ by Arhan Ansari**

*Last Updated: October 2025*
