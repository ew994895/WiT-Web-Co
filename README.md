# WiT Web Co.

The official marketing site for WiT Web Co., an independent digital studio in
West Chester, Pennsylvania offering web, mobile app, creative, SEO, and social
media services.

## Hosting

This is an independent company website deployed directly to Cloudflare Workers,
not a ChatGPT Sites publication. The production Worker is `wit-web-co`; its
existing D1 database is configured in `vite.config.ts`. Do not reintroduce Sites
hosting configuration or use Sites publishing tools for this project.

Live website: https://wit-web-co.ejwit004.workers.dev

Before publishing, run `npm run verify`, commit the release changes, push to
GitHub, and verify the remote branch points to that commit. Then run
`npm run deploy:cloudflare` to publish the build from that same source revision.
Do not deploy uncommitted or unpushed application changes. Verify the live pages
after publishing. Deployment preserves dashboard-set variables and secrets.

## What's included

- Responsive landing page and mobile navigation
- Three Cloudflare-hosted concept demos and one independent sports publication
- Work, services, founder, process, privacy, and contact sections
- Skip navigation, keyboard-contained mobile menu, visible focus states, and reduced-motion support
- Canonical, social preview, sitemap, robots, structured data, and branded icon metadata
- Durable inquiry storage, a direct email fallback, privacy-friendly event measurement, and spam safeguards
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

**Current status:** direct email links work, but production form notifications
are not configured. Formspree was recommended as an alternative that does not
require the owner to have a custom domain. Switching providers is pending the
user's verified Formspree endpoint; the implementation below still uses Resend.

Public contact links and form notification recipients use `ejwit007@gmail.com`,
defined in `app/lib/site.ts`. A stale `CONTACT_EMAIL` environment variable no
longer overrides this address.

The form saves inquiries to D1, then sends a plain-text notification through
Resend. The visitor's email is the Reply-To address. The notification includes
all collected inquiry fields. No email is sent back to the visitor automatically.

To enable delivery:

1. Create a Resend account and verify a sending domain you own.
2. Configure `RESEND_API_KEY` and `INQUIRY_FROM_EMAIL` as server-side runtime
   secrets on the hosting platform. Use a sender on that verified domain, not a
   Gmail sender. For local development, copy `.env.example` to `.env.local`.
3. Publish the configured site and submit a clearly labeled test inquiry.
4. Confirm receipt in `ejwit007@gmail.com` (including spam), verify every field,
   and check that Reply targets the test submitter.

Until configured, the form preserves inquiries but shows an explicit email
fallback instead of claiming notification success. Database delivery status is
`email_accepted` when Resend accepts the message, or `notification_failed` when
it does not. Acceptance is not proof of inbox delivery; check Resend delivery
logs and the receiving inbox during the live test. Failed notifications are not
automatically retried, and this project has no owner inbox interface yet.

Automated tests use a mocked email provider; they do not send real messages.
Anonymous conversion events do not contain inquiry details.
