# WiT Web Co.

The official marketing site for WiT Web Co., an independent digital studio in
West Chester, Pennsylvania offering web, mobile app, creative, SEO, and social
media services.

## What's included

- Responsive landing page and mobile navigation
- Four externally hosted, interactive concept website demos
- Work, services, founder, process, privacy, and contact sections
- Skip navigation, keyboard-contained mobile menu, visible focus states, and reduced-motion support
- Canonical, social preview, sitemap, robots, structured data, and branded icon metadata
- Direct inquiry delivery with durable backup, privacy-friendly event measurement, and spam safeguards
- Response security headers, a custom not-found experience, and automated production smoke tests
- Cloudflare-compatible production build powered by vinext

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Production check

```bash
npm run verify
```

## Contact inbox

Copy `.env.example` to `.env.local` if you need to override the public business
inbox that receives inquiries:

```bash
CONTACT_EMAIL=ejwit007@outlook.com
```

The production form stores each inquiry in the site's database and forwards it
to the configured inbox. Anonymous conversion events are stored without names,
email addresses, messages, advertising cookies, or cross-site profiles.
