# Developer Portfolio — MD. Azizul Hakim Ayon

My personal portfolio website. It showcases my projects, skills, research, goals, and CV, and includes a working contact form. It's a static site built with plain HTML, CSS, and JavaScript, so it needs no build step.

> **Status:** in development. It will be published online once I have a domain and hosting.

<img width="1902" height="847" alt="Screenshot 2026-10-05 000853" src="https://github.com/user-attachments/assets/f083d3fc-0f04-46db-bdf4-576b174d0b8f" />


## Sections

- **Hero:** introduction, CV download, and social links
- **About:** short bio, quick stats, and academic journey timeline
- **Skills:** filterable skill cards (Frontend, Backend, Mobile, Database, Tools)
- **Projects:** filterable project cards (Web Dev, Mobile)
- **Goals:** career roadmap
- **Achievements:** research and milestones
- **Contact:** contact details and a message form

## Tech Stack

| Area | Technology |
|---|---|
| Markup and styling | HTML5, CSS3 (custom styles, animations, responsive layout) |
| Behavior | Vanilla JavaScript (navigation, filters, animations, form submission) |
| Icons | [Boxicons](https://boxicons.com/), [Iconify](https://iconify.design/) |
| Fonts | Google Fonts (Inter, Poppins, Sora, Space Grotesk, Fira Code) |
| Contact form | [Formspree](https://formspree.io/) |

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   ├── style.css          # main styles
│   ├── animations.css     # animations and transitions
│   └── responsive.css     # media queries
├── js/
│   ├── main.js            # navbar, mobile menu, contact form
│   ├── projects.js        # project filter tabs
│   └── animations.js      # scroll animations and skill bars
└── assets/
    ├── resume.pdf         # CV linked from the "Download CV" buttons
    └── images/
        ├── profile.jpg    # hero photo
        └── projects/      # project screenshots (project1.png, project2.png, ...)
```

## Run Locally

No installation is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/Azhayon/azhayon-portfolio.git
   cd azhayon-portfolio
   ```
2. Open `index.html` in your browser, or use the **Live Server** extension in VS Code for automatic reloading.

An internet connection is needed for the fonts and icon libraries, which load from CDNs.

## Customize

| What | Where |
|---|---|
| Name, bio, stats, timeline | `index.html`, in the **About** section |
| Skills and skill-bar levels | `index.html`, in the **Skills** section (`data-width` sets the bar percentage) |
| Projects | `index.html`, in the **Projects** section. Copy a `project-card` block and set its `data-category` (`web` or `mobile`) to match a filter tab |
| Project screenshots | `assets/images/projects/` |
| CV | Replace `assets/resume.pdf` with the new file and keep the same name |
| Contact details and social links | `index.html`, in the **Contact** and **Footer** sections |

### Contact form

The form posts to Formspree. To use your own form, create one at formspree.io and replace the `action` URL on the `<form id="contactForm">` element in `index.html`.

## Deployment

The plan is to upload the site to shared hosting, for example through cPanel File Manager or FTP:

1. Upload everything (`index.html`, `css/`, `js/`, `assets/`) into the `public_html` folder.
2. Point the domain to the hosting account.
3. Enable HTTPS (SSL) from the hosting panel.
4. Submit the contact form once to confirm Formspree delivers to the right inbox.

Alternatively, the same static files can be hosted on GitHub Pages, Netlify, or Vercel.

## Roadmap

- [ ] Add project screenshots and live demo links
- [ ] Publish the site on my own domain
- [ ] Add more projects as I build them

## License

© MD. Azizul Hakim Ayon. All rights reserved. Please don't copy this site's content (text, photos, and CV) without permission.
