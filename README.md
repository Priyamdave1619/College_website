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
<img width="1454" height="832" alt="Screenshot 2026-06-30 at 8 42 39 PM" src="https://github.com/user-attachments/assets/8a029b70-eb26-48f3-be39-0b1f91d8f5db" />


### About Page
<img width="1453" height="830" alt="Screenshot 2026-06-30 at 8 43 24 PM" src="https://github.com/user-attachments/assets/c1a0be7d-c73b-488f-b39f-65f53458e73c" />


### Academics Page
<img width="1456" height="836" alt="Screenshot 2026-06-30 at 8 44 08 PM" src="https://github.com/user-attachments/assets/fcbbd49a-226d-49d6-b3fc-6028315813f1" />

### Admissions Page
<img width="1452" height="832" alt="Screenshot 2026-06-30 at 8 44 53 PM" src="https://github.com/user-attachments/assets/8d1faf00-ec9e-452a-8332-d9bd4099ee1e" />

### Gallery Page
<img width="1454" height="825" alt="Screenshot 2026-06-30 at 8 45 33 PM" src="https://github.com/user-attachments/assets/f7847c46-6bd8-4c4b-b351-bb61bce6b869" />


### Mobile View
<img width="316" height="670" alt="Screenshot 2026-06-30 at 8 46 29 PM" src="https://github.com/user-attachments/assets/9521132d-8e5b-4a50-b3cc-e995cebf0dc5" />


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
