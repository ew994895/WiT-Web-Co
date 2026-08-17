# WiT Web Co.

The official one-page marketing site for WiT Web Co., an independent web design
and development studio in West Chester, Pennsylvania.

## What's included

- Responsive landing page and mobile navigation
- Work, services, about, process, and contact sections
- Skip navigation, keyboard-contained mobile menu, visible focus states, and reduced-motion support
- Canonical, social preview, sitemap, robots, structured data, and branded icon metadata
- Response security headers and an automated production smoke test
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

Copy `.env.example` to `.env.local` and replace the example address with the
public business inbox that should receive inquiries:

```bash
CONTACT_EMAIL=hello@yourdomain.com
```

When configured, the form opens the visitor's email application with their
inquiry ready to review and send. Without this value, the form remains in an
honest preview mode and transmits no visitor information.
