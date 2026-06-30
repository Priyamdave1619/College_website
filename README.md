<p align="center">
  <img src="public/logos/GreenfieldInstituteLogo.png" alt="Greenfield Institute Logo" width="90" />
  &nbsp;&nbsp;&nbsp;
  <img src="public/logos/MeridianStateUniversityLogo.png" alt="Meridian State University Logo" width="90" />
</p>

<h1 align="center">Greenfield Institute — College Website</h1>

<p align="center">
  Official website of <strong>Greenfield Institute</strong>,
  a constituent college of <strong>Meridian State University</strong>, Surat.
</p>

<p align="center">
  Built with Next.js, TypeScript, and Tailwind CSS.
</p>

---

## 📖 About

This repository contains the source code for the public-facing website of **Greenfield Institute**, covering academics, admissions, research, placements, student resources, campus life, and more. The site is built as a modern, responsive, SEO-friendly web app using the Next.js App Router.

> **Note:** All college name, logo, contact details, and addresses in this codebase are placeholder/dummy data used for demonstration purposes.

## 🏫 College Information (Dummy Data)

| Field | Value |
|---|---|
| College Name | Greenfield Institute of Computer Education and Applied Sciences |
| Short Name | GICEAS |
| Affiliated University | Meridian State University |
| Location | Sample Nagar, Surat – 395007, Gujarat, India |
| Email | info@greenfield.ac.in |
| Website | https://www.greenfield.ac.in |

## ✨ Features

- Responsive multi-section website (About, Academics, Admissions, Research, Placements, Activities, Gallery, Contact, ICC, etc.)
- Global loading animation and smooth page transitions
- Dropdown navigation with mega-menu style structure
- Fullscreen search modal with real-time filtering across site content
- Contact form with server action handling
- SEO metadata, sitemap, and robots.txt generation
- Built with reusable, themeable components (Navbar, Footer, Reveal animations, etc.)

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## 📸 Screenshots

> Add your own screenshots below. Replace each placeholder image path with a real screenshot saved inside a `screenshots/` folder at the project root (e.g. `screenshots/home.png`).

### Home Page
<p align="center">
  <img src="screenshots/home.png" alt="Home page screenshot" width="800" />
</p>

### About Page
<p align="center">
  <img src="screenshots/about.png" alt="About page screenshot" width="800" />
</p>

### Academics Page
<p align="center">
  <img src="screenshots/academics.png" alt="Academics page screenshot" width="800" />
</p>

### Admissions Page
<p align="center">
  <img src="screenshots/admissions.png" alt="Admissions page screenshot" width="800" />
</p>

### Gallery Page
<p align="center">
  <img src="screenshots/gallery.png" alt="Gallery page screenshot" width="800" />
</p>

### Contact Page
<p align="center">
  <img src="screenshots/contact.png" alt="Contact page screenshot" width="800" />
</p>

### Mobile View
<p align="center">
  <img src="screenshots/mobile-home.png" alt="Mobile home page screenshot" width="300" />
</p>

**How to capture your own screenshots:**
1. Run the site locally with `npm run dev` and open `http://localhost:3000`.
2. Use your browser's screenshot tool, or a full-page capture extension, to save each page.
3. Save the images into a `screenshots/` folder in the project root using the filenames referenced above.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/greenfield-college-website.git
cd greenfield-college-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/            # Next.js App Router pages (about, academics, admission, etc.)
├── components/      # Reusable UI components (Navbar, Footer, GlobalLoader, etc.)
├── hooks/            # Custom React hooks
└── lib/              # Site-wide data and configuration (src/lib/data.ts)
public/
└── logos/            # Institute and university logos
```

## ⚙️ Configuration

Site-wide details (name, address, phone numbers, social links, navigation menu) are centralized in [`src/lib/data.ts`](src/lib/data.ts). Update this file to customize the site for your own institution.

## 📄 License

This project is provided for educational/portfolio purposes. Update this section with your preferred license (e.g. MIT) before publishing.

## 🙋 Contact

For questions about this project, reach out via the contact form on the website or open an issue in this repository.

---

<p align="center">Made with ❤️ for Greenfield Institute</p>
