# SMANV IT - Professional Web Development Agency Website

A modern, responsive website for SMANV IT - a professional web development agency specializing in custom website development, redesign, and maintenance services.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Animated Elements**: Scroll-based animations using Framer Motion
- **Interactive Components**: 
  - Animated hero section with contact form
  - Service cards with image illustrations
  - Process section with animated curved line
  - Testimonials slider with Swiper
  - FAQ accordion
  - Contact form with EmailJS integration
- **Navigation**: Sticky navbar with smooth scrolling and mobile menu
- **Contact Forms**: EmailJS-powered forms for direct email communication
- **Custom Styling**: Tailwind CSS with custom color scheme and animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.42.2
- **Forms**: React Hook Form 7.81.0
- **Icons**: React Icons 5.7.0, Lucide React 0.344.0
- **Slider**: Swiper 14.0.1
- **Routing**: React Router DOM 7.18.1
- **Email Service**: EmailJS Browser 4.4.1
- **Database**: Supabase JS 2.57.4 (optional)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smanvIT-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.local` file and configure EmailJS credentials
   - Get your EmailJS credentials from [https://www.emailjs.com/](https://www.emailjs.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id

# Google Sheets Webhook URL (Optional - for saving form submissions)
# See GOOGLE_SHEETS_SETUP.md for setup instructions
VITE_GOOGLE_SHEETS_URL=your_google_sheets_webhook_url
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 📁 Project Structure

```
smanvIT-main/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/           # UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   ├── data/             # Data files
│   │   ├── services.ts
│   │   ├── features.ts
│   │   ├── industries.ts
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   ├── faqs.ts
│   │   └── site.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Website Sections

1. **Hero**: Introduction with contact form and call-to-action
2. **Services**: Service offerings with image illustrations
3. **Features**: Key features and benefits
4. **Industries**: Industries served
5. **Why Choose Us**: Value proposition with testimonials slider
6. **Process**: Development process with animated timeline
7. **Portfolio**: Project showcase
8. **CTA**: Call-to-action section
9. **FAQ**: Frequently asked questions
10. **Contact**: Contact form with company information

## 🎨 Custom Design System

- **Colors**: Custom primary (blue), accent (cyan), and ink (slate) color palettes
- **Typography**: Inter and Plus Jakarta Sans fonts
- **Shadows**: Custom soft, card, lift, and glow shadows
- **Animations**: Floaty, shimmer, marquee, and pulse-ring animations
- **Border Radius**: Custom 2xl, 3xl, and 4xl border radius values

## 📞 Contact Information

- **Phone**: +91 79896 92202
- **Email**: admin@smanv.com
- **Website**: www.smanv.com
- **Address**: 4-72, Nacharam, Uppal, Hyderabad, Telangana, India

## 🌐 Social Media

- **LinkedIn**: [SMANV Groups](https://www.linkedin.com/company/smanv-groups/)
- **Facebook**: [SMANV Groups](https://www.facebook.com/smanvgroups)
- **Instagram**: [@smanv_groups](https://www.instagram.com/smanv_groups/)

## 📄 License

© 2024 SMANV Info Tech Pvt. Ltd. All rights reserved.

## 🤝 Contributing

This is a proprietary project. For contributions or modifications, please contact the development team.

## 📧 Support

For support or inquiries, please contact admin@smanv.com

